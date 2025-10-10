<script setup lang="ts">
import ClientLogos from '../components/ui/ClientLogos.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const hexGrid = ref<HTMLElement | null>(null)
let intervalIds: number[] = []

const colors = ['#00ffc3', '#7d00ff', '#00baff', '#ff007c', '#ffd500', '#00ff85', '#ff6600', '#00ffea']

const initHexAnimation = () => {
  if (!hexGrid.value) return

  const grid = hexGrid.value
  const hexes: HTMLElement[] = []

  // Create hex positions (5x5 grid) - EXACT positioning from provided code
  const positions = Array.from({ length: 25 }, (_, i) => {
    const row = Math.floor(i / 5)
    const col = i % 5
    const offset = row % 2 === 0 ? 0 : 20
    return { x: col * 60 + offset, y: row * 52 }
  })

  // Create hex elements
  positions.forEach((pos) => {
    const hex = document.createElement('div')
    hex.className = 'hex'
    hex.style.left = pos.x + 'px'
    hex.style.top = pos.y + 'px'
    grid.appendChild(hex)
    hexes.push(hex)
  })

  // Animate hex rearrangement
  const rearrangeInterval = setInterval(() => {
    hexes.forEach((hex) => {
      const target = positions[Math.floor(Math.random() * positions.length)]
      if (target) {
        hex.style.left = target.x + 'px'
        hex.style.top = target.y + 'px'
      }
    })
  }, 4000)
  intervalIds.push(rearrangeInterval)

  // Connection visual function
  function connect(hexA: HTMLElement, hexB: HTMLElement, color: string) {
    const conn = document.createElement('div')
    conn.className = 'connection'
    const x1 = parseFloat(hexA.style.left) + 20
    const y1 = parseFloat(hexA.style.top) + 20
    const x2 = parseFloat(hexB.style.left) + 20
    const y2 = parseFloat(hexB.style.top) + 20
    const length = Math.hypot(x2 - x1, y2 - y1)
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI
    conn.style.width = length + 'px'
    conn.style.left = x1 + 'px'
    conn.style.top = y1 + 'px'
    conn.style.background = color
    conn.style.transform = `rotate(${angle}deg)`
    grid.appendChild(conn)
    setTimeout(() => conn.remove(), 1000)
  }

  // Pulse wave through network
  function pulseWave() {
    const start = Math.floor(Math.random() * hexes.length)
    let current = start
    const pathLength = 3 + Math.floor(Math.random() * 7)
    const used = new Set([current])

    for (let i = 0; i < pathLength; i++) {
      const neighbors = hexes.filter((_, idx) => !used.has(idx))
      if (neighbors.length === 0) break
      const next = hexes[Math.floor(Math.random() * neighbors.length)]
      const color = colors[Math.floor(Math.random() * colors.length)]
      const hexA = hexes[current]

      if (hexA && next && color) {
        // Visual pulse
        hexA.style.background = color
        hexA.style.transform = 'scale(1.4)'
        hexA.style.boxShadow = `0 0 20px ${color}`

        setTimeout(() => {
          hexA.style.transform = 'scale(1)'
          hexA.style.boxShadow = 'none'
        }, 300)

        connect(hexA, next, color)
      }

      if (next) {
        current = hexes.indexOf(next)
        used.add(current)
      }
    }
  }

  const pulseInterval = setInterval(pulseWave, 600)
  intervalIds.push(pulseInterval)
}

onMounted(() => {
  initHexAnimation()
})

onUnmounted(() => {
  intervalIds.forEach(id => clearInterval(id))
})
</script>

