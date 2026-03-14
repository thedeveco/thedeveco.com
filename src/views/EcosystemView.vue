<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="label">A High-Integrity Network</p>
          <h1>Explore Our Ecosystem</h1>
          <p class="hero-subtitle">
            The people, partners, and communities that make devEco thrive.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Ecosystem Sections -->
  <section
    v-for="section in sections"
    :key="section.category"
    class="ecosystem-section"
    :class="section.category"
  >
    <div class="container">
      <div class="section-header">
        <h2>{{ section.title }}</h2>
        <p class="section-description">{{ section.description }}</p>
      </div>

      <div class="ecosystem-grid">
        <EcosystemTile
          v-for="listing in section.listings"
          :key="listing.id"
          v-bind="listing"
          @select="openModal(listing)"
        />
      </div>
    </div>
  </section>

  <!-- Detail Modal -->
  <EcosystemModal
    v-if="selectedListing"
    :visible="modalOpen"
    v-bind="selectedListing"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import EcosystemTile from '@/components/ui/EcosystemTile.vue'
import EcosystemModal from '@/components/ui/EcosystemModal.vue'

export interface EcosystemListing {
  id: string
  name: string
  logo?: string
  category: 'partner' | 'support' | 'client' | 'collaborator'
  shortDescription: string
  tags?: string[]
  longDescription?: string
  website?: string
  socialLinks?: { platform: string; url: string }[]
  highlights?: string[]
  featured?: boolean
}

export interface EcosystemSection {
  title: string
  description: string
  category: 'partner' | 'support' | 'client' | 'collaborator'
  listings: EcosystemListing[]
}

