<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-animation">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="rocket-portal-svg">
            <defs>
              <radialGradient id="portalGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#0ff" stop-opacity="0"/>
                <stop offset="60%" stop-color="#0ff" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.8"/>
              </radialGradient>
            </defs>

            <!-- Portal -->
            <g class="portal">
              <ellipse cx="200" cy="200" rx="50" ry="50" fill="url(#portalGrad)"/>
              <g class="portal-ring">
                <ellipse cx="200" cy="200" rx="55" ry="55" fill="none" stroke="#0ff" stroke-width="3" stroke-dasharray="8 12"/>
              </g>
              <ellipse cx="200" cy="200" rx="35" ry="35" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4 8"/>
            </g>

            <!-- Rocket -->
            <g class="rocket">
              <g class="flame">
                <polygon points="0,25 -8,42 0,36 8,42" fill="#ff6b35"/>
                <polygon points="0,27 -5,38 0,33 5,38" fill="#ffd166"/>
              </g>
              <ellipse cx="0" cy="0" rx="12" ry="25" fill="#8b5cf6"/>
              <polygon points="0,-38 -10,-18 10,-18" fill="#a78bfa"/>
              <circle cx="0" cy="-5" r="6" fill="#0ff"/>
              <circle cx="0" cy="-5" r="3.5" fill="#1e3a3a"/>
              <polygon points="-12,12 -22,28 -12,22" fill="#ec4899"/>
              <polygon points="12,12 22,28 12,22" fill="#ec4899"/>
            </g>

            <!-- Gears -->
            <g class="gears-group">
              <!-- Main gear - Coral -->
              <g class="gear1">
                <circle cx="200" cy="200" r="45" fill="#ff6b6b"/>
                <circle cx="200" cy="200" r="15" fill="#1e3a3a"/>
                <g fill="#ff6b6b">
                  <rect x="192" y="148" width="16" height="14" rx="2"/>
                  <rect x="192" y="238" width="16" height="14" rx="2"/>
                  <rect x="238" y="192" width="14" height="16" rx="2"/>
                  <rect x="148" y="192" width="14" height="16" rx="2"/>
                  <rect x="226" y="160" width="14" height="14" rx="2" transform="rotate(45, 233, 167)"/>
                  <rect x="160" y="226" width="14" height="14" rx="2" transform="rotate(45, 167, 233)"/>
                  <rect x="226" y="226" width="14" height="14" rx="2" transform="rotate(45, 233, 233)"/>
                  <rect x="160" y="160" width="14" height="14" rx="2" transform="rotate(45, 167, 167)"/>
                </g>
              </g>

              <!-- Top right gear - Yellow -->
              <g class="gear2">
                <circle cx="295" cy="155" r="32" fill="#ffd166"/>
                <circle cx="295" cy="155" r="10" fill="#1e3a3a"/>
                <g fill="#ffd166">
                  <rect x="288" y="118" width="14" height="12" rx="2"/>
                  <rect x="288" y="180" width="14" height="12" rx="2"/>
                  <rect x="320" y="148" width="12" height="14" rx="2"/>
                  <rect x="258" y="148" width="12" height="14" rx="2"/>
                  <rect x="314" y="128" width="12" height="12" rx="2" transform="rotate(45, 320, 134)"/>
                  <rect x="264" y="170" width="12" height="12" rx="2" transform="rotate(45, 270, 176)"/>
                </g>
              </g>

              <!-- Bottom left gear - Teal -->
              <g class="gear3">
                <circle cx="120" cy="260" r="38" fill="#4db3a8"/>
                <circle cx="120" cy="260" r="12" fill="#1e3a3a"/>
                <g fill="#4db3a8">
                  <rect x="112" y="216" width="16" height="13" rx="2"/>
                  <rect x="112" y="291" width="16" height="13" rx="2"/>
                  <rect x="151" y="252" width="13" height="16" rx="2"/>
                  <rect x="76" y="252" width="13" height="16" rx="2"/>
                  <rect x="144" y="226" width="13" height="13" rx="2" transform="rotate(45, 150, 232)"/>
                  <rect x="83" y="281" width="13" height="13" rx="2" transform="rotate(45, 90, 288)"/>
                </g>
              </g>

              <!-- Bottom right gear - Pink -->
              <g class="gear4">
                <circle cx="280" cy="290" r="28" fill="#ec4899"/>
                <circle cx="280" cy="290" r="9" fill="#1e3a3a"/>
                <g fill="#ec4899">
                  <rect x="273" y="258" width="14" height="10" rx="2"/>
                  <rect x="273" y="312" width="14" height="10" rx="2"/>
                  <rect x="302" y="283" width="10" height="14" rx="2"/>
                  <rect x="248" y="283" width="10" height="14" rx="2"/>
                </g>
              </g>

              <!-- Top left gear - Purple -->
              <g class="gear5">
                <circle cx="100" cy="140" r="25" fill="#a78bfa"/>
                <circle cx="100" cy="140" r="8" fill="#1e3a3a"/>
                <g fill="#a78bfa">
                  <rect x="93" y="111" width="14" height="10" rx="2"/>
                  <rect x="93" y="159" width="14" height="10" rx="2"/>
                  <rect x="119" y="133" width="10" height="14" rx="2"/>
                  <rect x="71" y="133" width="10" height="14" rx="2"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="hero-content">
          <p class="label">Our Products</p>
          <h1>Tools we actually use.</h1>
          <p class="hero-subtitle">
            Open source platforms and tools built from real community needs.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="projects-section">
    <div class="container">
      <!-- Portal Network - Featured -->
      <div class="project-card featured">
        <div class="featured-left">
          <div class="project-logo">
            <img src="/projects/portalnetwork.png" alt="Portal Network" />
          </div>
        </div>
        <div class="featured-content">
          <div class="project-title">
            <h3>Portal Network</h3>
            <span class="badge badge-teal">Active</span>
          </div>
          <p class="project-tagline">The world's first Internet of Communities</p>
          <p class="project-description">
            Platform agnostic layer that connects communities to our high-integrity network. No spam, no bad actors. Just real developers helping each other.
          </p>
          <div class="featured-bottom">
            <div class="project-stats">
              <div class="stat">
                <span class="stat-number">36</span>
                <span class="stat-label">Servers</span>
              </div>
              <div class="stat">
                <span class="stat-number">80k+</span>
                <span class="stat-label">Users</span>
              </div>
              <div class="stat">
                <span class="stat-number">26</span>
                <span class="stat-label">Network</span>
              </div>
            </div>
            <div class="project-links">
              <a href="https://www.portalnet.work/" target="_blank" class="btn btn-primary">Visit Portal Network</a>
              <a href="https://discord.gg/deveco" target="_blank" class="btn btn-secondary">Try Bot</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects Grid -->
      <div class="projects-grid">
        <!-- B3VY Live Hub -->
        <div class="project-card">
          <div class="project-header">
            <div class="project-logo">
              <img src="/projects/b3vy.png" alt="B3VY" />
            </div>
            <div class="project-info">
              <div class="project-title">
                <h3>B3VY Live Hub</h3>
                <span class="badge badge-pink">In Progress</span>
              </div>
              <p class="project-tagline">Connect with Creators</p>
            </div>
          </div>
          <p class="project-description">
            Always-on livestream platform with self-serve scheduling. Join B3VY Live Hub to discover, interact with, and support your favorite content creators.
          </p>
          <div class="project-links">
            <a href="https://b3vy.com" target="_blank" class="btn btn-primary">Visit B3VY</a>
            <a href="https://discord.gg/deveco" target="_blank" class="btn btn-secondary">Join Discord</a>
          </div>
        </div>

        <!-- LaunchCue CRM -->
        <div class="project-card">
          <div class="project-header">
            <div class="project-logo">
              <img src="/projects/launchcue.png" alt="LaunchCue" />
            </div>
            <div class="project-info">
              <div class="project-title">
                <h3>LaunchCue</h3>
                <span class="badge badge-navy">Open Source</span>
              </div>
              <p class="project-tagline">Open source DevRel CRM</p>
            </div>
          </div>
          <p class="project-description">
            Platform for developer relations teams to manage clients, projects, tasks, and campaigns. AI-powered brain dump, team management, and resource organization.
          </p>
          <div class="project-links">
            <a href="https://launchcue.app" target="_blank" class="btn btn-primary">Try LaunchCue</a>
            <a href="https://github.com/virgilvox/launchcue" target="_blank" class="btn btn-secondary">View GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="container">
      <h2>Want to contribute?</h2>
      <p>All projects are open source or community-driven. Jump in.</p>
      <div class="cta-buttons">
        <a href="https://github.com/thedeveco" target="_blank" class="btn btn-primary">View GitHub</a>
        <a href="https://discord.gg/deveco" target="_blank" class="btn btn-secondary">Join Discord</a>
      </div>
    </div>
  </section>
