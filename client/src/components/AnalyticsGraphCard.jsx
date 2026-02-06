import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsGraphCard = ({ className, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: '-5deg' },
    visible: { opacity: 1, y: 0, rotate: '0deg' },
  };

  const bars = [ { month: 'Jan', height: 'h-6' }, { month: 'Feb', height: 'h-8' }, { month: 'Mar', height: 'h-10' }, { month: 'Apr', height: 'h-14' }, { month: 'May', height: 'h-10' }, { month: 'Jun', height: 'h-8' } ];

  return (
    <motion.div
      className={`bg-brand-green-dark rounded-xl p-4 border border-gray-700 shadow-lg w-64 ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="w-full h-20 flex items-end gap-2 justify-center">
          {bars.map((bar, i) => (
            <div key={bar.month} className="flex-1 flex flex-col items-center gap-1 group">
              <div className={`w-full ${bar.height} bg-white/20 rounded-full group-hover:bg-white/40 transition-colors`} />
              <span className="text-xs text-white/50">{bar.month}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p className="text-white font-semibold text-sm">Contacted</p>
      </div>
    </motion.div>
  );
};

export default AnalyticsGraphCard;
