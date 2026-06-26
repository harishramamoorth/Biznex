import { Link } from 'react-router-dom';
import AnimatedNumber from '../common/AnimatedNumber';
import './Hero.css';
import heroImg from '../../assets/hero-image.jpg';
import heroVideo from '../../assets/7148575-uhd_3840_2160_25fps.mp4';

export default function Hero() {
  return (
    <section id="hero" className="hero-container min-h-[calc(100vh-72px)] flex items-center relative overflow-hidden border-b border-slate-200 dark:border-slate-800 pt-24 lg:pt-0">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={heroImg}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay with better gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 dark:from-slate-900/80 via-white/70 dark:via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-slate-900/40" />
      </div>

      {/* Floating particles (decorative) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Content wrapper */}
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 py-24 flex flex-col items-center justify-center h-full text-center">
        <div className="text-slate-900 dark:text-white flex flex-col items-center">
          <div className="hero-text-animate inline-flex items-center justify-center gap-2 bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-700 dark:text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500" />
            </span>
            Trusted by 200+ businesses
          </div>
          <h1 className="hero-text-animate text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]">
            Worried about growth? <br />
            Stuck in operations? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto] animate-shimmer">
              Ready to transform?
            </span>
          </h1>
          <p className="hero-text-animate delay-1 mt-8 text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium max-w-2xl">
            We're <strong className="text-slate-900 dark:text-white">BizNex</strong>. We scan your business, solve what's broken, and stay with you till you scale on your own.
          </p>
          <div className="hero-text-animate delay-2 mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/pricing"
              className="btn-primary inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 w-full sm:w-auto text-center relative overflow-hidden group"
            >
              <span className="relative z-10">Book a Free Business Scan</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/process"
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white font-medium transition-colors duration-200 underline-offset-4 hover:underline w-full sm:w-auto text-center py-2 group"
            >
              See how we work 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="hero-text-animate delay-3 mt-12 flex flex-wrap items-center justify-center gap-8 text-base">
            <div className="stat-item">
              <span className="font-black text-slate-900 dark:text-white">
                <AnimatedNumber end={10} suffix="K+" duration={2500} />
              </span> 
              <span className="text-slate-600 dark:text-slate-300 ml-1">scans</span>
            </div>
            <div className="stat-item">
              <span className="font-black text-slate-900 dark:text-white">
                <AnimatedNumber end={100} suffix="+" duration={2500} />
              </span> 
              <span className="text-slate-600 dark:text-slate-300 ml-1">solved</span>
            </div>
            <div className="stat-item">
              <span className="font-black text-slate-900 dark:text-white">
                <AnimatedNumber end={100} suffix="%" duration={2500} />
              </span> 
              <span className="text-slate-600 dark:text-slate-300 ml-1">satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="scroll-indicator flex flex-col items-center text-slate-500 dark:text-slate-400 animate-bounce-slow">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}