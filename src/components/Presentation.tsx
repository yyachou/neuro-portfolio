import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { Maximize } from 'lucide-react';

interface PresentationProps {
  children: ReactNode[];
}

export default function Presentation({ children }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const total = React.Children.count(children);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Track which slide is currently on screen using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) setCurrent(index);
          }
        });
      },
      { threshold: 0.6 } // Triggers when 60% of the slide is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to a specific slide when clicking a dot
  const scrollToSlide = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Keyboard shortcut for Fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f') toggleFullscreen();
      if (e.key === 'Escape' && document.fullscreenElement) document.exitFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-hide controls when mouse is inactive
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-screen h-[100dvh] bg-black text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      
      {/* Scrollable Container with CSS Snap */}
      {/* scrollbar-width: none hides the scrollbar on Firefox, the pseudo-element in index.css does it for Chrome/Safari */}
      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* We map through your slides and wrap each one in a 100vh section that snaps into place */}
        {React.Children.map(children, (child, index) => (
          <section 
            key={index}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="w-full h-screen snap-start snap-always relative overflow-hidden"
          >
            {child}
          </section>
        ))}
      </div>

      {/* Optional: Add this to your index.css to hide the Chrome/Safari scrollbar perfectly:
          ::-webkit-scrollbar { display: none; } 
      */}

      {/* Keyboard Hint */}
      <div className={`fixed top-[4%] right-[4%] text-[11px] text-white/40 z-50 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        Scroll · F Fullscreen
      </div>

      {/* Bottom Floating Navigation */}
      <div
        className={`fixed bottom-[4%] left-[4%] right-[4%] z-50 flex items-center justify-between transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Counter */}
        <div className="text-[13px] text-white/50 tabular-nums w-16 drop-shadow-md">
          {current + 1} / {total}
        </div>

        {/* Clickable Progress Dots */}
        <div className="flex items-center gap-3 pointer-events-auto bg-black/20 p-2 rounded-full backdrop-blur-md border border-white/10">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                i === current ? 'w-[24px] bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-[6px] bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Fullscreen Toggle */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button onClick={toggleFullscreen} className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors drop-shadow-md">
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}