import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Romantic Minimalism
 * 
 * Features:
 * - Full-width background image with overlay
 * - Centered emotional message with fade-in animation
 * - Scroll indicator
 * - Parallax effect on scroll
 */
export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div 
        className="relative z-10 text-center px-6 max-w-2xl animate-fade-in-up"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Happy Birthday, Ali
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-light mb-6 drop-shadow-md">
          To the one who makes distance feel like nothing
        </p>

        <p className="text-lg text-white/80 font-light italic drop-shadow-md max-w-xl mx-auto">
          "Every moment with you is a treasure, even when we're miles apart. 
          Today, we celebrate you and the love that connects us."
        </p>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
      </div>
    </section>
  );
}
