import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'Business Scan',
      outcome: "Clarity on exactly what's killing growth. A one-page diagnosis, not a 50-slide deck.",
      icon: 'fa-clipboard-list'
    },
    {
      title: 'Structure Solve',
      outcome: 'Right people in right roles. SOPs that work. No more daily fire-fighting.',
      icon: 'fa-sitemap'
    },
    {
      title: 'Strategy Solve',
      outcome: 'A clear 6–12 month roadmap. Know what to do, when to do it, and why.',
      icon: 'fa-map-signs'
    },
    {
      title: 'Scale Partnership',
      outcome: 'A partner in the trenches with you till you can run solo. We grow when you grow.',
      icon: 'fa-handshake'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-3">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-16 border-b border-slate-800 pb-8">Services as Outcomes</h3>
        <div className="flex flex-col">
          {services.map((service, idx) => (
            <div key={idx} className="service-row group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-800 hover:bg-slate-800/30 transition-colors duration-300">
              <div className="absolute bottom-0 left-0 h-[1px] bg-blue-500 service-indicator" />
              <div className="md:w-1/3 mb-4 md:mb-0 flex items-center gap-4">
                <span className="text-slate-600 font-mono text-lg">0{idx + 1}</span>
                <span className="text-2xl text-blue-400"><i className={`fas ${service.icon}`} /></span>
                <h4 className="text-2xl font-bold text-white">{service.title}</h4>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <span className="inline-block bg-slate-800 text-blue-400 text-xs font-bold uppercase tracking-widest px-2 py-1 rounded mb-2">
                  You Get
                </span>
                <p className="text-slate-300 leading-relaxed text-lg">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}