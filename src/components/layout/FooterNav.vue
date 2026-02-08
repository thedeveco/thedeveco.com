<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/images/deveco-community-logo.png" alt="DevEco" class="footer-logo" />
          <p>DevRel from the workshop floor.</p>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><router-link to="/consultancy">Community Building</router-link></li>
            <li><router-link to="/consultancy">Technical Content</router-link></li>
            <li><router-link to="/consultancy">DevRel Strategy</router-link></li>
            <li><router-link to="/consultancy">Training</router-link></li>
            <li><router-link to="/devxrl">DevXRL Audit</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><router-link to="/projects">Portal Network</router-link></li>
            <li><router-link to="/projects">B3VY Live Hub</router-link></li>
            <li><router-link to="/projects">LaunchCue CRM</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://discord.gg/deveco" target="_blank">Discord</a></li>
            <li><a href="https://github.com/thedeveco" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/company/thedeveco" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@thedeveco" target="_blank">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>{{ currentYear }} DevEco Consulting</span>
        <span>Scholarship Partner of <a href="https://www.edgeaifoundation.org/" target="_blank">Edge AI Foundation</a></span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--text-dark);
  color: white;
  padding: var(--space-xl) 0 var(--space-lg);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.footer-logo {
  height: 45px;
  width: auto;
  margin-bottom: var(--space-md);
}

.footer-brand p {
  font-size: 0.875rem;
  color: var(--text-light);
}

.footer-col h4 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-md);
  color: white;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: var(--space-sm);
}

.footer-col a {
  font-size: 0.875rem;
  color: var(--text-light);
  transition: color 0.2s;
}

.footer-col a:hover {
  color: var(--teal-light);
}

.footer-bottom {
  padding-top: var(--space-lg);
  border-top: 1px solid var(--text-mid);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
  font-size: 0.75rem;
  color: var(--text-light);
}

.footer-bottom a {
  color: var(--teal-light);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