</template>

<style>
/* SVG Animation styles (unscoped) */
.rocket-portal-svg .rocket {
  animation: rocketMove 6s ease-in-out infinite;
}

@keyframes rocketMove {
  0% { transform: translate(40px, 360px) rotate(45deg) scale(0.8); opacity: 0; }
  10% { transform: translate(60px, 340px) rotate(45deg) scale(1); opacity: 1; }
  40% { transform: translate(185px, 215px) rotate(45deg) scale(1); opacity: 1; }
  50% { transform: translate(200px, 200px) rotate(45deg) scale(0); opacity: 0; }
  100% { transform: translate(200px, 200px) rotate(45deg) scale(0); opacity: 0; }
}

.rocket-portal-svg .portal {
  transform-origin: 200px 200px;
  animation: portalPulse 6s ease-in-out infinite;
}

@keyframes portalPulse {
  0% { transform: scale(0.8); opacity: 0.6; }
  30% { transform: scale(1); opacity: 1; }
  45% { transform: scale(1.3); opacity: 1; }
  50% { transform: scale(3); opacity: 0; }
  100% { transform: scale(0.8); opacity: 0.6; }
}

.rocket-portal-svg .portal-ring {
  transform-origin: 200px 200px;
  animation: ringRotate 3s linear infinite;
}

