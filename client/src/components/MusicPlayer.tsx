import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2 } from 'lucide-react';

interface MusicPlayerProps {
  playing: boolean;
  onPlayChange: (playing: boolean) => void;
}

/**
 * Music Player Component
 * Design: Romantic Minimalism
 * 
 * Features:
 * - Fixed position player
 * - Play/pause control
 * - Volume control
 * - Soft, minimal design
 * - Background music for the celebration
 */
export default function MusicPlayer({ playing, onPlayChange }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);

  // Background music URL - using a free royalty-free romantic music
  // You can replace this with your own music file
  const musicUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked by browser
          onPlayChange(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing, onPlayChange]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    onPlayChange(!playing);
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        crossOrigin="anonymous"
      />

      {/* Music Player Widget */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <div className="bg-white rounded-full shadow-romantic p-3 md:p-4 flex items-center gap-2 md:gap-4 border border-rose-gold/20 flex-wrap md:flex-nowrap justify-center md:justify-start">
          {/* Music Icon - Hidden on mobile */}
          <div className="text-rose-gold hidden md:block">
            <Music className="w-5 h-5" />
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-rose-gold/10 hover:bg-rose-gold/20 text-rose-gold transition-colors duration-200 flex-shrink-0"
            aria-label={playing ? "Pause music" : "Play music"}
          >
            {playing ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
            )}
          </button>

          {/* Volume Control - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 h-1 bg-rose-gold/20 rounded-lg appearance-none cursor-pointer accent-rose-gold"
              aria-label="Volume control"
            />
          </div>

          {/* Status Text - Hidden on mobile */}
          <span className="text-xs text-muted-foreground whitespace-nowrap hidden md:inline">
            {playing ? 'Playing' : 'Paused'}
          </span>
        </div>

        {/* Decorative Floating Note */}
        {playing && (
          <div className="absolute -top-6 -right-2 md:-top-8 md:-right-4 text-rose-gold animate-float-particle text-lg md:text-2xl">
            ♪
          </div>
        )}
      </div>
    </>
  );
}
