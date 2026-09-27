export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  image: string;
  secondaryImage?: string;
  overview: string[];
  manufacturingProcess?: string[];
  features: string[];
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "acrylic-sheets",
    slug: "acrylic-sheets",
    title: "Acrylic Sheets",
    subtitle: "High-Quality Acrylic Sheet Manufacturing & Supply Across India",
    shortDescription: "Mahadev Plastic manufactures precision-engineered acrylic sheets delivering exceptional clarity, durability, and versatility for industrial, architectural, and commercial applications.",
    image: "/images/Acrylic-Sheets.jpg",
    secondaryImage: "/images/2-1.jpg",
    overview: [
      "Mahadev Plastic is a leading Acrylic Sheet Manufacturer in India, combining modern manufacturing technology, skilled workmanship, and strict quality control to create acrylic sheets that deliver exceptional clarity, strength, and finish. Every sheet is manufactured using premium grade raw materials to ensure durability, weather resistance, and dependable performance in demanding applications.",
      "As a trusted supplier across India, we cater to signage makers, interior designers, commercial fabricators, and industrial clients with tailored thicknesses, custom sheet dimensions, and reliable batch-to-batch consistency."
    ],
    manufacturingProcess: [
      "Raw Material Selection: Using virgin MMA (Methyl Methacrylate) monomers to guarantee highest optical clarity and UV stability.",
      "Precision Cell Casting & Extrusion: Uniform thickness tolerance using computerized temperature-controlled autoclaves.",
      "Quality Inspection: Rigorous stress testing, optical transparency checks, and surface scratch inspection.",
      "Protective Masking & Dispatch: Multi-layer protective film masking to safeguard sheets during transport."
    ],
    features: [
      "Superior Optical Clarity (Up to 92% Light Transmission)",
      "High Impact Resistance (10-17x stronger than standard glass)",
      "Excellent Weather & UV Resistance (Non-yellowing)",
      "Easy Fabrication, Thermoforming & Laser Cutting",
      "Lightweight (half the weight of glass for easy installation)",
      "Smooth High-Gloss Surface Finish"
    ],
    applications: [
      "Indoor & Outdoor Signage and Lightboxes",
      "Architectural Glazing & Skylights",
      "Retail Display Units & POS Merchandising",
      "Interior Wall Partitions & Decorative Panels",
      "Industrial Machine Guards & Protective Shields",
      "Custom Furniture & Lighting Fixtures"
    ],
    specifications: [
      { label: "Available Thicknesses", value: "1.5 mm to 25 mm" },
      { label: "Standard Sheet Sizes", value: "8ft x 4ft (2440 x 1220 mm), 6ft x 4ft, Custom Cuts" },
      { label: "Density", value: "1.19 g/cm³" },
      { label: "Light Transmission", value: "92% (Transparent grade)" },
      { label: "Finish", value: "High Gloss, Matte / Frosted, Textured" },
      { label: "Tolerance", value: "±5% thickness variation" }
    ]
  },
  {
    id: "acrylic-transparent-sheet",
    slug: "acrylic-transparent-sheet",
    title: "Acrylic Transparent Sheet",
    subtitle: "Crystal Clear Acrylic Sheets with Outstanding Light Transmission",
    shortDescription: "Crystal-clear transparent acrylic sheets offering superior glass-like optical clarity, weather resistance, and shatterproof durability.",
    image: "/images/Transparent-acrylic-sheet.jpg",
    secondaryImage: "/images/home1.jpg",
    overview: [
      "Mahadev Plastic is a recognized Acrylic Transparent Sheet Manufacturer in India, delivering crystal-clear PMMA sheets engineered for optimal optical performance. Our transparent acrylic sheets provide higher light transmission than traditional glass while remaining shatterproof and lightweight.",
      "Whether you require sheets for visual merchandising, protective barriers, architectural glazing, or signage faceplates, our transparent sheets guarantee flawless clarity without optical distortion."
    ],
    manufacturingProcess: [
      "Ultra-Pure Monomer Blending: Strict filtration eliminates impurities for crystal optical purity.",
      "Controlled Polymerization: Uniform molecular weight distribution prevents thermal warping.",
      "Surface Annealing: Relieves internal stresses for flawless laser cutting and edge polishing.",
      "Laser-Ready Masking: Premium PE/Kraft paper masking suitable for CNC and laser cutters."
    ],
    features: [
      "Crystal Clear Transparency (92% - 93% transmission)",
      "Half the Weight of Traditional Glass",
      "Shatterproof & High Impact Strength",
      "Exceptional UV Stability – Does not yellow in sunlight",
      "Superb Chemical & Moisture Resistance",
      "Flame-Polished or Diamond-Polished Edge Capability"
    ],
    applications: [
      "Retail Store Displays & Showcase Counters",
      "Protective Sneeze Guards & Safety Partitions",
      "Museum Displays & Art Framing",
      "Illuminated Signs & Edge-Lit LED Panels",
      "Aquarium Windows & Specialty Glazing",
      "Laboratory Enclosures & Equipment Covers"
    ],
    specifications: [
      { label: "Thickness Range", value: "1.8 mm to 30 mm" },
      { label: "Standard Size", value: "1220 x 2440 mm (4x8 ft), 2050 x 3050 mm" },
      { label: "Light Transmission", value: "93%" },
      { label: "Surface Hardness", value: "M-100 Rockwell Scale" },
      { label: "Heat Deflection Temp", value: "95°C - 100°C" },
      { label: "UV Resistance", value: "10-Year Anti-Yellowing Warranty" }
    ]
  },
  {
    id: "fluorescent-acrylic-sheet",
    slug: "fluorescent-acrylic-sheet",
    title: "Fluorescent Acrylic Sheet",
    subtitle: "Vibrant Edge-Glow Acrylic Sheets for Signage & Creative Displays",
    shortDescription: "Eye-catching fluorescent acrylic sheets with striking edge-glow luminescence under natural light and UV illumination.",
    image: "/images/Fluorescent-Acrylic-Sheet.jpg",
    secondaryImage: "/images/Fluorescent-Acrylic-Sheet-300x158.jpg",
    overview: [
      "Mahadev Plastic is a premier Fluorescent Acrylic Sheet Manufacturer in India, producing luminous sheets with vivid colors and striking edge-glow properties. Specially formulated colorants collect ambient ambient light and channel it toward the edges, creating a radiant glowing effect without electrical wiring.",
      "Ideal for high-impact point-of-sale displays, decorative branding, event decor, and modern interior lighting accents."
    ],
    features: [
      "Intense Edge-Glow Effect under Ambient & UV/Black Light",
      "Available in Neon Green, Electric Orange, Bright Red, Pink, Blue & Yellow",
      "Smooth High-Gloss Surface with Exceptional Vibrant Tint",
      "Easy to Cut, Route, Laser Engrave, and Thermoform",
      "Long-lasting Color Fastness and Fade Resistance",
      "Lightweight & Highly Durable"
    ],
    applications: [
      "Retail POP Displays & Modern Cosmetic Counters",
      "Laser Engraved Edge-Lit Signage & Brand Logos",
      "Nightclub, Bar & Hospitality Decorative Panels",
      "Futuristic Furniture Accents & Shelving",
      "Promotional Giveaways & Architectural Accents",
      "Artistic Installations & Exhibition Booths"
    ],
    specifications: [
      { label: "Available Colors", value: "Fluorescent Green, Orange, Red, Yellow, Blue, Pink" },
      { label: "Thicknesses", value: "2.0 mm, 2.8 mm, 3.0 mm, 4.0 mm, 5.0 mm, 6.0 mm" },
      { label: "Sheet Dimensions", value: "1220 x 2440 mm (4 x 8 ft), 1220 x 1830 mm" },
      { label: "Luminescence", value: "Ambient Edge-Glow & UV Active" },
      { label: "Workability", value: "Laser Cut, CNC Route, Heat Bend" }
    ]
  },
  {
    id: "mop-acrylic-sheet",
    slug: "mop-acrylic-sheet",
    title: "MOP Acrylic Sheet",
    subtitle: "Mother of Pearl Decorative Acrylic Sheets for Luxurious Interiors",
    shortDescription: "Luxurious Mother of Pearl (MOP) acrylic sheets featuring rich, iridescent pearlescent patterns for premium furniture, wall cladding, and interior decor.",
    image: "/images/MOP-Acrylic-Sheet.jpg",
    secondaryImage: "/images/ptt1-1.webp",
    overview: [
      "Mahadev Plastic manufactures exotic MOP (Mother of Pearl) Acrylic Sheets in India, offering opulent pearlescent luster and shimmering multidimensional depth. Our MOP sheets capture the iridescent beauty of natural shell while providing the structural benefits of premium cast acrylic.",
      "These sheets are a favorite choice among luxury interior decorators, high-end furniture designers, kitchen shutter manufacturers, and temple architecture artisans."
    ],
    features: [
      "Rich Iridescent Pearlescent Swirls & Multidimensional Depth",
      "Waterproof, Termite-Proof, and Chemical-Resistant",
      "Smooth High-Gloss Acrylic Finish that Won’t Fade or Peel",
      "Seamless Thermoforming and Precision Edge Beveling",
      "Wide Selection of Marble, Pearl, and Metallic Textures",
      "Easy Maintenance – Wipe Clean with Mild Soap and Water"
    ],
    applications: [
      "Modular Kitchen Cabinets & Wardrobe Shutter Cladding",
      "Temple (Mandir) Backdrops & Pooja Room Decor",
      "Luxury Wall Paneling & Hotel Reception Counters",
      "Designer Vanity Tops & Bathroom Accent Panels",
      "High-End Packaging, Jewelry Boxes & Gift Articles",
      "Boutique Signage & Elegant Trophy Bases"
    ],
    specifications: [
      { label: "Patterns / Finishes", value: "White Pearl, Gold MOP, Silver MOP, Charcoal, Custom Swirls" },
      { label: "Thickness Range", value: "2.5 mm, 3.0 mm, 4.0 mm, 5.0 mm, 6.0 mm" },
      { label: "Sheet Size", value: "8ft x 4ft (2440 x 1220 mm)" },
      { label: "Surface", value: "Glossy Pearlescent / Satin" },
      { label: "Durability", value: "100% Moisture Proof & Stain Resistant" }
    ]
  },
  {
    id: "cast-acrylic-sheet",
    slug: "cast-acrylic-sheet",
    title: "Cast Acrylic Sheet",
    subtitle: "Cell Cast Acrylic Sheets with Superior Chemical & Thermal Resistance",
    shortDescription: "Cell-cast acrylic sheets crafted for demanding industrial fabrication, high thermal stability, superior optical clarity, and precision machining.",
    image: "/images/Cast-Acrylic-Sheet.jpg",
    secondaryImage: "/images/Cast-Acrylic-Sheet-300x158.jpg",
    overview: [
      "Mahadev Plastic is a leading Cast Acrylic Sheet Manufacturer in India. Produced via the cell-casting method, our sheets offer higher molecular weight compared to extruded sheets, yielding superior chemical resistance, thermal stability, and clean laser-cutting edges without gumming.",
      "Whether machined, engraved, bonded with solvents, or thermoformed into complex three-dimensional shapes, Mahadev Plastic cast acrylic sheets deliver unmatched structural integrity."
    ],
    features: [
      "High Molecular Weight for Superior Mechanical Strength",
      "Pristine Laser Cutting with Smooth Flame-Polished Edges",
      "Outstanding Chemical Resistance to Mild Acids & Alkalis",
      "Superior Thermal Stability during Deep Draw Thermoforming",
      "Uniform Thickness Across Large Sheet Formats",
      "Excellent Outdoor Weatherability and Scratch Resistance"
    ],
    applications: [
      "Precision CNC Machining & Industrial Components",
      "Architectural Domes, Skylights & Canopy Roofs",
      "Chemical Processing Inspection Windows & Tanks",
      "Illuminated 3D Channel Letters & Architectural Signage",
      "Heavy-Duty Display Cases & Scientific Equipment",
      "Automotive & Marine Windshields"
    ],
    specifications: [
      { label: "Manufacturing Process", value: "Cell Casting (Glass Mold)" },
      { label: "Thickness Range", value: "2.0 mm to 50 mm" },
      { label: "Sheet Sizes", value: "1220 x 2440 mm, 2000 x 3000 mm" },
      { label: "Tensile Strength", value: "75 MPa" },
      { label: "Flexural Modulus", value: "3200 MPa" },
      { label: "Service Temperature", value: "-40°C to +80°C" }
    ]
  },
  {
    id: "frosted-acrylic-sheet",
    slug: "frosted-acrylic-sheet",
    title: "Frosted Acrylic Sheet",
    subtitle: "Matte Finish Acrylic Sheets for Diffused Lighting & Privacy Partitions",
    shortDescription: "Elegant frosted matte acrylic sheets engineered to eliminate glare, diffuse light softly, and provide contemporary privacy partitioning.",
    image: "/images/Frosted-Acrylic-Sheet.jpg",
    secondaryImage: "/images/frosted-acrylic-sheets-commercial-interiors-300x157.webp",
    overview: [
      "Mahadev Plastic is a trusted Frosted Acrylic Sheet Manufacturer in India, offering premium-quality matte acrylic sheets for interior design, architectural projects, office partitions, decorative panels, and illuminated lighting fixtures.",
      "Designed as a contemporary, shatterproof alternative to sandblasted or acid-etched glass, our Frosted Acrylic Sheets combine silky matte aesthetics with durability, resisting fingerprints, smudges, and surface scuffs."
    ],
    features: [
      "Velvety Matte Satin Texture (Single or Double Sided)",
      "Soft, Uniform Light Diffusion (No LED Hotspots)",
      "Fingerprint and Smudge Resistant Surface",
      "Provides Subtle Privacy without Sacrificing Natural Light",
      "High Impact Strength – 10x More Shatterproof than Glass",
      "Easily Cut, Drilled, and Thermoformed into Curved Partitions"
    ],
    applications: [
      "Office Cubicle Partitions & Privacy Dividers",
      "LED Light Diffuser Panels & Luminaires",
      "Modern Interior Doors & Cabinet Inserts",
      "Cosmetic Display Shelving & Retail Counters",
      "Backlit Architectural Wall Features",
      "Wayfinding Signboards & Menu Boards"
    ],
    specifications: [
      { label: "Surface Texture", value: "Matte Frosted / Satin finish" },
      { label: "Available Colors", value: "Frosted Clear, Opal White, Frosted Smoked, Custom Pastels" },
      { label: "Thickness Options", value: "2.0 mm to 15 mm" },
      { label: "Sheet Dimensions", value: "1220 x 2440 mm (4 x 8 ft)" },
      { label: "Light Transmission", value: "50% - 75% (Depending on opacity)" }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
