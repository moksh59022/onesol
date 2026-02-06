import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Clock, CheckCircle, Zap } from 'lucide-react';
import IntegrityMonitoringUI from './features/IntegrityMonitoringUI';
import AIScoringUI from './features/AIScoringUI';
import AutomatedOutreachUI from './features/AutomatedOutreachUI';
import IntegrationsUI from './features/IntegrationsUI';

const LiveStats = () => {
  const [stats, setStats] = useState({
    candidates: 1247,
    interviews: 892,
    hires: 156,
    timeSaved: 89
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        candidates: prev.candidates + Math.floor(Math.random() * 3),
        interviews: prev.interviews + Math.floor(Math.random() * 2),
        hires: prev.hires + (Math.random() > 0.7 ? 1 : 0),
        timeSaved: prev.timeSaved + Math.floor(Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    { icon: Users, label: 'Candidates Screened', value: stats.candidates, color: 'text-blue-600', bgColor: 'bg-blue-100', key: 'candidates' },
    { icon: Clock, label: 'Interviews Scheduled', value: stats.interviews, color: 'text-green-600', bgColor: 'bg-green-100', key: 'interviews' },
    { icon: CheckCircle, label: 'Successful Hires', value: stats.hires, color: 'text-purple-600', bgColor: 'bg-purple-100', key: 'hires' },
    { icon: Zap, label: 'Hours Saved', value: stats.timeSaved, color: 'text-orange-600', bgColor: 'bg-orange-100', key: 'timeSaved' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-text mb-2">Live Platform Activity</h2>
        <p className="text-brand-text-light">Real-time metrics from our global hiring network</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${item.bgColor}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </div>
            <motion.div 
              key={item.key}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold text-brand-text"
            >
              {item.value.toLocaleString()}
            </motion.div>
            <p className="text-sm text-brand-text-light mt-1">{item.label}</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span>+{Math.floor(Math.random() * 20 + 5)}% this week</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const features = [
  { name: 'Integrity monitoring', component: IntegrityMonitoringUI, title: 'Hire with confidence.', description: 'Know that every candidate’s performance reflects their actual skills with secure monitoring that prevents cheating without disrupting the candidate experience.' },
  { name: 'AI-powered scoring', component: AIScoringUI, title: 'Standardize your evaluation process.', description: 'Create custom evaluation criteria that match your specific role requirements and company values for consistent, objective hiring decisions.' },
  { name: 'Automated outreach', component: AutomatedOutreachUI, title: 'Automatically outreach candidates in your pipeline.', description: 'Let RecruiterAI do the heavy lifting and instantly engage qualified candidates with personalized outreach, right when they’re most responsive.' },
  { name: 'Seamless integrations', component: IntegrationsUI, title: 'Interview as you usually do.', description: 'These essential tools revolve around you because RecruiterAI puts you at the center of your workflow. We display them in a unified, minimalist style to show how seamlessly they integrate into your hiring process - no matter which platforms you and your candidates prefer.' },
];

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 lg:py-32 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveStats />
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 p-2 bg-gray-100 rounded-full">
            {features.map((feature, index) => (
              <button
                key={feature.name}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                  activeTab === index ? 'bg-brand-primary text-white' : 'text-brand-text-light hover:bg-gray-200'
                }`}
              >
                {feature.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            key={activeTab} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold text-brand-text tracking-tight">{features[activeTab].title}</h3>
            <p className="mt-4 text-lg text-brand-text-light">{features[activeTab].description}</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {React.createElement(features[activeTab].component)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
