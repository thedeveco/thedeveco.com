<template>
  <nav class="nav">
    <div class="container nav-inner">
      <router-link to="/" class="nav-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 100" class="logo-svg">
          <g transform="translate(5, 5)">
            <circle cx="39.3" cy="39.5" r="30.3" fill="none" stroke="#4db3a8" stroke-width="2.5"/>
            <line x1="39.29" y1="39.5" x2="39.15" y2="18.63" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="49.69" y2="29.78" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="59.84" y2="39.5" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="49.69" y2="49.22" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="39.15" y2="60.37" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="28.31" y2="49.22" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="18.16" y2="39.5" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <line x1="39.29" y1="39.5" x2="28.31" y2="29.78" stroke="#4db3a8" stroke-width="2" stroke-linecap="round"/>
            <circle cx="39.15" cy="18.63" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="59.84" cy="39.5" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="39.15" cy="60.37" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="18.16" cy="39.5" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="49.69" cy="29.78" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="49.69" cy="49.22" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="28.31" cy="49.22" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="28.31" cy="29.78" r="3.5" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
            <circle cx="39.29" cy="39.5" r="2" fill="#3d9991" stroke="#1e3a3a" stroke-width="1.2"/>
          </g>
          <text x="95" y="48" font-family="'JetBrains Mono', monospace" font-size="36" font-weight="bold" fill="#1e3a3a">DEV</text>
          <text x="165" y="48" font-family="'JetBrains Mono', monospace" font-size="36" font-weight="bold" fill="#3d9991">ECO</text>
          <text x="97" y="68" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="0.2em" fill="#1e3a3a">CONSULTING LLC</text>
        </svg>
      </router-link>

      <button
        class="nav-toggle"
        @click="toggleNav"
        :class="{ active: mobileMenuOpen }"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
      </button>

      <div class="nav-backdrop" :class="{ active: mobileMenuOpen }" @click="closeNav"></div>

      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li
          class="nav-dropdown"
          @mouseenter="openAboutDropdown"
          @mouseleave="closeAboutDropdown"
        >
          <span
            class="nav-dropdown__trigger nav-dropdown__trigger--static"
            role="button"
            tabindex="0"
            @click="toggleMobileAboutDropdown"
            @keydown.enter.prevent="toggleMobileAboutDropdown"
            @keydown.space.prevent="toggleMobileAboutDropdown"
          >
            About
            <svg class="nav-dropdown__chevron" :class="{ open: aboutDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </span>
          <button
            class="nav-dropdown__mobile-toggle"
            :class="{ open: mobileAboutDropdownOpen }"
            :aria-expanded="mobileAboutDropdownOpen"
            aria-label="Toggle About submenu"
            @click.stop.prevent="toggleMobileAboutDropdown"
          >
            <svg :class="{ open: mobileAboutDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </button>
          <Transition name="dropdown">
            <ul v-show="aboutDropdownOpen" class="nav-dropdown__menu">
              <li v-for="link in aboutLinks" :key="link.label">
                <router-link :to="link.route" @click="closeNav">
                  {{ link.label }}
                </router-link>
              </li>
            </ul>
          </Transition>
          <ul v-show="mobileAboutDropdownOpen" class="nav-dropdown__mobile-menu">
            <li v-for="link in aboutLinks" :key="link.label">
              <router-link :to="link.route" @click="closeNav">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </li>
        <li
          class="nav-dropdown"
          @mouseenter="openAuditsDropdown"
          @mouseleave="closeAuditsDropdown"
        >
          <span
            class="nav-dropdown__trigger nav-dropdown__trigger--static"
            role="button"
            tabindex="0"
            @click="toggleMobileAuditsDropdown"
            @keydown.enter.prevent="toggleMobileAuditsDropdown"
            @keydown.space.prevent="toggleMobileAuditsDropdown"
          >
            Audits
            <svg class="nav-dropdown__chevron" :class="{ open: auditsDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </span>
          <button
            class="nav-dropdown__mobile-toggle"
            :class="{ open: mobileAuditsDropdownOpen }"
            :aria-expanded="mobileAuditsDropdownOpen"
            aria-label="Toggle Audits submenu"
            @click.stop.prevent="toggleMobileAuditsDropdown"
          >
            <svg :class="{ open: mobileAuditsDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </button>
          <Transition name="dropdown">
            <ul v-show="auditsDropdownOpen" class="nav-dropdown__menu">
              <li v-for="link in auditsLinks" :key="link.label">
                <a :href="link.url" target="_blank" rel="noopener noreferrer" @click="closeNav">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </Transition>
          <ul v-show="mobileAuditsDropdownOpen" class="nav-dropdown__mobile-menu">
            <li v-for="link in auditsLinks" :key="link.label">
              <a :href="link.url" target="_blank" rel="noopener noreferrer" @click="closeNav">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </li>
        <li
          class="nav-dropdown"
          @mouseenter="openDropdown"
          @mouseleave="closeDropdown"
        >
          <router-link to="/community" @click="closeNav" class="nav-dropdown__trigger">
            Community
            <svg class="nav-dropdown__chevron" :class="{ open: dropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </router-link>
          <button
            class="nav-dropdown__mobile-toggle"
            :class="{ open: mobileDropdownOpen }"
            :aria-expanded="mobileDropdownOpen"
            aria-label="Toggle Community submenu"
            @click.stop.prevent="toggleMobileDropdown"
          >
            <svg :class="{ open: mobileDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </button>
          <Transition name="dropdown">
            <ul v-show="dropdownOpen" class="nav-dropdown__menu">
              <li v-for="link in communityLinks" :key="link.label">
                <a :href="link.url" target="_blank" rel="noopener noreferrer" @click="closeNav">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </Transition>
          <ul v-show="mobileDropdownOpen" class="nav-dropdown__mobile-menu">
            <li v-for="link in communityLinks" :key="link.label">
              <a :href="link.url" target="_blank" rel="noopener noreferrer" @click="closeNav">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </li>
        <li
          class="nav-dropdown"
          @mouseenter="openExploreDropdown"
          @mouseleave="closeExploreDropdown"
        >
          <span
            class="nav-dropdown__trigger nav-dropdown__trigger--static"
            role="button"
            tabindex="0"
            @click="toggleMobileExploreDropdown"
            @keydown.enter.prevent="toggleMobileExploreDropdown"
            @keydown.space.prevent="toggleMobileExploreDropdown"
          >
            Explore
            <svg class="nav-dropdown__chevron" :class="{ open: exploreDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </span>
          <button
            class="nav-dropdown__mobile-toggle"
            :class="{ open: mobileExploreDropdownOpen }"
            :aria-expanded="mobileExploreDropdownOpen"
            aria-label="Toggle Explore submenu"
            @click.stop.prevent="toggleMobileExploreDropdown"
          >
            <svg :class="{ open: mobileExploreDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </button>
          <Transition name="dropdown">
            <ul v-show="exploreDropdownOpen" class="nav-dropdown__menu">
              <li v-for="link in exploreLinks" :key="link.label">
                <router-link v-if="link.route" :to="link.route" @click="closeNav">
                  {{ link.label }}
                </router-link>
                <a v-else :href="link.url" target="_blank" rel="noopener noreferrer" @click="closeNav">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </Transition>
          <ul v-show="mobileExploreDropdownOpen" class="nav-dropdown__mobile-menu">
            <li v-for="link in exploreLinks" :key="link.label">
              <router-link v-if="link.route" :to="link.route" @click="closeNav">
                {{ link.label }}
              </router-link>
              <a v-else :href="link.url" target="_blank" rel="noopener noreferrer" @click="closeNav">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-cta"><router-link to="/contact" class="btn btn-primary" @click="closeNav">Contact Us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const mobileMenuOpen = ref(false)
