import { useEffect, useId, useMemo, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Brain,
  FlaskConical,
  GraduationCap,
  Scale,
  ShieldCheck,
  Waves,
} from 'lucide-react';

type SkillDomain = {
  id: string;
  short: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: LucideIcon;
  bullets: string[];
  chips: string[];
};

const DOMAINS: SkillDomain[] = [
  {
    id: 'clinical',
    short: 'Clinical',
    title: 'Clinical Neuroscience',
    subtitle: 'Functional neurosurgery / brain-circuit perspective',
    summary:
      'Clinical practice integrates symptom dimensions, neuroanatomical reasoning, and therapeutic strategy in brain-focused care pathways.',
    icon: Brain,
    bullets: [
      'Functional neuroanatomy-informed reasoning',
      'Brain-circuit symptom framing',
      'Clinical translation mindset for neuromodulation',
    ],
    chips: ['Clinical practice', 'Neuroanatomy', 'Symptom circuits'],
  },
  {
    id: 'trials',
    short: 'Trials',
    title: 'Trial Operations',
    subtitle: 'Neuromodulation study execution and coordination',
    summary:
      'Operational oversight across stimulation-based studies: protocol adherence, team coordination, session logic, and implementation quality.',
    icon: Waves,
    bullets: [
      '10+ neuromodulation studies supported / supervised',
      'Randomized, observational, naturalistic, qualitative formats',
      'Clinical workflow + investigator coordination',
    ],
    chips: ['10+ studies', 'Protocol ops', 'Clinical delivery'],
  },
  {
    id: 'regulatory',
    short: 'Reg',
    title: 'Regulatory, GCP & Safety',
    subtitle: 'Compliance-ready documentation and safety oversight',
    summary:
      'Regulatory and safety work includes ethics submissions, GCP alignment, pharmacovigilance support, and SAE monitoring frameworks.',
    icon: ShieldCheck,
    bullets: ['CPP / ANSM workflows', 'ICH-GCP alignment', 'PV / SAE monitoring support'],
    chips: ['CPP / ANSM', 'ICH-GCP', 'PV / SAE'],
  },
  {
    id: 'modeling',
    short: 'Modeling',
    title: 'Research & Modeling',
    subtitle: 'Electric field modeling and translational neuroscience',
    summary:
      'Research connects computational modeling, stimulation target anatomy, and clinically actionable neuromodulation hypotheses.',
    icon: FlaskConical,
    bullets: [
      'Electric field modeling (TMS / tDCS)',
      'Depression-focused neuromodulation synthesis',
      'Mechanism-informed trial thinking',
    ],
    chips: ['E-field modeling', 'tDCS / rTMS', 'Translation'],
  },
  {
    id: 'pedagogy',
    short: 'Pedagogy',
    title: 'Pedagogy & Investigator Training',
    subtitle: 'Training clinicians and research teams',
    summary:
      'Structured educational practice in neuroscience and study conduct, with emphasis on clarity, neuroanatomy teaching, and team enablement.',
    icon: GraduationCap,
    bullets: ['Investigator training', 'Neuroanatomy education innovation', '80+ training hours'],
    chips: ['80+ training hrs', 'Teaching', 'Investigator enablement'],
  },
  {
    id: 'ethics',
    short: 'Law',
    title: 'Health Law & Bioethics',
    subtitle: 'Responsible innovation in neurotechnology',
    summary:
      'Legal-ethical framing supports responsible translation of neuromodulation technologies into clinical and research practice.',
    icon: Scale,
    bullets: ['Medical law / health systems perspective', 'Bioethics lens', 'Responsible innovation'],
    chips: ['Bioethics', 'Health law', 'Responsible innovation'],
  },
];

const SCIENTIFIC_METRICS = [
  { label: 'Citations', value: '722' },
  { label: 'H-index', value: '4' },
  { label: 'Publications', value: '8' },
  { label: 'Oral comms', value: '12+' },
];

const GLOBAL_THEME_CHIPS = [
  'J Affect Disord (2025)',
  'DLPFC + Cerebellum',
  'Depression neuromodulation',
  'Schizophrenia modeling',
  'Translational brain science',
];

