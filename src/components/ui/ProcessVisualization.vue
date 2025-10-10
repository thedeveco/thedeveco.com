<template>
  <section class="process-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Process</h2>
        <p>From ideation to deployment, updates, and maintenance — we're your embedded partner.</p>
      </div>

      <div class="process-grid">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="process-step"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="process-icon" :class="`gradient-${index + 1}`">
            <font-awesome-icon :icon="step.icon" />
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <div v-if="index < steps.length - 1" class="process-connector"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const steps = [
  {
    icon: ['fas', 'magnifying-glass'],
    title: 'Discovery & Strategy',
    description: 'We analyze your goals, audience, and current state to develop a comprehensive strategy tailored to your developer ecosystem needs.'
  },
  {
    icon: ['fas', 'pencil-ruler'],
    title: 'Planning & Design',
    description: 'Create detailed roadmaps, content strategies, and community frameworks using proven methodologies and industry best practices.'
  },
  {
    icon: ['fas', 'gears'],
    title: 'Implementation',
    description: 'Execute the strategy with hands-on support, building communities, creating content, and establishing engagement programs.'
  },
  {
    icon: ['fas', 'chart-line'],
    title: 'Growth & Optimization',
    description: 'Monitor metrics, optimize performance, and scale successful initiatives to maximize developer engagement and adoption.'
  }
]
</script>

<style scoped>
.process-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.container {
  width: 100%;
  margin: 0;
  padding: 0 2rem;
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
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.process-step {
  transform: translateY(20px);
}

.process-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  position: relative;
}

.gradient-1 {
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
}

.gradient-2 {
  background: linear-gradient(135deg, #14b8a6, #5eead4);
}

.gradient-3 {
  background: linear-gradient(135deg, #10b981, #6ee7b7);
}

.gradient-4 {
  background: linear-gradient(135deg, #6366f1, #a5b4fc);
}

.process-step h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.process-step p {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

.process-connector {
  position: absolute;
  top: 40px;
  right: -4rem;
  width: 8rem;
  height: 2px;
  background: linear-gradient(90deg, #cbd5e0, #94a3b8);
  opacity: 0.5;
}

.process-connector::after {
  content: '';
  position: absolute;
  right: -8px;
  top: -4px;
  width: 0;
  height: 0;
  border-left: 10px solid #94a3b8;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .process-connector {
    display: none;
  }

  .process-step:nth-child(odd) .process-connector {
    display: block;
    right: -2rem;
    width: 4rem;
  }

  .process-step:nth-child(3) .process-connector,
  .process-step:nth-child(4) .process-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  .process-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .process-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .process-connector {
    display: none;
  }

  .process-icon {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
  }

  .process-step h3 {
    font-size: 1.125rem;
  }

  .container {
    padding: 0;
  }
}

@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.75rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .process-icon {
    width: 65px;
    height: 65px;
    font-size: 1.5rem;
  }
}</style>