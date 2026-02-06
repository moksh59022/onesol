import React from 'react';
import { motion } from 'framer-motion';
import Accordion from './Accordion';

const faqs = [
  {
    question: "What is RecruiterAI?",
    answer: "RecruiterAI is a comprehensive hiring platform that uses AI to help you find better candidates, conduct more focused interviews, and make data-driven hiring decisions."
  },
  {
    question: "How does the AI work?",
    answer: "Our AI analyzes candidate profiles, interview transcripts, and other data points to provide insights and recommendations. It helps you identify top candidates, reduce bias, and streamline your hiring process."
  },
  {
    question: "What integrations do you support?",
    answer: "We support a wide range of integrations with popular tools like Google Calendar, Zoom, Slack, and more. You can see a full list on our integrations page."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. All your data is encrypted and stored securely. We are fully GDPR compliant."
  },
  {
    question: "What is the pricing?",
    answer: "We offer a range of pricing plans to suit teams of all sizes. You can find more details on our pricing page."
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-text tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-brand-text-light">
            Have questions? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
