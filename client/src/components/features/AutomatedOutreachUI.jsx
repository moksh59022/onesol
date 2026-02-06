import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AutomatedOutreachUI = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200/80 flex items-center justify-center h-full">
      <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200/80">
        <p className="text-lg font-semibold text-brand-text">Enable automated outreach</p>
        <div
          onClick={() => setIsEnabled(!isEnabled)}
          className={`flex items-center w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${isEnabled ? 'bg-brand-primary' : 'bg-gray-300'}`}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            className="h-6 w-6 bg-white rounded-full shadow-md mx-1"
            style={{ marginLeft: isEnabled ? 'auto' : '0.25rem', marginRight: isEnabled ? '0.25rem' : 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AutomatedOutreachUI;
