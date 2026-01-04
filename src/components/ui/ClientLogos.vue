<template>
  <section class="partners-section">
    <div class="container">
      <div class="section-header">
        <h2>Partners & Clients</h2>
      </div>

      <div class="partners-grid">
        <div class="partner-logo">
          <img src="/clients/hackster.png" alt="Hackster" />
        </div>
        <div class="partner-logo">
          <img src="/clients/pantacor.svg" alt="Pantacor" />
        </div>
        <div class="partner-logo">
          <img src="/clients/thistle.png" alt="Thistle Technologies" />
        </div>
        <div class="partner-logo">
          <img src="/clients/crunchlabs.png" alt="CrunchLabs HackPack" />
        </div>
        <div class="partner-logo">
          <img src="/clients/edgeai.png" alt="Edge AI Foundation" />
        </div>
        <div class="partner-logo">
          <img src="/clients/solidrun.png" alt="SolidRun" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  background: var(--bg-white);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--space-lg);
  align-items: center;
  justify-items: center;
}

.partner-logo {
  background: white;
  border: 2px solid var(--border);
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  transition: all 0.2s;
}

.partner-logo:hover {
  border-color: var(--teal);
  box-shadow: 4px 4px 0 var(--teal);
}

.partner-logo img {
  max-width: 140px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(30%);
  opacity: 0.8;
  transition: all 0.2s;
}

.partner-logo:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .partner-logo {
    height: 80px;
    padding: var(--space-md);
  }

  .partner-logo img {
    max-width: 100px;
    max-height: 40px;
  }
}

@media (max-width: 480px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }

  .partner-logo {
    max-width: 280px;
    margin: 0 auto;
  }
}
</style>
