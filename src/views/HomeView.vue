<script setup lang="ts">
import ClientLogos from '../components/ui/ClientLogos.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const hexGrid = ref<SVGGElement | null>(null)
const logoFrame = ref<SVGPathElement | null>(null)
const logoHexes = ref<SVGPolygonElement[]>([])
let flashInterval: number | null = null
let pulseInterval: number | null = null

const colors = [
  '#4a7c7c', '#5a9a9a', '#6ab4a8', '#7ecec4', '#4db3a8',
  '#3d8b8b', '#88d4c8', '#2d6b6b', '#5bc5e8', '#4db3a8',
]

const accentColors = ['#e85a85', '#f4c84b', '#5bc5e8']

// Center of the SVG (where logo will expand from)
const centerX = 300
const centerY = 350

const generateHexGrid = () => {
  if (!hexGrid.value) return
  hexGrid.value.innerHTML = ''

  const rows = 11
  const cols = 9
  const hexWidth = 58
  const hexHeight = 50

  // Calculate grid dimensions for centering
  const gridWidth = cols * hexWidth
  const gridHeight = rows * hexHeight
  const startX = centerX - gridWidth / 2 + hexWidth / 2
  const startY = centerY - gridHeight / 2 + hexHeight / 2

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = startX + col * hexWidth + (row % 2 === 1 ? hexWidth / 2 : 0)
      const y = startY + row * hexHeight
      const baseColor = colors[Math.floor(Math.random() * colors.length)]

      // Stagger based on distance from center for radial effect
      const dx = x - centerX
      const dy = y - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)
      const delay = distance * 0.002

      // Push strength increases with proximity to center
      const pushStrength = Math.max(300 - distance * 0.4, 100)
      const pushX = Math.cos(angle) * pushStrength
      const pushY = Math.sin(angle) * pushStrength

      const hex = document.createElementNS('http://www.w3.org/2000/svg', 'use')
      hex.setAttribute('href', '#gridHex')
      hex.setAttribute('x', String(x))
      hex.setAttribute('y', String(y))
      hex.setAttribute('fill', baseColor || '#4db3a8')
      hex.classList.add('grid-hex')
      hex.style.setProperty('--delay', `${delay}s`)
      hex.style.setProperty('--push-x', `${pushX}px`)
      hex.style.setProperty('--push-y', `${pushY}px`)
      hex.style.setProperty('--distance', String(distance))
      hex.dataset.row = String(row)
      hex.dataset.col = String(col)

      hexGrid.value.appendChild(hex)
    }
  }
}

const startGridPulse = () => {
  const hexes = hexGrid.value?.querySelectorAll('.grid-hex') as NodeListOf<SVGUseElement>
  if (!hexes) return

  pulseInterval = window.setInterval(() => {
    const numToPulse = 2 + Math.floor(Math.random() * 3)
    for (let i = 0; i < numToPulse; i++) {
      const randomHex = hexes[Math.floor(Math.random() * hexes.length)]
      if (randomHex && !randomHex.classList.contains('exploding')) {
        const accentColor = accentColors[Math.floor(Math.random() * accentColors.length)]
        const originalColor = randomHex.getAttribute('fill')
        randomHex.setAttribute('fill', accentColor || '#e85a85')
        randomHex.classList.add('pulse')

        setTimeout(() => {
          randomHex.setAttribute('fill', originalColor || '#4db3a8')
          randomHex.classList.remove('pulse')
        }, 400)
      }
    }
  }, 300)
}

const stopGridPulse = () => {
  if (pulseInterval) {
    clearInterval(pulseInterval)
    pulseInterval = null
  }
}

const startColorFlash = () => {
  flashInterval = window.setInterval(() => {
    const hexes = logoHexes.value
    if (hexes.length === 0) return
    const randomHex = hexes[Math.floor(Math.random() * hexes.length)]
    const flashColor = [...colors, ...accentColors][Math.floor(Math.random() * (colors.length + accentColors.length))]

    if (randomHex && flashColor) {
      randomHex.style.fill = flashColor
      randomHex.classList.add('flash')

      setTimeout(() => {
        randomHex.style.fill = ''
        randomHex.classList.remove('flash')
      }, 300)
    }
  }, 800 + Math.random() * 1200)
}

