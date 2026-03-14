<template>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="label">Our Network</p>
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
    id: 'arm-developer',
    name: 'Arm Developer Program',
    category: 'partner',
    shortDescription: 'Strategic partnership supporting Arm ecosystem developer relations and community growth.',
    tags: ['Semiconductors', 'IoT', 'Developer Programs'],
    longDescription: 'The Arm Developer Program provides tools, resources, and community for millions of developers building on Arm architecture. devEco has partnered with Arm to scale developer advocacy efforts, build community engagement programs, and create technical content that drives adoption across embedded, IoT, and edge computing markets.',
    website: 'https://developer.arm.com',
    highlights: [
      'Led developer advocacy across embedded and IoT verticals',
      'Built community engagement programs reaching 50k+ developers',
      'Created technical content strategy for Arm developer portal'
    ]
  },
  {
    id: 'linaro',
    name: 'Linaro',
    category: 'partner',
    shortDescription: 'Collaborative engineering organization driving open source software on Arm architecture.',
    tags: ['Open Source', 'Arm', 'Linux'],
    longDescription: 'Linaro is a collaborative engineering organization that brings together the Linux community and semiconductor companies to work on key open source projects. devEco partners with Linaro on developer outreach, event coordination, and community strategy to strengthen the open source Arm ecosystem.',
    website: 'https://www.linaro.org',
    highlights: [
      'Developer outreach and event coordination',
      'Community strategy consulting',
      'Open source advocacy programs'
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
    id: 'explaining-computers',
    name: 'ExplainingComputers',
    category: 'support',
    shortDescription: 'YouTube channel dedicated to exploring computing hardware, single-board computers, and emerging tech.',
    tags: ['YouTube', 'Education', 'Hardware Reviews'],
    longDescription: 'ExplainingComputers is a popular YouTube channel run by Christopher Barnatt, covering computing hardware, single-board computers, 3D printing, and emerging technologies. devEco supports the channel through community collaboration, hardware access programs, and cross-promotion to connect audiences with hands-on learning opportunities.',
    website: 'https://www.youtube.com/@ExplainingComputers',
    socialLinks: [
      { platform: 'YouTube', url: 'https://www.youtube.com/@ExplainingComputers' }
    ],
    highlights: [
      'Community collaboration on hardware education',
      'Cross-promotion for developer learning content',
      '500k+ subscriber reach in developer education'
    ]
  },
  {
    id: 'jeff-geerling',
    name: 'Jeff Geerling',
    category: 'support',
    shortDescription: 'DevOps engineer and content creator known for Raspberry Pi, Ansible, and Kubernetes content.',
    tags: ['DevOps', 'Raspberry Pi', 'Open Source'],
    longDescription: 'Jeff Geerling is a DevOps engineer, author, and content creator widely recognized for his work with Raspberry Pi, Ansible, Kubernetes, and Linux. devEco supports Jeff through community integration, event participation, and collaborative projects that bridge the gap between hobbyist and enterprise developer audiences.',
    website: 'https://www.jeffgeerling.com',
    socialLinks: [
      { platform: 'YouTube', url: 'https://www.youtube.com/@JeffGeerling' },
      { platform: 'GitHub', url: 'https://github.com/geerlingguy' }
    ],
    highlights: [
      'Collaborative community streaming events',
      'Open source infrastructure project advocacy',
      '1M+ subscriber reach in DevOps education'
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
    id: 'ao-electric',
    name: 'A&O Electric',
    category: 'client',
    shortDescription: 'Smart energy solutions company building connected devices for commercial and residential markets.',
    tags: ['Energy', 'IoT', 'Smart Devices'],
    longDescription: 'A&O Electric develops smart energy solutions and connected devices for commercial and residential markets. devEco provides developer relations support including API documentation, developer onboarding flows, and integration partner programs to help A&O Electric build a thriving developer ecosystem around their energy platform.',
    highlights: [
      'API documentation and developer portal design',
      'Developer onboarding flow optimization',
      'Integration partner program launch'
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
    title: 'We Work With',
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
