<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/layout/HeaderNav.vue'
import FooterNav from './components/layout/FooterNav.vue'
</script>

<template>
  <div id="app">
    <HeaderNav />
    <main class="main-content">
      <RouterView />
    </main>
    <FooterNav />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: #2d3748;
  background-color: #ffffff;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
}

a {
  color: #378a8b;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2d6e6f;
}

.container {
  width: 100%;
  margin: 0;
  padding: 0 2rem;
}

.section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2d6e6f, #4a9a9b);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(55, 138, 139, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #378a8b;
  border: 2px solid #378a8b;
}

.btn-secondary:hover {
  background: #378a8b;
  color: white;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .section {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .section-header p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 2rem 0;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .section-header p {
    font-size: 0.95rem;
  }

  .btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
  }
}
</style>