const aboutDropdownOpen = ref(false)
const mobileAboutDropdownOpen = ref(false)
const auditsDropdownOpen = ref(false)
const mobileAuditsDropdownOpen = ref(false)
const dropdownOpen = ref(false)
const mobileDropdownOpen = ref(false)
const exploreDropdownOpen = ref(false)
const mobileExploreDropdownOpen = ref(false)
let aboutCloseTimer: ReturnType<typeof setTimeout> | null = null
let auditsCloseTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null
let exploreCloseTimer: ReturnType<typeof setTimeout> | null = null

const aboutLinks = [
  { label: 'Team', route: '/team' },
  { label: 'Consultancy', route: '/consultancy' },
  { label: 'Ecosystem', route: '/ecosystem' },
]

const auditsLinks = [
  { label: 'DevXRL', url: '/devxrl' },
  { label: 'SMRL', url: '/smrl' },
  { label: 'G2MRL', url: '/g2mrl' },
  { label: 'TRL', url: '/trl' },
]

const exploreLinks: { label: string; route?: string; url?: string }[] = [
  { label: 'devEco.io', url: 'https://deveco.io/' },
  { label: 'devEco.app', url: 'https://deveco.app/' },
]

const communityLinks = [
  { label: 'Discord', url: 'https://discord.gg/deveco' },
  { label: 'GitHub', url: 'https://github.com/thedeveco' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/developerecosystem/' },
  { label: 'YouTube', url: 'https://www.youtube.com/@thedeveco' },
  { label: 'Instagram', url: 'https://www.instagram.com/thedev.eco' },
  { label: 'Twitch', url: 'https://www.twitch.tv/thedeveco' },
]

const openAboutDropdown = () => {
  if (aboutCloseTimer) {
    clearTimeout(aboutCloseTimer)
    aboutCloseTimer = null
  }
  aboutDropdownOpen.value = true
}

const closeAboutDropdown = () => {
  aboutCloseTimer = setTimeout(() => {
    aboutDropdownOpen.value = false
  }, 150)
}

const toggleMobileAboutDropdown = () => {
  mobileAboutDropdownOpen.value = !mobileAboutDropdownOpen.value
}

const openAuditsDropdown = () => {
  if (auditsCloseTimer) {
    clearTimeout(auditsCloseTimer)
    auditsCloseTimer = null
  }
  auditsDropdownOpen.value = true
}

const closeAuditsDropdown = () => {
  auditsCloseTimer = setTimeout(() => {
    auditsDropdownOpen.value = false
  }, 150)
}

const toggleMobileAuditsDropdown = () => {
  mobileAuditsDropdownOpen.value = !mobileAuditsDropdownOpen.value
}

const openExploreDropdown = () => {
  if (exploreCloseTimer) {
    clearTimeout(exploreCloseTimer)
    exploreCloseTimer = null
  }
  exploreDropdownOpen.value = true
}

const closeExploreDropdown = () => {
  exploreCloseTimer = setTimeout(() => {
    exploreDropdownOpen.value = false
  }, 150)
}

const toggleMobileExploreDropdown = () => {
  mobileExploreDropdownOpen.value = !mobileExploreDropdownOpen.value
}

const openDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  dropdownOpen.value = true
}