<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-background">
      <div class="geometric-pattern"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Developer
            <span class="highlight">Relations</span>
            Consulting
          </h1>
          <p class="hero-subtitle">
            Build and scale developer communities. Expert strategy and hands-on implementation.
          </p>
          <div class="hero-cta">
            <router-link to="/consultancy" class="btn btn-primary">
              Our Services
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              Get Started
            </router-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hex-grid-container">
            <div class="hex-grid" ref="hexGrid"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section services-section">
    <div class="container">
      <div class="section-header">
        <h2>How We Help</h2>
        <p>Comprehensive developer relations solutions tailored to your ecosystem</p>
      </div>

      <!-- Core Capabilities -->
      <div class="capabilities-grid">
        <div class="capability-card">
          <div class="capability-icon gradient-1">
            <font-awesome-icon :icon="['fas', 'users']" />
          </div>
          <h3>Community Building</h3>
          <p>Design and grow authentic developer communities</p>
        </div>

        <div class="capability-card">
          <div class="capability-icon gradient-2">
            <font-awesome-icon :icon="['fas', 'code']" />
          </div>
          <h3>Developer Experience</h3>
          <p>Optimize APIs, SDKs, and documentation</p>
        </div>

        <div class="capability-card">
          <div class="capability-icon gradient-3">
            <font-awesome-icon :icon="['fas', 'bullhorn']" />
          </div>
          <h3>Technical Content</h3>
          <p>Create compelling developer-focused content</p>
        </div>

        <div class="capability-card">
          <div class="capability-icon gradient-4">
            <font-awesome-icon :icon="['fas', 'chart-line']" />
          </div>
          <h3>Metrics & Analytics</h3>
          <p>Track and optimize ecosystem performance</p>
        </div>

        <div class="capability-card">
          <div class="capability-icon gradient-5">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" />
          </div>
          <h3>Education Programs</h3>
          <p>Build workshops and certification programs</p>
        </div>

        <div class="capability-card">
          <div class="capability-icon gradient-6">
            <font-awesome-icon :icon="['fas', 'calendar-days']" />
          </div>
          <h3>Events & Hackathons</h3>
          <p>Plan and execute developer engagements</p>
        </div>
      </div>

      <!-- Engagement Models -->
      <div class="engagement-models">
        <h3 class="models-title">Choose Your Engagement Model</h3>
        <div class="models-grid">
          <div class="model-card consulting">
            <div class="model-icon">
              <font-awesome-icon :icon="['fas', 'briefcase']" />
            </div>
            <h4>Professional Services</h4>
            <ul class="model-features">
              <li>Dedicated DevRel strategy</li>
              <li>Custom implementation</li>
              <li>Team training & coaching</li>
              <li>Metrics framework</li>
            </ul>
            <router-link to="/consultancy" class="btn btn-primary">Explore Consulting</router-link>
          </div>

          <div class="model-card community">
            <div class="model-icon">
              <font-awesome-icon :icon="['fas', 'network-wired']" />
            </div>
            <h4>Community Programs</h4>
            <ul class="model-features">
              <li>Open source collaboration</li>
              <li>Portal Network access</li>
              <li>Developer meetups</li>
              <li>Knowledge sharing</li>
            </ul>
            <router-link to="/community" class="btn btn-secondary">Join Community</router-link>
          </div>

          <div class="model-card hybrid">
            <div class="model-icon">
              <font-awesome-icon :icon="['fas', 'layer-group']" />
            </div>
            <h4>Hybrid Approach</h4>
            <ul class="model-features">
              <li>Professional + Community</li>
              <li>Accelerated growth</li>
              <li>Cross-pollination</li>
              <li>Maximum reach</li>
            </ul>
            <router-link to="/contact" class="btn btn-tertiary">Get Started</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="section team-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Team</h2>
        <p>Developer relations practitioners and community builders</p>
      </div>
      <div class="team-grid">
        <div class="team-card">
          <div class="team-avatar">
            <img src="/team/robert.jpg" alt="Robert Wolff" />
          </div>
          <h4>Robert Wolff</h4>
          <p class="team-title">Founder & Partner</p>
          <p class="team-bio">Developer advocate and community strategist. Founder of DevEco Consulting. Previously at Arm leading developer programs.</p>
        </div>

        <div class="team-card">
          <div class="team-avatar">
            <img src="/team/tory.jpg" alt="Tory Moghadam" />
          </div>
          <h4>Tory (TURFPTAx) Moghadam</h4>
          <p class="team-title">Partner</p>
          <p class="team-bio">Embedded systems and AI engineer. Lead AI Engineer at Be Well Health. Founder of OpenMuscle.</p>
        </div>

        <div class="team-card">
          <div class="team-avatar">
            <img src="/team/moheeb.jpg" alt="Moheeb Zara" />
          </div>
          <h4>Moheeb Zara</h4>
          <p class="team-title">Partner</p>
          <p class="team-bio">Developer relations engineer and creative technologist. Founder of LumenCanvas. Worked with AWS, SignalWire, and SORACOM.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Client Logos -->
  <ClientLogos />

  <!-- CTA Section -->
  <section class="section cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Build Better Developer Communities</h2>
        <p>Ready to get started? Let's discuss your developer relations goals.</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="btn btn-primary">Get In Touch</router-link>
          <router-link to="/consultancy" class="btn btn-secondary">View Services</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Global styles for dynamically created hex elements - NOT scoped */
