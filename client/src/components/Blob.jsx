import React from 'react';
import { motion } from 'framer-motion';

const Blob = ({ className }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <img
      src="/ba.png"
      alt="Blob background"
      className="w-full h-full object-cover opacity-40"
    />
  </motion.div>
);

export default Blob;