const closeDropdown = () => {
  closeTimer = setTimeout(() => {
    dropdownOpen.value = false
  }, 150)
}

const toggleMobileDropdown = () => {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}

const toggleNav = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileAboutDropdownOpen.value = false
    mobileAuditsDropdownOpen.value = false
    mobileDropdownOpen.value = false
    mobileExploreDropdownOpen.value = false
  }
}

const closeNav = () => {
  mobileMenuOpen.value = false
  mobileAboutDropdownOpen.value = false
  mobileAuditsDropdownOpen.value = false
  mobileDropdownOpen.value = false
  mobileExploreDropdownOpen.value = false
  aboutDropdownOpen.value = false
  auditsDropdownOpen.value = false
  dropdownOpen.value = false
  exploreDropdownOpen.value = false
}

watch(() => route.fullPath, () => closeNav())

watch(mobileMenuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) closeNav()
}

onMounted(() => {
  if (typeof window !== 'undefined') window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-white);
  border-bottom: 2px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) 0;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-svg {
  height: 50px;
  width: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  list-style: none;
}

.nav-links a {
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
  color: var(--text-mid);
  transition: all 0.2s;
}

.nav-links a:hover {
  background: var(--teal);
  color: white;
}

.nav-links a.router-link-active {
  color: var(--teal);
  font-weight: 700;
}