const stopColorFlash = () => {
  if (flashInterval) {
    clearInterval(flashInterval)
    flashInterval = null
  }
}

const runAnimation = () => {
  stopColorFlash()
  stopGridPulse()

  if (logoFrame.value) {
    logoFrame.value.classList.remove('visible', 'expanding')
  }
  logoHexes.value.forEach(hex => {
    hex.classList.remove('visible', 'color-shift')
    hex.style.fill = ''
  })

  // Phase 1: Generate and show the hex grid with breathing animation
  generateHexGrid()
  const gridHexes = hexGrid.value?.querySelectorAll('.grid-hex')

  // Start the grid with entrance animation
  setTimeout(() => {
    gridHexes?.forEach(hex => hex.classList.add('visible'))
  }, 80)

  // Start pulsing colors
  setTimeout(() => {
    startGridPulse()
  }, 500)

  // Phase 2: Logo starts expanding from center, pushing hexagons outward
  setTimeout(() => {
    stopGridPulse()

    // Start logo expansion
    logoFrame.value?.classList.add('expanding')

    // Push hexagons outward - closer ones first (radial wave)
    gridHexes?.forEach((hex) => {
      const distance = parseFloat((hex as HTMLElement).style.getPropertyValue('--distance')) || 0
      // Inner hexes move first, outer hexes follow
      const delay = distance * 0.0017

      setTimeout(() => {
        hex.classList.add('exploding')
      }, delay * 1000)
    })
  }, 1700)

  // Phase 3: Logo frame fully visible
  setTimeout(() => {
    logoFrame.value?.classList.add('visible')
  }, 2050)

  // Phase 4: Logo hexagons appear
  setTimeout(() => {
    logoHexes.value.forEach((hex, i) => {
      setTimeout(() => {
        hex.classList.add('visible')
      }, i * 60)
    })
  }, 2200)

  // Phase 5: Color shift animation
  setTimeout(() => {
    logoHexes.value.forEach(hex => hex.classList.add('color-shift'))
  }, 2800)

  // Phase 6: Random flashing
  setTimeout(() => {
    startColorFlash()
  }, 3400)
}

onMounted(() => {
  logoHexes.value = Array.from(document.querySelectorAll('.logo-hex')) as SVGPolygonElement[]
  runAnimation()
})

onUnmounted(() => {
  stopColorFlash()
  stopGridPulse()
})
</script>

