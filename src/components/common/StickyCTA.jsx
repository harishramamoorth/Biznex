import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) setVisible(window.scrollY > hero.offsetHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-lg z-50 py-3 px-6 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 w-full">
        <p className="text-slate-900 font-bold text-xs sm:text-base">
          <i className="fas fa-rocket text-blue-500 mr-2" />
          Ready to scale?
        </p>
        <Link to="/pricing" className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-xs sm:text-base hover:bg-blue-700 transition-all duration-300 whitespace-nowrap text-center">
          Book Free Scan
        </Link>
      </div>
    </div>
  );
}