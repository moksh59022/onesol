import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, MapPin, Briefcase, DollarSign } from 'lucide-react';
import CandidateProfileCard from './CandidateProfileCard';

const CandidatesSection = () => {
  const candidates = [
    {
      id: 1,
      name: "Tina S.",
      position: "Software Engineer",
      location: "San Francisco, CA",
      experience: "5 years",
      salary: "$120k - $150k",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      skills: ["React", "Node.js", "TypeScript"],
      matchScore: 92
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Senior Frontend Developer",
      location: "New York, NY",
      experience: "7 years",
      salary: "$140k - $180k",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["Vue.js", "Python", "AWS"],
      matchScore: 88
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Product Designer",
      location: "Austin, TX",
      experience: "4 years",
      salary: "$100k - $130k",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Figma", "UI/UX", "Prototyping"],
      matchScore: 85
    },
    {
      id: 4,
      name: "David Kim",
      position: "DevOps Engineer",
      location: "Seattle, WA",
      experience: "6 years",
      salary: "$130k - $160k",
      rating: 4.6,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      skills: ["Kubernetes", "Docker", "CI/CD"],
      matchScore: 90
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      position: "Data Scientist",
      location: "Boston, MA",
      experience: "3 years",
      salary: "$110k - $140k",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      skills: ["Python", "Machine Learning", "SQL"],
      matchScore: 87
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Backend Developer",
      location: "Denver, CO",
      experience: "5 years",
      salary: "$115k - $145k",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      skills: ["Java", "Spring Boot", "PostgreSQL"],
      matchScore: 83
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50" id="candidates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text tracking-tighter mb-6">
            Ready to find <span className="text-brand-primary">top candidates</span>
          </h2>
          <p className="text-xl text-brand-text-light max-w-3xl mx-auto mb-8">
            Browse through our curated list of qualified professionals. Each candidate has been thoroughly vetted and scored by our AI-powered matching system.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search candidates by skills, position..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-brand-text hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary">2,847</div>
            <div className="text-sm text-brand-text-light">Active Candidates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-secondary">94%</div>
            <div className="text-sm text-brand-text-light">Match Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-primary">48h</div>
            <div className="text-sm text-brand-text-light">Avg. Time to Hire</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-secondary">156</div>
            <div className="text-sm text-brand-text-light">New This Week</div>
          </div>
        </motion.div>

        {/* Candidate Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Match Score Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  {candidate.matchScore}% Match
                </div>
              </div>

              {/* Candidate Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={candidate.image} 
                      alt={candidate.name} 
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-brand-text">{candidate.name}</h3>
                      <p className="text-brand-text-light text-sm">{candidate.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-brand-text">{candidate.rating}</span>
                  </div>
                </div>

                {/* Candidate Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-brand-text-light">
                    <MapPin className="h-4 w-4" />
                    {candidate.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-text-light">
                    <Briefcase className="h-4 w-4" />
                    {candidate.experience} experience
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-text-light">
                    <DollarSign className="h-4 w-4" />
                    {candidate.salary}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors duration-200">
                    View Profile
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-brand-text hover:bg-gray-50 transition-colors duration-200">
                    Message
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-transparent text-brand-primary rounded-full font-medium border-2 border-brand-primary hover:bg-brand-primary/10 transition-colors duration-200">
            Load More Candidates
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CandidatesSection;
