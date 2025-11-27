<template>
  <section class="clients-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Partners & Clients</h2>
        <p>Trusted by innovative companies and organizations</p>
      </div>

      <div class="clients-grid">
        <div class="client-logo">
          <img src="/clients/hackster.png" alt="Hackster" />
        </div>
        <div class="client-logo">
          <img src="/clients/pantacor.svg" alt="Pantacor" />
        </div>
        <div class="client-logo">
          <img src="/clients/thistle.png" alt="Thistle Technologies" />
        </div>
        <div class="client-logo">
          <img src="/clients/crunchlabs.png" alt="CrunchLabs HackPack" />
        </div>
        <div class="client-logo">
          <img src="/clients/edgeai.png" alt="Edge AI Foundation" />
        </div>
        <div class="client-logo">
          <img src="/clients/solidrun.png" alt="SolidRun" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients-section {
  padding: 4rem 0;
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
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #4a5568;
  font-size: 1.1rem;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 3rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.client-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  width: 100%;
  height: 120px;
  border: 1px solid rgba(55, 138, 139, 0.1);
}

.client-logo:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(55, 138, 139, 0.15);
}

.client-logo img {
  max-width: 180px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}

.client-logo:hover img {
  filter: grayscale(0%);
}

.membership-section {
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid rgba(55, 138, 139, 0.1);
}

.membership-text {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.membership-link {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #378a8b, #5fb3b4);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.membership-link:hover {
  background: linear-gradient(135deg, #2d6e6f, #4a9a9b);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(55, 138, 139, 0.3);
}

.edge-ai-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .clients-section {
    padding: 3rem 0;
  }

  .clients-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .client-logo {
    max-width: 300px;
    margin: 0 auto;
  }

  .container {
    padding: 0;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .clients-section {
    padding: 2rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .client-logo {
    height: 120px;
    padding: 1.5rem;
  }

  .client-logo img {
    max-width: 160px;
    max-height: 80px;
  }
}
</style>