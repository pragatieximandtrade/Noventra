/**
 * NOVENTRA Centralized Product & Brand Configuration
 * Contains exact product label info, supplement facts, educational breakdowns, and Amazon URLs.
 */

export const brandInfo = {
  name: "NOVENTRA",
  tagline: "Elevate Your Everyday Wellness.",
  philosophy: "Thoughtfully formulated. Transparently presented. Designed for your daily wellness journey.",
  address: "500 Horizon Drive, Suite 540, Robbinsville, NJ 08691, USA",
  website: "www.noventra.com",
  about: {
    hero: "At Noventra, we believe in mindful supplementation rooted in transparency, quality-conscious sourcing, and ingredient integrity.",
    paragraphs: [
      "Modern wellness doesn't require exaggerated claims or artificial hype. It requires thoughtful formulations designed with bioavailable nutrient forms, accurate labeling, and rigorous manufacturing standards.",
      "Noventra was established on a simple, unwavering philosophy: what goes on the label is precisely what goes into the bottle. Every batch is crafted with meticulous attention to detail, prioritizing purity, dietary suitability, and consumer trust.",
      "Whether you are supporting everyday neuromuscular relaxation with our high-purity Magnesium Glycinate or fortifying your cellular antioxidant intake with our Liposomal Glutathione complex, Noventra stands beside you as a transparent partner in your daily health ritual."
    ],
    pillars: [
      {
        title: "Thoughtfully Formulated",
        description: "We carefully select bioavailable mineral chelates and synergistic botanical cofactors rather than generic low-yield compounds.",
        icon: "Sparkles"
      },
      {
        title: "Transparently Presented",
        description: "Exact elemental weights, zero proprietary masks, and clear % Daily Values so you know precisely what you are consuming.",
        icon: "Eye"
      },
      {
        title: "Quality-Conscious Practices",
        description: "Vegetarian capsules, clean excipients, and manufactured in a cGMP certified facility and USFDA approved plant.",
        icon: "ShieldCheck"
      },
      {
        title: "Informed Wellness Choices",
        description: "We prioritize consumer education—explaining the biology of nutrients so you make empowered health decisions.",
        icon: "BookOpen"
      }
    ]
  },
  amazonStoreUrl: "https://www.amazon.com/stores/Noventra/page/NOVENTRA_STORE_MAIN"
};

