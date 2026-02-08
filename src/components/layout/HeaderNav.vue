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
        <li><router-link to="/consultancy" @click="closeNav">Services</router-link></li>
        <li><router-link to="/devxrl" @click="closeNav">DevXRL</router-link></li>
        <li><router-link to="/community" @click="closeNav">Community</router-link></li>
        <li><router-link to="/projects" @click="closeNav">Products</router-link></li>
        <li class="nav-cta"><router-link to="/contact" class="btn btn-primary" @click="closeNav">Contact Us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleNav = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeNav = () => {
  mobileMenuOpen.value = false
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
}
</style>
