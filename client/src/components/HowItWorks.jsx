import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Search, Target, Zap } from 'lucide-react';

const HowItWorks = () => {
  const cards = [
    {
      title: "A high-quality talent pool",
      cardImage: "1-Photoroom.png",
      description: "Access our curated database of top-tier candidates with verified skills and experience"
    },
    {
      title: "Flexible talent acquisition options",
      cardImage: "23-Photoroom.png",
      description: "Choose from full-time, part-time, contract, or project-based hiring solutions"
    },
    {
      title: "Personalized diversity search criteria",
      cardImage: "3-Photoroom.png",
      description: "Set specific diversity parameters to find candidates that match your company values"
    },
    {
      title: "Integrations are a walk in the park",
      cardImage: "4-Photoroom.png",
      description: "Seamlessly connect with your existing HR tools and workflow systems"
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="solutions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Smart recruitment analytics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful tools to find, evaluate, and hire the best candidates
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden h-64 shadow-md rounded-2xl"
              style={{
                backgroundImage: `url('/${card.cardImage}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Take a product tour
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
