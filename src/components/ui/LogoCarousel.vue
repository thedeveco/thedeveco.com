<script setup lang="ts">
const logos = [
  { href: 'https://www.hackster.io/', src: '/clients/hackster.png', alt: 'Hackster', darkBg: false },
  { href: 'https://pantacor.com/', src: '/clients/pantacor.svg', alt: 'Pantacor', darkBg: false },
  { href: 'https://thistle.tech/', src: '/clients/thistle.png', alt: 'Thistle Technologies', darkBg: false },
  { href: 'https://www.crunchlabs.com/', src: '/clients/crunchlabs.png', alt: 'CrunchLabs', darkBg: false },
  { href: 'https://www.edgeaifoundation.org/', src: '/clients/edgeai.png', alt: 'Edge AI Foundation', darkBg: false },
  { href: 'https://www.solid-run.com/', src: '/clients/solidrun.png', alt: 'SolidRun', darkBg: false },
  { href: 'https://openmv.io/', src: '/clients/OpenMV.png', alt: 'OpenMV', darkBg: false },
  { href: 'https://www.atym.io/', src: '/clients/atym.png', alt: 'Atym', darkBg: false },
  { href: 'https://beagleboard.org/', src: '/clients/bb-social-image.png', alt: 'BeagleBoard', darkBg: false },
  { href: 'https://www.deltaroboticsinc.com/', src: '/clients/deltarobotics.png', alt: 'Delta Robotics', darkBg: false },
  { href: 'https://workswithriscv.net/', src: '/clients/riscv.png', alt: 'RISC-V', darkBg: false },
  { href: 'https://source.network/', src: '/clients/source.png', alt: 'Source', darkBg: false },
  { href: 'https://opensauce.com/', src: '/clients/Open_Sauce_Logo_1.png', alt: 'Open Sauce', darkBg: false },
  { href: 'https://www.crunchlabs.com/products/hack-pack-subscription', src: '/clients/CrunchLabs_Logo_HackPack-03.png', alt: 'CrunchLabs HackPack', darkBg: true },
]
</script>

<template>
  <section class="carousel-section">
    <div class="carousel-track-wrapper">
      <div class="carousel-track">
        <a
          v-for="logo in logos"
          :key="'a-' + logo.alt"
          :href="logo.href"
          target="_blank"
          rel="noopener noreferrer"
          class="carousel-logo"
          :class="{ 'dark-bg': logo.darkBg }"
        >
          <img :src="logo.src" :alt="logo.alt" />
        </a>
        <a
          v-for="logo in logos"
          :key="'b-' + logo.alt"
          :href="logo.href"
          target="_blank"
          rel="noopener noreferrer"
          class="carousel-logo"
          :class="{ 'dark-bg': logo.darkBg }"
          aria-hidden="true"
        >
          <img :src="logo.src" :alt="logo.alt" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-section {
  background: var(--bg-white);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  padding: var(--space-lg) 0;
  overflow: hidden;
}

.carousel-track-wrapper {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: var(--space-xl);
  width: max-content;
  animation: scroll 35s linear infinite;
}

.carousel-section:hover .carousel-track {
  animation-play-state: paused;
}

.carousel-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 var(--space-md);
  text-decoration: none;
  transition: opacity 0.2s;
}

.carousel-logo img {
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: grayscale(30%);
  opacity: 0.7;
  transition: all 0.2s;
}

.carousel-logo:hover img {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

.carousel-logo.dark-bg {
  background: var(--navy);
  padding: var(--space-xs) var(--space-md);
}

.carousel-logo.dark-bg img {
  filter: grayscale(0%);
  opacity: 0.9;
}

.carousel-logo.dark-bg:hover img {
  opacity: 1;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .carousel-section {
    padding: var(--space-md) 0;
  }

  .carousel-logo {
    height: 40px;
  }

  .carousel-logo img {
    height: 30px;
  }

  .carousel-track {
    gap: var(--space-lg);
  }
}
</style>
