<template>
  <section class="partners-section">
    <div class="container">
      <div class="section-header">
        <h2>Partners & Clients</h2>
      </div>

      <div class="partners-grid">
        <a href="https://www.hackster.io/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/hackster.png" alt="Hackster" />
        </a>
        <a href="https://pantacor.com/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/pantacor.svg" alt="Pantacor" />
        </a>
        <a href="https://thistle.tech/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/thistle.png" alt="Thistle Technologies" />
        </a>
        <a href="https://www.crunchlabs.com/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/crunchlabs.png" alt="CrunchLabs" />
        </a>
        <a href="https://www.edgeaifoundation.org/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/edgeai.png" alt="Edge AI Foundation" />
        </a>
        <a href="https://www.solid-run.com/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/solidrun.png" alt="SolidRun" />
        </a>
        <a href="https://openmv.io/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/OpenMV.png" alt="OpenMV" />
        </a>
        <a href="https://www.atym.io/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/atym.png" alt="Atym" />
        </a>
        <a href="https://beagleboard.org/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/bb-social-image.png" alt="BeagleBoard" />
        </a>
        <a href="https://www.deltaroboticsinc.com/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/deltarobotics.png" alt="Delta Robotics" />
        </a>
        <a href="https://workswithriscv.net/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/riscv.png" alt="RISC-V" />
        </a>
        <a href="https://source.network/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/source.png" alt="Source" />
        </a>
        <a href="https://opensauce.com/" target="_blank" rel="noopener" class="partner-logo">
          <img src="/clients/Open_Sauce_Logo_1.png" alt="Open Sauce" />
        </a>
        <a href="https://www.crunchlabs.com/products/hack-pack-subscription?product-handle=hack-pack-subscription-pay-annually" target="_blank" rel="noopener" class="partner-logo dark-bg">
          <img src="/clients/CrunchLabs_Logo_HackPack-03.png" alt="CrunchLabs HackPack" />
        </a>
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
  text-decoration: none;
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

.partner-logo.dark-bg {
  background: var(--navy);
}

.partner-logo.dark-bg img {
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
