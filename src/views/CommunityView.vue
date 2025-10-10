<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Developer Community</h1>
        <p class="hero-subtitle">
          Open community for developers to connect and collaborate.
        </p>
        <div class="hero-cta">
          <a href="https://discord.gg/deveco" target="_blank" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord
          </a>
          <router-link to="/projects" class="btn btn-secondary">View Projects</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Values -->
  <section class="section values-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Community Values</h2>
        <p>The principles that guide our community and ensure a positive experience for all members</p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>Safety First</h3>
          <p>Moderated spaces with clear guidelines and active community guardians to ensure a safe, welcoming environment for all developers.</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <path d="M20 8v6M23 11h-6"></path>
            </svg>
          </div>
          <h3>Authentic Connections</h3>
          <p>Real developers building genuine relationships. No spam, no bad actors - just authentic community members sharing and learning together.</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3>Global Inclusivity</h3>
          <p>Welcoming developers from all backgrounds, skill levels, and locations. Our diverse community is our greatest strength.</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <h3>Knowledge Sharing</h3>
          <p>Open collaboration and resource sharing. What helps one developer succeed helps our entire ecosystem thrive.</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </div>
          <h3>Innovation Focus</h3>
          <p>Encouraging experimentation, creativity, and cutting-edge technology exploration in a supportive environment.</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
            </svg>
          </div>
          <h3>Always Active</h3>
          <p>24/7 community presence across global time zones, ensuring you can always find active discussions and support when you need it.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Events Section -->
  <section class="section events-section">
    <div class="container">
      <div class="section-header">
        <h2>Community Events & Workshops</h2>
        <p>Regular events bringing developers together for learning, collaboration, and innovation</p>
      </div>

      <div class="events-grid">
        <div class="event-card">
          <div class="event-type">Live Streams</div>
          <h3>PROCEPTION Live</h3>
          <p>Live-streamed sessions featuring industry experts and hands-on tech demos. Explore cutting-edge technologies with guided walkthroughs and Q&A sessions.</p>
          <div class="event-schedule">
            <span>Monthly • Live on YouTube & Discord</span>
          </div>
        </div>

        <div class="event-card">
          <div class="event-type">Workshops</div>
          <h3>Developer Skills Sessions</h3>
          <p>Hands-on workshops covering everything from technical skills to community building. Learn from experienced practitioners in interactive sessions.</p>
          <div class="event-schedule">
            <span>Bi-weekly • Various Topics</span>
          </div>
        </div>

        <div class="event-card">
          <div class="event-type">Collaboration</div>
          <h3>Cross-Community Projects</h3>
          <p>Collaborative initiatives where members from different communities work together on innovative projects and challenges.</p>
          <div class="event-schedule">
            <span>Ongoing • Project-Based</span>
          </div>
        </div>

        <div class="event-card">
          <div class="event-type">Networking</div>
          <h3>Developer Meetups</h3>
          <p>Regular networking events, both virtual and in-person, designed to help developers connect, share experiences, and build lasting relationships.</p>
          <div class="event-schedule">
            <span>Weekly • Global Timezones</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Connect with Developers Worldwide?</h2>
        <p>Join our growing community and accelerate your learning journey.</p>
        <div class="cta-buttons">
          <a href="https://discord.gg/deveco" target="_blank" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.5rem;">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Our Discord
          </a>
          <router-link to="/consultancy" class="btn btn-secondary">Explore Consulting</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #378a8b 0%, #2d6e6f 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Ccircle cx='19' cy='9' r='2'/%3E%3Ccircle cx='29' cy='9' r='2'/%3E%3Ccircle cx='39' cy='9' r='2'/%3E%3Ccircle cx='49' cy='9' r='2'/%3E%3Ccircle cx='9' cy='19' r='2'/%3E%3Ccircle cx='19' cy='19' r='2'/%3E%3Ccircle cx='29' cy='19' r='2'/%3E%3Ccircle cx='39' cy='19' r='2'/%3E%3Ccircle cx='49' cy='19' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.events-section {
  background: white;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.event-card {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

.event-type {
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.event-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.event-card p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.event-schedule {
  color: #378a8b;
  font-weight: 600;
  font-size: 0.9rem;
}

.values-section {
  background: #f8fafc;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

.value-icon {
  margin-bottom: 1rem;
  color: #378a8b;
}

.value-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.value-card p {
  color: #4a5568;
  line-height: 1.6;
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

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
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
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 280px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .events-grid, .values-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .step {
    min-width: 160px;
  }
}
</style>