<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-backdrop" @click.self="$emit('close')">
        <div class="modal-content" ref="modalRef" role="dialog" aria-modal="true">
          <button class="modal-close" @click="$emit('close')" aria-label="Close">&times;</button>

          <div class="modal__logo">
            <img v-if="logo" :src="logo" :alt="name" />
            <span v-else class="modal__initials">{{ initials }}</span>
          </div>

          <h2 class="modal__name">{{ name }}</h2>

          <div v-if="tags && tags.length" class="modal__tags">
            <span v-for="tag in tags" :key="tag" class="modal__tag">{{ tag }}</span>
          </div>

          <p class="modal__description">{{ longDescription || shortDescription }}</p>

          <ul v-if="highlights && highlights.length" class="modal__highlights">
            <li v-for="item in highlights" :key="item">{{ item }}</li>
          </ul>

          <div class="modal__links">
            <a
              v-if="website"
              :href="website"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary modal__website"
            >
              Visit Website &rarr;
            </a>
            <div v-if="socialLinks && socialLinks.length" class="modal__socials">
              <a
                v-for="link in socialLinks"
                :key="link.platform"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="modal__social-link"
                :title="link.platform"
              >
                {{ link.platform }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, ref, onUnmounted } from 'vue'

const props = defineProps<{
  visible: boolean
  id: string
  name: string
  logo?: string
  category: 'partner' | 'support' | 'client' | 'collaborator'
  shortDescription: string
  tags?: string[]
  longDescription?: string
  website?: string
  socialLinks?: { platform: string; url: string }[]
  highlights?: string[]
  featured?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const modalRef = ref<HTMLElement | null>(null)

const initials = computed(() =>
  props.name
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
)

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

watch(() => props.visible, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-lg);
}

.modal-content {
  background: white;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: var(--space-xl);
  position: relative;
}

.modal-close {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: none;
  border: none;
  font-size: 1.75rem;
  color: var(--text-mid);
  cursor: pointer;
  line-height: 1;
  padding: 0.25rem;
  transition: color 0.15s;
}

.modal-close:hover {
  color: var(--navy);
}

.modal__logo {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  margin-bottom: var(--space-lg);
  padding: var(--space-md);
}

.modal__logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.modal__initials {
  font-size: 2rem;
  font-weight: 700;
  color: var(--teal);
}

.modal__name {
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: var(--space-md);
}

.modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.modal__tag {
  background: var(--bg-light);
  color: var(--teal);
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.modal__description {
  font-size: 0.925rem;
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.modal__highlights {
  list-style: none;
  margin-bottom: var(--space-lg);
}

.modal__highlights li {
  position: relative;
  padding: var(--space-sm) 0;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: var(--text-mid);
  border-bottom: 1px solid var(--border);
}

.modal__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--teal);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.modal__links {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.modal__website {
  display: inline-block;
}

.modal__socials {
  display: flex;
  gap: var(--space-md);
}

.modal__social-link {
  font-size: 0.8rem;
  color: var(--teal);
  font-weight: 600;
  transition: color 0.15s;
}

.modal__social-link:hover {
  color: var(--navy);
}

/* Transitions */
.modal-enter-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal-content {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-leave-active .modal-content {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .modal-content {
  opacity: 0;
  transform: scale(0.95);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: var(--space-md);
  }

  .modal-content {
    padding: var(--space-lg);
    max-height: 90vh;
  }
}
</style>