const listings: EcosystemListing[] = [
  // Partners
  {
    id: 'edge-ai-foundation',
    name: 'Edge AI Foundation',
    logo: '/clients/edgeai.png',
    category: 'partner',
    shortDescription: 'Advancing edge AI adoption through open standards, community building, and developer education.',
    tags: ['Edge AI', 'Open Standards', 'Developer Education'],
    longDescription: 'The Edge AI Foundation is dedicated to accelerating the adoption of AI at the edge through open standards, collaborative research, and developer education. As a founding partner, devEco works closely with the foundation to build developer programs, create educational content, and foster a global community of edge AI practitioners.',
    website: 'https://edgeai.foundation',
    highlights: [
      'Founding partner and community advisor',
      'Co-developed edge AI developer curriculum',
      'Organized global edge AI hackathon series'
    ]
  },
  {
    id: 'iot-stars',
    name: 'IoT Stars',
    logo: '/clients/iotstars.png',
    category: 'partner',
    shortDescription: 'Community of IoT professionals connecting at key industry events for honest conversations about IoT, embedded, and Edge AI.',
    tags: ['IoT', 'Community Events', 'Edge AI'],
    longDescription: 'IoT Stars brings together a diverse community of IoT professionals — from pioneering startups and open source initiatives to corporate leaders and technology foundations. Through curated events at Embedded World, Electronica, and MWC, IoT Stars facilitates C-level conversations about the future of IoT, connectivity, and business models. devEco partners with IoT Stars on community programming and event coordination.',
    website: 'https://www.iotstars.com',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/iotstars/' },
      { platform: 'Twitter', url: 'https://x.com/iotstars' }
    ],
    highlights: [
      'Event partnerships at Embedded World and Electronica',
      'IoT community networking and developer outreach',
      'The IoT Show podcast collaboration'
    ]
  },
  {
    id: 'advanced-solutions-nederland',
    name: 'Advanced Solutions Nederland',
    category: 'partner',
    shortDescription: 'Hi-tech design consultancy specializing in DSP algorithms, AIoT edge solutions, and smart sensor signal processing.',
    tags: ['DSP', 'AIoT', 'Biomedical'],
    longDescription: 'Advanced Solutions Nederland (ASN) is an international leader in innovative AIoT edge algorithmic solutions for Industry 4.0, smart buildings, and biomedical applications. Founded in 2006, ASN specializes in digital signal processing algorithms, data analytics, and consultancy — with products like the ASN Filter Designer that cuts embedded development costs by up to 75%. As an Arm DSP knowledge partner, ASN serves clients including Bosch and Siemens across automotive, aerospace, and medical industries.',
    website: 'https://www.advsolned.com',
    highlights: [
      'Arm DSP core team knowledge partner',
      'ASN Filter Designer for embedded AIoT development',
      'Real-time heart arrhythmia detection on Arm Cortex-M'
    ]
  },

  // Support
  {
    id: 'whitney-knitter',
    name: 'Whitney Knitter',
    category: 'support',
    shortDescription: 'FPGA engineer and content creator producing tutorials on embedded systems and hardware design.',
    tags: ['FPGA', 'Content Creator', 'Hardware'],
    longDescription: 'Whitney Knitter is an FPGA engineer and prolific content creator known for her accessible tutorials on embedded systems, hardware design, and FPGA development. devEco supports Whitney through content amplification, sponsorship coordination, and community platform access to help her reach a broader audience of hardware developers.',
    website: 'https://www.hackster.io/whitney-knitter',
    socialLinks: [
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'GitHub', url: 'https://github.com' }
    ],
    highlights: [
      'Featured content creator in devEco community streams',
      'Hardware workshop series co-organizer',
      'Open source FPGA project contributor'
    ]
  },
  {
    id: 'dr-jon-ea',
    name: 'Dr Jon EA',
    category: 'support',
    shortDescription: 'YouTuber, trainer, and consultant building robotics projects with Raspberry Pi Pico, ROS2, and FreeRTOS.',
    tags: ['Robotics', 'Raspberry Pi', 'Content Creator'],
    longDescription: 'Dr Jon EA is the maker persona of Dr. Jon Durant, who pivoted from decades in enterprise IT architecture to hands-on embedded systems and community-driven content creation. He produces tutorials and builds on Raspberry Pi Pico, FreeRTOS, and ROS2 — including his Star Wars-inspired RexP1 droid and the DIY Dev Droid platform. devEco supports Dr Jon EA through community platform access and collaborative streaming.',
    website: 'https://drjonea.co.uk',
    socialLinks: [
      { platform: 'YouTube', url: 'https://www.youtube.com/@DrJonEA' },
      { platform: 'GitHub', url: 'https://github.com/DrJonEA' }
    ],
    highlights: [
      'FreeRTOS on Raspberry Pi Pico course series',
      'RexP1 droid build with ROS2 and MicroROS',
      'Active devEco Discord community member'
    ]
  },
  {
    id: 'sean-hodgins',
    name: 'Sean Hodgins',
    category: 'support',
    shortDescription: 'Engineer, filmmaker, and open source maker creating custom PCB projects and sharing the build process with 160k+ subscribers.',
    tags: ['Open Source', 'PCB Design', 'Maker'],
    longDescription: 'Sean Hodgins is a Canadian engineer, filmmaker, and maker who designs open source electronics and custom circuit boards. His projects range from volumetric displays with stacked transparent OLEDs to self-balancing robots powered by neural networks. Sean shares every build through detailed videos and open source files, driven by a belief that knowledge should be free and accessible to everyone.',
    website: 'https://www.seanhodgins.com',
    socialLinks: [
      { platform: 'YouTube', url: 'https://www.youtube.com/@SeanHodgins' },
      { platform: 'GitHub', url: 'https://github.com/seanhodgins' }
    ],
    highlights: [
      'Open source PCB designs and build documentation',
      'Volumetric display and self-balancing robot projects',
      '160k+ YouTube subscribers in maker education'
    ]
  },

  // Clients
  {
    id: 'atym',
    name: 'Atym',
    logo: '/clients/atym.png',
    category: 'client',
    shortDescription: 'Edge computing platform enabling secure, scalable deployment of AI workloads at the network edge.',
    tags: ['Edge Computing', 'AI', 'Platform'],
    longDescription: 'Atym provides an edge computing platform that enables organizations to securely deploy and manage AI workloads at the network edge. devEco provides developer relations consulting to Atym, including developer experience audits, content strategy, and community building to accelerate platform adoption among edge computing developers.',
    website: 'https://www.atym.io',
    highlights: [
      'Developer experience audit and recommendations',
      'Technical content strategy and execution',
      'Community launch and growth program'
    ]
  },
  {
    id: 'solidrun',
    name: 'SolidRun',
    logo: '/clients/solidrun.png',
    category: 'client',
    shortDescription: 'Hardware manufacturer specializing in high-performance embedded computing and networking solutions.',
    tags: ['Hardware', 'Embedded', 'Networking'],
    longDescription: 'SolidRun designs and manufactures high-performance embedded computing and networking hardware used in enterprise, edge, and IoT applications. devEco works with SolidRun on developer outreach, technical documentation, and community engagement to grow their developer ecosystem and drive adoption of their hardware platforms.',
    website: 'https://www.solid-run.com',
    highlights: [
      'Developer outreach and advocacy programs',
      'Technical documentation overhaul',
      'Community engagement strategy'
    ]
  },
  {
    id: 'crunchlabs',
    name: 'CrunchLabs',
    logo: '/clients/crunchlabs.png',
    category: 'client',
    shortDescription: 'STEM education company founded by former NASA engineer Mark Rober, teaching kids to think like engineers through hands-on build kits.',
    tags: ['STEM Education', 'Engineering Kits', 'Youth'],
    longDescription: 'CrunchLabs is an educational STEM company founded by Mark Rober, a former NASA engineer who worked on the Curiosity Mars Rover and now reaches over 68 million YouTube subscribers. Through subscription build kits like Build Box, Hack Pack, and Creative Kit, CrunchLabs teaches kids ages 6–13 to think like engineers with hands-on projects paired with video explanations of the science behind each build.',
    website: 'https://www.crunchlabs.com',
    highlights: [
      'Founded by former NASA engineer Mark Rober',
      'Subscription STEM kits for ages 6–13',
      '98% of parents report positive impact on child development'
    ]
  },

  // Collaborators
  {
    id: 'hackster',
    name: 'Hackster.io',
    logo: '/clients/hackster.png',
    category: 'collaborator',
    shortDescription: 'Global community platform for hardware and IoT developers to share projects and learn together.',
    tags: ['Community Platform', 'Hardware', 'IoT'],
    longDescription: 'Hackster.io is the world\'s largest community for hardware and IoT developers, hosting millions of projects and tutorials. devEco collaborates with Hackster on content programs, hackathon coordination, and community cross-pollination to connect developers across platforms and amplify project visibility.',
    website: 'https://www.hackster.io',
    highlights: [
      'Joint hackathon and contest coordination',
      'Content cross-promotion programs',
      'Community event co-hosting'
    ]
  },
  {
    id: 'pantacor',
    name: 'Pantacor',
    logo: '/clients/pantacor.svg',
    category: 'collaborator',
    shortDescription: 'Linux container-based device management platform for IoT and embedded systems.',
    tags: ['Linux', 'Containers', 'Device Management'],
    longDescription: 'Pantacor provides a Linux container-based device management platform that simplifies the deployment, updating, and management of IoT and embedded devices. devEco works with Pantacor on developer tooling advocacy, technical content creation, and community outreach to grow adoption among embedded Linux developers.',
    website: 'https://www.pantacor.com',
    highlights: [
      'Developer tooling advocacy and demos',
      'Technical content and tutorial creation',
      'Embedded Linux community outreach'
    ]
  },
  {
    id: 'thistle',
    name: 'Thistle Technologies',
    logo: '/clients/thistle.png',
    category: 'collaborator',
    shortDescription: 'Security platform providing over-the-air update infrastructure for IoT and embedded devices.',
    tags: ['Security', 'OTA Updates', 'IoT'],
    longDescription: 'Thistle Technologies builds security infrastructure for IoT and embedded devices, specializing in secure over-the-air update delivery. devEco collaborates with Thistle on developer education, security-focused content, and community engagement to promote best practices in embedded device security.',
    website: 'https://www.thistle.tech',
    highlights: [
      'Security-focused developer education content',
      'IoT security best practices workshops',
      'Community engagement and developer outreach'
    ]
  }
]

