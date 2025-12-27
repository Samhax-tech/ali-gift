import { useState } from 'react';
import { Heart } from 'lucide-react';

interface Note {
  id: number;
  title: string;
  content: string;
  emoji: string;
}

/**
 * Greeting Notes Component
 * Design: Romantic Minimalism
 * 
 * Features:
 * - Multiple heartfelt greeting cards
 * - Click-to-reveal animation
 * - Soft shadows and minimal design
 * - Responsive grid layout
 */
export default function GreetingNotes() {
  const [revealedNotes, setRevealedNotes] = useState<number[]>([]);

  const notes: Note[] = [
    {
      id: 1,
      title: "To My Love",
      content: "You are my greatest blessing. Every day with you feels like a gift, and today we celebrate the amazing person you are. Thank you for loving me across the miles.",
      emoji: "💕"
    },
    {
      id: 2,
      title: "Your Strength",
      content: "Your determination and kindness inspire me every single day. The way you face challenges with grace and courage makes me fall in love with you all over again.",
      emoji: "💪"
    },
    {
      id: 3,
      title: "Our Love",
      content: "Distance is just a number when your heart belongs to someone. Our love is stronger than any miles between us. You are my home, no matter where we are.",
      emoji: "🌍"
    },
    {
      id: 4,
      title: "Forever & Always",
      content: "I promise to love you through every season, every challenge, and every beautiful moment. You are my today and all my tomorrows. Happy Birthday to my soulmate.",
      emoji: "🎂"
    }
  ];

  const toggleNote = (id: number) => {
    setRevealedNotes(prev => 
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    );
  };

  return (
    <section 
      className="py-20 px-6"
      style={{
        backgroundImage: 'url(/images/greeting-section-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Messages from My Heart
          </h2>
          <p className="text-lg text-muted-foreground">
            Click each card to reveal what I want to tell you
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note) => {
            const isRevealed = revealedNotes.includes(note.id);
            
            return (
              <div
                key={note.id}
                onClick={() => toggleNote(note.id)}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`
                    relative h-64 rounded-lg p-8 shadow-soft
                    transition-all duration-500 ease-out
                    ${isRevealed 
                      ? 'bg-white border border-rose-gold/20' 
                      : 'bg-gradient-to-br from-rose-gold/10 to-rose-gold/5 border border-rose-gold/30 hover:shadow-romantic'
                    }
                  `}
                >
                  {/* Card Content */}
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{note.emoji}</span>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {note.title}
                        </h3>
                      </div>
                    </div>

                    {/* Revealed Content */}
                    {isRevealed ? (
                      <div className="animate-fade-in-up">
                        <p className="text-foreground leading-relaxed text-base">
                          {note.content}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Heart className="w-8 h-8 text-rose-gold animate-pulse" />
                        <p className="text-sm text-muted-foreground">
                          Click to reveal
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-rose-gold/10 to-transparent rounded-bl-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
