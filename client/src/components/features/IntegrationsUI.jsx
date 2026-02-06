import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglecalendar, SiZoom, SiSlack, SiGoogle, SiGoogledrive } from 'react-icons/si';
import MicrosoftTeamsIcon from '../icons/MicrosoftTeamsIcon';

const icons = [
  { component: SiGooglecalendar, name: 'Google Calendar' },
  { component: SiZoom, name: 'Zoom' },
  { component: MicrosoftTeamsIcon, name: 'Microsoft Teams' },
  { component: SiSlack, name: 'Slack' },
  { component: SiGoogledrive, name: 'Google Drive' },
  { component: SiGoogle, name: 'Google' },
];

const IntegrationsUI = () => {
  const radius = 140;

  return (
    <div className="relative w-full h-[350px] flex items-center justify-center">
      <motion.div
        className="absolute h-20 w-20 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-brand-primary border border-gray-200/80"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        You
      </motion.div>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const IconComponent = icon.component;

          return (
            <motion.div
              key={icon.name}
              className="absolute h-24 w-24 bg-white rounded-xl shadow-lg border border-gray-200/80 flex items-center justify-center"
              style={{
                top: '50%',
                left: '50%',
                translateX: '-50%',
                translateY: '-50%',
              }}
              animate={{ x, y }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconComponent className="h-10 w-10 text-brand-text-light" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default IntegrationsUI;
