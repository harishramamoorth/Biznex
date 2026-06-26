import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const team = [
    {
        name: 'Alex Rivera',
        role: 'CEO & Founder',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
        bio: '15+ years scaling businesses across SaaS and retail.'
    },
    {
        name: 'Jamie Chen',
        role: 'Head of Operations',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
        bio: 'Ex‑McKinsey, now obsessed with operational excellence.'
    },
    {
        name: 'Sam Taylor',
        role: 'Strategy Lead',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
        bio: 'Helped 50+ businesses find their next growth gear.'
    },
];

export default function Team() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50/80">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">
                        Meet the Team
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
                        The People Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Results</span>
                    </h3>
                    <p className="mt-3 text-slate-500 text-lg max-w-2xl mx-auto">
                        We’re not just consultants – we’re operators who’ve been in your shoes.
                    </p>
                </div>

                <div
                    ref={ref}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {team.map((member, idx) => {
                        const delay = idx * 150;
                        return (
                            <div
                                key={idx}
                                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${delay}ms` }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                                    <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                                    <p className="mt-2 text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                                    <div className="mt-4 flex gap-3">
                                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}