export const products = {
  magnesium: {
    id: "magnesium-glycinate",
    slug: "magnesium-glycinate",
    name: "Noventra Magnesium Glycinate",
    subtitle: "Make Every Day Count.",
    description: "Discover Noventra Magnesium Glycinate, a thoughtfully presented magnesium supplement designed to complement your everyday wellness routine.†",
    category: "Magnesium Supplement",
    heroBadge: "100% Pure Unbuffered Magnesium Glycinate • Zero Oxide Spiking",
    rating: 4.9,
    reviewCount: 428,
    servingSize: "1 Capsule",
    servingsPerContainer: 90,
    supplyDays: "90-Day Supply (3 Months)",
    priceDisplay: "$24.99",
    amazonUrl: "https://www.amazon.com/dp/B0NOVENTRA_MAG?maas=noventra_web_mag",
    themeColor: "emerald",
    haloColor: "rgba(212, 175, 55, 0.4)",
    highlights: [
      { label: "Elemental Magnesium", value: "120 mg", sub: "29% Daily Value" },
      { label: "Chelated Form", value: "Magnesium Glycinate", sub: "Gentle on Stomach" },
      { label: "Capsules", value: "90 Veggie Caps", sub: "1 Capsule Per Day" },
      { label: "Purity Form", value: "100% Pure Glycinate", sub: "Zero Oxide or Hidden Blends" }
    ],
    // 6 Daily Wellness Support Pillars for Magnesium Glycinate
    wellnessSupportPillars: [
      {
        title: "Supports Muscle Relaxation‡",
        desc: "Helps ease muscle tightness, cramps, and post-exercise tension by regulating calcium flow within fibers.‡",
        icon: "Zap"
      },
      {
        title: "Supports Calm & Restful Sleep‡",
        desc: "Calming glycine chelate helps quiet nervous tension, promote melatonin balance, and support restorative sleep.‡",
        icon: "Moon"
      },
      {
        title: "Supports Nerve Function‡",
        desc: "Maintains healthy neuromuscular impulse transmission and balances neurotransmitters for mental tranquility.‡",
        icon: "Brain"
      },
      {
        title: "Supports Energy Metabolism‡",
        desc: "Activates cellular ATP (adenosine triphosphate) synthesis, fueling metabolic energy pathways across every cell.‡",
        icon: "BatteryCharging"
      },
      {
        title: "Supports Bone Strength‡",
        desc: "Assists normal bone mineral density and helps the body properly activate and utilize Vitamin D and calcium.‡",
        icon: "Bone"
      },
      {
        title: "Supports Heart & Rhythm‡",
        desc: "Promotes healthy vascular smooth muscle tone and maintains steady cardiovascular rhythm and electrolyte balance.‡",
        icon: "HeartPulse"
      }
    ],
    supplementFacts: {
      servingSize: "1 Capsule",
      servingsPerContainer: "90",
      nutrients: [
        {
          name: "Magnesium (as Magnesium Glycinate)",
          amount: "120 mg",
          dailyValue: "29%"
        }
      ],
      otherIngredients: "Vegetarian capsule (cellulose, water), ascorbyl palmitate.",
      suggestedUse: "As a dietary supplement, take one (1) capsule daily with 8 oz of water, preferably with an evening meal or as recommended by your qualified healthcare provider.",
      freeFrom: ["Non-GMO", "Gluten Free", "Dairy Free", "Soy Free", "100% Vegan", "Third-Party Lab Tested", "Zero Stearates", "Gelatin Free"]
    },
    // Third-Party Laboratory Certificate of Analysis (COA)
    coa: {
      reportCode: "TR-260421-M08-01",
      reportDate: "04.21.2026",
      sampleCode: "260416M0801",
      sampleName: "Noventra Magnesium Glycinate",
      batchNo: "2026-11842M",
      receivedOn: "04/16/2026",
      testOn: "04/16/2026",
      servingSize: "1 Capsule",
      labDirector: "Dr. Wenjun Wei",
      imageFile: "/coa/noventra-magnesium-coa.png",
      downloadFileName: "Noventra-Magnesium-Glycinate-COA.png",
      overallStatus: "CONFORMS / APPROVED",
      summary: "All active assays, heavy metal screenings, and microbiological safety panels strictly conform to USP and FDA standards.",
      highlights: [
        { label: "Elemental Magnesium", value: "124.5 mg/S", subtext: "Claim: 120 mg/S", status: "PASS" },
        { label: "Chelate Identity", value: "Conforms", subtext: "FTIR Confirmed", status: "PASS" },
        { label: "Heavy Metals (Pb, As, Cd, Hg)", value: "< LOQ", subtext: "All under USP limits", status: "PASS" },
        { label: "Microbial Safety", value: "Negative", subtext: "Zero pathogens detected", status: "PASS" }
      ],
      tests: [
        { test: "Total Plate Count", method: "ISO 4833-1", claim: "<10,000,000 cfu/g", result: "<10 cfu/g", status: "PASS" },
        { test: "Yeast & Mold", method: "USP<2021>", claim: "<100,000 cfu/g", result: "<10 cfu/g", status: "PASS" },
        { test: "Escherichia.coli", method: "USP<2021>", claim: "Absent/10g", result: "Absent/10g", status: "PASS" },
        { test: "Salmonella", method: "USP<2022>", claim: "Absent/10g", result: "Absent/10g", status: "PASS" },
        { test: "Total Arsenic", method: "USP<2232>", claim: "<15.000 mcg/day", result: "0.014 mcg/day", status: "PASS" },
        { test: "Cadmium", method: "USP<2232>", claim: "<5.000 mcg/day", result: "0.004 mcg/day", status: "PASS" },
        { test: "Lead", method: "USP<2232>", claim: "<5.000 mcg/day", result: "0.022 mcg/day", status: "PASS" },
        { test: "Total Mercury", method: "USP<2232>", claim: "<2.000 mcg/day", result: "<0.005 mcg/day", status: "PASS" },
        { test: "Magnesium (as Magnesium Glycinate Chelate)", method: "ICP-OES", claim: "120 mg/S", result: "124.5 mg/S", status: "PASS" },
        { test: "Compound Identity Confirmation (Glycinate Chelate)", method: "FTIR", claim: "Conforms", result: "Conforms", status: "PASS" },
        { test: "Average Capsule Fill Weight", method: "USP<2091>", claim: "650 mg/S +/- 5%", result: "653.2 mg/S", status: "PASS" },
        { test: "Disintegration Time", method: "USP<2040>", claim: "< 15 min", result: "8.5 min", status: "PASS" }
      ]
    },
    // Noventra vs. Typical Market Brands Comparison
    comparison: {
      tagline: "Formulation Integrity",
      title: "Why Noventra Magnesium Stands Apart",
      subtitle: "Many commercial magnesium supplements cut corners with poorly absorbed oxide forms and misleading elemental labels. Here is how Noventra compares:*",
      noventraLabel: "Noventra Magnesium Glycinate",
      othersLabel: "Typical Market Brands",
      features: [
        {
          factor: "100% Pure vs. 'Buffered' Dilution",
          noventra: "100% Pure Magnesium Glycinate Only",
          noventraDetail: "We give you strictly pure Magnesium Glycinate. Zero cheap Magnesium Oxide, zero hidden mineral dilution, zero synthetic buffering.",
          others: "Secretly 'Buffered' with Cheap Magnesium Oxide",
          othersDetail: "Brands market 'Magnesium Glycinate' on the front label, but cut the formula with cheap Magnesium Oxide (under 4% absorption) to cut costs, causing stomach cramps and sudden laxative effects."
        },
        {
          factor: "Elemental Transparency",
          noventra: "Guaranteed 120 mg Pure Elemental Yield",
          noventraDetail: "Honest label: exact elemental mineral weight clearly stated with 29% Daily Value.",
          others: "Deceptive '1000 mg' Front Labels",
          othersDetail: "Marketed with compound weight, often yielding under 60 mg elemental magnesium."
        },
        {
          factor: "Digestive Tolerability",
          noventra: "Gentle on Stomach & Zero Laxative Effect",
          noventraDetail: "Neutral chelate does not draw excess water into the bowels, preventing cramps and diarrhea.",
          others: "High Osmotic Water Retention",
          othersDetail: "Frequently causes abdominal discomfort, bloating, and urgent bathroom trips."
        },
        {
          factor: "Third-Party Lab Verification",
          noventra: "Third-Party Lab Tested (ISO/IEC 17025 COA)",
          noventraDetail: "Every batch is independently third-party lab tested via ICP-OES and FTIR; verified official COA report downloadable directly on our site.",
          others: "No Public Lab Reports",
          othersDetail: "Zero batch traceability; blind trust in contract manufacturer claims."
        },
        {
          factor: "Capsule Composition",
          noventra: "100% Plant-Derived Vegetarian Capsules",
          noventraDetail: "Pure cellulose and water; stabilized only with fat-soluble vitamin C (ascorbyl palmitate).",
          others: "Bovine Gelatin & Synthetic Binders",
          othersDetail: "Animal byproducts, magnesium stearate, silicon dioxide, and artificial glazes."
        },
        {
          factor: "Manufacturing Standard",
          noventra: "cGMP Certified Facility • USFDA Approved Plant",
          noventraDetail: "Manufactured in a cGMP certified facility and USFDA approved plant under rigorous quality control standards.",
          others: "Unverified Contract Facilities",
          othersDetail: "Inconsistent batch controls with potential potency drift and lack of standardized oversight."
        },
        {
          factor: "Supply & Value",
          noventra: "90 Vegetarian Capsules (3-Month Supply)",
          noventraDetail: "Just 1 easy-to-swallow capsule per day delivers full target nutrition for 90 days.",
          others: "30-Day Supply / 2-4 Bulky Pills Daily",
          othersDetail: "Requires swallowing multiple huge capsules daily, running out every 4 weeks."
        }
      ]
    },
    // Authoritative Product Details & Paragraph Monograph (Thorne-style comprehensive details)
    productDetails: {
      sectionBadge: "Product Details & Scientific Monograph",
      title: "Noventra Magnesium Glycinate - 90 Servings Details",
      introParagraphs: [
        "9 out of 10 consumers reported sleeping better and feeling calmer in stressful moments after supplementing with Noventra Magnesium Glycinate, based on a 28-day consumer perception study of 95 participants. Magnesium plays a critical role in promoting muscle relaxation and maintaining a healthy nervous system – both of which are essential for restful, restorative sleep.‡",
        "Beyond sleep, magnesium is fundamental to whole-body health. It’s involved in more than 600 enzymatic reactions in the body, influencing everything from energy production and sugar metabolism to cardiovascular and neuromuscular function.‡",
        "But according to World Health Organization statistics, as many as 75% of U.S. adults do not meet the U.S. Food and Drug Administration's recommended daily intake of 420 mg of magnesium. Magnesium deficiency can manifest in many ways, such as inefficient blood sugar metabolism, muscle cramps or soreness, eyelid twitching, fatigue, and poor sleep."
      ],
      benefits: {
        title: "Benefits of Noventra Magnesium Glycinate",
        items: [
          "Promotes relaxation before bedtime to support restful sleep, helping wake up feeling refreshed and energized‡",
          "Shown in a consumer study to regulate emotional well-being and supports a calm response to everyday stress‡",
          "Helps relax smooth and skeletal muscle‡",
          "Demonstrated to support focus and mental clarity when taken daily‡",
          "Provides essential magnesium for the health of the heart and blood vessels, brain, bones, muscles, and lungs, and to support healthy sugar metabolism‡",
          "Serves as a cofactor for enzymes involved in cellular energy production‡",
          "Regulates electrical activity of the heart, which supports normal heart rate and rhythm‡",
          "Promotes the dilation of blood vessels (vasodilation), which maintains normal blood pressure and enhances blood flow‡",
          "Supports insulin sensitivity and benefits healthy kidney function‡",
          "Promotes bronchial relaxation‡"
        ]
      },
      features: {
        title: "Features of Noventra Magnesium Glycinate",
        items: [
          "A single-capsule serving size, designed for customizable dosages that fit your daily needs",
          "Each capsule contains magnesium bound to glycine, a calming neurotransmitter, making Magnesium Glycinate an ideal nighttime mineral supplement‡",
          "Decreased laxative effect compared to other magnesium formulations because the glycinate form is a true chelate that completely envelopes the magnesium",
          "100% pure unbuffered glycinate with strictly zero cheap magnesium oxide dilution or synthetic stearates"
        ]
      },
      whyImportant: {
        title: "Why is magnesium important?",
        paragraphs: [
          "Magnesium, in all its forms, promotes energy production, protein synthesis, and DNA formation. It plays a key role in supporting muscle and nerve function, helping regulate muscle contractions and maintain a steady heartbeat. Magnesium also contributes to bone health and helps manage stress by supporting a healthy nervous system.‡",
          "In a cross-sectional study with 210 elderly individuals, optimal magnesium intake was associated with positive mood, lipid metabolism and lean body mass.‡ In a 15-year study involving almost 5,000 young adults, higher intakes of magnesium were associated with healthy cardiovascular function and glucose utilization.‡ Another large cross-sectional study found that magnesium intake was positively associated with bone mineral density in certain subgroups.‡"
        ]
      },
      consumerExperience: {
        title: "What did people experience when using Noventra Magnesium Glycinate?",
        intro: "In a 28-day consumer perception study, 95 adults who were not previously supplementing with magnesium added Noventra Magnesium Glycinate to their nightly routine. By the end of the study, participants reported noticeable improvements in sleep, relaxation, and overall well-being.",
        reportedTitle: "What participants reported:",
        stats: [
          { percent: "91%", text: "experienced improved sleep quality" },
          { percent: "94%", text: "felt calmer in stressful situations" },
          { percent: "84%", text: "noticed improvements in stress levels, mood, or focus" },
          { percent: "76%", text: "experienced improved muscle relaxation or recovery" },
          { percent: "90%", text: "reported no side effects, and 93% of participants had a positive overall experience" }
        ],
        footnote: "Results based on 95 participants in a 28-day consumer study. Individual results may vary."
      },
      testedQuality: {
        title: "Tested for quality you can trust",
        paragraph: "This product has been third-party tested and certified to verify what's in the package matches what's on the label and to confirm it contains no unsafe levels of contaminants, such as heavy metals, pesticides, and microorganisms. Manufactured in a cGMP certified facility and USFDA approved plant."
      }
    },
    // Consumer Perception Study & Real Experience Metrics
    consumerStudy: {
      tagline: "Consumer Perception Study",
      headline: "Real Results: What People Experienced",
      subtitle: "In a 28-day consumer perception study, 95 adults who added Noventra Magnesium Glycinate to their nightly routine reported noticeable improvements in sleep quality, relaxation, and whole-body well-being.‡",
      headlineHighlight: "9 out of 10 consumers reported sleeping better and feeling calmer in stressful moments after supplementing with Noventra Magnesium Glycinate.‡",
      metrics: [
        {
          percent: "91%",
          label: "Experienced Improved Sleep Quality",
          desc: "Fell asleep faster, experienced fewer nighttime awakenings, and woke up feeling refreshed and energized without morning fog.‡"
        },
        {
          percent: "94%",
          label: "Felt Calmer in Everyday Stress",
          desc: "Noticeable increase in emotional well-being and demonstrated support for a calm, balanced response to daily stress.‡"
        },
        {
          percent: "84%",
          label: "Noticed Better Mood & Focus",
          desc: "Demonstrated noticeable improvements in daytime mental clarity, calm focus, and positive emotional stability.‡"
        },
        {
          percent: "76%",
          label: "Improved Muscle Relaxation & Recovery",
          desc: "Helped relax smooth and skeletal muscles, relieving post-workout tightness and nocturnal leg cramps.‡"
        },
        {
          percent: "90%",
          label: "Zero Digestive Side Effects",
          desc: "Reported zero laxative effect or stomach upset because the glycinate form is a true chelate that envelopes the magnesium."
        },
        {
          percent: "93%",
          label: "Positive Overall Experience",
          desc: "Rated Noventra as a superior, indispensable staple in their daily evening health and wellness ritual."
        }
      ],
      footnote: "Results based on 95 participants in a 28-day consumer perception study. Individual results may vary."
    },
    // Whole-Body Health & Epidemiological Reality (600+ Reactions & 75% Deficiency)
    wholeBodyHealth: {
      tagline: "Biochemistry & Whole-Body Health",
      headline: "Beyond Sleep: Fundamental to 600+ Enzymatic Reactions",
      subtitle: "Magnesium plays a critical role in muscle relaxation and a healthy nervous system – but its physiological impact extends far beyond bedtime.‡",
      statsBadge: "Dietary Reality Check",
      deficiencyStat: "75%",
      deficiencyStatContext: "According to health statistics, as many as 75% of adults do not meet the recommended daily intake of 420 mg of magnesium.",
      deficiencyDescription: "Magnesium deficiency can manifest quietly across your daily routine in subtle but disruptive ways:",
      manifestations: [
        {
          icon: "Zap",
          title: "Muscle Cramps & Soreness",
          desc: "Involuntary muscle tightness, calf cramps during sleep, and delayed post-exercise muscle recovery."
        },
        {
          icon: "Activity",
          title: "Eyelid Twitching & Jitters",
          desc: "Persistent twitching around the eye or restless sensations caused by hyper-excitable nerve endings."
        },
        {
          icon: "BatteryCharging",
          title: "Fatigue & Low Cellular ATP",
          desc: "Sluggish energy production because cellular ATP requires magnesium to be biologically active."
        },
        {
          icon: "Moon",
          title: "Restless & Fragmented Sleep",
          desc: "Difficulty winding down, waking up repeatedly through the night, and feeling unrested in the morning."
        }
      ],
      multiSystemBenefits: [
        {
          title: "Cellular Energy & ATP Synthesis",
          desc: "Serves as an indispensable cofactor for enzymes generating cellular ATP, fueling energy pathways in every cell.‡"
        },
        {
          title: "Cardiovascular Rhythm & Vasodilation",
          desc: "Regulates electrical activity of the heart to support normal heart rate, and promotes vasodilation to maintain healthy blood pressure and blood flow.‡"
        },
        {
          title: "Insulin Sensitivity & Sugar Metabolism",
          desc: "Supports efficient cellular glucose transport, normal insulin sensitivity, and healthy kidney function.‡"
        },
        {
          title: "Bronchial & Smooth Muscle Relaxation",
          desc: "Promotes smooth muscle relaxation in bronchial pathways, supporting open, comfortable respiratory function.‡"
        }
      ]
    },
    education: {
      intro: "Understanding Magnesium: The Essential Everyday Spark",
      cards: [
        {
          title: "What is Magnesium?",
          icon: "Activity",
          content: "Magnesium is a vital macromineral essential for human physiology, acting as an indispensable cofactor in over 600 enzymatic reactions in the human body. From supporting normal muscle and nerve function to cellular ATP energy synthesis, protein formation, and DNA repair, magnesium is involved in fundamental whole-body biochemistry."
        },
        {
          title: "What Does 'Glycinate' Mean?",
          icon: "Shield",
          content: "Magnesium Glycinate binds elemental magnesium to glycine, a calming amino acid. This chelation creates a highly stable organic bond that survives gastric acidity and is absorbed intact through amino acid pathways, making it remarkably gentle on digestive comfort compared to inorganic oxide or citrate forms."
        },
        {
          title: "Muscle & Nerve Function",
          icon: "Zap",
          content: "At the neuromuscular level, magnesium works in tandem with calcium to regulate normal muscle contraction and neuromuscular conduction. It helps facilitate the normal relaxation phase of muscle fibers following physical exertion."
        },
        {
          title: "Normal Energy Metabolism",
          icon: "BatteryCharging",
          content: "Magnesium is necessary for ATP (adenosine triphosphate) synthesis and cellular energy production. ATP must bind with a magnesium ion (Mg-ATP) to become biologically active and support metabolic pathways across every cell."
        },
        {
          title: "Elemental Magnesium vs. Compound Weight",
          icon: "HelpCircle",
          content: "Transparency matters: many brands market '1000 mg of Magnesium Glycinate' which only yields a fraction of usable mineral. Noventra explicitly guarantees 120 mg of pure, elemental magnesium per single capsule, giving you clear, reliable nutritional precision."
        }
      ]
    },
    faqList: [
      {
        q: "What time of day should I take Noventra Magnesium Glycinate?",
        a: "Most customers take 1 capsule with their evening meal or 30-60 minutes before winding down for the night, as magnesium glycinate is renowned for supporting muscular relaxation."
      },
      {
        q: "Why 120 mg per capsule?",
        a: "120 mg provides an optimal 29% of the Daily Value of pure elemental magnesium in a single easy-to-swallow capsule, designed to safely complement dietary magnesium intake without causing gastrointestinal discomfort."
      },
      {
        q: "Do other brands mix in cheaper forms? Why is Noventra strictly pure Glycinate?",
        a: "Many brands in the market practice 'buffering'—they write 'Magnesium Glycinate' on the front label, but quietly blend in cheap, poorly absorbed Magnesium Oxide (which absorbs at only ~4%). This is the exact reason why many customers suffer from diarrhea and stomach cramps with other brands. Noventra contains strictly 100% pure Magnesium Glycinate with zero oxide spiking and zero hidden blends."
      },
      {
        q: "Why does Noventra Magnesium Glycinate have zero laxative side effects compared to other forms?",
        a: "A decreased laxative effect occurs because the glycinate form is a true organic bisglycinate chelate that completely envelopes the elemental magnesium within two calming glycine amino acid molecules. Unlike cheap Magnesium Oxide or Citrate that pull excess water into the bowel via osmosis, Noventra is absorbed intact through organic dipeptide channels with maximum gastric comfort."
      },
      {
        q: "How does magnesium support heart health and blood pressure?",
        a: "Magnesium regulates the electrical activity of the heart, supporting normal heart rate and steady rhythm. Furthermore, it promotes the dilation of blood vessels (vasodilation), which helps maintain healthy blood pressure within normal ranges and enhances whole-body cardiovascular circulation.*"
      },
      {
        q: "Is Noventra Magnesium Glycinate vegan?",
        a: "Yes. Our capsules are made strictly from plant-derived cellulose and water, stabilized with ascorbyl palmitate (fat-soluble vitamin C). There is zero animal gelatin or stearate."
      }
    ],
    warnings: [
      {
        title: "ALLERGY WARNING",
        content: "This product is contraindicated in an individual with a history of hypersensitivity to any of its ingredients."
      },
      {
        title: "PREGNANCY",
        content: "If pregnant, consult your health-care practitioner before using this product."
      },
      {
        title: "INTERACTIONS",
        content: "There are no known adverse interactions or contraindications at publication date."
      },
      {
        title: "OTHER WARNINGS",
        content: "Gas, bloating, or diarrhea may occur in some individuals taking magnesium supplements. This can occur at varying amounts depending on the individual and resolves when the amount is reduced."
      }
    ]
  },

  glutathione: {
    id: "liposomal-glutathione",
    slug: "liposomal-glutathione",
    name: "Noventra Liposomal Glutathione",
    badgeTitle: "GLUTATHIONE BASED CAPSULES",
    subtitle: "Thoughtfully Formulated. Naturally Inspired.",
    aboutProduct: "Noventra Liposomal Glutathione is a premium formulation combining Liposomal Glutathione with essential nutrients to support your daily wellness routine.†",
    description: "Discover Noventra Liposomal Glutathione, a carefully formulated blend featuring primary L-Glutathione (50%) in combination with Vitamin C, Vitamin B2, Selenium, and Resveratrol to support your daily wellness routine.†",
    category: "Antioxidant-focused supplement formulation",
    heroBadge: "Primary L-Glutathione Core + 4 Supporting Synergy Nutrients",
    image: "/glutathione-bottle.png",
    rating: 4.95,
    reviewCount: 312,
    servingSize: "2 Capsules",
    servingsPerContainer: 30,
    capsuleCount: "60 Vegetarian Capsules",
    supplyDays: "30-Day Supply (1 Month)",
    priceDisplay: "$39.99",
    amazonUrl: "https://www.amazon.com/dp/B0NOVENTRA_GLUT?maas=noventra_web_glut",
    themeColor: "gold",
    haloColor: "rgba(212, 175, 55, 0.6)",
    highlights: [
      { label: "Primary Active", value: "1000 mg Liposomal", sub: "Provides 500 mg Pure L-Glutathione" },
      { label: "Supporting Nutrients", value: "4 Essential Cofactors", sub: "Vit C, B2, Selenium & Resveratrol" },
      { label: "Serving Size", value: "2 Capsules", sub: "60 Vegetarian Capsules (30 Servings)" },
      { label: "Technology", value: "Liposomal Delivery", sub: "Enhanced Absorption & Bioavailability" }
    ],
    // 4 Features from Label Left Panel
    labelFeatures: [
      {
        title: "ADVANCED LIPOSOMAL DELIVERY",
        description: "Liposomal technology for better absorption and utilization.",
        icon: "Atom"
      },
      {
        title: "PREMIUM FORMULA",
        description: "Features Glutathione (50%) with key supporting nutrients in optimal combination.",
        icon: "Sparkles"
      },
      {
        title: "DAILY WELLNESS SUPPORT†",
        description: "Supports antioxidant activity, immune health, skin health, liver health and overall wellness.‡",
        icon: "ShieldPlus"
      },
      {
        title: "QUALITY YOU CAN TRUST",
        description: "Manufactured in a cGMP certified facility and USFDA approved plant with high-quality ingredients.",
        icon: "Award"
      }
    ],
    // 6 Daily Wellness Support Pillars from Label Center Ribbon
    wellnessSupportPillars: [
      {
        title: "Supports Antioxidant Activity‡",
        desc: "Neutralizes cellular free radicals with primary L-Glutathione master antioxidant defense.‡",
        icon: "Molecule"
      },
      {
        title: "Supports Immune Health‡",
        desc: "Fortified by synergistic Vitamin C and organic Selenium yeast cofactors.",
        icon: "ShieldCross"
      },
      {
        title: "Supports Skin Health & Radiance‡",
        desc: "Aids normal collagen formation and cellular protection against oxidative stress.‡",
        icon: "SparkleFace"
      },
      {
        title: "Supports Liver Detoxification‡",
        desc: "Supports natural cellular detoxification and liver enzyme pathways.‡",
        icon: "Activity"
      },
      {
        title: "Supports Cellular Health‡",
        desc: "Protects mitochondrial integrity with Riboflavin B2 and Resveratrol polyphenol.‡",
        icon: "Dna"
      },
      {
        title: "Supports Overall Wellness†",
        desc: "A comprehensive daily foundation for whole-body vitality and energetic balance.†",
        icon: "HeartHandshake"
      }
    ],
    certifications: [
      { label: "Non-GMO", icon: "Dna" },
      { label: "Gluten Free", icon: "WheatOff" },
      { label: "Dairy Free", icon: "MilkOff" },
      { label: "Soy Free", icon: "BeanOff" },
      { label: "100% Vegan", icon: "Leaf" },
      { label: "Vegetarian Friendly", icon: "CheckCircle2" },
      { label: "Third Party Lab Tested", icon: "FlaskConical" },
      { label: "Quality Assured", icon: "Award" }
    ],
    supplementFacts: {
      servingSize: "2 Capsules",
      servingsPerContainer: "30",
      nutrients: [
        {
          name: "Vitamin C (as Ascorbic Acid)",
          amount: "50 mg",
          dailyValue: "56%"
        },
        {
          name: "Riboflavin (as Vitamin B2)",
          amount: "5 mg",
          dailyValue: "385%"
        },
        {
          name: "Selenium (as Selenium Yeast)",
          amount: "55 mcg",
          dailyValue: "100%"
        },
        {
          name: "Liposomal Glutathione (50%)",
          amount: "1000 mg",
          subtext: "(Providing 500 mg Glutathione)",
          dailyValue: "**"
        },
        {
          name: "Resveratrol (from Polygonum cuspidatum root extract)",
          amount: "100 mg",
          dailyValue: "**"
        }
      ],
      footnote: "** Daily Value (DV) not established.",
      otherIngredients: "Vegetarian Capsule, Microcrystalline Cellulose, Silicon Dioxide, Magnesium Stearate (Vegetable Source).",
      suggestedUse: "Take 2 capsules daily with water, preferably with a meal or as directed by your healthcare professional.",
      caution: "Consult your healthcare professional before use if you are pregnant, nursing, taking any medication, or have a medical condition.",
      storage: "Store in a cool, dry place away from direct sunlight, heat and moisture. Keep out of reach of children. Do not use if safety seal is damaged or missing.",
      freeFrom: ["Non-GMO", "Gluten Free", "Dairy Free", "Soy Free", "100% Vegan", "Third-Party Lab Tested", "Zero Gelatin"]
    },
    // Third-Party Laboratory Certificate of Analysis (COA)
    coa: {
      reportCode: "TR-260421-C11-03",
      reportDate: "04.21.2026",
      sampleCode: "260416C1103",
      sampleName: "Noventra Glutathione",
      batchNo: "2026-32314N",
      receivedOn: "04/16/2026",
      testOn: "04/16/2026",
      servingSize: "2 Capsules",
      labDirector: "Dr. Wenjun Wei",
      imageFile: "/coa/noventra-glutathione-coa.png",
      downloadFileName: "Noventra-Glutathione-COA.png",
      overallStatus: "CONFORMS / APPROVED",
      summary: "All active nutrient assays, liposomal matrix verification, heavy metal screenings, and microbiological safety panels strictly conform to USP and FDA standards.",
      highlights: [
        { label: "Liposomal Glutathione", value: "1026 mg/S", subtext: "Claim: 1000 mg/S", status: "PASS" },
        { label: "Active Vitamin C", value: "59.5 mg/S", subtext: "Claim: 50 mg/S", status: "PASS" },
        { label: "Heavy Metals (Pb, As, Cd, Hg)", value: "< LOQ", subtext: "All under USP limits", status: "PASS" },
        { label: "Microbial Safety", value: "Negative", subtext: "Zero pathogens detected", status: "PASS" }
      ],
      tests: [
        { test: "Total Plate Count", method: "ISO 4833-1", claim: "<10,000,000 cfu/g", result: "<10 cfu/g", status: "PASS" },
        { test: "Yeast & Mold", method: "USP<2021>", claim: "<100,000 cfu/g", result: "<10 cfu/g", status: "PASS" },
        { test: "Escherichia.coli", method: "USP<2021>", claim: "Absent/10g", result: "Absent/10g", status: "PASS" },
        { test: "Salmonella", method: "USP<2022>", claim: "Absent/10g", result: "Absent/10g", status: "PASS" },
        { test: "Total Arsenic", method: "USP<2232>", claim: "<15.000 mcg/day", result: "0.019 mcg/day", status: "PASS" },
        { test: "Cadmium", method: "USP<2232>", claim: "<5.000 mcg/day", result: "0.006 mcg/day", status: "PASS" },
        { test: "Lead", method: "USP<2232>", claim: "<5.000 mcg/day", result: "0.048 mcg/day", status: "PASS" },
        { test: "Total Mercury", method: "USP<2232>", claim: "<2.000 mcg/day", result: "<0.006 mcg/day", status: "PASS" },
        { test: "Vitamin C (as Calcium Ascorbate)", method: "HPLC", claim: "50 mg/S", result: "59.5 mg/S", status: "PASS" },
        { test: "Riboflavin (as Riboflavin-5-Phosphate)", method: "HPLC", claim: "5 mg/S", result: "6.14 mg/S", status: "PASS" },
        { test: "Selenium (as Selenomethionine)", method: "ICP-MS", claim: "55 mcg/S", result: "63.5 mcg/S", status: "PASS" },
        { test: "Liposomal L-Glutathione Complex (50% L-Glutathione)", method: "HPLC", claim: "1000 mg/S", result: "1026 mg/S", status: "PASS" },
        { test: "Resveratrol (from Polygonum cuspidatum Root Extract)", method: "HPLC", claim: "100 mg/S", result: "108 mg/S", status: "PASS" }
      ]
    },
    // Noventra vs. Typical Market Brands Comparison
    comparison: {
      tagline: "Formulation Integrity",
      title: "Why Noventra Liposomal Glutathione Stands Apart",
      subtitle: "Oral glutathione is notoriously fragile and readily degraded by stomach enzymes. Here is how Noventra solves bioavailability:*",
      noventraLabel: "Noventra Liposomal Glutathione",
      othersLabel: "Standard Glutathione Pills",
      features: [
        {
          factor: "Delivery Technology",
          noventra: "Advanced Phospholipid Liposomal Matrix",
          noventraDetail: "Shields delicate L-Glutathione inside phospholipid bilayer spheres for intact intestinal and cellular uptake.",
          others: "Unprotected Raw Oral Powder",
          othersDetail: "Over 80-90% is destroyed by gastric acid and peptidase enzymes into plain amino acids before entering the blood."
        },
        {
          factor: "True Active Dosage",
          noventra: "500 mg Pure Active L-Glutathione",
          noventraDetail: "Delivered from 1000 mg Liposomal complex standardized at 50% active reduced L-Glutathione.",
          others: "Vague or Inflated Front Labels",
          othersDetail: "Often advertise '1500 mg' or '2000 mg' unstandardized blends with negligible actual pure active content."
        },
        {
          factor: "Redox Recycling Cofactors",
          noventra: "4 Synergistic Recycling Nutrients",
          noventraDetail: "Fortified with Vitamin C, Riboflavin B2, Selenium Yeast, and Resveratrol to continuously regenerate oxidized glutathione.",
          others: "Glutathione Alone (Zero Cofactors)",
          othersDetail: "Once oxidized by a free radical, it cannot self-regenerate and becomes biologically inactive."
        },
        {
          factor: "Batch Lab Transparency",
          noventra: "Third-Party Lab Tested (ISO/IEC 17025 COA)",
          noventraDetail: "Every batch is independently third-party lab tested with HPLC & ICP-MS assay results for active nutrient potency, published and downloadable.",
          others: "Undisclosed White-Label Batches",
          othersDetail: "Zero public test results or independent verification of liposomal integrity."
        },
        {
          factor: "Purity & Free-From Standards",
          noventra: "Non-GMO, 100% Vegan, Zero Stearates",
          noventraDetail: "Free from dairy, gluten, soy, artificial colorants, and animal gelatin.",
          others: "Fillers & Synthetic Binders",
          othersDetail: "Frequently contains animal gelatin, artificial dyes, magnesium stearate, and allergen traces."
        },
        {
          factor: "Manufacturing Standard",
          noventra: "cGMP Certified Facility • USFDA Approved Plant",
          noventraDetail: "Manufactured in a cGMP certified facility and USFDA approved plant under rigorous quality control standards.",
          others: "Unverified Contract Manufacturing",
          othersDetail: "Varying quality controls with potential potency drift and stability loss over shelf-life."
        }
      ]
    },
    // Authoritative Product Details & Paragraph Monograph (Comprehensive details for Glutathione & Every Ingredient)
    productDetails: {
      sectionBadge: "Product Details & Scientific Monograph",
      title: "Noventra Liposomal Glutathione - 60 Capsules Details",
      introParagraphs: [
        "Known in human physiology as the 'master antioxidant', Glutathione is a vital tripeptide synthesized from the amino acids glutamate, cysteine, and glycine. Concentrated primarily within the liver and intracellular compartments, it acts as the primary shield protecting cellular DNA, mitochondrial membranes, and tissues from oxidative stress and environmental toxins.‡",
        "However, conventional oral glutathione supplements suffer from notoriously poor bioavailability—gastric acid and intestinal peptidase enzymes rapidly break the unprotected tripeptide down into basic amino acids before it can enter circulation. Noventra solves this with Advanced Phospholipid Liposomal Encapsulation, shielding the delicate L-Glutathione molecule inside double-layer lipid spheres that mimic human cell membranes for intact cellular delivery.‡",
        "Furthermore, glutathione does not operate in isolation. When it neutralizes free radicals, it converts into its oxidized state (GSSG). Noventra formulates primary L-Glutathione alongside four targeted co-actives—Vitamin C, Riboflavin (B2), Selenium, and Resveratrol—to power the continuous enzymatic redox recycling loop, ensuring sustained antioxidant protection throughout your day.‡"
      ],
      benefits: {
        title: "Benefits of Noventra Liposomal Glutathione",
        items: [
          "Delivers master cellular antioxidant defense to neutralize free radicals and reactive oxygen species (ROS)‡",
          "Supports Phase II liver detoxification pathways, aiding normal cellular elimination of metabolic waste and environmental pollutants‡",
          "Promotes skin luminosity, even skin tone, and healthy collagen formation against oxidative photodamage‡",
          "Fortifies healthy immune function by supporting white blood cell activity and natural killer (NK) cell proliferation‡",
          "Protects mitochondrial membrane integrity and promotes cellular ATP energy production‡",
          "Enables continuous antioxidant recycling with synergistic Vitamin C and Riboflavin B2 cofactors‡",
          "Provides selenium as the catalytic active center of the vital Glutathione Peroxidase (GPx) enzyme system‡",
          "Supports cardiovascular and microvascular health through botanical Resveratrol polyphenols‡",
          "Promotes respiratory and lung cellular protection against airborne oxidative challenges‡",
          "Assists overall healthy cellular aging and systemic longevity pathways‡"
        ]
      },
      features: {
        title: "Features of Noventra Liposomal Glutathione",
        items: [
          "Advanced phospholipid liposomal delivery matrix designed for superior gastrointestinal stability and cellular absorption",
          "Guaranteed 500 mg of pure, active reduced L-Glutathione per 2-capsule daily serving (from 1000 mg standardized liposomal complex)",
          "Complete 5-nutrient synergistic antioxidant network: L-Glutathione core + Vitamin C, Riboflavin B2, Selenium Yeast & Resveratrol",
          "100% plant-derived vegetarian capsules, Non-GMO, gluten-free, dairy-free, soy-free, and zero animal gelatin"
        ]
      },
      ingredientsBreakdown: {
        title: "Comprehensive Scientific Breakdown of Every Ingredient",
        subtitle: "A deeper look at the biochemical mechanisms and precise roles of each active component in the Noventra formula:",
        ingredients: [
          {
            name: "Liposomal L-Glutathione (50%)",
            dosage: "1000 mg (Yielding 500 mg Active Reduced L-Glutathione)",
            dv: "Daily Value (DV) not established",
            category: "Core Hero Active • Master Antioxidant",
            role: "L-Glutathione (GSH) is the primary intracellular antioxidant in the human body. It protects cell membranes, neutralizes lipid peroxides, and serves as an essential cofactor for Phase II glutathione S-transferase enzymes in the liver. Standardized to 50% active reduced GSH, our phospholipid encapsulation prevents enzymatic hydrolysis in the stomach, facilitating intact uptake through intestinal enterocytes.‡"
          },
          {
            name: "Vitamin C (as Ascorbic Acid)",
            dosage: "50 mg",
            dv: "56% Daily Value",
            category: "Essential Redox Partner • Synergy Cofactor",
            role: "Vitamin C acts as the frontline water-soluble antioxidant partner to glutathione. In human biochemistry, Vitamin C directly donates electrons to oxidized glutathione (GSSG), converting it back into active reduced GSH so it can continue neutralizing free radicals. Furthermore, it supports endogenous collagen synthesis, capillary integrity, and systemic immune resilience.‡"
          },
          {
            name: "Riboflavin (as Vitamin B2)",
            dosage: "5 mg",
            dv: "385% Daily Value",
            category: "Enzyme Catalyst • Coenzyme Precursor",
            role: "Riboflavin is the indispensable biochemical precursor to Flavin Adenine Dinucleotide (FAD). FAD serves as the mandatory coenzyme powering Glutathione Reductase (GR)—the specific enzyme responsible for reducing GSSG back to functional GSH in the presence of NADPH. Without adequate B2, glutathione remains trapped in its oxidized state and cannot fulfill its protective antioxidant duties.‡"
          },
          {
            name: "Selenium (as Selenium Yeast)",
            dosage: "55 mcg",
            dv: "100% Daily Value",
            category: "Trace Mineral Activator • Catalytic Core",
            role: "Selenium is an essential trace mineral incorporated directly into the amino acid selenocysteine, which forms the catalytic active center of Glutathione Peroxidase (GPx). GPx is the primary antioxidant enzyme responsible for detoxifying hydrogen peroxide and organic hydroperoxides into harmless water and oxygen, protecting delicate cellular membranes and DNA from oxidative injury.‡"
          },
          {
            name: "Resveratrol (from Polygonum cuspidatum root extract)",
            dosage: "100 mg",
            dv: "Daily Value (DV) not established",
            category: "Botanical Polyphenol • Longevity Phytoalexin",
            role: "Resveratrol is a natural stilbenoid polyphenol renowned for stimulating SIRT1 (sirtuin) cellular longevity pathways and supporting Nrf2 transcription factor activation—the master gene regulator of antioxidant and detoxification genes. Working in harmony with glutathione, Resveratrol provides robust protection for vascular endothelial cells and microcirculation.‡"
          }
        ]
      },
      whyImportant: {
        title: "Why is the Liposomal Redox Network Important?",
        paragraphs: [
          "Glutathione is the body's ultimate cellular defender, but oral delivery has historically been challenging. When unprotected glutathione is swallowed, digestive enzymes rapidly break it down into its constituent amino acids (cysteine, glycine, glutamate), rendering it ineffective as a whole molecule. Noventra's liposomal spheres envelop the active glutathione in a protective phospholipid bilayer, mirroring human cell membranes to allow seamless intestinal absorption and high cellular bioavailability.‡",
          "In clinical studies examining glutathione metabolism, researchers observed that combining reduced glutathione with synergistic antioxidant cofactors (such as Vitamin C, selenium, and B2) significantly elevated systemic antioxidant capacity, enhanced natural killer (NK) cell cytotoxicity, and supported markers of liver and skin health compared to isolated glutathione.‡ Long-term studies on polyphenols like Resveratrol further demonstrate sustained microvascular and cellular protection against cumulative oxidative stress.‡"
        ]
      },
      testedQuality: {
        title: "Tested for quality you can trust",
        paragraph: "This product has been third-party tested and certified by independent ISO/IEC 17025 accredited laboratories using HPLC and ICP-MS methods to verify active ingredient potency, liposomal stability, and complete absence of heavy metals, pesticides, and microbial pathogens. Manufactured in a cGMP certified facility and USFDA approved plant."
      }
    },
    education: {
      intro: "L-Glutathione Core with Supporting Synergistic Combination",
      cards: [
        {
          id: "card-1",
          name: "Liposomal L-Glutathione (50%) — MAIN ACTIVE",
          amount: "1000 mg",
          details: "Providing 500 mg Active L-Glutathione",
          dv: "Daily Value (DV) not established",
          tag: "Core Master Antioxidant",
          role: "L-Glutathione is the primary hero active ingredient in this formulation. Known in biology as the body's 'master antioxidant', it is a naturally occurring tripeptide synthesized from glutamate, cysteine, and glycine. Our advanced liposomal delivery encapsulates L-Glutathione in a protective phospholipid matrix for optimal gastric stability and cellular uptake.",
          icon: "ShieldAlert"
        },
        {
          id: "card-2",
          name: "Vitamin C (as Ascorbic Acid) — SYNERGY COFACTOR",
          amount: "50 mg",
          details: "Essential Antioxidant Partner",
          dv: "56% DV",
          tag: "Synergy & Collagen Support",
          role: "Combined strategically with L-Glutathione, Vitamin C regenerates oxidized glutathione back into its active antioxidant state, amplifying cellular defense and supporting normal collagen synthesis.",
          icon: "Sparkle"
        },
        {
          id: "card-3",
          name: "Riboflavin (as Vitamin B2) — COENZYME CATALYST",
          amount: "5 mg",
          details: "Coenzyme Precursor (FAD)",
          dv: "385% DV",
          tag: "Enzyme Cycle & Energy",
          role: "Riboflavin is a required cofactor for the enzyme glutathione reductase, which continuously powers the glutathione redox cycle and supports normal energy-yielding metabolism.",
          icon: "Flame"
        },
        {
          id: "card-4",
          name: "Selenium (as Selenium Yeast) — ENZYME ACTIVATOR",
          amount: "55 mcg",
          details: "Organic Trace Mineral Cofactor",
          dv: "100% DV",
          tag: "Thyroid & Enzyme Defense",
          role: "Selenium forms the catalytic core of glutathione peroxidase—the vital enzyme through which glutathione neutralizes cellular peroxides and protects cell membranes.",
          icon: "Globe"
        },
        {
          id: "card-5",
          name: "Resveratrol — BOTANICAL POLYPHENOL",
          amount: "100 mg",
          details: "From Polygonum cuspidatum root extract",
          dv: "Daily Value (DV) not established",
          tag: "Botanical Plant Polyphenol",
          role: "Standardized extract providing potent phytoalexin polyphenols that work alongside the glutathione network to support overall cellular vitality and longevity pathways.",
          icon: "Leaf"
        }
      ]
    },
    faqList: [
      {
        q: "Why is L-Glutathione formulated in combination with other ingredients?",
        a: "L-Glutathione functions in the body as part of a dynamic biochemical team. Combining it with Vitamin C, Riboflavin (B2), Selenium, and Resveratrol creates a complete antioxidant cycle—Vitamin C and B2 help recycle and maintain glutathione in its active state, while Selenium activates the glutathione peroxidase enzyme."
      },
      {
        q: "What does '1000 mg Liposomal Glutathione (50%) providing 500 mg Glutathione' mean?",
        a: "The liposomal structure wraps 500 mg of pure, active L-Glutathione inside 500 mg of protective phospholipid lipids (total 1000 mg complex). This shields the delicate glutathione peptide from digestive breakdown for superior cellular absorption."
      },
      {
        q: "How should I take Noventra Liposomal Glutathione?",
        a: "Take 2 vegetarian capsules daily with water, preferably alongside a meal or as directed by your healthcare professional."
      },
      {
        q: "Is the product third-party tested and vegan?",
        a: "Yes. Noventra Liposomal Glutathione is 100% vegetarian/vegan friendly, Non-GMO, Gluten Free, Dairy Free, Soy Free, and third-party lab tested for purity and potency."
      }
    ],
    warnings: [
      {
        title: "ALLERGY WARNING",
        content: "This product is contraindicated in an individual with a history of hypersensitivity to any of its ingredients."
      },
      {
        title: "PREGNANCY & NURSING",
        content: "If pregnant or nursing, consult your healthcare practitioner before using this product."
      },
      {
        title: "INTERACTIONS",
        content: "Consult your healthcare practitioner prior to use if you are taking prescription medications (particularly immunosuppressants, chemotherapy agents, or blood thinners) or have an existing medical condition."
      },
      {
        title: "STORAGE & HANDLING",
        content: "Store in a cool, dry place away from direct sunlight, heat, and moisture to preserve liposomal phospholipid stability. Keep out of reach of children."
      }
    ]
  }
};