const sections = computed<EcosystemSection[]>(() => [
  {
    title: 'We Are Partnered With',
    description: 'Strategic alliances and foundation partnerships that drive innovation across the developer ecosystem.',
    category: 'partner',
    listings: listings.filter(l => l.category === 'partner')
  },
  {
    title: 'We Support',
    description: 'Content creators, open source maintainers, and community leaders we champion and amplify.',
    category: 'support',
    listings: listings.filter(l => l.category === 'support')
  },
  {
    title: 'We Serve',
    description: 'Companies and organizations we provide developer relations consulting and community strategy to.',
    category: 'client',
    listings: listings.filter(l => l.category === 'client')
  },
  {
    title: 'We Have Worked With',
    description: 'Technology platforms, tool providers, and communities we integrate and collaborate with.',
    category: 'collaborator',
    listings: listings.filter(l => l.category === 'collaborator')
  }
])

const modalOpen = ref(false)
const selectedListing = ref<EcosystemListing | null>(null)

const openModal = (listing: EcosystemListing) => {
  selectedListing.value = listing
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}
</script>

<style scoped>
.hero {
  background: var(--navy);
  color: white;
  padding: var(--space-2xl) 0;
}

.hero-inner {
  max-width: 640px;
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
}

/* Ecosystem Sections */
.ecosystem-section {
  padding: var(--space-2xl) 0;
}

.ecosystem-section:nth-child(odd) {
  background: var(--bg-light);
}

.ecosystem-section:nth-child(even) {
  background: var(--bg-white);
}

.section-description {
  color: var(--text-mid);
  margin-top: var(--space-sm);
  max-width: 600px;
}

.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

@media (max-width: 900px) {
  .ecosystem-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .ecosystem-grid {
    grid-template-columns: 1fr;
  }
}
</style>
