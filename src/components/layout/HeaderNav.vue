<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <img src="/images/deveco-consulting-logo.png" alt="DevEco" class="logo-image" />
        </router-link>
      </div>

      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/consultancy" class="nav-link">Consultancy</router-link>
        <router-link to="/community" class="nav-link">Community</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/contact" class="nav-link cta-button">Contact Us</router-link>
        <a href="https://discord.gg/deveco" target="_blank" class="discord-link" aria-label="Join Discord">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
      </div>

      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link>
      <router-link to="/consultancy" class="mobile-nav-link" @click="closeMobileMenu">Consultancy</router-link>
      <router-link to="/community" class="mobile-nav-link" @click="closeMobileMenu">Community</router-link>
      <router-link to="/projects" class="mobile-nav-link" @click="closeMobileMenu">Projects</router-link>
      <router-link to="/contact" class="mobile-nav-link cta-mobile" @click="closeMobileMenu">Contact Us</router-link>
      <a href="https://discord.gg/deveco" target="_blank" class="mobile-nav-link discord-mobile" @click="closeMobileMenu">
        Join Discord
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(55, 138, 139, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2d3748;
}

.logo-image {
  height: 45px;
  width: auto;
  display: block;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #378a8b;
  background-color: rgba(55, 138, 139, 0.1);
}

.nav-link.router-link-active {
  color: #378a8b;
  font-weight: 600;
}

.cta-button {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white !important;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.75rem 1.5rem !important;
}

.cta-button:hover {
  background: linear-gradient(135deg, #2d6e6f, #4a9a9b) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(55, 138, 139, 0.3);
}

.discord-link {
  color: #5865f2;
  transition: all 0.3s ease;
}

.discord-link:hover {
  color: #4752c4;
  transform: scale(1.1);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.mobile-menu-toggle:hover {
  background-color: rgba(55, 138, 139, 0.1);
}

.mobile-menu-toggle span {
  width: 24px;
  height: 3px;
  background: #4a5568;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid rgba(55, 138, 139, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  gap: 1rem;
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-link {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(55, 138, 139, 0.1);
  transition: color 0.3s ease;
  font-size: 1.1rem;
  display: block;
}

.mobile-nav-link:hover {
  color: #378a8b;
}

.mobile-nav-link.router-link-active {
  color: #378a8b;
  font-weight: 600;
}

.cta-mobile {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white !important;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  border-bottom: none !important;
}

.discord-mobile {
  color: #5865f2 !important;
  text-align: center;
  border-bottom: none !important;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .nav-container {
    padding: 1rem 0;
  }
}
</style>