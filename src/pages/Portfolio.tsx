import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import highSchoolVisit from "@/assets/portfolio/high-school-visit.jpg";
import funeralBanner from "@/assets/portfolio/funeral-banner.jpg";
import poloShirt from "@/assets/portfolio/polo-shirt.jpg";
import framePricelist from "@/assets/portfolio/frame-pricelist.png";
import socialMedia from "@/assets/portfolio/social-media.jpg";
import churchPoster from "@/assets/portfolio/church-poster.jpg";
import afrimodeBranding from "@/assets/portfolio/afrimode-branding.jpg";
import frames from "@/assets/portfolio/frames.jpg";
import youthActivities from "@/assets/portfolio/youth-activities.jpg";
import sharingSession from "@/assets/portfolio/sharing-session.jpg";
import brandedApparel from "@/assets/portfolio/branded-apparel.jpg";
import brandedAprons from "@/assets/portfolio/branded-aprons.jpg";
import rollupFood from "@/assets/portfolio/rollup-food.jpg";
import rollupCorporate from "@/assets/portfolio/rollup-corporate.jpg";
import christfestTshirt from "@/assets/portfolio/christfest-tshirt.jpg";
import youthAblazeTshirt from "@/assets/portfolio/youth-ablaze-tshirt.jpg";
import prayerConferenceTshirt from "@/assets/portfolio/prayer-conference-tshirt.jpg";
import churchFlyer from "@/assets/portfolio/church-flyer.jpg";
import weddingProgram from "@/assets/portfolio/wedding-program.jpg";
import idCardDesign from "@/assets/portfolio/id-card-design.jpg";
import streetWisdomFlyer from "@/assets/portfolio/street-wisdom-flyer.jpg";
import musicFlyer from "@/assets/portfolio/music-flyer.jpg";
import photographyPost from "@/assets/portfolio/photography-post.jpg";
import brandedBag from "@/assets/portfolio/branded-bag.jpg";

const categories = ["All", "Branding", "Printing", "Social Media", "Church Materials"];

