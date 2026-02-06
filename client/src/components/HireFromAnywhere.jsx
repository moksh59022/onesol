import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ name }) => (
  <div className="inline-flex items-center justify-center h-16 text-gray-400 font-semibold text-2xl tracking-tighter">
    {name}
  </div>
);

const HireFromAnywhere = () => {
  const companies = [
    { name: 'Stripe' },
    { name: 'Datadog' },
    { name: 'Compass' },
    { name: 'Notion' },
    { name: 'SeatGeek' },
    { name: 'Auth0' },
  ];

  return (
    <section className="py-20 bg-white" id="customers">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-brand-text tracking-tight">
            Great companies hire with RecruiterAI
          </h2>

          <div 
            className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {companies.map((company) => (
                <li key={company.name} className="flex-shrink-0">
                  <Logo name={company.name} />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {companies.map((company) => (
                <li key={company.name} className="flex-shrink-0">
                  <Logo name={company.name} />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <button className="px-6 py-3 bg-transparent text-brand-primary rounded-full font-medium border-2 border-brand-primary hover:bg-brand-primary/10 transition-colors duration-200">
              See all customers
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireFromAnywhere;
