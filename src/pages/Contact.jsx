import React from 'react';

export default function Contact() {
  return (
    <main className="pt-24 pb-16 bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900">Let's Talk</h1>
        <p className="mt-4 text-lg text-slate-600">Reach out and we'll get back to you within 24 hours.</p>
        <form className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Full Name</label>
            <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500" placeholder="john@company.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your business..."></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </main>
  );
}
