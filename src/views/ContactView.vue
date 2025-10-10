<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Let's Start a Conversation</h1>
        <p class="hero-subtitle">
          Ready to transform your developer ecosystem? Get in touch with our team to discuss your goals and explore how we can help.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Options -->
  <section class="section contact-options-section">
    <div class="container">
      <div class="contact-options-grid">
        <div class="contact-option primary">
          <div class="contact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3>Email Us</h3>
          <p>The fastest way to reach our team for detailed discussions about your project needs.</p>
          <a href="mailto:hello@thedeveco.com" class="contact-cta">
            hello@thedeveco.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </a>
        </div>

        <div class="contact-option">
          <div class="contact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </div>
          <h3>Join Our Discord</h3>
          <p>Connect with our community and team members for informal conversations and quick questions.</p>
          <a href="https://discord.gg/deveco" target="_blank" class="contact-cta">
            Join Discord Server
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </a>
        </div>

        <div class="contact-option">
          <div class="contact-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <h3>LinkedIn</h3>
          <p>Follow our company page and connect with our team members for professional networking.</p>
          <a href="https://linkedin.com/company/deveco-consulting" target="_blank" class="contact-cta">
            Connect on LinkedIn
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="section contact-form-section">
    <div class="container">
      <div class="form-container">
        <div class="form-header">
          <h2>Tell Us About Your Project</h2>
          <p>Share details about your goals and we'll get back to you within 24 hours</p>
        </div>

        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Name *</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Your full name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="your.email@company.com"
              />
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                placeholder="Your company name"
              />
            </div>

            <div class="form-group">
              <label for="role">Role</label>
              <input
                type="text"
                id="role"
                v-model="form.role"
                placeholder="e.g., Developer Relations, Engineering Manager"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="service">How can we help? *</label>
            <select id="service" v-model="form.service" required>
              <option value="">Select a service</option>
              <option value="consultancy">Developer Relations Consulting</option>
              <option value="community-building">Community Building & Strategy</option>
              <option value="technical-marketing">Technical Marketing & Content</option>
              <option value="product-adoption">Product Adoption Programs</option>
              <option value="training">Training & Workshops</option>
              <option value="portal-network">Portal Network Integration</option>
              <option value="launchcue">LaunchCue CRM Access</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>

          <div class="form-group">
            <label for="timeline">Project Timeline</label>
            <select id="timeline" v-model="form.timeline">
              <option value="">Select timeframe</option>
              <option value="immediate">Immediate (within 2 weeks)</option>
              <option value="short-term">Short-term (1-3 months)</option>
              <option value="medium-term">Medium-term (3-6 months)</option>
              <option value="long-term">Long-term (6+ months)</option>
              <option value="ongoing">Ongoing relationship</option>
            </select>
          </div>

          <div class="form-group">
            <label for="budget">Budget Range</label>
            <select id="budget" v-model="form.budget">
              <option value="">Select budget range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
              <option value="discuss">Prefer to discuss</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label for="message">Project Details *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              placeholder="Tell us about your current challenges, goals, and what you're hoping to achieve. The more detail you provide, the better we can help you."
            ></textarea>
          </div>

          <div class="form-group full-width">
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.subscribe" />
              <span class="checkmark"></span>
              Subscribe to our newsletter for developer relations insights and community updates
            </label>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>
            <p class="form-note">We'll respond within 24 hours during business days</p>
          </div>
        </form>

        <div v-if="showSuccess" class="success-message">
          <div class="success-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
          </div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for reaching out. We'll get back to you within 24 hours during business days.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section faq-section">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers to common questions about working with The DevEco</p>
      </div>

      <div class="faq-grid">
        <div class="faq-item">
          <h3>How do you typically structure consulting engagements?</h3>
          <p>We offer flexible engagement models including project-based work, ongoing retainers, and strategic partnerships. Most projects start with a discovery phase to understand your goals and current state, followed by strategy development and implementation support.</p>
        </div>

        <div class="faq-item">
          <h3>What makes DevEco different from other DevRel consultancies?</h3>
          <p>We're practitioners who actively manage our own developer communities through Portal Network and B3VY. This hands-on experience, combined with our innovative tools and proven frameworks, gives us unique insights into what actually works in community building.</p>
        </div>

        <div class="faq-item">
          <h3>Can you help us join the Portal Network?</h3>
          <p>Absolutely! We help communities integrate with Portal Network through our vetting process. Our Portal Guardians review each community to ensure quality and alignment with our network values before connection.</p>
        </div>

        <div class="faq-item">
          <h3>What types of companies do you work with?</h3>
          <p>We work with organizations of all sizes, from startups launching their first developer programs to Fortune 500 companies scaling existing communities. Our clients span technology companies, hardware manufacturers, API providers, and developer tool creators.</p>
        </div>

        <div class="faq-item">
          <h3>How do you measure success in DevRel initiatives?</h3>
          <p>We establish clear KPIs upfront, typically including community growth, engagement rates, developer adoption metrics, content performance, and business impact measures. Our LaunchCue platform helps track these metrics throughout the engagement.</p>
        </div>

        <div class="faq-item">
          <h3>Do you provide ongoing support after project completion?</h3>
          <p>Yes, we offer various ongoing support options including monthly check-ins, community health audits, strategy reviews, and access to our network of communities for continued collaboration and learning.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Office Hours -->
  <section class="section office-hours-section">
    <div class="container">
      <div class="office-hours-content">
        <h2>Virtual Office Hours</h2>
        <p>Join our weekly virtual office hours for informal Q&A sessions with our team</p>

        <div class="office-hours-details">
          <div class="office-hours-item">
            <span class="office-hours-label">When:</span>
            <span class="office-hours-value">Fridays, 2:00 PM - 3:00 PM EST</span>
          </div>
          <div class="office-hours-item">
            <span class="office-hours-label">Where:</span>
            <span class="office-hours-value">DevEco Discord Server</span>
          </div>
          <div class="office-hours-item">
            <span class="office-hours-label">Format:</span>
            <span class="office-hours-value">Open discussion, no appointment needed</span>
          </div>
        </div>

        <a href="https://discord.gg/deveco" target="_blank" class="btn btn-primary">
          Join Office Hours
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  role: '',
  service: '',
  timeline: '',
  budget: '',
  message: '',
  subscribe: false
})

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission (replace with actual API call)
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    form.name = ''
    form.email = ''
    form.company = ''
    form.role = ''
    form.service = ''
    form.timeline = ''
    form.budget = ''
    form.message = ''
    form.subscribe = false

    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #378a8b 0%, #2d6e6f 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
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