export const comparisonData = {
  columns: ["Feature", "Noventra Magnesium Glycinate", "Noventra Liposomal Glutathione"],
  rows: [
    {
      feature: "Product Type",
      magnesium: "Pure Single-Mineral Chelate",
      glutathione: "Glutathione-Based Combination Formula"
    },
    {
      feature: "Primary Hero Ingredient",
      magnesium: "Elemental Magnesium 120 mg (from Magnesium Glycinate)",
      glutathione: "Liposomal L-Glutathione 1000 mg (Providing 500 mg Active)"
    },
    {
      feature: "Formulation Synergy Matrix",
      magnesium: "Ascorbyl Palmitate (Plant Vitamin C ester)",
      glutathione: "L-Glutathione + Vitamin C (50mg), B2 (5mg), Selenium (55mcg), Resveratrol (100mg)"
    },
    {
      feature: "Serving Size & Count",
      magnesium: "1 Capsule Daily (90 Veggie Caps • 90 Servings)",
      glutathione: "2 Capsules Daily (60 Veggie Caps • 30 Servings)"
    },
    {
      feature: "Daily Wellness Focus",
      magnesium: "Normal muscle & nerve function, neuromuscular relaxation & energy‡",
      glutathione: "Antioxidant activity, immune health, skin radiance, liver detox & cellular health‡"
    },
    {
      feature: "Quality Standards",
      magnesium: "100% Vegan, Gentle on stomach, Non-GMO, cGMP compliant",
      glutathione: "100% Vegan, Liposomal absorption, Third-party lab tested, cGMP compliant"
    },
    {
      feature: "Purchasing & Delivery",
      magnesium: "Available on Amazon Prime (1-2 Day Shipping)",
      glutathione: "Available on Amazon Prime (1-2 Day Shipping)"
    }
  ]
};

export const fdaDisclaimer = "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";
