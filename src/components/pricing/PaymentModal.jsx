import { useState } from 'react';
import './PaymentModal.css';

export default function PaymentModal({ isOpen, onClose, plan }) {
  const [step, setStep] = useState('form');
  const [form, setForm] = useState({ name: '', email: '', card: '', expiry: '', cvc: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const reset = () => {
    setStep('form');
    setForm({ name: '', email: '', card: '', expiry: '', cvc: '' });
    onClose();
  };

  return (
    <div className={`payment-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        {step === 'form' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Complete Payment</h3>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl">&times;</button>
            </div>
            <p className="text-slate-500 mb-6">
              {plan?.name} — <span className="font-bold text-slate-900">{plan?.price}</span>/{plan?.period}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Card Number</label>
                <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.card} onChange={(e) => setForm({ ...form, card: e.target.value })} placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Expiry</label>
                  <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">CVC</label>
                  <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={form.cvc} onChange={(e) => setForm({ ...form, cvc: e.target.value })} placeholder="123" />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                Pay {plan?.price}
              </button>
            </form>
            <p className="text-xs text-slate-400 text-center mt-4">🔒 Secured by Stripe. Your information is safe.</p>
          </>
        )}

        {step === 'processing' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="mt-6 text-slate-600 font-medium">Processing your payment...</p>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-4xl text-green-600">
              <i className="fas fa-check" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-900">Payment Successful!</h3>
            <p className="mt-2 text-slate-500">We'll send you the onboarding details shortly.</p>
            <button onClick={reset} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}