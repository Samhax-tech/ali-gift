import { useState, useEffect } from 'react';
import { Heart, Music, ChevronDown } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import GreetingNotes from '@/components/GreetingNotes';
import ProductivityGoals from '@/components/ProductivityGoals';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingParticles from '@/components/FloatingParticles';

/**
 * Home Page - Ali's Birthday Website
 * Design: Romantic Minimalism
 * 
 * Layout:
 * - Hero Section: Full-width with background image, centered emotional message
 * - Greeting Notes: Heartfelt messages with smooth reveal animations
 * - Productivity Goals: Shared dreams and aspirations with inspiring design
 * - Music Player: Background music control
 * - Floating Particles: Gentle animations throughout
 */
export default function Home() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Music Player - Fixed */}
      <MusicPlayer playing={musicPlaying} onPlayChange={setMusicPlaying} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Greeting Notes Section */}
        <GreetingNotes />

        {/* Productivity Goals Section */}
        <ProductivityGoals />

        {/* Footer */}
        <footer className="bg-white py-12 text-center border-t border-rose-gold/20">
          <p className="text-muted-foreground text-sm">
            Made with <Heart className="inline w-4 h-4 text-rose-gold mx-1" /> for Ali
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Happy Birthday to my love, across the miles 💕
          </p>
        </footer>
      </main>
    </div>
  );
}