<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="label">Developer Relations Consulting</p>
          <h1>
            We didn't read about<br>
            <span class="hero-underline">community building</span><br>
            in a book.
          </h1>
          <p class="hero-description">
            DevRel practitioners who've been building communities since before it was a job title. <span class="highlight">Let's build yours.</span>
          </p>
          <div class="hero-buttons">
            <router-link to="/consultancy" class="btn btn-primary">Our Services</router-link>
            <router-link to="/contact" class="btn btn-secondary">Get Started</router-link>
          </div>
        </div>

        <div class="hero-animation">
          <svg viewBox="0 0 600 700">
            <defs>
              <polygon id="gridHex" points="0,-20 17.3,-10 17.3,10 0,20 -17.3,10 -17.3,-10"/>
            </defs>
            <g ref="hexGrid"></g>
            <g id="logo" transform="translate(38, 50)">
              <path ref="logoFrame" class="logo-frame" fill="#1e3a3a" fill-rule="evenodd" d="M262,22 L492.8,155.25 L492.8,421.75 L262,555 L31.2,421.75 L31.2,155.25 Z M262,84 L439.1,186.25 L439.1,390.75 L262,493 L84.9,390.75 L84.9,186.25 Z"/>
              <g id="logoHexes">
                <polygon class="logo-hex" points="367.56,237.57 411.73,263.07 411.73,314.07 367.56,339.57 323.39,314.07 323.39,263.07" fill="#1e3a3a"/>
                <polygon class="logo-hex" points="211.11,146.74 255.28,172.24 255.28,223.24 211.11,248.74 166.94,223.24 166.94,172.24" fill="#1e3a3a"/>
                <polygon class="logo-hex" points="315.85,146.72 360.01,172.22 360.01,223.22 315.85,248.72 271.68,223.22 271.68,172.22" fill="#1e3a3a"/>
                <polygon class="logo-hex" points="159.06,237.57 203.23,263.07 203.23,314.07 159.06,339.57 114.9,314.07 114.9,263.07" fill="#1e3a3a"/>
                <polygon class="logo-hex" points="211.13,327.96 255.3,353.46 255.3,404.46 211.13,429.96 166.96,404.46 166.96,353.46" fill="#1e3a3a"/>
                <polygon class="logo-hex" points="315.84,327.95 360.01,353.45 360.01,404.45 315.84,429.95 271.67,404.45 271.67,353.45" fill="#1e3a3a"/>
                <polygon class="logo-hex" points="263.14,237.57 307.31,263.07 307.31,314.07 263.14,339.57 218.98,314.07 218.98,263.07" fill="#1e3a3a"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="hero-stamp">Est. 2023</div>
  </section>

  <!-- Services Section -->
  <section id="services">
    <div class="container">
      <div class="section-header">
        <h2>How We Help</h2>
      </div>

      <div class="services-grid">
        <div class="card service-card">
          <span class="stamp stamp-teal">Community</span>
          <h3>Community Building</h3>
          <p>Real communities, not vanity metrics. Discord servers that don't die after launch. Humans actually helping each other and making things.</p>
        </div>

        <div class="card service-card">
          <span class="stamp stamp-pink">Content</span>
          <h3>Technical Content</h3>
          <p>Tutorials, documentation, and videos from people who've actually built the thing. We know what developers need because we are developers.</p>
        </div>

        <div class="card service-card">
          <span class="stamp stamp-navy">Strategy</span>
          <h3>DevRel Strategy</h3>
          <p>No 47-slide frameworks. Clear strategy from practitioners who've run programs at AWS, SORACOM, SignalWire, and in hackerspaces.</p>
        </div>

        <div class="card service-card">
          <span class="stamp stamp-teal">Training</span>
          <h3>Workshops & Training</h3>
          <p>Hands-on workshops for your team. From DevRel fundamentals to community management to technical writing. We teach what we practice.</p>
        </div>

        <div class="card service-card">
          <span class="stamp stamp-pink">Events</span>
          <h3>Events & Hackathons</h3>
          <p>We've run events at 2am and know what breaks. Hackathons, meetups, livestreams. Planned and executed by practitioners, not event planners.</p>
        </div>

        <div class="card service-card">
          <span class="stamp stamp-navy">Adoption</span>
          <h3>Product Adoption</h3>
          <p>Onboarding that works. Integration guides that developers actually read. The bridge between your product and the people who'll use it.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="process" class="process-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Process</h2>
        <p class="process-subtitle">From discovery to deployment. We're your embedded partner.</p>
      </div>

      <div class="process-grid">
        <div class="process-step" data-step="1">
          <h4>Discovery</h4>
          <p>We analyze your goals, audience, and current state to understand what you actually need.</p>
        </div>

        <div class="process-step" data-step="2">
          <h4>Strategy</h4>
          <p>Clear roadmaps using methods that work. No jargon. Just a plan you can execute.</p>
        </div>

        <div class="process-step" data-step="3">
          <h4>Implementation</h4>
          <p>We build alongside you. Communities, content, programs. Hands-on work.</p>
        </div>

        <div class="process-step" data-step="4">
          <h4>Growth</h4>
          <p>Monitor, optimize, scale. Systems that grow, not dependencies that require us forever.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="team-section">
    <div class="container">
      <div class="section-header">
        <h2>The Collective</h2>
      </div>

      <div class="team-grid">
        <div class="team-member">
          <span class="badge badge-teal">Founder</span>
          <div class="team-photo">
            <img src="/team/robert.jpg" alt="Robert Wolff" />
          </div>
          <h3>Robert Wolff</h3>
          <p class="role">Founder & Partner</p>
          <p class="bio">Developer advocate and community strategist. Former Arm DevRel lead. Built developer programs before "DevRel" was a job title.</p>
          <a href="https://linktr.ee/robertwolff" target="_blank" class="member-link">Linktree</a>
        </div>

        <div class="team-member">
          <span class="badge badge-pink">Partner</span>
          <div class="team-photo">
            <img src="/team/moheeb.jpg" alt="Moheeb Zara" />
          </div>
          <h3>Moheeb Zara</h3>
          <p class="role">Partner</p>
          <p class="bio">Creative technologist. Hardware hacker. HeatSync Labs alum. Founder of LumenCanvas.</p>
          <a href="https://hack.build" target="_blank" class="member-link">Portfolio</a>
        </div>

        <div class="team-member">
          <span class="badge badge-navy">Partner</span>
          <div class="team-photo">
            <img src="/team/tory.jpg" alt="Tory Moghadam" />
          </div>
          <h3>Tory Moghadam</h3>
          <p class="role">Partner</p>
          <p class="bio">Embedded systems and AI engineer. Lead AI Engineer at Be Well Health. Founder of OpenMuscle.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <ClientLogos />

  <!-- CTA Section -->
  <section id="contact" class="cta-section">
    <div class="container">
      <h2>Ready to build something real?</h2>
      <p>No pitch decks. No frameworks. Just a conversation about what you're trying to build and how we might help.</p>
      <router-link to="/contact" class="btn btn-primary">Start a Conversation</router-link>
      <p class="cta-link">Or join the <a href="https://discord.gg/deveco" target="_blank">Discord community</a> first</p>
    </div>
  </section>
