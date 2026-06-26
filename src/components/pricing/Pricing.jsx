import { useState } from 'react';
import PaymentModal from './PaymentModal';
import './Pricing.css';

const PLANS = [
    {
        name: 'Scan',
        emoji: '🔍',
        icon: 'fa-search',
        price: '₹4,999',
        period: 'one-time',
        desc: 'Full business diagnosis – no guesswork',
        color: 'cyan',
        features: [
            { icon: '📊', text: '360° audit of sales, ops & cashflow' },
            { icon: '🔎', text: 'Leak identification report' },
            { icon: '📄', text: 'One‑page strategic summary' },
            { icon: '📞', text: '30‑min strategy call with our team' },
            { icon: '✅', text: 'Actionable priority list' },
        ],
        popular: false,
        cta: 'Start Scan',
    },
    {
        name: 'Solve',
        emoji: '⚡',
        icon: 'fa-tools',
        price: '₹14,999',
        period: 'month',
        desc: 'Fix what\'s broken, fast',
        color: 'blue',
        features: [
            { icon: '🏗️', text: 'Org structure redesign' },
            { icon: '📋', text: 'SOP creation & documentation' },
            { icon: '💼', text: 'Sales process overhaul' },
            { icon: '📅', text: 'Weekly progress reviews' },
            { icon: '🎓', text: 'Team training sessions' },
            { icon: '💬', text: 'Priority email support' },
        ],
        popular: true,
        cta: 'Start Solving',
    },
    {
        name: 'Scale',
        emoji: '🚀',
        icon: 'fa-rocket',
        price: '₹29,999',
        period: 'month',
        desc: 'Full‑scale partnership for exponential growth',
        color: 'violet',
        features: [
            { icon: '✨', text: 'All Solve features' },
            { icon: '🤝', text: 'Dedicated account partner' },
            { icon: '📈', text: 'Monthly board‑level review' },
            { icon: '♾️', text: 'Unlimited direct support' },
            { icon: '📡', text: 'Real‑time growth dashboard' },
            { icon: '🌐', text: 'Access to our network of experts' },
        ],
        popular: false,
        cta: 'Start Scaling',
    },
];


export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [hovered, setHovered] = useState(null);

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setModalOpen(true);
    };

    return (
        <section id="pricing" className="pricing-section">
            {/* Background orbs */}
            <div className="pricing-orb pricing-orb-1" />
            <div className="pricing-orb pricing-orb-2" />
            <div className="pricing-orb pricing-orb-3" />

            <div className="pricing-inner">
                {/* ── Header ── */}
                <div className="pricing-header">
                    <div className="pricing-label">
                        <span className="pricing-label-dot" />
                        Investment
                    </div>
                    <h2 className="pricing-title">Choose your path</h2>
                    <p className="pricing-subtitle">
                        Transparent pricing. No hidden fees.<br />
                        Start with a full business scan.
                    </p>
                </div>

                {/* ── Cards ── */}
                <div className="pricing-grid">
                    {PLANS.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`pricing-card pc-${plan.color}${plan.popular ? ' pc-popular' : ''}${hovered === idx ? ' pc-hovered' : ''}`}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Glow layer */}
                            <div className="pc-glow" />

                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="pc-badge">
                                    <span>⭐ Most Popular</span>
                                </div>
                            )}

                            {/* Plan icon */}
                            <div className={`pc-icon-wrap pc-icon-${plan.color}`}>
                                <span className="pc-emoji">{plan.emoji}</span>
                            </div>

                            {/* Plan name & desc */}
                            <h3 className="pc-name">{plan.name}</h3>
                            <p className="pc-desc">{plan.desc}</p>

                            {/* Price */}
                            <div className="pc-price-block">
                                <span className={`pc-price pc-price-${plan.color}`}>{plan.price}</span>
                                <span className="pc-period">/ {plan.period}</span>
                            </div>

                            {/* Divider */}
                            <div className={`pc-divider pc-divider-${plan.color}`} />

                            {/* Features */}
                            <ul className="pc-features">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="pc-feature-item">
                                        <span className="pc-feature-emoji">{f.icon}</span>
                                        <span>{f.text}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button
                                onClick={() => openModal(plan)}
                                className={`pc-cta pc-cta-${plan.color}${plan.popular ? ' pc-cta-popular' : ''}`}
                            >
                                <span>{plan.cta}</span>
                                <i className="fas fa-arrow-right pc-cta-arrow" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* ── Footer note ── */}
                <div className="pricing-note">
                    <i className="fas fa-shield-alt" />
                    <span>All plans are priced in Indian Rupees (₹) · Free 30-min discovery call included · Custom enterprise pricing available</span>
                </div>
            </div>

            <PaymentModal
                isOpen={modalOpen}
                onClose={() => { setModalOpen(false); setSelectedPlan(null); }}
                plan={selectedPlan}
            />
        </section>
    );
}