<script setup lang="ts">
import ProcessVisualization from '@/components/ui/ProcessVisualization.vue'
</script>

<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Developer Relations Consulting</h1>
        <p class="hero-subtitle">
          Expert guidance to build, engage, and scale your developer community with proven strategies and innovative solutions.
        </p>
        <div class="hero-cta">
          <router-link to="/contact" class="btn btn-primary">Start Your Project</router-link>
          <a href="#services" class="btn btn-secondary">Our Services</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <ProcessVisualization />

  <!-- Services Section -->
  <section id="services" class="section services-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive developer relations solutions from strategy to execution</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <font-awesome-icon :icon="['fas', 'users']" />
          </div>
          <h3>Community Building</h3>
          <p>Create thriving developer communities.</p>
          <ul class="service-features">
            <li>Community strategy</li>
            <li>Platform setup</li>
            <li>Engagement programs</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <font-awesome-icon :icon="['fas', 'bullhorn']" />
          </div>
          <h3>Technical Marketing</h3>
          <p>Bridge technology and storytelling.</p>
          <ul class="service-features">
            <li>Content strategy</li>
            <li>Technical docs</li>
            <li>Video tutorials</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <font-awesome-icon :icon="['fas', 'rocket']" />
          </div>
          <h3>Product Adoption</h3>
          <p>Drive adoption of new technologies.</p>
          <ul class="service-features">
            <li>Onboarding design</li>
            <li>Integration guides</li>
            <li>Hackathons</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <font-awesome-icon :icon="['fas', 'lightbulb']" />
          </div>
          <h3>Training & Workshops</h3>
          <p>Empower teams with hands-on training.</p>
          <ul class="service-features">
            <li>Team training</li>
            <li>DevRel practices</li>
            <li>Strategic planning</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <font-awesome-icon :icon="['fas', 'gears']" />
          </div>
          <h3>SEO & Digital Strategy</h3>
          <p>Optimize online presence for developers.</p>
          <ul class="service-features">
            <li>Developer SEO</li>
            <li>Content optimization</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <font-awesome-icon :icon="['fas', 'handshake']" />
          </div>
          <h3>Influencer Programs</h3>
          <p>Build authentic developer advocacy.</p>
          <ul class="service-features">
            <li>Partnerships</li>
            <li>Ambassador programs</li>
            <li>Campaigns</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team" class="section team-section">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Team</h2>
        <p>Experienced professionals with decades of combined expertise in developer relations</p>
      </div>

      <div class="team-grid">
        <div class="team-member">
          <div class="member-avatar">
            <img src="/team/robert.jpg" alt="Robert Wolff" />
          </div>
          <h4>Robert Wolff</h4>
          <p class="member-title">Founder & Partner</p>
          <p class="member-bio">
            Robert is a developer advocate and community strategist with a decade of experience building and scaling developer ecosystems.
            As the founder of DevEco Consulting, he's helped companies connect with developers through authentic storytelling, content, and hands-on engagement.
            Previously at Arm, he led developer programs, community growth, and global advocacy initiatives.
            Robert is passionate about open source, collaboration, and helping technology teams connect with the people who build the future.
          </p>
          <div class="member-expertise">
            <span class="expertise-tag">Developer Advocacy</span>
            <span class="expertise-tag">Community Strategy</span>
            <span class="expertise-tag">Open Source</span>
          </div>
        </div>

        <div class="team-member">
          <div class="member-avatar">
            <img src="/team/tory.jpg" alt="Tory Moghadam" />
          </div>
          <h4>Tory (TURFPTAx) Moghadam</h4>
          <p class="member-title">Partner</p>
          <p class="member-bio">
            Tory is an embedded systems and AI engineer with deep experience in compliance, cybersecurity, and large-scale technical systems.
            As Lead AI Engineer at Be Well Health, he designs secure, scalable AI solutions for healthcare.
            He's also the founder of OpenMuscle, an open-source initiative advancing prosthetic sensor technology.
            A partner at DevEco Consulting, Tory combines rigorous technical insight with a passion for accessibility, open hardware, and applied AI innovation.
          </p>
          <div class="member-expertise">
            <span class="expertise-tag">AI Engineering</span>
            <span class="expertise-tag">Embedded Systems</span>
            <span class="expertise-tag">Cybersecurity</span>
          </div>
        </div>

        <div class="team-member">
          <div class="member-avatar">
            <img src="/team/moheeb.jpg" alt="Moheeb Zara" />
          </div>
          <h4>Moheeb Zara</h4>
          <p class="member-title">Partner</p>
          <p class="member-bio">
            Moheeb is a developer relations engineer, creative technologist, and founder of LumenCanvas, a browser-native projection mapping platform.
            With over a decade of experience spanning art, robotics, and open-source software, he's worked with companies like AWS, SignalWire, and SORACOM
            to bring complex technologies to life through content, demos, and community.
            As a partner at DevEco Consulting, Moheeb leads development on creative tools and developer-focused projects that blend art and engineering.
          </p>
          <div class="member-expertise">
            <span class="expertise-tag">Creative Technology</span>
            <span class="expertise-tag">Developer Relations</span>
            <span class="expertise-tag">Open Source</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Build Your Developer Community?</h2>
        <p>Let's discuss your goals and create a strategy that drives real results for your developer ecosystem.</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="btn btn-primary">Start a Conversation</router-link>
          <router-link to="/community" class="btn btn-secondary">Explore Our Community</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.services-section {
  background: #f8fafc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
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
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(55, 138, 139, 0.15);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.service-card p {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  color: #4a5568;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(55, 138, 139, 0.1);
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.service-features li::before {
  content: '';
  position: absolute;
  left: 0;
  width: 12px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23378a8b' stroke-width='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpolyline points='20,6 9,17 4,12'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  top: 50%;
  transform: translateY(-50%);
}

.team-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

.member-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}

.team-member h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.member-title {
  color: #378a8b;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.member-bio {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
}

.member-expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.expertise-tag {
  background: rgba(55, 138, 139, 0.1);
  color: #378a8b;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
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

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 2rem;
  }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 2rem;
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
  }
}
</style>