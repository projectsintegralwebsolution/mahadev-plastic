/**
 * Comprehensive SEO Dictionary for Mahadev Plastic (Phase 1)
 * Tailored for B2B Industrial Manufacturing & Enquiry-Based Architecture
 */

export interface PageSeoConfig {
  focusKeyword: string;
  supportiveKeywords: {
    highVolume: string[];
    mediumVolume: string[];
    longTail: string[];
  };
  title: string;
  description: string;
  canonicalUrl: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    image: string;
    type: "website" | "article";
  };
  aiOverviewHook: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductSeoConfig extends PageSeoConfig {
  sku: string;
  mpn: string;
  priceRange: {
    low: string;
    high: string;
  };
  faqs: ProductFaq[];
  relatedProducts: { title: string; slug: string; description: string }[];
}

export const SITE_URL = "https://mahadevplastic.com";

export const PHASE_ONE_SEO: Record<string, PageSeoConfig> = {
  home: {
    focusKeyword: "Acrylic Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheet manufacturer in India",
        "acrylic sheets India",
        "acrylic plastic sheet price",
      ],
      mediumVolume: [
        "acrylic sheet supplier Mumbai",
        "cast acrylic sheet manufacturer",
        "PMMA sheet manufacturer India",
        "clear acrylic sheet suppliers",
      ],
      longTail: [
        "wholesale acrylic sheet factory price Talasari Maharashtra",
        "100% virgin grade acrylic sheet manufacturer 8x4",
        "custom thickness acrylic sheet wholesale supplier India",
        "bulk acrylic sheet manufacturer for signage and interior",
      ],
    },
    title: "Acrylic Sheet Manufacturer in India | Mahadev Plastic",
    description:
      "Mahadev Plastic is a leading acrylic sheet manufacturer in India producing 100% virgin PMMA transparent, cast, frosted & fluorescent sheets. Get factory quotes.",
    canonicalUrl: `${SITE_URL}/`,
    openGraph: {
      title: "Acrylic Sheet Manufacturer in India | Mahadev Plastic",
      description:
        "Leading acrylic sheet manufacturer in India. 100% virgin PMMA sheets in transparent, cast, frosted & fluorescent grades. Factory wholesale supply across India.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/3.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic is a premier cell-cast acrylic sheet manufacturer in India, operating an advanced production plant in Achhad Industrial Estate, Talasari, Maharashtra. Producing 100% virgin PMMA acrylic sheets in standard 8x4 ft dimensions from 2mm to 25mm thickness with 93% optical clarity and nationwide delivery.",
  },

  about: {
    focusKeyword: "Acrylic Sheet Manufacturing Company in India",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheet manufacturing company",
        "acrylic manufacturing plant India",
      ],
      mediumVolume: [
        "acrylic sheet factory in Maharashtra",
        "ISO certified acrylic sheet manufacturer India",
        "polymer casting plant India",
      ],
      longTail: [
        "cell cast acrylic manufacturing infrastructure Talasari",
        "virgin MMA monomer casting process facility India",
        "industrial acrylic sheet producer with pan India logistics",
        "precision tolerance acrylic sheet company Palghar",
      ],
    },
    title: "Acrylic Sheet Manufacturing Company | Mahadev Plastic",
    description:
      "Learn about Mahadev Plastic, India's leading acrylic sheet manufacturer in Talasari, Maharashtra. Explore our cell-cast PMMA plant, capacity & quality standards.",
    canonicalUrl: `${SITE_URL}/about-us`,
    openGraph: {
      title: "Acrylic Sheet Manufacturing Company | Mahadev Plastic",
      description:
        "Discover Mahadev Plastic's advanced acrylic sheet manufacturing infrastructure in Talasari, Maharashtra. Cell casting lines, virgin MMA grade, and nationwide supply.",
      url: `${SITE_URL}/about-us`,
      image: `${SITE_URL}/images/ab1.webp`,
      type: "article",
    },
    aiOverviewHook:
      "Founded in Talasari, Maharashtra, Mahadev Plastic specializes in cell casting polymethyl methacrylate (PMMA) using computerized thermal cycles and automated cleanroom polymerization lines to ensure consistent optical transmission and stress-relieved sheets.",
  },

  clients: {
    focusKeyword: "Industrial Acrylic Sheet Suppliers for Commercial Clients",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheet suppliers for businesses",
        "B2B acrylic sheet distributor",
      ],
      mediumVolume: [
        "acrylic sheet supplier for signage companies",
        "OEM acrylic sheet vendor India",
        "acrylic sheet distributor for interior designers",
      ],
      longTail: [
        "bulk acrylic sheet supply for interior designers and architects",
        "commercial acrylic material partner for retail fixture makers",
        "wholesale acrylic sheet vendor for fabrication industries India",
        "custom cut acrylic sheet supplier for lighting manufacturers",
      ],
    },
    title: "Our Clients & B2B Partners | Mahadev Plastic India",
    description:
      "Trusted acrylic sheet manufacturing partner for signage fabricators, interior architects, retail fixture brands, and OEM industrial clients across India.",
    canonicalUrl: `${SITE_URL}/our-clients`,
    openGraph: {
      title: "Our Clients & B2B Partners | Mahadev Plastic India",
      description:
        "Discover why 500+ commercial fabricators, signage brands, and architectural firms across India choose Mahadev Plastic for bulk acrylic sheet manufacturing.",
      url: `${SITE_URL}/our-clients`,
      image: `${SITE_URL}/images/about/facility-3.png`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic supplies over 500+ commercial clients across India, including outdoor signage manufacturers, architectural interior firms, automotive component makers, lighting manufacturers, and retail display fabricators requiring bulk deliveries with consistent thickness tolerances.",
  },

  work: {
    focusKeyword: "Acrylic Sheet Fabrication Projects & Manufacturing Work",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheet applications",
        "acrylic fabrication work India",
      ],
      mediumVolume: [
        "custom cut acrylic sheet projects",
        "architectural acrylic sheet installation supply",
        "acrylic sheet laser cutting projects",
      ],
      longTail: [
        "large format acrylic sheets for commercial building facades",
        "precision laser grade acrylic sheet supply for retail fixtures",
        "custom color matching acrylic sheet production case studies",
        "heavy gauge acrylic safety acoustic barrier projects India",
      ],
    },
    title: "Acrylic Sheet Projects & Work | Mahadev Plastic",
    description:
      "Explore custom acrylic sheet projects by Mahadev Plastic: architectural glazing, illuminated retail signage, LED light diffusers, and luxury interior claddings.",
    canonicalUrl: `${SITE_URL}/our-work`,
    openGraph: {
      title: "Acrylic Sheet Projects & Work | Mahadev Plastic",
      description:
        "Explore Mahadev Plastic's manufacturing portfolio: precision laser-cut retail displays, architectural diffusers, acoustic barriers, and luxury claddings.",
      url: `${SITE_URL}/our-work`,
      image: `${SITE_URL}/images/home1.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Explore Mahadev Plastic's manufacturing portfolio: from precision laser-cut retail displays and LED light-diffusing ceiling panels to heavy-gauge safety acoustic barriers and luxury temple MOP claddings delivered across Maharashtra, Gujarat, and nationwide.",
  },

  blogs: {
    focusKeyword: "Acrylic Sheets Guide & Technical Fabrication Insights",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheet uses",
        "acrylic sheet guide",
      ],
      mediumVolume: [
        "acrylic sheet thickness chart",
        "cast acrylic vs extruded acrylic comparison",
        "acrylic plastic sheet advantages",
      ],
      longTail: [
        "how to cut and polish acrylic sheets without cracking",
        "best acrylic sheet thickness for outdoor glow signage",
        "acrylic sheet vs polycarbonate for interior partition panels",
        "optical clarity benefits of cell cast PMMA sheets",
      ],
    },
    title: "Acrylic Sheet Guide & Technical Blog | Mahadev Plastic",
    description:
      "Expert technical guides on acrylic sheet manufacturing, cell-casting grades, laser cutting fabrication tips, and interior design uses from Mahadev Plastic.",
    canonicalUrl: `${SITE_URL}/blogs`,
    openGraph: {
      title: "Acrylic Sheet Guide & Technical Blog | Mahadev Plastic",
      description:
        "Expert guides on acrylic sheet manufacturing, casting grades, laser fabrication tips, and interior design applications from Mahadev Plastic engineering team.",
      url: `${SITE_URL}/blogs`,
      image: `${SITE_URL}/images/1.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Comprehensive technical repository by Mahadev Plastic chemical engineers, covering acrylic sheet selection criteria, cell cast vs extruded behavior, CNC cutting parameters, and architectural glazing specifications.",
  },

  contact: {
    focusKeyword: "Contact Acrylic Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheet manufacturer contact number",
        "buy acrylic sheets direct from factory",
      ],
      mediumVolume: [
        "acrylic sheet wholesale price quotation",
        "acrylic sheet factory in Talasari Palghar",
        "acrylic sheet supplier phone number",
      ],
      longTail: [
        "request acrylic sheet sample swatch kit India",
        "wholesale acrylic sheet factory address Achhad industrial estate",
        "contact acrylic sheet manufacturer for bulk project quote",
        "fast dispatch acrylic sheet supplier Maharashtra Gujarat",
      ],
    },
    title: "Contact Acrylic Sheet Manufacturer | Mahadev Plastic",
    description:
      "Get direct factory quotations for acrylic sheets. Contact Mahadev Plastic plant in Talasari, Maharashtra. Call +91 9987904482 or request wholesale bulk price.",
    canonicalUrl: `${SITE_URL}/contact-us`,
    openGraph: {
      title: "Contact Acrylic Sheet Manufacturer | Mahadev Plastic",
      description:
        "Get direct wholesale factory quotation for acrylic sheets. Contact Mahadev Plastic plant in Talasari, Maharashtra. Call +91 9987904482 or request online quote.",
      url: `${SITE_URL}/contact-us`,
      image: `${SITE_URL}/images/about/facility-1.png`,
      type: "website",
    },
    aiOverviewHook:
      "Direct sales and technical support desk for Mahadev Plastic acrylic sheet manufacturing plant in Achhad Industrial Estate, Talasari, Maharashtra. Call +91 9987904482 or email mahadevplastic2019@gmail.com for factory wholesale quotations and dispatch schedules.",
  },
};

