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

      <button class="nav-toggle" @click="toggleNav" :class="{ active: mobileMenuOpen }">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li
          class="nav-dropdown"
          @mouseenter="openServicesDropdown"
          @mouseleave="closeServicesDropdown"
        >
          <router-link to="/consultancy" @click="closeNav" class="nav-dropdown__trigger">
            Services
            <svg class="nav-dropdown__chevron" :class="{ open: servicesDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </router-link>
          <button class="nav-dropdown__mobile-toggle" @click="toggleMobileServicesDropdown">
            <svg :class="{ open: mobileServicesDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </button>
          <Transition name="dropdown">
            <ul v-show="servicesDropdownOpen" class="nav-dropdown__menu">
              <li v-for="link in servicesLinks" :key="link.label">
                <router-link :to="link.route" @click="closeNav">
                  {{ link.label }}
                </router-link>
              </li>
            </ul>
          </Transition>
          <ul v-show="mobileServicesDropdownOpen" class="nav-dropdown__mobile-menu">
            <li v-for="link in servicesLinks" :key="link.label">
              <router-link :to="link.route" @click="closeNav">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </li>
        <li><router-link to="/projects" @click="closeNav">Products</router-link></li>
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
          <button class="nav-dropdown__mobile-toggle" @click="toggleMobileDropdown">
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
          <span class="nav-dropdown__trigger nav-dropdown__trigger--static">
            Explore
            <svg class="nav-dropdown__chevron" :class="{ open: exploreDropdownOpen }" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 1l4 4 4-4" />
            </svg>
          </span>
          <button class="nav-dropdown__mobile-toggle" @click="toggleMobileExploreDropdown">
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
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const servicesDropdownOpen = ref(false)
const mobileServicesDropdownOpen = ref(false)
const dropdownOpen = ref(false)
const mobileDropdownOpen = ref(false)
const exploreDropdownOpen = ref(false)
const mobileExploreDropdownOpen = ref(false)
let servicesCloseTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null
let exploreCloseTimer: ReturnType<typeof setTimeout> | null = null

const servicesLinks = [
  { label: 'Consultancy', route: '/consultancy' },
  { label: 'DevXRL', route: '/devxrl' },
]

const exploreLinks: { label: string; route?: string; url?: string }[] = [
  { label: 'Ecosystem', route: '/ecosystem' },
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

const openServicesDropdown = () => {
  if (servicesCloseTimer) {
    clearTimeout(servicesCloseTimer)
    servicesCloseTimer = null
  }
  servicesDropdownOpen.value = true
}

const closeServicesDropdown = () => {
  servicesCloseTimer = setTimeout(() => {
    servicesDropdownOpen.value = false
  }, 150)
}

const toggleMobileServicesDropdown = () => {
  mobileServicesDropdownOpen.value = !mobileServicesDropdownOpen.value
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
    mobileServicesDropdownOpen.value = false
    mobileDropdownOpen.value = false
    mobileExploreDropdownOpen.value = false
  }
}

const closeNav = () => {
  mobileMenuOpen.value = false
  mobileServicesDropdownOpen.value = false
  mobileDropdownOpen.value = false
  mobileExploreDropdownOpen.value = false
  servicesDropdownOpen.value = false
  dropdownOpen.value = false
  exploreDropdownOpen.value = false
}
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
  background: none;
  border: 2px solid var(--navy);
  padding: var(--space-sm);
  cursor: pointer;
  color: var(--navy);
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

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-white);
    border-bottom: 2px solid var(--border);
    flex-direction: column;
    padding: var(--space-md);
    gap: 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    padding: var(--space-md);
    border-bottom: 1px solid var(--border);
    width: 100%;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: var(--space-md);
  }

  .nav-cta .btn {
    width: 100%;
    justify-content: center;
  }

  /* Mobile dropdown */
  .nav-dropdown {
    position: relative;
  }

  .nav-dropdown__trigger {
    display: block;
  }

  .nav-dropdown__trigger--static {
    display: block;
    padding: var(--space-md);
    border-bottom: 1px solid var(--border);
    width: 100%;
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
    width: 48px;
    height: 100%;
    background: none;
    border: none;
    border-left: 1px solid var(--border);
    cursor: pointer;
    color: var(--text-mid);
  }

  .nav-dropdown__mobile-toggle svg {
    transition: transform 0.2s ease;
  }

  .nav-dropdown__mobile-toggle svg.open {
    transform: rotate(180deg);
  }

  .nav-dropdown__mobile-menu {
    display: none;
    list-style: none;
    padding: 0;
  }

  .nav-dropdown__mobile-menu[style*="display: block"],
  .nav-dropdown__mobile-menu[style*="display:block"] {
    display: block !important;
  }

  .nav-dropdown__mobile-menu li a {
    display: block;
    padding: var(--space-sm) var(--space-md) var(--space-sm) var(--space-xl);
    font-size: 0.825rem;
    color: var(--text-mid);
    border-bottom: 1px solid var(--border);
    transition: all 0.15s ease;
  }

  .nav-dropdown__mobile-menu li a:hover {
    background: var(--teal);
    color: white;
  }
}
</style>
