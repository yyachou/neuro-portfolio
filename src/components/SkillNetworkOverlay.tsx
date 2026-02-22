import React from 'react';
import {
  Brain,
  Waves,
  ShieldCheck,
  FlaskConical,
  GraduationCap,
  Scale,
  Activity,
} from 'lucide-react';

// --- Types & Data ---
const DOMAINS = [
  { id: 'clin', icon: Brain, title: 'Clinical Neuroscience', desc: 'DBS / Functional Neurosurgery' },
  { id: 'ops', icon: Waves, title: 'Trial Operations', desc: '10+ Neuromodulation Studies' },
  { id: 'reg', icon: ShieldCheck, title: 'Regulatory & GCP', desc: 'ANSM / CPP / SAE Monitoring' },
  { id: 'res', icon: FlaskConical, title: 'Research & Modeling', desc: 'E-Field Modeling (TMS/tDCS)' },
  { id: 'ped', icon: GraduationCap, title: 'Pedagogy', desc: '80+ Training Hours Delivered' },
  { id: 'law', icon: Scale, title: 'Bioethics & Law', desc: 'Responsible Innovation' },
];

const EVIDENCE = [
  '8 Publications',
  '12 Oral Comms',
  '722 Citations',
  'H-index 4',
  'J Affect Disord',
  'tDCS / rTMS',
  'DLPFC + Cerebellum',
  'Qualitative TMS',
];

// --- Subcomponents ---

function GlassCard({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`
        backdrop-blur-xl bg-white/[0.03] border border-white/[0.12]
        rounded-xl p-3 md:p-4 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.2]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0 opacity-40">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Left side connectors */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <React.Fragment key={`left-${i}`}>
          <path
            d={`M 100,${15 + i * 14}% C 250,${15 + i * 14}% 350,50% 50%,50%`}
            className="stroke-white/10 fill-none"
            strokeWidth="1"
          />
          <circle r="2" fill="#60a5fa" className="animate-pulse-node">
            <animateMotion
              dur={`${3 + i}s`}
              repeatCount="indefinite"
              path={`M 100,${15 + i * 14}% C 250,${15 + i * 14}% 350,50% 50%,50%`}
            />
          </circle>
        </React.Fragment>
      ))}

      {/* Right side connectors */}
      {[0, 1, 2, 3].map((i) => (
        <path
          key={`right-${i}`}
          d={`M 50%,50% C 650,50% 750,${20 + i * 20}% 90%,${20 + i * 20}%`}
          className="stroke-white/10 fill-none"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default function SkillNetworkOverlay() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6 md:p-12">
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-pulse-node { opacity: 0.95; }
        @media (prefers-reduced-motion: reduce) {
          .animate-orbit, .animate-float, .animate-pulse-ring, .animate-pulse-node {
            animation: none !important;
          }
        }
      `}</style>

      {/* Connection Lines (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0">
        <ConnectionLines />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center gap-8 h-full">
        {/* LEFT: Domain Cards */}
        <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4 justify-center">
          {DOMAINS.map((domain, i) => (
            <GlassCard
              key={domain.id}
              className="animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <domain.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white/90">{domain.title}</h4>
                  <p className="text-[10px] md:text-xs text-white/50">{domain.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CENTER: Hub */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-12 lg:py-0">
          {/* Decorative Rings */}
          <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-orbit" />
          <div
            className="absolute w-64 h-64 border border-dashed border-white/5 rounded-full animate-orbit"
            style={{ animationDirection: 'reverse' }}
          />

          {/* Main Core */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-all" />
            <div className="absolute -inset-4 border border-blue-400/30 rounded-full animate-pulse-ring" />
            <div
              className="absolute -inset-8 border border-blue-400/10 rounded-full animate-pulse-ring"
              style={{ animationDelay: '1s' }}
            />

            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-black border-2 border-white/20 flex items-center justify-center backdrop-blur-3xl">
              <div className="text-center">
                <Activity className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-1 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Core</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-white font-bold text-lg md:text-xl tracking-wide uppercase">
              Multidimensional Practice
            </h3>
            <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2">
              Clinical • Research • Regulatory
            </p>
          </div>
        </div>

        {/* RIGHT: Evidence Chips */}
        <div className="lg:col-span-4 flex flex-wrap lg:flex-col content-center lg:items-start gap-2 md:gap-3">
          {EVIDENCE.map((text, i) => (
            <div
              key={text}
              className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] md:text-xs text-white/70 backdrop-blur-md hover:text-white hover:border-white/30 transition-colors whitespace-nowrap"
              style={{
                animation: 'float 5s ease-in-out infinite',
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
