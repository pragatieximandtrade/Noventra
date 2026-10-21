import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getLenis } from '../utils/scroll';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  CheckCircle2,
  X,
  Share2,
  ChevronRight,
  Tag,
  Zap,
  Atom,
  Award,
  ExternalLink
} from 'lucide-react';
import { brandInfo, products } from '../data/products';
import AmazonButton from '../components/common/AmazonButton';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import ComplianceDisclaimerBox from '../components/common/ComplianceDisclaimerBox';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

export const blogArticles = [
  {
    id: 'magnesium-glycinate-vs-oxide',
    category: 'Mineral Science',
    categoryColor: 'emerald',
    title: 'Magnesium Glycinate vs. Magnesium Oxide: The Truth About Bioavailability & Buffering',
    subtitle: 'Why commercial brands dilute with cheap oxide and how 100% pure glycinate protects digestive comfort.‡',
    readTime: '6 min read',
    date: 'October 16, 2026',
    author: 'Noventra Scientific Research Team',
    authorRole: 'Clinical Nutrition & Formulation',
    image: '/blog-magnesium-science.png',
    featured: true,
    relatedProduct: 'magnesium',
    summary: 'Magnesium is required for over 300 biochemical reactions in the human body, from cellular ATP energy synthesis to neuromuscular relaxation.‡ Yet, not all magnesium forms behave identically once ingested. Clinical trials reveal dramatic differences in absorption and tolerability between inorganic oxide and true chelated glycinate.',
    keyTakeaways: [
      'Magnesium Oxide absorbs at only ~4%, remaining in the gut where it causes osmotic water retention, diarrhea, and cramps.‡',
      'Magnesium Glycinate is bound to two calming glycine molecules, absorbing intact through dipeptide channels without digestive distress.‡',
      'Many brands practice "buffering"—labeling the front "Magnesium Glycinate" while cutting the powder with cheap Magnesium Oxide.',
      'Noventra strictly guarantees 100% pure, unbuffered Glycinate yielding 120 mg of pure elemental magnesium per capsule.'
    ],
    paragraphs: [
      'Magnesium is an indispensable macromineral serving as a cofactor for hundreds of essential enzyme systems throughout human biology. It regulates protein synthesis, neuromuscular contraction, blood glucose management, and cellular ATP (adenosine triphosphate) energy production.‡ Despite its biological ubiquity, clinical data suggests that up to 50% of adults consume less than the recommended daily dietary magnesium intake.*',
      'When choosing a dietary supplement to bridge this gap, consumer confusion often centers on compound forms. On ingredient labels, you will frequently see Magnesium Oxide, Magnesium Citrate, Magnesium Malate, and Magnesium Glycinate. Understanding the chemistry of these forms reveals why your body—and digestive tract—reacts so differently to each one.',
      'The Bioavailability Trap: Magnesium Oxide vs. Glycinate: Magnesium Oxide consists of an elemental magnesium ion bound to oxygen. Because of oxygen\'s light molecular weight, oxide boasts a seemingly impressive mineral concentration (~60% elemental magnesium by weight). However, this molecular density comes at a severe biochemical cost: low solubility in human gastric and intestinal fluid. In peer-reviewed absorption studies, Magnesium Oxide exhibits an intestinal bioavailability rate as low as approximately 4%.‡',
      'Because the vast majority of ingested Magnesium Oxide cannot cross the intestinal epithelium, it remains trapped in the digestive tract. Here, it exerts a strong osmotic effect, drawing large quantities of water into the colon. The result is rapid laxative activity, severe abdominal cramping, and urgent diarrhea—the primary reason many people abandon magnesium supplementation.‡',
      'The Glycinate Advantage: Pure Magnesium Glycinate binds an elemental magnesium atom to two molecules of the amino acid glycine. This creates a stable organic ring structure known as a chelate. Because the mineral is shielded by organic amino acids, it does not dissociate readily in stomach acid and bypasses the saturated ion channels used by raw minerals. Instead, it is actively transported across the intestinal wall through specialized peptide transporters (PEPT1), resulting in exceptionally high absorption without disturbing osmotic fluid balance.‡',
      'The Hidden Industry Practice: "Buffering": Due to the high cost of authentic Magnesium Glycinate raw materials, many commercial manufacturers utilize a deceptive formulation practice known as "buffering." They print "Magnesium Glycinate" boldly across the front bottle, but use a raw material blend that has been quietly spiked with cheap Magnesium Oxide. This artificially inflates the mineral yield while slashing manufacturing costs—yet leaves the unsuspecting consumer vulnerable to stomach upset.',
      'The Noventra Standard: Noventra contains strictly 100% pure, unbuffered Magnesium Glycinate Chelate. There is zero Magnesium Oxide spiking, zero animal gelatin, and zero synthetic excipients. Each single vegetarian capsule delivers a verified 120 mg of pure elemental magnesium—manufactured in a cGMP certified facility and USFDA approved plant, verified by independent third-party laboratories.'
    ]
  },
  {
    id: 'liposomal-glutathione-absorption',
    category: 'Antioxidant Defense',
    categoryColor: 'amber',
    title: 'The Glutathione Dilemma: Why Oral Master Antioxidants Need Liposomal Protection',
    subtitle: 'Overcoming gastric peptidases: How phospholipid encapsulation delivers active L-Glutathione straight to your cells.‡',
    readTime: '5 min read',
    date: 'October 14, 2026',
    author: 'Dr. E. Vance, Ph.D.',
    authorRole: 'Nutritional Biochemistry Specialist',
    image: '/glutathione-bottle.png',
    featured: false,
    relatedProduct: 'glutathione',
    summary: 'L-Glutathione is celebrated in human biology as the "Master Antioxidant", present in virtually every cell to neutralize reactive oxygen species and preserve mitochondrial integrity.‡ However, conventional unencapsulated glutathione pills face almost total destruction in the stomach.',
    keyTakeaways: [
      'Standard oral glutathione is hydrolyzed by stomach acid and digestive enzymes like gamma-glutamyl transferase (GGT).‡',
      'Liposomal delivery shields the fragile tripeptide inside a protective double-layer phospholipid sphere made from non-GMO sunflower lecithin.',
      'Liposomes mimic human cell membranes, enabling direct cellular fusion and significantly elevated plasma glutathione levels.‡',
      'Noventra delivers 1000 mg of Liposomal Glutathione complex (providing 500 mg active L-Glutathione) per serving.'
    ],
    paragraphs: [
      'Every single cell in your body produces L-Glutathione, a vital tripeptide composed of glutamate, cysteine, and glycine. Inside the cytoplasm and mitochondria, glutathione neutralizes free radicals, regenerates exogenous antioxidants like Vitamin C and Vitamin E, supports hepatic phase II detoxification pathways, and maintains immune cell proliferation.‡',
      'Despite its paramount biological role, your body\'s natural production of glutathione declines steadily with age, physical stress, environmental pollution, and poor diet. Supplementation seems the obvious solution—yet for decades, clinical researchers debated whether oral glutathione could actually raise systemic cellular concentrations.*',
      'The Digestive Degradation Hurdle: When conventional unencapsulated glutathione enters the stomach, it encounters a harsh acidic environment (pH 1.5 - 2.5) and powerful digestive peptidases. In the upper small intestine, an enzyme called gamma-glutamyl transferase (GGT) rapidly cleaves the peptide bonds that hold glutathione together, breaking it down into individual amino acids before it can ever enter circulation as an intact molecule.‡',
      'The Liposomal Breakthrough: Liposomal technology solves this fundamental biological dilemma. By encapsulating pure reduced L-Glutathione inside microscopic bilayer spheres called liposomes (composed of pure phospholipids derived from non-GMO sunflower lecithin), the fragile peptide is completely shielded from enzymatic destruction.',
      'Because these phospholipid bilayers closely mirror the architecture of human cellular membranes, liposomes survive gastric transit intact. Upon reaching the intestinal epithelium, they are absorbed via endocytosis or direct membrane fusion, directly delivering the active tripeptide into the bloodstream and target cells.‡',
      'Every batch of Noventra Liposomal Glutathione is third-party lab tested to ensure liposomal vesicle integrity and strict 500 mg active yield, manufactured in a cGMP certified facility and USFDA approved plant.'
    ]
  },
  {
    id: 'redox-recycling-cofactors',
    category: 'Cellular Biochemistry',
    categoryColor: 'amber',
    title: 'The Redox Cycle: Why Glutathione Requires Vitamin C, B2, and Selenium to Function',
    subtitle: 'Glutathione does not work alone. Learn how synergistic recycling nutrients turn spent GSSG back into active GSH.‡',
    readTime: '4 min read',
    date: 'October 10, 2026',
    author: 'Noventra Research Editorial',
    authorRole: 'Nutraceutical Formulations',
    image: '/glutathione-bottle.png',
    featured: false,
    relatedProduct: 'glutathione',
    summary: 'When L-Glutathione neutralizes a free radical, it becomes oxidized (GSSG) and loses its antioxidant potency. Without dedicated enzymatic cofactors, it cannot self-regenerate. Discover why multi-nutrient synergy is critical.‡',
    keyTakeaways: [
      'Active Glutathione (GSH) turns into oxidized Glutathione Disulfide (GSSG) upon neutralizing reactive oxygen species.‡',
      'Vitamin B2 (Riboflavin) serves as the indispensable prosthetic cofactor for the Glutathione Reductase enzyme.‡',
      'Selenium is a core structural element of Glutathione Peroxidase (GPx), which neutralizes harmful lipid peroxides.‡',
      'Vitamin C and Resveratrol provide continuous outer redox buffering to protect cellular reserves.'
    ],
    paragraphs: [
      'In biochemistry, antioxidants operate in interconnected electronic cascades, not isolated silos. When reduced L-Glutathione (GSH) donates an electron to neutralize a harmful reactive oxygen species (ROS), it binds with another spent glutathione molecule to form Glutathione Disulfide (GSSG)—the oxidized, inert state.‡',
      'If your cells lack the biochemical tools to convert GSSG back into active GSH, the cellular redox ratio drops, triggering oxidative stress and mitochondrial fatigue. This is why standalone glutathione products often fall short of consumer expectations.*',
      'The Recycling Engine: Noventra Liposomal Glutathione was formulated with a clinical 5-in-1 synergy complex specifically designed to keep the redox wheel spinning continuously.',
      '1. Riboflavin (Vitamin B2 as B2 Riboflavin): Riboflavin is the required precursor for FAD (flavin adenine dinucleotide), the essential coenzyme that powers Glutathione Reductase. This enzyme takes spent GSSG and catalytically regenerates two molecules of active, protective GSH.‡',
      '2. Selenium (as bioavailable Selenium Yeast): Selenium is incorporated directly into the selenocysteine active center of Glutathione Peroxidase (GPx), the body\'s premier enzymatic shield against toxic lipid hydroperoxides.‡',
      '3. Vitamin C (as Ascorbic Acid): Vitamin C acts as an immediate front-line scavenger in aqueous cellular compartments, sparing glutathione reserves and regenerating alpha-tocopherol (Vitamin E).‡',
      '4. Resveratrol (Polygonum cuspidatum root): A potent natural polyphenol that stimulates Nrf2 gene expression, prompting your cells to synthesize more endogenous antioxidant enzymes naturally.‡'
    ]
  },
  {
    id: 'elemental-mineral-labels',
    category: 'Supplement Transparency',
    categoryColor: 'emerald',
    title: 'How to Read a Dietary Supplement Label: Elemental Mineral vs. Compound Weight',
    subtitle: 'The number on the front of the bottle is not always what you absorb. Demystifying dietary supplement facts.',
    readTime: '5 min read',
    date: 'October 08, 2026',
    author: 'Quality Assurance Department',
    authorRole: 'Regulatory & Lab Testing',
    image: '/magnesium-bottle.png',
    featured: false,
    relatedProduct: 'magnesium',
    summary: 'Deceptive supplement labeling is one of the biggest challenges facing health-conscious consumers today. Learn the difference between raw compound weight and actual usable elemental yield.',
    keyTakeaways: [
      'Compound weight represents the total mass of the mineral plus its chelating molecules (e.g. magnesium + glycine).',
      'Elemental yield is the actual quantity of usable mineral your body receives and metabolizes.',
      'A bottle claiming "1000 mg Magnesium Glycinate" often only provides 100 mg - 140 mg of elemental magnesium.',
      'Always look at the Supplement Facts box for the "% Daily Value" and explicit elemental mineral breakdown.'
    ],
    paragraphs: [
      'Walk down any supplement aisle or browse Amazon, and you will see bottles with bold, giant claims: "1,500 mg Magnesium!", "2,000 mg Calcium!", or "1,000 mg Zinc!". To the everyday shopper, these numbers look impressive. However, there is a crucial distinction that most supplement brands hope you never discover: Compound Weight versus Elemental Weight.*',
      'What is Compound Weight? Minerals like magnesium cannot exist as bare, unattached elemental ions in nature or in a capsule. They must be chemically bonded to a carrier molecule, such as an amino acid (glycine in Magnesium Glycinate) or an acid (citric acid in Magnesium Citrate). When a manufacturer lists "1,000 mg of Magnesium Glycinate", they are stating the combined weight of the magnesium plus the bulky glycine molecules.',
      'What is Elemental Yield? Elemental yield refers to the actual weight of the pure mineral itself, completely separate from its carrier molecules. In pure Magnesium Glycinate, elemental magnesium accounts for approximately 12% to 14% of the total molecular weight. Therefore, 1,000 mg of pure Magnesium Glycinate powder provides roughly 120 mg to 140 mg of actual, usable magnesium.',
      'The Deceptive Marketing Trick: Brands that print "1,000 mg Magnesium Glycinate" on the front label without clearly specifying elemental yield often mislead consumers into believing they are receiving 1,000 mg of pure magnesium. Even worse, some brands cut their formula with Magnesium Oxide to boost elemental numbers artificially.*',
      'The Noventra Commitment: Noventra practices total label transparency. Our bottle clearly states: 120 mg Elemental Magnesium per single capsule (providing 29% Daily Value). What is printed on our label is exactly what is inside every single batch.'
    ]
  },
  {
    id: 'third-party-testing-standards',
    category: 'Quality & Testing',
    categoryColor: 'emerald',
    title: 'Inside ISO/IEC 17025 Testing: Why Every Noventra Batch Carries a Public COA',
    subtitle: 'Behind the laboratory doors: How ICP-OES and HPLC testing guarantee safety from heavy metals and verify nutrient potency.',
    readTime: '4 min read',
    date: 'October 05, 2026',
    author: 'Analytical Chemistry Division',
    authorRole: 'Third-Party Laboratory Oversight',
    image: '/magnesium-bottle.png',
    featured: false,
    relatedProduct: 'magnesium',
    summary: 'In the wellness industry, blind trust is not enough. Discover the gold standard of analytical verification and why Noventra publishes high-resolution Certificates of Analysis directly on our website.',
    keyTakeaways: [
      'ISO/IEC 17025 is the globally recognized quality standard for analytical testing laboratories.',
      'ICP-OES (Inductively Coupled Plasma) verifies heavy metal purity down to parts-per-billion (ppb) limits for Lead, Arsenic, Cadmium, and Mercury.',
      'HPLC (High-Performance Liquid Chromatography) confirms exact active nutrient milligrams and prevents potency drift over shelf-life.',
      'Noventra publishes full official lab reports for complete public inspection and batch traceability.'
    ],
    paragraphs: [
      'Dietary supplements are taken to support wellness and vitality. Yet, without rigorous third-party verification, dietary supplements can carry hidden risks—from microbial contamination and heavy metal accumulation to degraded active compounds that fail to deliver the advertised potency.*',
      'At Noventra, we operate on a core premise: Quality is not a marketing buzzword; it is an analytical measurement. Every batch of our products is manufactured in a cGMP certified facility and USFDA approved plant, followed by rigorous independent analysis by an ISO/IEC 17025 accredited laboratory.',
      'Heavy Metals Screening (USP <2232>): Botanical ingredients and chelated minerals can absorb heavy metals from soil and water. Our laboratory screens every batch using ICP-MS and ICP-OES technology for Lead, Cadmium, Arsenic, and Total Mercury. Our specifications adhere strictly to United States Pharmacopeia safety thresholds.',
      'Microbiological Purity (USP <2021> & <2022>): We verify the total absence of harmful pathogens, including E. coli, Salmonella, and Staphylococcus aureus, as well as total yeast and mold counts.',
      'Assay Potency Confirmation: We do not rely on raw material supplier certificates. Independent chemists test the finished capsules to verify that 100% of the active nutrient claims are met or exceeded over the entire shelf-life.',
      'You can inspect and download the official Certificate of Analysis for your product batch directly on our website at any time.'
    ]
  },
  {
    id: 'glycine-neurobiology-sleep',
    category: 'Wellness Science',
    categoryColor: 'emerald',
    title: 'Neuromuscular Calm: How Glycine and Magnesium Synergize for Restorative Sleep',
    subtitle: 'Exploring the inhibitory neurochemistry that eases nocturnal muscle tension and promotes deep slow-wave rest.‡',
    readTime: '5 min read',
    date: 'October 01, 2026',
    author: 'Noventra Wellness Insights',
    authorRole: 'Sleep & Neuromuscular Research',
    image: '/magnesium-bottle.png',
    featured: false,
    relatedProduct: 'magnesium',
    summary: 'Why is Magnesium Glycinate the preferred evening supplement for millions of people worldwide? A look at how magnesium ions work together with the calming neurotransmitter glycine.‡',
    keyTakeaways: [
      'Magnesium acts as a natural physiological NMDA receptor blocker, moderating stimulating glutamate activity.‡',
      'Glycine is an inhibitory neurotransmitter that helps lower nocturnal core body temperature to facilitate sleep onset.‡',
      'Magnesium regulates calcium flow across muscle fiber membranes, promoting relaxation after daily contraction.‡',
      'Taking 1 capsule with your evening meal or before bed supports whole-body tranquility without morning grogginess.'
    ],
    paragraphs: [
      'Quality sleep is the fundamental biological bedrock upon which cellular repair, cognitive clarity, immune competence, and metabolic health are constructed. Yet modern lifestyles—dominated by blue light, evening stimulation, and chronic stress—frequently disrupt sleep architecture.*',
      'While synthetic sleep aids often induce artificial sedation accompanied by morning brain fog, nutritional science highlights the powerful calming synergy between elemental magnesium and the amino acid glycine.',
      'The Glutamate / GABA Balance: In the central nervous system, glutamate serves as the primary excitatory neurotransmitter, while GABA (gamma-aminobutyric acid) provides calming, inhibitory signaling. Magnesium plays a critical regulatory role by sitting inside NMDA receptors, acting as a gatekeeper to prevent excess calcium influx and over-excitation of neurons.‡',
      'The Role of Glycine: Glycine is far more than a carrier molecule in Magnesium Glycinate. In neurobiology, glycine operates as an inhibitory neurotransmitter in the brainstem and spinal cord. Clinical studies demonstrate that oral glycine supplementation helps dilate peripheral blood vessels, facilitating a gentle decline in nocturnal core body temperature—the biological signal that initiates natural, deep sleep cycles.‡',
      'Muscular Relaxation: At the muscular level, calcium stimulates muscle fiber contraction, while magnesium acts as its natural antagonist, allowing fibers to relax. Supplemental magnesium glycinate helps ease nocturnal leg restlessness, tightness, and tension.‡',
      'Unlike habit-forming sedatives, Noventra Magnesium Glycinate works in harmony with your body\'s natural circadian rhythms to support calm, restorative nights and energized, clear-headed mornings.'
    ]
  }
];

