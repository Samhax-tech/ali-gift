import { Target, Zap, BookOpen, Heart } from 'lucide-react';

interface Goal {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

/**
 * Productivity Goals Component
 * Design: Romantic Minimalism
 * 
 * Features:
 * - Shared dreams and aspirations
 * - Inspiring design with gentle colors
 * - Icon-based visual hierarchy
 * - Motivational messaging
 */
export default function ProductivityGoals() {
  const goals: Goal[] = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Grow Together",
      description: "Supporting each other's dreams and celebrating every milestone, no matter the distance.",
      color: "rose-gold"
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8" />,
      title: "Achieve Our Goals",
      description: "Working towards our shared vision of a future where we can be together, building something beautiful.",
      color: "sage-green"
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Stay Strong",
      description: "Maintaining the energy and passion that keeps our love alive, through every challenge.",
      color: "rose-gold"
    },
    {
      id: 4,
      icon: <BookOpen className="w-8 h-8" />,
      title: "Create Memories",
      description: "Writing our love story together, one moment at a time, building a lifetime of beautiful memories.",
      color: "sage-green"
    }
  ];

  return (
    <section 
      className="py-20 px-6 bg-white"
      style={{
        backgroundImage: 'url(/images/productivity-section-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Dreams Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every goal we pursue, every dream we chase—we do it together. 
            This is our journey, and I'm grateful to walk it with you.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/10 to-sage-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative bg-white rounded-lg p-8 border border-rose-gold/20 shadow-soft hover:shadow-romantic transition-all duration-300">
                {/* Icon */}
                <div className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6
                  ${goal.color === 'rose-gold' 
                    ? 'bg-rose-gold/10 text-rose-gold' 
                    : 'bg-sage-green/10 text-sage-green'
                  }
                `}>
                  {goal.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>

                {/* Decorative Line */}
                <div className={`
                  absolute bottom-0 left-0 h-1 rounded-full
                  ${goal.color === 'rose-gold' ? 'bg-rose-gold' : 'bg-sage-green'}
                  w-0 group-hover:w-full transition-all duration-500
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 text-center">
          <p className="text-xl text-foreground italic font-light max-w-3xl mx-auto leading-relaxed">
            "The greatest gift is not what we achieve, but who we become together. 
            Happy Birthday to my partner in all things—today and always."
          </p>
        </div>
      </div>
    </section>
  );
}
