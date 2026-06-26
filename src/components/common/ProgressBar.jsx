import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(dh > 0 ? (st / dh) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-200" style={{ width: `${progress}%` }} />
    </div>
  );
}