export const renderTextWithFootnotes = renderWithFootnotes;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and stop Lenis while article modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      const lenis = getLenis();
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      const lenis = getLenis();
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      const lenis = getLenis();
      if (lenis) lenis.start();
    };
  }, [selectedArticle]);

  const categories = [
    'All',
    'Mineral Science',
    'Antioxidant Defense',
    'Cellular Biochemistry',
    'Supplement Transparency',
    'Quality & Testing',
    'Wellness Science'
  ];

  const filteredArticles = activeCategory === 'All'
    ? blogArticles
    : blogArticles.filter(art => art.category === activeCategory);

  const featuredArticle = blogArticles.find(art => art.featured) || blogArticles[0];

  return (
    <div className="space-y-16 md:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      
      {/* 1. Header & Hero Intro */}
      <section className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-noventra-gold" />
          <span>The Noventra Journal • Evidence-Based Wellness</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-noventra-forest leading-tight">
          Science, Sourcing & Cellular Health
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
          Explore in-depth articles on bioavailable nutrient forms, clinical cofactors, label transparency, and the rigorous science behind mindful daily supplementation.
        </p>

        {/* Quick Highlights Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1.5 bg-noventra-sand/70 px-3 py-1 rounded-full border border-noventra-gold/25 font-medium">
            <FlaskConical className="w-3.5 h-3.5 text-noventra-leaf" />
            <span>Third-Party Lab Tested</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-noventra-sand/70 px-3 py-1 rounded-full border border-noventra-gold/25 font-medium">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>cGMP Certified & USFDA Plant</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-noventra-sand/70 px-3 py-1 rounded-full border border-noventra-gold/25 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-noventra-leaf" />
            <span>100% Label Transparency</span>
          </span>
        </div>
      </section>

      {/* 2. Featured Article Banner */}
      {featuredArticle && (
        <section>
          <div className="relative rounded-3xl bg-gradient-to-br from-noventra-forest via-[#0f4433] to-noventra-dark text-white p-8 sm:p-12 md:p-14 border border-noventra-gold/40 shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-noventra-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-noventra-leaf/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-noventra-gold text-noventra-dark text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Featured Article
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-semibold border border-white/15">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-noventra-sand-200/70 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug">
                  {renderTextWithFootnotes(featuredArticle.title, true)}
                </h2>

                <p className="text-xs sm:text-sm text-noventra-sand-200/90 leading-relaxed font-light line-clamp-3">
                  {renderTextWithFootnotes(featuredArticle.summary, true)}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="px-6 py-3 rounded-full bg-noventra-gold hover:bg-amber-400 text-noventra-dark font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-400/25 cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/products/magnesium-glycinate"
                    className="text-xs font-semibold text-noventra-sand-200 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Magnesium Glycinate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Article Science Visual Callout */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="relative p-5 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-noventra-gold/50 backdrop-blur-md text-center max-w-xs w-full shadow-2xl space-y-3.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    <span>Molecular Science</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-noventra-gold/20 text-noventra-gold border border-noventra-gold/40">
                      100% Pure Chelate
                    </span>
                  </div>

                  {/* 1:1 Square Image Showcase */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-noventra-gold/30 shadow-lg bg-noventra-dark/40">
                    <img
                      src="/blog-magnesium-science.png"
                      alt="Magnesium Glycinate Molecular Chelate Structure"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noventra-dark/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white font-medium bg-noventra-dark/75 backdrop-blur-sm px-2.5 py-1 rounded-xl border border-white/10">
                      <span>Glycinate Chelate Ring</span>
                      <span className="text-amber-300 font-semibold">{renderTextWithFootnotes('High Bioavailability', true)}</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {renderTextWithFootnotes('100% Pure Magnesium Glycinate', true)}
                    </div>
                    <div className="text-[11px] text-noventra-sand-200/80 mt-0.5">
                      {renderTextWithFootnotes('Zero Oxide Spiking • 120mg Elemental Yield', true)}
                    </div>
                  </div>

                  <div className="text-[10px] text-amber-300/80 font-semibold uppercase tracking-wider pt-0.5 flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Full Science Review</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Category Filter Tabs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-noventra-forest">
              Browse All Articles
            </h3>
            <p className="text-xs text-gray-500">
              Filter by biological pathway, ingredient science, or quality standard.
            </p>
          </div>
          <span className="text-xs font-semibold text-noventra-leaf bg-noventra-sand/80 px-3 py-1 rounded-full border border-noventra-gold/20">
            {filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-noventra-forest text-noventra-gold shadow-md scale-105'
                  : 'bg-white hover:bg-noventra-sand text-gray-700 border border-gray-200 hover:border-noventra-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="flex flex-col justify-between p-7 rounded-3xl bg-white border border-noventra-gold/25 shadow-sm hover:shadow-xl hover:border-noventra-gold/60 transition-all duration-300 group"
          >
            <div className="space-y-4">
              
              {/* Category & Read Time */}
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  article.categoryColor === 'amber'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                }`}>
                  {article.category}
                </span>
                <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              {/* Article Title */}
              <h3
                onClick={() => setSelectedArticle(article)}
                className="font-serif font-bold text-lg text-noventra-forest group-hover:text-noventra-leaf transition-colors cursor-pointer leading-snug line-clamp-2"
              >
                {renderTextWithFootnotes(article.title)}
              </h3>

              {/* Subtitle / Excerpt */}
              <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-3">
                {renderTextWithFootnotes(article.summary)}
              </p>

              {/* Key Takeaways Preview Pills */}
              <div className="p-3.5 rounded-2xl bg-noventra-sand/50 border border-noventra-gold/20 space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-noventra-forest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-noventra-gold" />
                  <span>Key Science Insight:</span>
                </div>
                <p className="text-[11px] text-gray-700 leading-snug">
                  {renderTextWithFootnotes(article.keyTakeaways[0])}
                </p>
              </div>

            </div>

            {/* Card Footer: Author & Read CTA */}
            <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-noventra-forest block">
                  {article.author}
                </span>
                <span className="text-[10px] text-gray-400 block">
                  {article.date}
                </span>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-1 text-xs font-bold text-noventra-forest group-hover:text-noventra-leaf transition-colors cursor-pointer"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* 5. Bottom Brand Transparency Guarantee Callout */}
      <section className="rounded-3xl bg-white border border-noventra-gold/30 p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-noventra-leaf font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-noventra-leaf" />
            <span>Formulation Integrity Guarantee</span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-noventra-forest">
            Ready to experience thoughtful supplementation?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
            Every Noventra batch is 100% vegetarian, manufactured in a cGMP certified facility and USFDA approved plant, and third-party lab tested with downloadable Certificates of Analysis.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
          <Link
            to="/shop"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-noventra-forest hover:bg-noventra-leaf text-white font-semibold text-xs uppercase tracking-wider text-center transition-colors shadow-md"
          >
            Compare Formulations
          </Link>
          <AmazonButton
            url={brandInfo.amazonStoreUrl}
            productName="Noventra Store"
            size="md"
            variant="gold"
          />
        </div>
      </section>

      {/* 6. Interactive Article Reading Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedArticle && (
            <div
              data-lenis-prevent
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
            >
              {/* Dark Full-Screen Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-noventra-dark/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Dialog Content */}
              <motion.div
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                className="relative w-full max-w-3xl max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-noventra-gold/40 flex flex-col overflow-hidden z-10"
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar (Sticky Header) */}
                <div className="px-6 sm:px-8 py-4 sm:py-5 border-b border-gray-100 flex items-center justify-between bg-white/95 backdrop-blur-sm z-20 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-noventra-forest text-noventra-gold">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {selectedArticle.readTime} • {selectedArticle.date}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-full bg-noventra-sand hover:bg-noventra-sand-200 text-noventra-forest transition-colors shadow-xs flex-shrink-0 cursor-pointer"
                    aria-label="Close article"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Article Body */}
                <div
                  data-lenis-prevent
                  className="p-6 sm:p-8 md:p-10 overflow-y-auto flex-1 min-h-0 space-y-6 text-gray-700 overscroll-contain"
                  style={{
                    WebkitOverflowScrolling: 'touch',
                    overscrollBehavior: 'contain'
                  }}
                  onWheel={(e) => e.stopPropagation()}
                >
                  {/* Article Header */}
                  <div className="space-y-3 pb-6 border-b border-gray-100">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest leading-snug">
                      {renderTextWithFootnotes(selectedArticle.title)}
                    </h2>
                    <p className="text-sm text-noventra-leaf font-medium">
                      {renderTextWithFootnotes(selectedArticle.subtitle)}
                    </p>
                    <div className="text-xs text-gray-500 pt-1">
                      Written by <strong className="text-noventra-forest">{selectedArticle.author}</strong> ({selectedArticle.authorRole})
                    </div>
                  </div>

                  {/* Key Takeaways Box */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-noventra-sand to-[#f5edd9] border border-noventra-gold/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-noventra-forest">
                        <Sparkles className="w-4 h-4 text-noventra-gold" />
                        <span>Executive Summary & Key Takeaways</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium tracking-wide">
                        *See regulatory disclosures below
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {selectedArticle.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-noventra-leaf flex-shrink-0 mt-0.5" />
                          <span>{renderTextWithFootnotes(takeaway)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Full Article Paragraphs */}
                  <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-700 font-light">
                    {selectedArticle.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>
                        {renderTextWithFootnotes(para)}
                      </p>
                    ))}
                  </div>

                  {/* Related Product Action Banner */}
                  {selectedArticle.relatedProduct && (
                    <div className="p-5 rounded-2xl bg-noventra-forest text-white border border-noventra-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                          Related Formulation
                        </div>
                        <div className="font-serif font-bold text-base text-white">
                          {selectedArticle.relatedProduct === 'magnesium'
                            ? 'Noventra Magnesium Glycinate'
                            : 'Noventra Liposomal Glutathione'}
                        </div>
                        <div className="text-xs text-noventra-sand-200/80">
                          {renderTextWithFootnotes('100% Pure • Third-Party Lab Tested • Recommended by Healthcare Professionals¹ • Daily Wellness Support†', true)}
                        </div>
                      </div>

                      <Link
                        to={selectedArticle.relatedProduct === 'magnesium'
                          ? '/products/magnesium-glycinate'
                          : '/products/liposomal-glutathione'}
                        onClick={() => setSelectedArticle(null)}
                        className="px-5 py-2.5 rounded-full bg-noventra-gold hover:bg-amber-400 text-noventra-dark font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0"
                      >
                        View Formulation
                      </Link>
                    </div>
                  )}

                  {/* Regulatory & FDA Compliance Footnotes Box */}
                  <ComplianceDisclaimerBox variant="sand" className="mt-8" />

                </div>

                {/* Modal Footer (Sticky Bottom) */}
                <div className="px-6 sm:px-8 py-3.5 sm:py-4 border-t border-gray-100 bg-noventra-sand/60 flex items-center justify-between text-xs text-gray-500 flex-shrink-0 z-20">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-noventra-leaf" />
                    <span>Noventra Evidence-Based Education</span>
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-4 py-1.5 rounded-full bg-white border border-gray-200 font-semibold text-noventra-forest hover:bg-noventra-forest hover:text-white transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