@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rocket-portal-svg .gears-group {
  animation: gearsAppear 6s ease-in-out infinite;
}

@keyframes gearsAppear {
  0%, 45% { opacity: 0; }
  55% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}

.rocket-portal-svg .gear1 {
  transform-origin: 200px 200px;
  animation: spin1 4s linear infinite;
}

@keyframes spin1 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rocket-portal-svg .gear2 {
  transform-origin: 295px 155px;
  animation: spin2 3s linear infinite;
}

@keyframes spin2 {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.rocket-portal-svg .gear3 {
  transform-origin: 120px 260px;
  animation: spin3 5s linear infinite;
}

@keyframes spin3 {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.rocket-portal-svg .gear4 {
  transform-origin: 280px 290px;
  animation: spin4 2.5s linear infinite;
}

@keyframes spin4 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rocket-portal-svg .gear5 {
  transform-origin: 100px 140px;
  animation: spin5 3.5s linear infinite;
}

@keyframes spin5 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rocket-portal-svg .flame {
  transform-origin: 0 25px;
  animation: flicker 0.1s ease-in-out infinite alternate;
}

@keyframes flicker {
  from { opacity: 0.8; transform: scaleY(0.9); }
  to { opacity: 1; transform: scaleY(1.1); }
}
</style>

<style scoped>
.hero {
  background: var(--navy);
  color: white;
  padding: var(--space-2xl) 0;
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.hero-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.rocket-portal-svg {
  width: 100%;
  max-width: 320px;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
  background: radial-gradient(circle, transparent 60%, var(--navy) 100%);
}

.hero-content {
  text-align: left;
}

.hero .label {
  color: var(--teal-light);
  margin-bottom: var(--space-md);
}

.hero h1 {
  color: white;
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-light);
  max-width: 500px;
}

/* Projects */
.projects-section {
  background: var(--bg-light);
}

/* Featured Card - Portal Network */
.project-card.featured {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-xl);
  background: white;
  border: 2px solid var(--border);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
  transition: all 0.2s;
}

.project-card.featured:hover {
  border-color: var(--teal);
  box-shadow: 6px 6px 0 var(--teal);
}

.featured-left {
  display: flex;
  align-items: flex-start;
}

.featured-left .project-logo {
  width: 80px;
  height: 80px;
}

.featured-content {
  display: flex;
  flex-direction: column;
}

.featured-content .project-description {
  margin-bottom: var(--space-md);
}

.featured-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

.featured-bottom .project-stats {
  margin-bottom: 0;
}

.featured-bottom .project-links {
  margin-top: 0;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.project-card {
  background: white;
  border: 2px solid var(--border);
  padding: var(--space-lg);
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--teal);
  box-shadow: 6px 6px 0 var(--teal);
}

.project-header {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
}

.project-logo {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.project-info {
  flex: 1;
  min-width: 0;
}

.project-title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
  flex-wrap: wrap;
}

.project-title h3 {
  margin: 0;
}

.project-tagline {
  color: var(--teal);
  font-size: 0.875rem;
}

.project-description {
  font-size: 0.9375rem;
  color: var(--text-mid);
  margin-bottom: var(--space-md);
  line-height: 1.6;
  flex: 1;
}

.project-stats {
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  background: var(--bg-light);
  border: 1px solid var(--border);
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--teal);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-mid);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-links {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-top: auto;
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

.cta-section > .container > p {
  color: var(--text-light);
  margin-bottom: var(--space-xl);
}

.cta-buttons {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-secondary {
  border-color: white;
  color: white;
}

.cta-section .btn-secondary:hover {
  background: white;
  color: var(--navy);
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-animation {
    order: -1;
  }

  .rocket-portal-svg {
    max-width: 280px;
  }

  .hero-content {
    text-align: center;
  }

  .hero-subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .project-card.featured {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .featured-left {
    justify-content: center;
  }

  .featured-left .project-logo {
    width: 60px;
    height: 60px;
  }

  .featured-content {
    text-align: center;
  }

  .featured-content .project-title {
    justify-content: center;
  }

  .featured-bottom {
    flex-direction: column;
    align-items: center;
  }

  .featured-bottom .project-stats {
    justify-content: center;
    width: 100%;
  }

  .featured-bottom .project-links {
    justify-content: center;
    width: 100%;
  }

  .project-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .project-info {
    text-align: center;
  }

  .project-title {
    justify-content: center;
  }

  .project-links {
    flex-direction: column;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
