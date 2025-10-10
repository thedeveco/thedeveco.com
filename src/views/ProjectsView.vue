<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Our Projects</h1>
        <p class="hero-subtitle">
          Open source tools and platforms connecting developer communities.
        </p>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section projects-section">
    <div class="container">
      <div class="projects-list">
        <!-- Portal Network -->
        <div class="project-card">
          <div class="project-header">
            <div class="project-logo">
              <img src="/projects/portalnetwork.png" alt="Portal Network" />
            </div>
            <div class="project-title-section">
              <h3>Portal Network</h3>
              <p class="project-tagline">The worlds first Internet of Communities™</p>
            </div>
            <div class="project-badge active">Active</div>
          </div>

          <p class="project-description">
            Platform agnostic layer that connects communities to our high-integrity network.
            Currently active in 36 Discord servers with 80.4k+ members.
          </p>

          <div class="project-stats">
            <div class="stat">
              <span class="stat-number">36</span>
              <span class="stat-label">Servers</span>
            </div>
            <div class="stat">
              <span class="stat-number">80.4k+</span>
              <span class="stat-label">Users</span>
            </div>
            <div class="stat">
              <span class="stat-number">26</span>
              <span class="stat-label">Network</span>
            </div>
          </div>

          <div class="project-footer">
            <a href="https://www.portalnet.work/" target="_blank" class="project-link primary">
              Visit Portal Network
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </a>
            <a href="https://discord.gg/deveco" target="_blank" class="project-link">
              Try Bot
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- B3VY Live Hub -->
        <div class="project-card">
          <div class="project-header">
            <div class="project-logo">
              <img src="/projects/b3vy.png" alt="B3VY" />
            </div>
            <div class="project-title-section">
              <h3>B3VY Live Hub</h3>
              <p class="project-tagline">Connect with Creators</p>
            </div>
            <div class="project-badge wip">In Progress</div>
          </div>

          <p class="project-description">
            Join B3VY Live Hub to discover, interact with, and support your favorite content creators.
            Always-on livestream platform with self-serve scheduling. Currently in development - launching soon.
          </p>

          <div class="project-footer">
            <a href="https://b3vy.com" target="_blank" class="project-link primary">
              Visit B3VY
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </a>
            <a href="https://discord.gg/deveco" target="_blank" class="project-link">
              Join Discord
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- LaunchCue CRM -->
        <div class="project-card">
          <div class="project-header">
            <div class="project-logo">
              <img src="/projects/launchcue.png" alt="LaunchCue" />
            </div>
            <div class="project-title-section">
              <h3>LaunchCue</h3>
              <p class="project-tagline">Open source DevRel CRM</p>
            </div>
            <div class="project-badge opensource">Open Source</div>
          </div>

          <p class="project-description">
            Comprehensive platform for developer relations teams to manage clients, projects, tasks, and campaigns.
            Features AI-powered brain dump, team management, and resource organization.
          </p>

          <div class="project-footer">
            <a href="https://launchcue.app" target="_blank" class="project-link primary">
              Try LaunchCue
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </a>
            <a href="https://github.com/virgilvox/launchcue" target="_blank" class="project-link">
              View GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #e2e8f0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.projects-section {
  background: #f8fafc;
  padding: 4rem 0;
}

.container {
  width: 100%;
  margin: 0;
  padding: 0 2rem;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(55, 138, 139, 0.12);
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.project-logo {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.project-logo img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.project-title-section {
  flex: 1;
}

.project-title-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.project-tagline {
  color: #378a8b;
  font-weight: 500;
  font-size: 0.95rem;
}

.project-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  right: 0;
}

.project-badge.active {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white;
}

.project-badge.wip {
  background: linear-gradient(135deg, #ed8936, #f6ad55);
  color: white;
}

.project-badge.opensource {
  background: linear-gradient(135deg, #38a169, #68d391);
  color: white;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: #378a8b;
}

.stat-label {
  font-size: 0.75rem;
  color: #4a5568;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-footer {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(55, 138, 139, 0.2);
  color: #378a8b;
}

.project-link:hover {
  background: rgba(55, 138, 139, 0.1);
  transform: translateX(2px);
}

.project-link.primary {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white;
  border: none;
}

.project-link.primary:hover {
  background: linear-gradient(135deg, #2d6e6f, #4a9a9b);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(55, 138, 139, 0.3);
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .projects-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0;
  }

  .project-card {
    padding: 1.5rem;
  }

  .project-header {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .project-badge {
    position: static;
    margin-left: auto;
  }

  .project-logo {
    width: 60px;
    height: 60px;
  }

  .project-title-section h3 {
    font-size: 1.25rem;
  }

  .project-stats {
    gap: 1rem;
    padding: 0.75rem;
  }

  .stat-number {
    font-size: 1rem;
  }

  .project-footer {
    flex-direction: column;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .project-card {
    padding: 1.25rem;
  }

  .project-header {
    gap: 0.75rem;
  }

  .project-logo {
    width: 50px;
    height: 50px;
  }

  .project-stats {
    flex-wrap: wrap;
  }
}
</style>