export const PRODUCTS_SEO: Record<string, ProductSeoConfig> = {
  "acrylic-sheets": {
    sku: "MP-AS-ALL",
    mpn: "MP-AS-SERIES",
    priceRange: { low: "140", high: "5500" },
    focusKeyword: "Acrylic Sheets Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "acrylic sheets India",
        "acrylic sheets price",
        "acrylic plastic sheet manufacturer",
      ],
      mediumVolume: [
        "cast and extruded acrylic sheets",
        "8x4 acrylic sheet supplier",
        "industrial acrylic sheets Mumbai",
        "custom thickness acrylic sheet",
      ],
      longTail: [
        "buy wholesale acrylic sheets direct from manufacturer Talasari",
        "high optical clarity acrylic sheet 2mm to 25mm India",
        "bulk acrylic sheet factory price pan India delivery",
      ],
    },
    title: "Acrylic Sheets Manufacturer in India | Mahadev Plastic",
    description:
      "Mahadev Plastic is a leading acrylic sheets manufacturer in India supplying transparent, cast, frosted, fluorescent & MOP sheets at wholesale factory price.",
    canonicalUrl: `${SITE_URL}/acrylic-sheets`,
    openGraph: {
      title: "Acrylic Sheets Manufacturer in India | Mahadev Plastic",
      description:
        "Mahadev Plastic manufactures comprehensive grades of acrylic sheets in India: transparent, cell cast, frosted, fluorescent & MOP with pan-India delivery.",
      url: `${SITE_URL}/acrylic-sheets`,
      image: `${SITE_URL}/images/Acrylic-Sheets.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic manufactures optical-grade acrylic sheets in India, offering cell cast and extruded variants in standard 8ft x 4ft (2440 x 1220 mm) dimensions from 1.5mm to 25mm thickness. Formulated with virgin MMA monomer, their sheets achieve 92% light transmission, 17x the impact strength of glass, and UV stability for commercial signage, glazing, and partitions.",
    faqs: [
      {
        question: "What sheet dimensions and gauge thicknesses do you manufacture?",
        answer:
          "We manufacture acrylic sheets from 1.5 mm to 25 mm thickness in standard 8ft x 4ft (2440 x 1220 mm) and 6ft x 4ft dimensions. Custom thicknesses and laser-cut sizes are available for commercial bulk orders.",
      },
      {
        question: "What is the difference between cast acrylic and extruded acrylic sheets?",
        answer:
          "Cast acrylic is produced by polymerizing virgin MMA monomer between precision glass molds, delivering 93% optical clarity, superior thermal stability, and clean laser-cutting edges without melting, unlike extruded acrylic.",
      },
      {
        question: "Are Mahadev Plastic acrylic sheets UV-resistant for outdoor signage?",
        answer:
          "Yes, all our sheets are compounded with high-grade UV stabilizers that prevent yellowing, crazing, and surface degradation for over 10 years in harsh outdoor tropical environments.",
      },
      {
        question: "What is the wholesale Minimum Order Quantity (MOQ) and delivery timeline across India?",
        answer:
          "As a direct manufacturer in Talasari, Maharashtra, we offer flexible wholesale MOQs with rapid pan-India transport dispatch within 3 to 7 business days depending on order volume.",
      },
    ],
    relatedProducts: [
      {
        title: "Acrylic Transparent Sheet",
        slug: "acrylic-transparent-sheet",
        description: "93% optical clarity clear PMMA sheets for glazing and retail fixtures.",
      },
      {
        title: "Cast Acrylic Sheet",
        slug: "cast-acrylic-sheet",
        description: "Heavy-duty cell cast acrylic engineered for CNC routing and chemical tanks.",
      },
      {
        title: "Frosted Acrylic Sheet",
        slug: "frosted-acrylic-sheet",
        description: "Matte satin finish panels providing glare-free LED light diffusion.",
      },
      {
        title: "Fluorescent Acrylic Sheet",
        slug: "fluorescent-acrylic-sheet",
        description: "Luminous ambient edge-glow acrylic sheets in vibrant neon hues.",
      },
    ],
  },

  "acrylic-transparent-sheet": {
    sku: "MP-ATS-01",
    mpn: "MP-ATS-OPTICAL",
    priceRange: { low: "160", high: "6200" },
    focusKeyword: "Acrylic Transparent Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "transparent acrylic sheet",
        "clear acrylic sheet price India",
        "clear plastic sheet supplier",
      ],
      mediumVolume: [
        "93% light transmission clear acrylic sheet",
        "transparent cast acrylic sheet factory",
        "shatterproof glass alternative acrylic sheet",
      ],
      longTail: [
        "wholesale clear acrylic sheet 8x4 manufacturer Maharashtra",
        "optical grade transparent acrylic sheet for laser cutting",
        "transparent acrylic protective partition sheets bulk supplier",
      ],
    },
    title: "Acrylic Transparent Sheet Manufacturer | Mahadev Plastic",
    description:
      "Top acrylic transparent sheet manufacturer in India. 93% optical clarity, UV-stabilized, shatterproof cell-cast sheets in 1.8mm-30mm. Factory direct pricing.",
    canonicalUrl: `${SITE_URL}/acrylic-transparent-sheet`,
    openGraph: {
      title: "Acrylic Transparent Sheet Manufacturer | Mahadev Plastic",
      description:
        "Crystal-clear transparent acrylic sheets with 93% optical clarity and UV weatherability from Mahadev Plastic factory in Talasari, Maharashtra.",
      url: `${SITE_URL}/acrylic-transparent-sheet`,
      image: `${SITE_URL}/images/Transparent-acrylic-sheet.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic produces crystal-clear acrylic transparent sheets in India, delivering up to 93% light transmission—outperforming traditional float glass while remaining 50% lighter and shatterproof. Ideal for architectural skylights, retail showcases, sneeze guards, and museum vitrines.",
    faqs: [
      {
        question: "How does the optical clarity of transparent acrylic compare to traditional glass?",
        answer:
          "Our transparent acrylic sheets provide 92% to 93% total light transmission—superior to float glass (88–90%)—while being 50% lighter and 10 to 17 times more impact-resistant.",
      },
      {
        question: "Can your clear acrylic sheets be laser cut, CNC routed, and flame-polished?",
        answer:
          "Yes, cell-cast acrylic produces crystal-clean, glass-smooth edges during CO2 laser cutting, CNC milling, flame polishing, and diamond beveling without chipping or crazing.",
      },
      {
        question: "Are transparent acrylic sheets suitable for outdoor architectural skylights and glazing?",
        answer:
          "Absolutely. Formulated with UV-stabilized virgin polymer, our sheets withstand intense sunlight, seasonal storms, and thermal fluctuations without hazing or brittleness.",
      },
      {
        question: "How are transparent acrylic sheets packaged to prevent transit scratches?",
        answer:
          "Every transparent sheet is laminated on both faces with heavy-duty PE protective masking or thermoformable kraft paper that remains in place during transport, CNC cutting, and installation.",
      },
    ],
    relatedProducts: [
      {
        title: "Cast Acrylic Sheet",
        slug: "cast-acrylic-sheet",
        description: "High-molecular-weight cell cast sheets for demanding industrial fabrication.",
      },
      {
        title: "Frosted Acrylic Sheet",
        slug: "frosted-acrylic-sheet",
        description: "Dual-sided matte finish sheets for glare-free lighting diffusion.",
      },
      {
        title: "MOP Acrylic Sheet",
        slug: "mop-acrylic-sheet",
        description: "Opulent Mother of Pearl pearlescent sheets for luxury architectural cladding.",
      },
    ],
  },

  "cast-acrylic-sheet": {
    sku: "MP-CAS-02",
    mpn: "MP-CAS-HEAVY",
    priceRange: { low: "180", high: "9500" },
    focusKeyword: "Cast Acrylic Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "cast acrylic sheet",
        "cell cast acrylic sheet India",
        "cast acrylic vs extruded",
      ],
      mediumVolume: [
        "cell cast PMMA sheet supplier",
        "laser cut cast acrylic sheet",
        "thick cast acrylic sheets 25mm 50mm",
      ],
      longTail: [
        "industrial cell cast acrylic sheet manufacturer Talasari",
        "high molecular weight cast acrylic sheets for CNC machining",
        "chemical resistant cast acrylic sheet wholesale factory India",
      ],
    },
    title: "Cast Acrylic Sheet Manufacturer in India | Mahadev Plastic",
    description:
      "Leading cast acrylic sheet manufacturer in India. Cell-cast PMMA sheets from 2mm to 50mm for laser cutting, chemical tanks, and CNC machining. Get factory quote.",
    canonicalUrl: `${SITE_URL}/cast-acrylic-sheet`,
    openGraph: {
      title: "Cast Acrylic Sheet Manufacturer in India | Mahadev Plastic",
      description:
        "Cell-cast acrylic sheets with high molecular weight, 75 MPa tensile strength, and superior thermal stability from Mahadev Plastic India plant.",
      url: `${SITE_URL}/cast-acrylic-sheet`,
      image: `${SITE_URL}/images/Cast-Acrylic-Sheet.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic is a leading cast acrylic sheet manufacturer in India, utilizing cell-casting between tempered glass molds to achieve high molecular weight PMMA. Ranging from 2mm to 50mm in gauge, these sheets offer 75 MPa tensile strength, zero gumming under laser cutting, and chemical resistance for industrial viewing ports.",
    faqs: [
      {
        question: "Why is cell-cast acrylic preferred for chemical handling and industrial machinery?",
        answer:
          "Cell-cast acrylic features a much higher molecular weight than extruded sheets, providing 75 MPa tensile strength, resistance to diluted acids, alkalis, and oils, and zero stress-crazing during solvent bonding.",
      },
      {
        question: "What is the maximum gauge thickness available for cast acrylic sheets?",
        answer:
          "Mahadev Plastic manufactures cell-cast acrylic sheets from 2.0 mm up to 50 mm in standard 1220 x 2440 mm and oversized 2000 x 3000 mm formats for acoustic walls, machine guards, and aquarium viewports.",
      },
      {
        question: "Can cast acrylic sheets withstand high-temperature thermoforming?",
        answer:
          "Yes, cast acrylic has a heat deflection temperature of 95°C to 100°C and a service range of -40°C to +80°C, enabling uniform deep-draw vacuum forming without localized thinning.",
      },
      {
        question: "How can industrial clients request custom-dimension cast acrylic sheets?",
        answer:
          "You can submit project specifications via our online inquiry form or contact our factory engineering desk at +91 9987904482 for custom gauge casting schedules and wholesale quotations.",
      },
    ],
    relatedProducts: [
      {
        title: "Acrylic Transparent Sheet",
        slug: "acrylic-transparent-sheet",
        description: "Optical-grade transparent PMMA sheets for architectural windows.",
      },
      {
        title: "Fluorescent Acrylic Sheet",
        slug: "fluorescent-acrylic-sheet",
        description: "Vivid edge-glowing fluorescent acrylic for creative retail fixtures.",
      },
      {
        title: "Frosted Acrylic Sheet",
        slug: "frosted-acrylic-sheet",
        description: "Silky matte satin sheets for contemporary privacy office dividers.",
      },
    ],
  },

  "frosted-acrylic-sheet": {
    sku: "MP-FAS-03",
    mpn: "MP-FAS-DIFFUSE",
    priceRange: { low: "190", high: "6800" },
    focusKeyword: "Frosted Acrylic Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "frosted acrylic sheet",
        "matte acrylic sheet India",
        "frosted glass alternative acrylic",
      ],
      mediumVolume: [
        "LED diffuser frosted acrylic sheet",
        "satin finish acrylic partition sheet",
        "double sided frosted acrylic sheet supplier",
      ],
      longTail: [
        "anti-glare frosted acrylic sheet for office partitions India",
        "wholesale frosted acrylic sheet 8x4 factory price",
        "custom color tinted frosted acrylic sheets manufacturer",
      ],
    },
    title: "Frosted Acrylic Sheet Manufacturer | Mahadev Plastic",
    description:
      "Premier frosted acrylic sheet manufacturer in India. Velvety matte satin finish, glare-free LED light diffusion & privacy partitions. Direct factory dispatch.",
    canonicalUrl: `${SITE_URL}/frosted-acrylic-sheet`,
    openGraph: {
      title: "Frosted Acrylic Sheet Manufacturer | Mahadev Plastic",
      description:
        "Velvety matte frosted acrylic sheets for glare-free LED lighting diffusers, office partitions, and privacy screens from Mahadev Plastic.",
      url: `${SITE_URL}/frosted-acrylic-sheet`,
      image: `${SITE_URL}/images/Frosted-Acrylic-Sheet.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic manufactures dual-sided and single-sided frosted acrylic sheets in India, engineered with a velvety satin surface that eliminates LED hotspots while transmitting 50% to 75% soft ambient light. A shatterproof, fingerprint-resistant alternative to sandblasted glass for modern office cubicles and luminaires.",
    faqs: [
      {
        question: "What is the light diffusion performance of frosted acrylic sheets?",
        answer:
          "Mahadev Plastic frosted sheets provide 50% to 75% uniform light transmission depending on opacity, efficiently eliminating LED hot spots while casting soft, glare-free ambient illumination.",
      },
      {
        question: "Is the frosted texture applied on one side or both sides of the sheet?",
        answer:
          "We manufacture single-sided matte (one glossy, one matte) and dual-sided satin frosted acrylic sheets to satisfy various privacy partition, luminaire diffuser, and retail signage requirements.",
      },
      {
        question: "Does the frosted matte surface resist fingerprints and smudges?",
        answer:
          "Yes, our velvety matte texture is naturally resistant to fingerprint oils, smudges, and minor surface abrasions, making it easier to clean and maintain than acid-etched glass.",
      },
      {
        question: "Can frosted acrylic sheets be curved or thermoformed without losing the matte effect?",
        answer:
          "Yes, our cell-cast frosted sheets preserve their consistent satin texture and light-scattering properties even after line bending, heat shaping, and thermoforming.",
      },
    ],
    relatedProducts: [
      {
        title: "Acrylic Transparent Sheet",
        slug: "acrylic-transparent-sheet",
        description: "Crystal-clear transparent sheets for showcase glass alternatives.",
      },
      {
        title: "Fluorescent Acrylic Sheet",
        slug: "fluorescent-acrylic-sheet",
        description: "Neon edge-glowing sheets for high-visibility visual merchandising.",
      },
      {
        title: "MOP Acrylic Sheet",
        slug: "mop-acrylic-sheet",
        description: "Iridescent Mother of Pearl decorative panels for bespoke temples.",
      },
    ],
  },

  "fluorescent-acrylic-sheet": {
    sku: "MP-FLAS-04",
    mpn: "MP-FLAS-GLOW",
    priceRange: { low: "210", high: "5800" },
    focusKeyword: "Fluorescent Acrylic Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "fluorescent acrylic sheet",
        "neon acrylic sheet India",
        "edge glow acrylic sheet",
      ],
      mediumVolume: [
        "UV reactive fluorescent acrylic sheet",
        "neon green orange acrylic sheet supplier",
        "fluorescent acrylic sheet for signage",
      ],
      longTail: [
        "laser edge glow fluorescent acrylic sheet manufacturer India",
        "ambient light gathering fluorescent acrylic displays bulk",
        "fluorescent cast acrylic sheets for retail POP displays",
      ],
    },
    title: "Fluorescent Acrylic Sheet Manufacturer | Mahadev Plastic",
    description:
      "India's premier fluorescent acrylic sheet manufacturer. Vibrant edge-glow luminous sheets in neon green, orange, pink & yellow. Perfect for retail POP displays.",
    canonicalUrl: `${SITE_URL}/fluorescent-acrylic-sheet`,
    openGraph: {
      title: "Fluorescent Acrylic Sheet Manufacturer | Mahadev Plastic",
      description:
        "Luminous edge-glowing fluorescent acrylic sheets in neon green, orange, pink & blue for retail point-of-sale displays and modern signage by Mahadev Plastic.",
      url: `${SITE_URL}/fluorescent-acrylic-sheet`,
      image: `${SITE_URL}/images/Fluorescent-Acrylic-Sheet.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic specializes in manufacturing vibrant fluorescent acrylic sheets in India, incorporating light-gathering fluorophore pigments that channel ambient room light to the perimeter, generating a vivid edge-glow effect without electrical illumination. Reacts strongly under UV blacklight for retail POP fixtures.",
    faqs: [
      {
        question: "How does the luminous edge-glow effect work in fluorescent acrylic sheets?",
        answer:
          "Formulated with fluorescent pigments, the sheet absorbs ambient room light and channels it to the perimeter via total internal reflection, creating an intense, radiant edge glow without electrical wiring.",
      },
      {
        question: "What colors are available in fluorescent acrylic sheets?",
        answer:
          "We offer vivid edge-glow shades including Neon Green, Electric Orange, Radiant Red, Luminous Yellow, Vivid Blue, and Hot Pink in 2.0 mm to 6.0 mm gauges.",
      },
      {
        question: "Do fluorescent acrylic sheets react under UV / blacklight illumination?",
        answer:
          "Yes, our sheets exhibit dramatic luminescence under 365nm–395nm UV blacklight, making them premier choices for nightclubs, high-energy retail installations, and exhibition displays.",
      },
      {
        question: "Can fluorescent acrylic sheets be laser engraved to create illuminated brand logos?",
        answer:
          "Yes, vector engraving the sheet surface redirects internal light, causing laser-etched text, logos, and intricate patterns to glow with the same brilliance as the outer edges.",
      },
    ],
    relatedProducts: [
      {
        title: "Frosted Acrylic Sheet",
        slug: "frosted-acrylic-sheet",
        description: "Matte finish light diffuser panels for ambient luminaire installations.",
      },
      {
        title: "Cast Acrylic Sheet",
        slug: "cast-acrylic-sheet",
        description: "Heavy-gauge cell cast sheets for high-tolerance CNC machining.",
      },
      {
        title: "Acrylic Transparent Sheet",
        slug: "acrylic-transparent-sheet",
        description: "93% optical clarity clear PMMA sheets for commercial glazing.",
      },
    ],
  },

  "mop-acrylic-sheet": {
    sku: "MP-MOP-05",
    mpn: "MP-MOP-PEARL",
    priceRange: { low: "350", high: "8500" },
    focusKeyword: "MOP Acrylic Sheet Manufacturer in India",
    supportiveKeywords: {
      highVolume: [
        "MOP acrylic sheet",
        "mother of pearl acrylic sheet India",
        "decorative pearlescent acrylic sheet",
      ],
      mediumVolume: [
        "mandir backdrop MOP acrylic sheet",
        "pearl marble finish acrylic sheet",
        "luxury kitchen shutter acrylic sheet",
      ],
      longTail: [
        "waterproof mother of pearl acrylic sheets for interior design",
        "wholesale MOP acrylic sheet factory supplier Talasari Maharashtra",
        "gold silver swirl MOP decorative acrylic panels India",
      ],
    },
    title: "MOP Acrylic Sheet Manufacturer in India | Mahadev Plastic",
    description:
      "Exotic MOP (Mother of Pearl) acrylic sheet manufacturer in India. Iridescent pearlescent swirls for luxury temple mandirs, kitchen shutters & wall cladding.",
    canonicalUrl: `${SITE_URL}/mop-acrylic-sheet`,
    openGraph: {
      title: "MOP Acrylic Sheet Manufacturer in India | Mahadev Plastic",
      description:
        "Exotic MOP (Mother of Pearl) decorative acrylic sheets with swirling pearlescent luster for luxury mandir decor, modular kitchens, and hospitality wall panels.",
      url: `${SITE_URL}/mop-acrylic-sheet`,
      image: `${SITE_URL}/images/MOP-Acrylic-Sheet.jpg`,
      type: "website",
    },
    aiOverviewHook:
      "Mahadev Plastic produces bespoke Mother of Pearl (MOP) acrylic sheets in India, blending pearlescent mica flakes into cell-cast PMMA to emulate exotic seashell luster and marble swirls. 100% waterproof, termite-proof, and stain-resistant for temple mandir backdrops and luxury furniture claddings.",
    faqs: [
      {
        question: "What is MOP acrylic and how does it recreate authentic Mother of Pearl?",
        answer:
          "MOP (Mother of Pearl) acrylic sheets are cast with pearlescent mica flakes and swirling multi-layered pigments that duplicate natural seashell luster and marble depth with 100% waterproof durability.",
      },
      {
        question: "Which applications are most popular for MOP decorative acrylic sheets?",
        answer:
          "MOP sheets are widely specified for bespoke temple (mandir) backdrops, modular kitchen cabinet shutters, wardrobe accents, hotel lobby feature walls, and luxury furniture inlays.",
      },
      {
        question: "Are MOP acrylic sheets resistant to moisture, termites, and stains?",
        answer:
          "Yes, unlike natural shell inlays or timber veneers, our MOP acrylic sheets are 100% waterproof, termite-proof, stain-resistant, and will never rot, warp, or peel in high-humidity spaces.",
      },
      {
        question: "How should MOP decorative acrylic sheets be cut, installed, and cleaned?",
        answer:
          "They can be precisely cut using fine-tooth carbide saw blades or CNC routers and adhered with standard acrylic bonding agents. Maintenance simply requires wiping with a soft microfiber cloth and mild soap.",
      },
    ],
    relatedProducts: [
      {
        title: "Acrylic Transparent Sheet",
        slug: "acrylic-transparent-sheet",
        description: "Clear glass-like PMMA sheets for vitrines and showcase covers.",
      },
      {
        title: "Cast Acrylic Sheet",
        slug: "cast-acrylic-sheet",
        description: "Industrial strength cell cast sheets for heavy-duty architectural fabrication.",
      },
      {
        title: "Frosted Acrylic Sheet",
        slug: "frosted-acrylic-sheet",
        description: "Satin matte privacy dividers with uniform light diffusion.",
      },
    ],
  },
};

export function generateProductSchema(slug: string) {
  const seo = PRODUCTS_SEO[slug];
  if (!seo) return null;

  const isHub = slug === "acrylic-sheets";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${seo.canonicalUrl}#product`,
        name: seo.title.split("|")[0].trim(),
        image: seo.openGraph.image,
        description: seo.description,
        sku: seo.sku,
        mpn: seo.mpn,
        brand: {
          "@type": "Brand",
          name: "Mahadev Plastic",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Mahadev Plastic",
          url: SITE_URL,
        },
        category: "Raw Materials > Polymers > Acrylic PMMA Sheets",
        material: "100% Virgin PMMA Monomer (Polymethyl Methacrylate)",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: seo.priceRange.low,
          highPrice: seo.priceRange.high,
          offerCount: "100",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Mahadev Plastic",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${seo.canonicalUrl}#faq`,
        mainEntity: seo.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          ...(isHub
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Acrylic Sheets",
                  item: seo.canonicalUrl,
                },
              ]
            : [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Acrylic Sheets",
                  item: `${SITE_URL}/acrylic-sheets`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: seo.title.split("|")[0].trim(),
                  item: seo.canonicalUrl,
                },
              ]),
        ],
      },
    ],
  };
}