function GlassPanel({
  children,
  className = '',
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={[
        'relative overflow-hidden rounded-[20px] border border-white/[0.12]',
        'bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]',
        'backdrop-blur-[20px] saturate-150',
        'before:pointer-events-none before:absolute before:inset-0',
        'before:bg-[radial-gradient(circle_at_16%_14%,rgba(255,255,255,0.12),transparent_45%)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-white/58 mb-2">
      {children}
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {SCIENTIFIC_METRICS.map((m) => (
        <div
          key={m.label}
          className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5"
        >
          <div className="text-[clamp(20px,2.2vw,34px)] font-bold leading-none tabular-nums">
            {m.value}
          </div>
          <div className="text-[10px] md:text-[11px] text-white/62 mt-1 leading-tight">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

function DesktopConnectors({
  activeIndex,
  gradientId,
}: {
  activeIndex: number;
  gradientId: string;
}) {
  // Coordinates in a 1000x620 canvas; designed to visually align with desktop layout blocks
  const leftY = [135, 215, 295, 375];
  const centerX = 500;
  const centerY = 305;

  return (
    <svg
      className="pointer-events-none absolute inset-0 w-full h-full opacity-80"
      viewBox="0 0 1000 620"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
          <stop offset="45%" stopColor="rgba(90,150,255,0.18)" />
          <stop offset="55%" stopColor="rgba(90,150,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>

      {/* Ambient grid dots */}
      {Array.from({ length: 26 }).map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx={140 + (i % 13) * 56}
          cy={70 + Math.floor(i / 13) * 460}
          r="1.2"
          fill="white"
          opacity="0.06"
        />
      ))}

      {/* 4 primary connectors */}
      {leftY.map((y, i) => {
        const active = activeIndex === i;
        return (
          <g key={`line-${i}`}>
            <path
              d={`M 220 ${y} C 330 ${y}, 390 ${centerY}, ${centerX} ${centerY}`}
              fill="none"
              stroke={active ? `url(#${gradientId})` : 'rgba(255,255,255,0.08)'}
              strokeWidth={active ? 2.4 : 1.2}
              strokeLinecap="round"
              className={active ? 'snv2-line-active' : ''}
            />
            <circle cx="220" cy={y} r={active ? 3.2 : 2.2} fill={active ? '#4ea1ff' : 'rgba(255,255,255,0.2)'} />
          </g>
        );
      })}

      {/* Secondary connectors (pedagogy + ethics) from small chips area */}
      {[458, 500].map((y, i) => {
        const domainIndex = i === 0 ? 4 : 5;
        const active = activeIndex === domainIndex;
        return (
          <g key={`secondary-${domainIndex}`}>
            <path
              d={`M 270 ${y} C 360 ${y}, 410 ${centerY + 34}, ${centerX} ${centerY}`}
              fill="none"
              stroke={active ? `url(#${gradientId})` : 'rgba(255,255,255,0.06)'}
              strokeWidth={active ? 2 : 1}
              strokeLinecap="round"
              strokeDasharray={active ? '0' : '3 4'}
            />
            <circle cx="270" cy={y} r={active ? 3 : 2} fill={active ? '#4ea1ff' : 'rgba(255,255,255,0.14)'} />
          </g>
        );
      })}

      {/* Pulse traveling on active line (primary only) */}
      {activeIndex <= 3 && (
        <circle r="3.2" fill="#7ab8ff" className="snv2-travel-dot">
          <animateMotion
            dur="2.2s"
            repeatCount="indefinite"
            path={`M 220 ${leftY[activeIndex]} C 330 ${leftY[activeIndex]}, 390 ${centerY}, ${centerX} ${centerY}`}
          />
        </circle>
      )}
    </svg>
  );
}

function DesktopNodeButton({
  domain,
  active,
  onActivate,
  compact = false,
}: {
  domain: SkillDomain;
  active: boolean;
  onActivate: () => void;
  compact?: boolean;
}) {
  const Icon = domain.icon;
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className="w-full text-left group focus-visible:outline-none"
      aria-pressed={active}
      aria-label={domain.title}
    >
      <GlassPanel
        className={[
          'transition-all duration-300',
          compact ? 'px-3 py-2 rounded-[16px]' : 'px-4 py-3.5',
          active
            ? 'border-white/20 bg-white/[0.06] shadow-[0_0_0_1px_rgba(100,160,255,0.15)_inset]'
            : 'hover:border-white/16 hover:bg-white/[0.04]',
        ].join(' ')}
      >
        <div className="flex items-center gap-3">
          <div
            className={[
              'shrink-0 rounded-[12px] border flex items-center justify-center',
              compact ? 'w-9 h-9' : 'w-10 h-10',
              active
                ? 'border-blue-300/25 bg-blue-500/10 text-blue-300'
                : 'border-white/10 bg-white/[0.03] text-white/70',
            ].join(' ')}
          >
            <Icon className={compact ? 'w-4 h-4' : 'w-[18px] h-[18px]'} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <div
              className={[
                'font-semibold leading-tight',
                compact ? 'text-[12px]' : 'text-[15px] md:text-[17px]',
                active ? 'text-white' : 'text-white/92',
              ].join(' ')}
            >
              {compact ? domain.short : domain.title}
            </div>
            {!compact && (
              <div className="text-[11px] md:text-[12px] text-white/55 leading-tight mt-0.5 truncate">
                {domain.subtitle}
              </div>
            )}
          </div>
        </div>
      </GlassPanel>
    </button>
  );
}

function MobileOrbit({
  domains,
  activeIndex,
  onSelect,
}: {
  domains: SkillDomain[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const orbitRadius = 108; // px
  const center = 140; // svg/view area center
  const ringId = useId().replace(/:/g, '');

  const positions = useMemo(() => {
    // 6 nodes evenly spaced, start from top
    return domains.map((_, i) => {
      const angle = (-90 + i * (360 / domains.length)) * (Math.PI / 180);
      return {
        x: center + orbitRadius * Math.cos(angle),
        y: center + orbitRadius * Math.sin(angle),
      };
    });
  }, [domains]);

  return (
    <div className="relative h-[292px] w-full flex items-center justify-center">
      {/* Ambient arcs & orbit lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 280 292"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`coreGlow-${ringId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(84,144,255,0.28)" />
            <stop offset="100%" stopColor="rgba(84,144,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="140" cy="146" r="92" fill="none" stroke="rgba(255,255,255,0.08)" />
        <circle cx="140" cy="146" r="110" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 5" className="snv2-spin-slow" />
        <circle cx="140" cy="146" r="48" fill={`url(#coreGlow-${ringId})`} />

        {/* Connector lines */}
        {positions.map((p, i) => {
          const active = i === activeIndex;
          return (
            <path
              key={`m-line-${i}`}
              d={`M 140 146 L ${p.x} ${p.y}`}
              stroke={active ? 'rgba(100,170,255,0.55)' : 'rgba(255,255,255,0.08)'}
              strokeWidth={active ? 1.8 : 1}
              strokeDasharray={active ? '0' : '3 4'}
              strokeLinecap="round"
            />
          );
        })}

        {/* active traveling pulse */}
        <circle r="2.6" fill="#79b6ff" className="snv2-soft-pulse">
          <animateMotion
            dur="1.8s"
            repeatCount="indefinite"
            path={`M 140 146 L ${positions[activeIndex].x} ${positions[activeIndex].y}`}
          />
        </circle>
      </svg>

      {/* Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[94px] h-[94px]">
          <div className="absolute inset-[-7px] rounded-full border border-blue-300/15 snv2-pulse-ring" />
          <div className="absolute inset-[-14px] rounded-full border border-blue-300/10 snv2-pulse-ring [animation-delay:900ms]" />
          <div className="absolute inset-0 rounded-full border border-white/18 bg-black/45 backdrop-blur-xl" />
          <div className="absolute inset-[7px] rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] flex flex-col items-center justify-center">
            <Activity className="w-6 h-6 text-white/90 mb-1" strokeWidth={1.8} />
            <span className="text-[10px] font-semibold tracking-[0.18em] text-blue-300 uppercase">
              Core
            </span>
          </div>
        </div>
      </div>

      {/* Orbit nodes (tap targets) */}
      {positions.map((p, i) => {
        const domain = domains[i];
        const Icon = domain.icon;
        const active = i === activeIndex;
        return (
          <button
            key={domain.id}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={domain.title}
            aria-pressed={active}
            className={[
              'absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none',
              active ? 'z-20' : 'z-10',
            ].join(' ')}
            style={{ left: `${(p.x / 280) * 100}%`, top: `${(p.y / 292) * 100}%` }}
          >
            <div
              className={[
                'relative w-[44px] h-[44px] rounded-full border flex items-center justify-center',
                'backdrop-blur-xl transition-all duration-300',
                active
                  ? 'border-blue-300/25 bg-blue-500/12 text-blue-200 scale-110 shadow-[0_0_0_1px_rgba(82,142,255,0.15)_inset]'
                  : 'border-white/10 bg-white/[0.035] text-white/75',
              ].join(' ')}
            >
              <div className={active ? 'snv2-node-float' : ''}>
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function SkillNetworkOverlayV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const connectorsGradientId = useId().replace(/:/g, '') + '-snv2';

  const activeDomain = DOMAINS[activeIndex];
  const primaryDomains = DOMAINS.slice(0, 4);
  const secondaryDomains = DOMAINS.slice(4);

  useEffect(() => {
    if (isPausedByUser) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 5500);

    return () => window.clearInterval(id);
  }, [isPausedByUser]);

  const handleActivate = (index: number) => {
    setActiveIndex(index);
    setIsPausedByUser(true);
    // resume autoplay later after some inactivity
    window.setTimeout(() => setIsPausedByUser(false), 14000);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <style>{`
        @keyframes snv2Float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes snv2SpinSlow {
          from { transform: rotate(0deg); transform-origin: 50% 50%; }
          to { transform: rotate(360deg); transform-origin: 50% 50%; }
        }
        @keyframes snv2PulseRing {
          0% { transform: scale(0.92); opacity: 0.32; }
          70% { opacity: 0.05; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        @keyframes snv2LineGlow {
          0%,100% { opacity: .8; }
          50% { opacity: 1; }
        }
        @keyframes snv2SoftPulse {
          0%,100% { opacity: .7; }
          50% { opacity: 1; }
        }
        .snv2-node-float { animation: snv2Float 3.2s ease-in-out infinite; }
        .snv2-spin-slow { animation: snv2SpinSlow 26s linear infinite; transform-origin: 50% 50%; }
        .snv2-pulse-ring { animation: snv2PulseRing 2.8s ease-out infinite; }
        .snv2-line-active { animation: snv2LineGlow 2.1s ease-in-out infinite; }
        .snv2-soft-pulse { animation: snv2SoftPulse 1.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .snv2-node-float,
          .snv2-spin-slow,
          .snv2-pulse-ring,
          .snv2-line-active,
          .snv2-soft-pulse {
            animation: none !important;
          }
        }
      `}</style>

      {/* ================= DESKTOP / TABLET ================= */}
      <div className="hidden md:grid h-full grid-cols-[1.02fr_0.98fr] gap-[2.4%]">
        {/* LEFT: domains + center hub area (single large panel) */}
        <GlassPanel className="relative min-h-0 p-[clamp(14px,1.4vw,22px)]">
          {/* Contrast island for readability over video */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_52%,rgba(0,0,0,0.22),transparent_58%)]" />
          <DesktopConnectors activeIndex={activeIndex} gradientId={connectorsGradientId} />

          <div className="relative z-10 grid grid-cols-[0.9fr_1.1fr] gap-[3.4%] h-full min-h-0">
            {/* Left list */}
            <div className="min-h-0 flex flex-col">
              <SectionTitle>Skill Dimensions</SectionTitle>

              <div className="flex flex-col gap-3">
                {primaryDomains.map((domain, i) => (
                  <DesktopNodeButton
                    key={domain.id}
                    domain={domain}
                    active={activeIndex === i}
                    onActivate={() => handleActivate(i)}
                  />
                ))}
              </div>

              <div className="mt-3">
                <SectionTitle>Additional Dimensions</SectionTitle>
                <div className="grid grid-cols-2 gap-2">
                  {secondaryDomains.map((domain, idx) => {
                    const realIndex = idx + 4;
                    return (
                      <DesktopNodeButton
                        key={domain.id}
                        domain={domain}
                        compact
                        active={activeIndex === realIndex}
                        onActivate={() => handleActivate(realIndex)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto pt-3">
                <GlassPanel className="px-3 py-2.5 rounded-[16px]">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-white/55 mb-1">
                    Research Signature
                  </div>
                  <div className="text-[12px] text-white/84 leading-[1.35]">
                    Mechanism-informed neuromodulation with clinically actionable trial design.
                  </div>
                </GlassPanel>
              </div>
            </div>

            {/* Right center: hub visual */}
            <div className="relative min-h-0 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[44%] aspect-square rounded-full border border-white/6" />
              </div>

              <div className="relative w-[min(44vw,380px)] max-w-[86%] aspect-square flex items-center justify-center">
                <div className="absolute inset-[10%] rounded-full border border-white/6 snv2-spin-slow" />
                <div className="absolute inset-[0%] rounded-full border border-white/4" />
                <div className="absolute inset-[18%] rounded-full border border-blue-300/8" />
                <div className="absolute inset-[26%] rounded-full border border-white/8" />

                {/* orbit mini labels around hub (desktop only) */}
                {DOMAINS.map((d, i) => {
                  const angle = (-90 + i * 60) * (Math.PI / 180);
                  const r = 38; // %
                  const x = 50 + r * Math.cos(angle);
                  const y = 50 + r * Math.sin(angle);
                  const active = i === activeIndex;
                  return (
                    <button
                      key={`orbit-${d.id}`}
                      type="button"
                      onClick={() => handleActivate(i)}
                      onMouseEnter={() => handleActivate(i)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div
                        className={[
                          'px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-[0.12em] transition-all duration-300',
                          active
                            ? 'border-blue-300/22 bg-blue-500/12 text-blue-200'
                            : 'border-white/10 bg-white/[0.02] text-white/62 hover:text-white/80',
                        ].join(' ')}
                      >
                        {d.short}
                      </div>
                    </button>
                  );
                })}

                {/* core hub */}
                <div className="relative w-[36%] aspect-square">
                  <div className="absolute inset-[-12%] rounded-full border border-blue-300/12 snv2-pulse-ring" />
                  <div className="absolute inset-[-22%] rounded-full border border-blue-300/8 snv2-pulse-ring [animation-delay:1000ms]" />
                  <div className="absolute inset-0 rounded-full border border-white/15 bg-black/45 backdrop-blur-xl" />
                  <div className="absolute inset-[6px] rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] flex flex-col items-center justify-center">
                    <Activity className="w-[26px] h-[26px] text-white/92 mb-1.5" strokeWidth={1.8} />
                    <div className="text-[12px] font-semibold tracking-[0.18em] uppercase text-blue-300">
                      Core
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center">
                  <div className="text-[13px] font-medium text-white/92">{activeDomain.short}</div>
                  <div className="text-[11px] text-white/55">Multidimensional practice view</div>
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>

        {/* RIGHT: active details + grouped metrics */}
        <div className="min-h-0 grid grid-rows-[auto_1fr_auto] gap-[2.2%]">
          {/* Active domain card */}
          <GlassPanel className="p-[clamp(14px,1.3vw,20px)]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                <activeDomain.icon className="w-[18px] h-[18px] text-white/85" strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <div className="text-[12px] uppercase tracking-[0.14em] text-white/55">
                  Active Dimension
                </div>
                <h3 className="text-[clamp(16px,1.45vw,24px)] font-bold leading-[1.1] mt-1">
                  {activeDomain.title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-white/62 mt-1">{activeDomain.subtitle}</p>
              </div>
            </div>

            <p className="text-[12px] md:text-[13px] text-white/84 leading-[1.42] mt-3">
              {activeDomain.summary}
            </p>
          </GlassPanel>

          {/* Detail + metrics composite */}
          <GlassPanel className="min-h-0 p-[clamp(14px,1.3vw,20px)] flex flex-col">
            <div className="grid grid-cols-[1.08fr_0.92fr] gap-3 min-h-0">
              {/* bullets + domain chips */}
              <div className="min-h-0 flex flex-col">
                <SectionTitle>Key Contributions</SectionTitle>

                <div className="flex flex-col gap-2">
                  {activeDomain.bullets.map((b) => (
                    <div
                      key={b}
                      className="rounded-[14px] border border-white/8 bg-white/[0.025] px-3 py-2.5"
                    >
                      <div className="flex gap-2">
                        <span className="mt-[6px] w-1 h-1 rounded-full bg-white/70 shrink-0" />
                        <span className="text-[12px] md:text-[13px] text-white/88 leading-[1.35]">
                          {b}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3">
                  <SectionTitle>Domain Signals</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {activeDomain.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] md:text-[11px] text-white/78"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* grouped metrics */}
              <div className="min-h-0 flex flex-col">
                <SectionTitle>Scientific Metrics</SectionTitle>
                <MetricGrid />

                <div className="mt-3">
                  <SectionTitle>Research Themes</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {GLOBAL_THEME_CHIPS.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] md:text-[11px] text-white/74"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-3">
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-white/55 mb-1">
                      Output Lens
                    </div>
                    <div className="text-[12px] text-white/84 leading-[1.35]">
                      Clinical translation + modeling + compliance thinking integrated into one
                      neuromodulation workflow perspective.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* bottom micro-wave */}
          <GlassPanel className="px-4 py-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] text-white/62">Multidimensional skills network</span>
              <svg viewBox="0 0 160 24" className="w-[140px] h-auto opacity-50 shrink-0" aria-hidden="true">
                <path
                  d="M0 14 C18 14, 21 6, 36 8 C50 10, 56 18, 72 14 C88 10, 96 7, 112 10 C130 13, 138 18, 160 12"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden h-full flex flex-col min-h-0">
        {/* Mobile compact heading */}
        <div className="shrink-0 mb-2">
          <div className="text-[11px] uppercase tracking-[0.16em] text-white/55 mb-1">
            Multidimensional Skills
          </div>
          <h3 className="text-[clamp(16px,5vw,22px)] font-bold leading-[1.08]">
            Clinical · Research · Regulatory · Pedagogy · Law
          </h3>
          <p className="text-[12px] text-white/70 mt-1 leading-[1.35]">
            Tap a node to explore one dimension without crowding the screen.
          </p>
        </div>

        {/* Scrollable mobile content */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
          {/* Radial hub animation */}
          <GlassPanel className="p-3">
            <MobileOrbit domains={DOMAINS} activeIndex={activeIndex} onSelect={handleActivate} />

            {/* active label row */}
            <div className="mt-1 flex items-center justify-center gap-2 flex-wrap">
              {DOMAINS.map((d, i) => (
                <button
                  key={`lbl-${d.id}`}
                  type="button"
                  onClick={() => handleActivate(i)}
                  className={[
                    'rounded-full border px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase transition-colors',
                    i === activeIndex
                      ? 'border-blue-300/22 bg-blue-500/10 text-blue-200'
                      : 'border-white/10 bg-white/[0.02] text-white/62',
                  ].join(' ')}
                >
                  {d.short}
                </button>
              ))}
            </div>
          </GlassPanel>

          {/* Active detail card */}
          <GlassPanel className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                <activeDomain.icon className="w-[18px] h-[18px] text-white/85" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/55">Active</div>
                <h4 className="text-[15px] font-bold leading-[1.1] mt-1">{activeDomain.title}</h4>
                <p className="text-[11px] text-white/62 mt-1 leading-tight">{activeDomain.subtitle}</p>
              </div>
            </div>

            <p className="text-[12px] text-white/84 leading-[1.4] mt-3">{activeDomain.summary}</p>

            <div className="mt-3 space-y-2">
              {activeDomain.bullets.slice(0, 3).map((b) => (
                <div
                  key={b}
                  className="rounded-[12px] border border-white/8 bg-white/[0.025] px-3 py-2"
                >
                  <div className="text-[11px] text-white/86 leading-[1.35]">{b}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {activeDomain.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/78"
                >
                  {chip}
                </span>
              ))}
            </div>
          </GlassPanel>

          {/* Grouped metrics */}
          <GlassPanel className="p-4">
            <SectionTitle>Scientific Metrics</SectionTitle>
            <MetricGrid />

            <div className="mt-3">
              <SectionTitle>Research Themes</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {GLOBAL_THEME_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/74"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Compact footer insight */}
          <GlassPanel className="px-4 py-3">
            <div className="text-[11px] text-white/68 leading-[1.35]">
              The goal of this view is to show how clinical practice, research, regulation,
              pedagogy, and ethics connect into one neuromodulation strategy.
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
