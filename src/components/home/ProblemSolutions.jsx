import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './ProblemSolutions.css';

const ProblemCard = ({ block, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`problem-card pl-6 py-8 pr-6 flex flex-col md:flex-row md:items-center justify-between gap-8 ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="md:w-3/4">
        <h3 className="problem-title text-2xl mb-3">{block.q}</h3>
        <p className="problem-desc leading-relaxed text-lg">{block.a}</p>
        <div className="solution-badge mt-4 inline-block text-sm font-semibold px-4 py-2 rounded-full">
          <i className="fas fa-check-circle mr-2"></i>
          {block.solution}
        </div>
      </div>
      <div className="md:w-1/4 w-full">
        <Link to="/pricing" className="action-button block text-center px-6 py-4 rounded-xl font-bold whitespace-normal sm:whitespace-nowrap">
          <span className="relative z-10">{block.btn}</span>
        </Link>
      </div>
    </div>
  );
};

export default function ProblemSolutions() {
  const blocks = [
    {
      q: 'Worried about business growth?',
      a: "You can't scale what you haven't scanned. Owners get stuck working in the business, not on it. We step in, scan the leaks, solve them, and build systems that scale.",
      btn: 'Get Your Free Scan',
      solution: 'We scan, solve, and build systems that scale without you babysitting.'
    },
    {
      q: 'Struggling in operations?',
      a: "Chaos in roles, no SOPs, every day is a crisis? That's not operations, that's survival. We solve org structure so work flows even when you're not in the room.",
      btn: 'Solve My Operations',
      solution: 'We solve org structure so work flows even when you\'re not in the room.'
    },
    {
      q: 'Want to transform your business?',
      a: "Transformation starts with a real scan, not motivational quotes. We've solved this for 100+ businesses. Your team, your market, your next level — let's build it.",
      btn: 'Start Scaling',
      solution: 'We\'ve solved this for 100+ businesses. Let\'s build your next level.'
    }
  ];

  return (
    <section className="solutions-container py-24 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">The Reality</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Identify the Bottleneck.</h3>
        </div>
        <div className="space-y-6">
          {blocks.map((block, idx) => (
            <ProblemCard key={idx} block={block} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}