.hex {
  position: absolute;
  width: 40px;
  aspect-ratio: 1.1547;
  background: #009999;
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  opacity: 0.85;
  transition: all 0.6s ease-in-out;
}

.connection {
  position: absolute;
  width: 2px;
  background: rgba(0, 200, 200, 0.3);
  transform-origin: top left;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}
</style>

<style scoped>
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.geometric-pattern {
  position: absolute;
  top: -10%;
  right: -10%;
  width: 60%;
  height: 120%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23378a8b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.5;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hex-grid-container {
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hex-grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
}

.services-section {
  background: white;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.capability-card {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.capability-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(55, 138, 139, 0.15);
}

.capability-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  margin: 0 auto 1rem;
}

.gradient-1 { background: linear-gradient(135deg, #0ea5e9, #38bdf8); }
.gradient-2 { background: linear-gradient(135deg, #14b8a6, #5eead4); }
.gradient-3 { background: linear-gradient(135deg, #f97316, #fdba74); }
.gradient-4 { background: linear-gradient(135deg, #6366f1, #a5b4fc); }
.gradient-5 { background: linear-gradient(135deg, #10b981, #6ee7b7); }
.gradient-6 { background: linear-gradient(135deg, #ec4899, #f9a8d4); }

.capability-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.capability-card p {
  font-size: 0.85rem;
  color: #4a5568;
  line-height: 1.4;
}

.engagement-models {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 2.5rem;
  margin-top: 3rem;
}

.models-title {
  text-align: center;
  font-size: 1.75rem;
  color: #2d3748;
  margin-bottom: 2rem;
  font-weight: 700;
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.model-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.model-card.consulting {
  border-color: rgba(55, 138, 139, 0.2);
}

.model-card.community {
  border-color: rgba(16, 185, 129, 0.2);
}

.model-card.hybrid {
  border-color: rgba(99, 102, 241, 0.2);
}

.model-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.model-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.model-card.consulting .model-icon {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white;
}

.model-card.community .model-icon {
  background: linear-gradient(135deg, #10b981, #6ee7b7);
  color: white;
}

.model-card.hybrid .model-icon {
  background: linear-gradient(135deg, #6366f1, #a5b4fc);
  color: white;
}

.model-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.model-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
}

.model-features li {
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.9rem;
  position: relative;
  padding-left: 1.5rem;
}

.model-features li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.btn-tertiary {
  background: linear-gradient(135deg, #6366f1, #a5b4fc);
  color: white;
}

.btn-tertiary:hover {
  background: linear-gradient(135deg, #4f46e5, #818cf8);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.service-card {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.service-card p {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.service-features {
  list-style: none;
  margin-bottom: 1rem;
}

.service-features li {
  color: #4a5568;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(55, 138, 139, 0.1);
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.85rem;
}

.service-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #378a8b;
  font-weight: bold;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #378a8b;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-cta:hover {
  color: #2d6e6f;
  transform: translateX(4px);
}

.team-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

.team-avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.team-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.team-title {
  color: #378a8b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.team-bio {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
}

.cta-section {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  color: #e2e8f0;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
    min-height: 70vh;
  }

  .hero-title {
    font-size: 2.5rem;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .hero-cta {
    justify-content: center;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 280px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .hex-grid-container {
    width: 300px;
    height: 300px;
  }

  .hex-grid {
    width: 300px;
    height: 300px;
  }

  .hex {
    width: 30px;
    aspect-ratio: 1.1547;
  }

  .service-card {
    padding: 2rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .cta-buttons .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 0;
    min-height: 60vh;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .hex-grid-container {
    width: 250px;
    height: 250px;
  }

  .hex-grid {
    width: 250px;
    height: 250px;
  }

  .hex {
    width: 25px;
    aspect-ratio: 1.1547;
  }

  .service-card {
    padding: 1.5rem;
  }

  .team-card {
    padding: 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.75rem;
  }
}
</style>