.nav-links a.router-link-active:hover {
  background: var(--teal);
  color: white;
}

.nav-cta {
  margin-left: var(--space-md);
}

.nav-cta .btn {
  padding: 0.5rem 1rem;
  color: white !important;
}

.nav-cta .btn:hover {
  color: white !important;
}

.nav-cta .btn.router-link-active {
  color: white !important;
}

.nav-toggle {
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  background: var(--bg-white);
  border: 2px solid var(--navy);
  padding: 0;
  cursor: pointer;
  color: var(--navy);
  z-index: 110;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.nav-toggle:hover {
  background: var(--navy);
  color: var(--bg-white);
}

.nav-toggle:hover .nav-toggle__bar {
  background: var(--bg-white);
}

.nav-toggle__bar {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 2px;
  background: var(--navy);
  transform-origin: center;
  transition: transform 0.28s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.18s ease, background 0.2s ease;
}

.nav-toggle__bar:nth-child(1) {
  transform: translate(-50%, -8px);
}
.nav-toggle__bar:nth-child(2) {
  transform: translate(-50%, -50%);
}
.nav-toggle__bar:nth-child(3) {
  transform: translate(-50%, 6px);
}

.nav-toggle.active .nav-toggle__bar:nth-child(1) {
  transform: translate(-50%, -50%) rotate(45deg);
}
.nav-toggle.active .nav-toggle__bar:nth-child(2) {
  opacity: 0;
  transform: translate(-50%, -50%) scaleX(0);
}
.nav-toggle.active .nav-toggle__bar:nth-child(3) {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.nav-backdrop {
  display: none;
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.nav-dropdown__trigger {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-dropdown__trigger--static {
  cursor: default;
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
  color: var(--text-mid);
  transition: all 0.2s;
}

.nav-dropdown__trigger--static:hover {
  background: var(--teal);
  color: white;
}

.nav-dropdown__chevron {
  transition: transform 0.2s ease;
}

.nav-dropdown__chevron.open {
  transform: rotate(180deg);
}

.nav-dropdown__mobile-toggle {
  display: none;
}

.nav-dropdown__mobile-menu {
  display: none;
}

.nav-dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: var(--bg-white);
  border: 1px solid var(--border);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: var(--space-xs) 0;
  z-index: 200;
}

.nav-dropdown__menu li a {
  display: block;
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
  color: var(--text-mid);
  white-space: nowrap;
  transition: all 0.15s ease;
}

.nav-dropdown__menu li a:hover {
  background: var(--teal);
  color: white;
}

/* Dropdown transition */
.dropdown-enter-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Mobile-only submenu list — hidden on desktop regardless of v-show state */
.nav-dropdown__mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .logo-svg {
    height: 42px;
  }

  .nav-inner {
    padding: var(--space-sm) 0;
  }

  .nav-toggle {
    display: block;
  }

  .nav-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(30, 58, 58, 0);
    opacity: 0;
    pointer-events: none;
    transition: background 0.28s ease, opacity 0.28s ease;
    z-index: 90;
  }

  .nav-backdrop.active {
    background: rgba(30, 58, 58, 0.55);
    opacity: 1;
    pointer-events: auto;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }

  .nav-links {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: min(84vw, 340px);
    height: 100vh;
    height: 100dvh;
    background: var(--bg-white);
    border-left: 2px solid var(--navy);
    box-shadow: -12px 0 32px rgba(30, 58, 58, 0.18);
    flex-direction: column;
    align-items: stretch;
    padding: calc(var(--space-lg) + 44px) var(--space-md) var(--space-lg);
    gap: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    transform: translateX(100%);
    transition: transform 0.32s cubic-bezier(0.7, 0, 0.3, 1);
    z-index: 100;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links li {
    width: 100%;
    position: relative;
  }

  .nav-links > li + li {
    border-top: 1px solid var(--border);
  }

  .nav-links a,
  .nav-dropdown__trigger--static {
    display: flex;
    align-items: center;
    padding: 0.95rem var(--space-md) 0.95rem calc(var(--space-md) + 4px);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-dark);
    width: 100%;
    border-left: 3px solid transparent;
    transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease, padding-left 0.18s ease;
  }

  .nav-links a:hover,
  .nav-dropdown__trigger--static:hover {
    background: var(--bg-light);
    color: var(--teal-dark);
    border-left-color: var(--teal-light);
    padding-left: calc(var(--space-md) + 8px);
  }

  .nav-links a.router-link-active {
    color: var(--teal);
    border-left-color: var(--teal);
    background: var(--bg-light);
  }

  .nav-cta {
    margin-left: 0;
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 2px solid var(--border) !important;
  }

  .nav-cta .btn {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1rem !important;
  }

  /* Mobile dropdown */
  .nav-dropdown__trigger {
    display: flex;
    padding-right: 56px;
  }

  .nav-dropdown__trigger--static {
    cursor: pointer;
    padding-right: 56px;
  }

  .nav-dropdown__chevron {
    display: none;
  }

  .nav-dropdown__menu {
    display: none !important;
  }

  .nav-dropdown__mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 52px;
    background: transparent;
    border: none;
    border-left: 1px solid var(--border);
    cursor: pointer;
    color: var(--text-mid);
    transition: background 0.18s ease, color 0.18s ease;
  }

  .nav-dropdown__mobile-toggle:hover {
    background: var(--bg-light);
    color: var(--teal);
  }

  .nav-dropdown__mobile-toggle svg {
    transition: transform 0.28s cubic-bezier(0.7, 0, 0.3, 1);
    width: 12px;
    height: 8px;
  }

  .nav-dropdown__mobile-toggle.open svg {
    transform: rotate(180deg);
  }

  .nav-dropdown__mobile-toggle.open {
    color: var(--teal);
  }

  .nav-dropdown__mobile-menu {
    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
    background: var(--bg-light);
    border-top: 1px solid var(--border);
    animation: navSubmenuFadeIn 0.24s ease;
  }

  .nav-dropdown__mobile-menu li + li {
    border-top: 1px solid var(--border);
  }

  .nav-dropdown__mobile-menu li a {
    display: flex;
    align-items: center;
    padding: 0.75rem var(--space-md) 0.75rem calc(var(--space-md) + 20px);
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--text-mid);
    border-left: 3px solid transparent;
    border-bottom: none;
    transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  }

  .nav-dropdown__mobile-menu li a::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 1px;
    background: var(--text-light);
    margin-right: 0.6rem;
    transition: width 0.18s ease, background 0.18s ease;
  }

  .nav-dropdown__mobile-menu li a:hover {
    background: var(--bg-white);
    color: var(--teal-dark);
    border-left-color: var(--teal-light);
  }

  .nav-dropdown__mobile-menu li a:hover::before {
    background: var(--teal);
    width: 16px;
  }

  .nav-dropdown__mobile-menu li a.router-link-active {
    color: var(--teal);
    border-left-color: var(--teal);
  }
}

@keyframes navSubmenuFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-links,
  .nav-backdrop,
  .nav-toggle__bar,
  .nav-dropdown__mobile-toggle svg,
  .nav-dropdown__mobile-menu {
    transition: none !important;
    animation: none !important;
  }
}
</style>
