<template>
  <button class="ecosystem-tile" @click="$emit('select')">
    <div class="tile__logo">
      <img v-if="logo" :src="logo" :alt="name" />
      <span v-else class="tile__initials">{{ initials }}</span>
    </div>
    <h3 class="tile__name">{{ name }}</h3>
    <p class="tile__description">{{ shortDescription }}</p>
    <div v-if="tags && tags.length" class="tile__tags">
      <span v-for="tag in tags" :key="tag" class="tile__tag">{{ tag }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  name: string
  logo?: string
  category: 'partner' | 'support' | 'client' | 'collaborator'
  shortDescription: string
  tags?: string[]
}>()

defineEmits<{
  select: []
}>()

const initials = computed(() =>
  props.name
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
)
</script>

<style scoped>
.ecosystem-tile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: white;
  border: 2px solid var(--border);
  padding: var(--space-lg);
  cursor: pointer;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  width: 100%;
  font-family: inherit;
  color: inherit;
}

.ecosystem-tile:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-color: var(--teal);
}

.tile__logo {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  margin-bottom: var(--space-md);
  padding: var(--space-sm);
}

.tile__logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tile__initials {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--teal);
  letter-spacing: 0.05em;
}

.tile__name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: var(--space-sm);
}

.tile__description {
  font-size: 0.825rem;
  color: var(--text-mid);
  line-height: 1.5;
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.tile__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: auto;
}

.tile__tag {
  background: var(--bg-light);
  color: var(--teal);
  padding: 0.15rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
}
</style>