const portfolioItems = [
  {
    id: 1,
    image: highSchoolVisit,
    title: "High School Visitation Flyer",
    category: "Church Materials",
    description: "Dynamic event flyer design for Methodist Church Ghana Youth Development Ministry school visitation program.",
  },
  {
    id: 2,
    image: funeralBanner,
    title: "Memorial Banner Design",
    category: "Printing",
    description: "Elegant funeral announcement banner with professional typography and respectful design elements.",
  },
  {
    id: 3,
    image: poloShirt,
    title: "Custom Polo Shirt Design",
    category: "Printing",
    description: "Professional branded polo shirt design with custom logo placement for corporate identity.",
  },
  {
    id: 4,
    image: framePricelist,
    title: "Frame Pricing Display",
    category: "Printing",
    description: "Professional price list design showcasing classic wooden lamination frames with various size options.",
  },
  {
    id: 5,
    image: socialMedia,
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Complete social media graphics package including posts, stories, and profile assets.",
  },
  {
    id: 6,
    image: churchPoster,
    title: "Church Conference Materials",
    category: "Church Materials",
    description: "Inspirational poster and program design for annual church conference and revival.",
  },
  {
    id: 7,
    image: afrimodeBranding,
    title: "Complete Brand Identity",
    category: "Branding",
    description: "Full branding package including logo, merchandise, stationery, and promotional materials for AFRIMODE.",
  },
  {
    id: 8,
    image: frames,
    title: "Gallery Wall Collection",
    category: "Printing",
    description: "Custom picture frame designs and photo printing for residential gallery installation.",
  },
  {
    id: 9,
    image: youthActivities,
    title: "Youth Ministry Activities",
    category: "Church Materials",
    description: "Monthly activities poster design for St. Andrews Youth Ministry featuring event schedules and details.",
  },
  {
    id: 10,
    image: sharingSession,
    title: "Educational Session Poster",
    category: "Church Materials",
    description: "Modern sharing session pamphlet design with bold typography for HIMAPROSIF x EDUBIA collaboration event.",
  },
  {
    id: 11,
    image: brandedApparel,
    title: "Corporate Apparel Set",
    category: "Printing",
    description: "Branded t-shirts and caps collection with consistent logo placement for team uniforms.",
  },
  {
    id: 12,
    image: brandedAprons,
    title: "Restaurant Branding",
    category: "Branding",
    description: "Custom branded aprons and kitchen apparel for Bites Hub restaurant with playful design elements.",
  },
  {
    id: 13,
    image: rollupFood,
    title: "Restaurant Roll-Up Banner",
    category: "Printing",
    description: "Appetizing roll-up banner design for Sabane Fast-Food featuring grilled chicken promotion.",
  },
  {
    id: 14,
    image: rollupCorporate,
    title: "Corporate Roll-Up Display",
    category: "Printing",
    description: "Professional corporate roll-up banner with service highlights and contact information.",
  },
  {
    id: 15,
    image: christfestTshirt,
    title: "Christ Fest T-Shirt",
    category: "Church Materials",
    description: "Creative church festival t-shirt design with vibrant green graphics and spiritual imagery.",
  },
  {
    id: 16,
    image: youthAblazeTshirt,
    title: "Youth Ablaze T-Shirt",
    category: "Church Materials",
    description: "Dynamic youth ministry t-shirt design for PCG Peniel with front and back artwork.",
  },
  {
    id: 17,
    image: prayerConferenceTshirt,
    title: "Prayer Conference T-Shirt",
    category: "Church Materials",
    description: "Connexional Prayer Conference 2024 t-shirt design with inspirational message and branding.",
  },
  {
    id: 18,
    image: churchFlyer,
    title: "Now Ministering Flyer",
    category: "Church Materials",
    description: "Dynamic church conference flyer design for PCOP Jumapo District featuring guest minister at SwagUp Conference.",
  },
  {
    id: 19,
    image: weddingProgram,
    title: "Wedding Program Design",
    category: "Printing",
    description: "Elegant wedding order of service program featuring teal and gold theme with ceremony details and photo sections.",
  },
  {
    id: 20,
    image: idCardDesign,
    title: "Clergy ID Card Design",
    category: "Branding",
    description: "Professional clergy and associates ID card design with lanyard for CCC City of Praise Parish.",
  },
  {
    id: 21,
    image: streetWisdomFlyer,
    title: "Street Wisdom Flyer",
    category: "Church Materials",
    description: "Vibrant urban-style church event flyer for Faith Nation featuring bold typography and dynamic visuals.",
  },
  {
    id: 22,
    image: musicFlyer,
    title: "Music Event Flyer",
    category: "Social Media",
    description: "Live recording experience flyer design for Gedeon K and Heros Jazzy music event promotion.",
  },
  {
    id: 23,
    image: photographyPost,
    title: "Photography Social Media",
    category: "Social Media",
    description: "Professional photography booking social media post design with camera focus and contact details.",
  },
  {
    id: 24,
    image: brandedBag,
    title: "Branded Packaging",
    category: "Branding",
    description: "Custom branded nylon bag design for Silver's Artistry beauty salon with logo and service list.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-yellow/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="container relative z-10 px-4 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Portfolio
            </motion.span>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Creative Work That <span className="text-gradient">Speaks Volumes</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore our collection of design and printing projects that showcase 
              our creativity, attention to detail, and commitment to excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container px-4 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-yellow to-yellow-dark text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-2xl aspect-square text-left"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-heading font-semibold text-lg mt-1">{item.title}</h3>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.div 
                  className="p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl mt-2 mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" asChild>
                      <Link to="/contact">
                        Request Similar Project
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Like What You <span className="text-gradient">See?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's create something amazing for your brand. Contact us today to discuss your project.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
