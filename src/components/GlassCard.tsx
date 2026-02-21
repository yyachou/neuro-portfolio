import React from 'react';

export default function GlassCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-[24px] backdrop-saturate-[1.4] border border-white/[0.12] rounded-2xl ${className}`}>
      <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}