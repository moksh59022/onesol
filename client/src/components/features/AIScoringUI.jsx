import React from 'react';
import { SlidersHorizontal, ChevronUp } from 'lucide-react';

const SkillRating = ({ skill, score, maxScore }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <p className="text-sm font-medium text-brand-text">{skill}</p>
      <p className="text-sm font-bold text-brand-text-light">{score} <span className="font-medium">/ {maxScore}</span></p>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-brand-primary h-2 rounded-full" style={{ width: `${(score / maxScore) * 100}%` }}></div>
    </div>
  </div>
);

const AIScoringUI = () => {
  const skills = [
    { name: 'Technical skills', score: 4, max: 5 },
    { name: 'Problem solving', score: 4, max: 5 },
    { name: 'Culture fit', score: 3, max: 5 },
    { name: 'Required qualifications', score: 4, max: 5 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200/80">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-brand-primary" />
          <h3 className="text-lg font-bold text-brand-text">Custom scores</h3>
        </div>
        <ChevronUp className="h-5 w-5 text-brand-text-light" />
      </div>
      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillRating key={skill.name} skill={skill.name} score={skill.score} maxScore={skill.max} />
        ))}
      </div>
    </div>
  );
};

export default AIScoringUI;