</template>

<style>
/* Global styles for SVG animation */

/* Grid hexagons - initial state */
.grid-hex {
  opacity: 0;
  transform: scale(0);
  transform-origin: center;
  transition:
    opacity 0.6s ease-out,
    transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--delay, 0s);
}

/* Grid hexagons - visible with breathing */
.grid-hex.visible {
  opacity: 0.8;
  transform: scale(1);
  animation: breathe 2.5s ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

/* Grid hexagons - pulse effect */
.grid-hex.pulse {
  transform: scale(1.12);
  filter: brightness(1.2);
}

/* Grid hexagons - pushed outward by logo expansion */
.grid-hex.exploding {
  animation: explodeOut 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes breathe {
  0%, 100% {
    opacity: 0.65;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

@keyframes explodeOut {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }
  30% {
    transform: translate(
      calc(var(--push-x) * 0.3),
      calc(var(--push-y) * 0.3)
    ) scale(0.95);
    opacity: 0.7;
  }
  70% {
    transform: translate(
      calc(var(--push-x) * 0.8),
      calc(var(--push-y) * 0.8)
    ) scale(0.5);
    opacity: 0.3;
  }
  100% {
    transform: translate(
      var(--push-x),
      var(--push-y)
    ) scale(0.2);
    opacity: 0;
  }
}

/* Logo frame - expanding from center */
.logo-frame {
  opacity: 0;
  transform: scale(0);
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.logo-frame.expanding {
  opacity: 0.4;
  transform: scale(0.5);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.logo-frame.visible {
  opacity: 1;
  transform: scale(1);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Logo hexagons */
.logo-hex {
  opacity: 0;
  transform: scale(0);
  transform-origin: center;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-hex.visible {
  opacity: 1;
  transform: scale(1);
}

.logo-hex.color-shift {
  animation: colorShift 2.5s ease-in-out infinite;
}

.logo-hex.color-shift:nth-child(1) { animation-delay: 0s; }
.logo-hex.color-shift:nth-child(2) { animation-delay: 0.15s; }
.logo-hex.color-shift:nth-child(3) { animation-delay: 0.3s; }
.logo-hex.color-shift:nth-child(4) { animation-delay: 0.45s; }
.logo-hex.color-shift:nth-child(5) { animation-delay: 0.6s; }
.logo-hex.color-shift:nth-child(6) { animation-delay: 0.75s; }
.logo-hex.color-shift:nth-child(7) { animation-delay: 0.9s; }

@keyframes colorShift {
  0%, 100% { fill: #ffffff; }
  50% { fill: #4db3a8; }
}

.logo-hex.flash {
  animation: flash 0.3s ease-out !important;
}

@keyframes flash {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
</style>

<style scoped>
.hero {
  padding: var(--space-xl) 0 var(--space-2xl);
  background: linear-gradient(135deg, var(--bg-white) 0%, var(--bg-light) 100%);
  border-bottom: 2px solid var(--border);
  position: relative;
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  margin-bottom: var(--space-lg);
}

.hero-underline {
  position: relative;
  display: inline-block;
  color: var(--teal);
}

.hero-underline::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 8px;
  background: var(--accent-yellow);
  z-index: -1;
  transform: skewX(-3deg);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-mid);
  margin-bottom: var(--space-xl);
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.hero-stamp {
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  padding: var(--space-sm) var(--space-md);
  border: 2px solid var(--teal);
  color: var(--teal);
  font-size: 0.75rem;
  font-weight: 700;
  transform: rotate(12deg);
  opacity: 0.6;
}

.hero-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.hero-animation svg {
  width: 100%;
  height: 100%;
  max-width: 400px;
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-lg);
}

.service-card .stamp {
  margin-bottom: var(--space-md);
}

.service-card h3 {
  margin-bottom: var(--space-sm);
}

.service-card p {
  font-size: 0.875rem;
  color: var(--text-mid);
}

/* Process */
.process-section {
  background: var(--bg-white);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
}

.process-subtitle {
  color: var(--text-mid);
  margin-top: var(--space-sm);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-lg);
}

.process-step {
  position: relative;
  padding-left: var(--space-xl);
}

.process-step::before {
  content: attr(data-step);
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  background: var(--teal);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.process-step h4 {
  margin-bottom: var(--space-sm);
}

.process-step p {
  font-size: 0.875rem;
  color: var(--text-mid);
}

/* Team */
.team-section {
  background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
}

.team-member {
  text-align: center;
}

.team-member > .badge {
  display: inline-block;
  margin-bottom: var(--space-sm);
  transform: rotate(-3deg);
}

.team-photo {
  width: 120px;
  height: 135px;
  margin: 0 auto var(--space-md);
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--teal);
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
}

.team-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  margin-bottom: var(--space-xs);
}

.team-member .role {
  color: var(--teal);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-sm);
}

.team-member .bio {
  font-size: 0.875rem;
  color: var(--text-mid);
  margin-bottom: var(--space-sm);
}

.member-link {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--teal);
  text-decoration: none;
  border: 1px solid var(--teal);
  padding: 0.25rem 0.75rem;
  transition: all 0.2s;
}

.member-link:hover {
  background: var(--teal);
  color: white;
}

/* CTA */
.cta-section {
  background: var(--navy);
  color: white;
  text-align: center;
}

.cta-section h2 {
  color: white;
  margin-bottom: var(--space-md);
}

.cta-section > .container > p:first-of-type {
  color: var(--text-light);
  margin-bottom: var(--space-xl);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-section .btn-primary {
  background: var(--teal);
  box-shadow: 4px 4px 0 var(--teal-dark);
  font-size: 1rem;
  padding: 1rem 2rem;
}

.cta-section .btn-primary:hover {
  background: var(--teal-light);
}

.cta-link {
  margin-top: var(--space-lg);
  font-size: 0.875rem;
  color: var(--text-light);
}

.cta-link a {
  color: var(--teal-light);
  text-decoration: underline;
}

.cta-link a:hover {
  text-decoration: none;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    max-width: none;
  }

  .hero-animation {
    order: -1;
    height: 280px;
    margin-bottom: var(--space-md);
  }

  .hero-animation svg {
    max-width: 280px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-stamp {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
