import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-white pt-28 pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-brand-text tracking-tighter leading-tight"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              The <span className="text-brand-primary">only hiring platform</span> you’ll ever need
            </motion.h1>
            <motion.p
              className="mt-6 text-lg lg:text-xl text-brand-text-light max-w-lg mx-auto lg:mx-0"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              RecruiterAI helps you find better candidates, conduct more focused interviews, and make data-driven hiring decisions.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <button className="px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2">
                <span>Request a demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Dynamic image composition */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[45%] h-[80%] bg-gradient-to-l from-brand-primary/5 to-transparent z-0"></div>
            
            {/* Main image */}
            <div className="relative z-10">
              <div className="relative group">
                <motion.img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="HR professional collaborating with candidate"
                  className="rounded-[2rem] shadow-2xl w-[480px] h-[520px] object-cover ring-8 ring-white transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-400/20 via-pink-500/15 to-purple-600/20 pointer-events-none"></div>
              </div>
              
              {/* Analytics card */}
              <motion.div
                className="absolute -left-4 bottom-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl w-80 border border-brand-primary/10"
                variants={{ hidden: { opacity: 0, x: -20, y: 20 }, visible: { opacity: 1, x: 0, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BarChart className="w-4 h-4 text-brand-secondary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-text-light">Pipeline Health</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full mb-2 overflow-hidden">
                  <div className="h-full bg-brand-secondary w-[85%] rounded-full"></div>
                </div>
                <p className="text-xs text-brand-text font-medium">85% Match Rate for recent searches</p>
              </motion.div>
              
              {/* Stats card */}
              <motion.div
                className="absolute -right-12 bottom-20 bg-white p-6 rounded-2xl shadow-2xl w-64 border border-gray-200 hidden xl:block"
                variants={{ hidden: { opacity: 0, x: 20, y: 20 }, visible: { opacity: 1, x: 0, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-brand-text mb-3">Success Rate</span>
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 80 80" className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="url(#progressGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 35 * 0.92} ${2 * Math.PI * 35}`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#3B82F6'}} />
                          <stop offset="100%" style={{stopColor: '#10B981'}} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-brand-text">92%</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-600">Placement success</p>
                    <p className="text-xs text-green-600 font-bold">↑ 12% vs last year</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
