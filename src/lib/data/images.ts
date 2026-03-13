// ============================================
// IMAGE CONFIGURATION
// Centralized image management for easy replacement
// All images are temporary placeholders from Unsplash
// EDITABLE: Replace with actual photos when available
// ============================================

export const images = {
  // ============================================
  // LOGO
  // Official logo from /public/logo.png (transparent background)
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "Psicologo Di Base - Logo",
    width: 200,
    height: 80,
  },

  // ============================================
  // TEAM PHOTOS
  // Three women - professional, calm, approachable
  // ============================================
  team: {
    // Group photo of three women psychologists
    group: {
      // Bespoke premium team photo
      src: "/team-premium.png",
      alt: "Il team di Psicologo Di Base - tre psicologhe professioniste",
      width: 1024,
      height: 1024,
    },
    // Individual portraits - three women
    camilla: {
      // EDITABLE: Replace with actual portrait
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face",
      alt: "Ritratto della Dott.ssa Camilla, psicologa psicoterapeuta",
      width: 400,
      height: 500,
    },
    benedetta: {
      // EDITABLE: Replace with actual portrait
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&crop=face",
      alt: "Ritratto della Dott.ssa Benedetta, psicologa clinica",
      width: 400,
      height: 500,
    },
    alessandra: {
      // EDITABLE: Replace with actual portrait
      src: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=500&fit=crop&crop=face",
      alt: "Ritratto della Dott.ssa Alessandra, psicologa psicoterapeuta",
      width: 400,
      height: 500,
    },
  },

  // ============================================
  // HERO IMAGE
  // Calm, professional, atmospheric
  // ============================================
  hero: {
    // Bespoke premium hero image
    src: "/hero-premium.png",
    alt: "Ambiente professionale e accogliente per i colloqui psicologici",
    width: 1024,
    height: 1024,
  },

  // ============================================
  // SECTION IMAGES
  // Supporting visuals for key sections
  // ============================================
  sections: {
    about: {
      // Soft, contemplative image for about section
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
      alt: "Team di psicologhe professioniste",
      width: 800,
      height: 600,
    },
    services: {
      // Professional, warm environment
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      alt: "Studio psicologico professionale",
      width: 800,
      height: 600,
    },
    contact: {
      // Welcoming entrance or building
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      alt: "Ingresso dello studio",
      width: 800,
      height: 600,
    },
    process: {
      // Contemplative, journey-like
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Percorso sereno verso il benessere",
      width: 800,
      height: 600,
    },
  },

  // ============================================
  // ATMOSPHERIC IMAGES
  // Subtle, mood-setting visuals
  // ============================================
  atmospheric: {
    calm: {
      src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop",
      alt: "Atmosfera calma e serena",
      width: 600,
      height: 400,
    },
    listening: {
      src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=400&fit=crop",
      alt: "Spazio di ascolto",
      width: 600,
      height: 400,
    },
    nature: {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      alt: "Natura e serenità",
      width: 600,
      height: 400,
    },
    light: {
      src: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600&h=400&fit=crop",
      alt: "Luce naturale e benessere",
      width: 600,
      height: 400,
    },
  },
} as const;

// Image quality and sizing presets
export const imagePresets = {
  thumbnail: { width: 200, height: 200 },
  card: { width: 400, height: 300 },
  portrait: { width: 400, height: 500 },
  wide: { width: 800, height: 400 },
  hero: { width: 1920, height: 1080 },
} as const;

// Helper type for image configuration
export interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}