.contact-options-section {
  background: white;
  padding: 3rem 0;
}

.contact-options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-option {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
}

.contact-option.primary {
  border: 2px solid #378a8b;
  transform: scale(1.02);
}

.contact-option:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(55, 138, 139, 0.15);
}

.contact-option.primary:hover {
  transform: scale(1.02) translateY(-8px);
}

.contact-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 1.5rem;
}

.contact-option h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.contact-option p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #378a8b;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-cta:hover {
  color: #2d6e6f;
  transform: translateX(4px);
}

.contact-form-section {
  background: #f8fafc;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.form-header p {
  color: #4a5568;
  font-size: 1.1rem;
}

.contact-form {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.1);
  border: 1px solid rgba(55, 138, 139, 0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  color: #2d3748;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #378a8b;
  box-shadow: 0 0 0 3px rgba(55, 138, 139, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.95rem;
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark {
  background: #378a8b;
  border-color: #378a8b;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background-image: url("data:image/svg+xml,%3csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpolyline points='20,6 9,17 4,12'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.form-actions .btn {
  margin-bottom: 1rem;
}

.form-note {
  color: #4a5568;
  font-size: 0.9rem;
}

.success-message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #378a8b;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.success-message h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.success-message p {
  color: #4a5568;
  line-height: 1.6;
}

.faq-section {
  background: white;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(55, 138, 139, 0.1);
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(55, 138, 139, 0.15);
}

.faq-item h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.faq-item p {
  color: #4a5568;
  line-height: 1.6;
}

.office-hours-section {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  text-align: center;
}

.office-hours-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.office-hours-content p {
  color: #e2e8f0;
  margin-bottom: 2rem;
}

.office-hours-details {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.office-hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.office-hours-item:last-child {
  border-bottom: none;
}

.office-hours-label {
  font-weight: 600;
  color: #e2e8f0;
}

.office-hours-value {
  color: white;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .contact-option.primary {
    transform: none;
  }

  .contact-option.primary:hover {
    transform: translateY(-8px);
  }
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

  .contact-options-grid {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 2rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .office-hours-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>