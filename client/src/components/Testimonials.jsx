import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, text, imgSrc, logoSrc }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
    <Quote className="h-8 w-8 text-brand-primary mb-4" />
    <p className="text-brand-text-light text-lg mb-6 flex-grow">{text}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={imgSrc} alt={name} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h3 className="font-bold text-brand-text">{name}</h3>
          <p className="text-sm text-brand-text-light">{role}</p>
        </div>
      </div>
      <img src={logoSrc} alt="Company logo" className="h-8" />
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anya Taylor",
      role: "VP of Talent",
      text: "RecruiterAI has transformed our hiring process. We're making better decisions, faster.",
      imgSrc: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Notion_app_logo.png"
    },
    {
      name: "Ben Carter",
      role: "Head of People",
      text: "The platform's insights are invaluable. We've seen a 40% reduction in time-to-hire.",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Datadog_logo.svg"
    },
    {
      name: "Chloe Rodriguez",
      role: "Recruiting Lead",
      text: "Our candidate experience scores have never been higher. The process is seamless.",
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
    },
  ];

  return (
    <section className="py-20 bg-brand-green-light hero-texture" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-text tracking-tight">
            Trusted by the world's best companies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
