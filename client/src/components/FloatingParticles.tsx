import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

/**
 * Floating Particles Component
 * Design: Romantic Minimalism
 * 
 * Features:
 * - Gentle floating heart particles
 * - Slow, continuous animation
 * - Soft, romantic aesthetic
 * - Non-intrusive background element
 */
export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles on mount
    const newParticles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-rose-gold/30 text-4xl font-light"
          style={{
            left: `${particle.left}%`,
            top: '100%',
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.4,
          }}
        >
          ♡
        </div>
      ))}

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-10 text-rose-gold/10 text-6xl font-light animate-drift-slow">
        ✨
      </div>
      <div className="absolute top-3/4 right-10 text-rose-gold/10 text-5xl font-light animate-drift-slow" style={{ animationDelay: '2s' }}>
        ✨
      </div>
      <div className="absolute top-1/2 right-1/4 text-sage-green/10 text-4xl font-light animate-drift-slow" style={{ animationDelay: '4s' }}>
        ✨
      </div>
    </div>
  );
}
