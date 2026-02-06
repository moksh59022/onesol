import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CandidateProfileCard = ({ className, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: '5deg' },
    visible: { opacity: 1, y: 0, rotate: '0deg' },
  };

  return (
    <motion.div
      className={`bg-white rounded-xl p-4 border border-gray-200/80 shadow-lg w-72 ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-3 mb-3">
        <img src="https://randomuser.me/api/portraits/women/71.jpg" alt="Tina S." className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-bold text-sm text-brand-text">Tina S.</p>
          <p className="text-xs text-brand-text-light">Software Engineer</p>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 tracking-wider mb-2">QUALIFICATIONS</p>
        <div className="flex gap-2 mb-3">
          <button className="flex-1 text-left text-xs p-2 bg-gray-50 rounded-md border flex items-center justify-between">Positives <ChevronDown className="h-3 w-3" /></button>
          <button className="flex-1 text-left text-xs p-2 bg-gray-50 rounded-md border flex items-center justify-between">Negatives <ChevronDown className="h-3 w-3" /></button>
        </div>
        <p className="text-xs font-semibold text-gray-400 tracking-wider mb-2">COMMENTS & UPDATES</p>
        <div className="text-xs text-brand-text-light p-2 bg-gray-50 rounded-md border">
          <p>Perfect fit!</p>
          <p className="text-xs">She speaks three languages fluently.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CandidateProfileCard;
