import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
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

type Metric = {
  label: string;
  value: string;
  group: 'Scientific metrics' | 'Practice metrics';
};

type Dimension = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  short: string;
  summary: string;
  contributions: string[];
  signals: string[];
  themes: string[];
  perspective: string;
  metrics: Metric[];
};

const DIMENSIONS: Dimension[] = [
  {
    id: 'clinical',
    icon: Brain,
    title: 'Clinical Neuroscience',
    subtitle: 'Functional neurosurgery / brain-circuit perspective',
    short: 'Clinical',
    summary:
      'Clinical neuroscience practice grounds neuromodulation strategy in symptom dimensions, target anatomy, and translational neurotherapeutic reasoning.',
    contributions: [
      'Brain-circuit framing for stimulation targets and symptom clusters',
      'Functional-neurosurgery perspective applied to neuromodulation workflows',
      'Clinical interpretation linking mechanisms to patient-facing endpoints',
    ],
    signals: ['Brain circuits', 'Target anatomy', 'Clinical endpoints'],
    themes: ['DLPFC + Cerebellum', 'Neuropsychiatry-oriented stimulation'],
    perspective:
      'Clinical reasoning anchors the network by defining what is therapeutically meaningful and measurable.',
    metrics: [
      { label: '10+ studies', value: '10+', group: 'Practice metrics' },
      { label: 'TMS / tDCS', value: '2', group: 'Practice metrics' },
    ],
  },
  {
    id: 'ops',
    icon: Waves,
    title: 'Trial Operations',
    subtitle: 'Neuromodulation study execution and coordination',
    short: 'Operations',
    summary:
      'Operational expertise spans protocol execution, session logic, team coordination, and adherence across neuromodulation studies in clinical settings.',
    contributions: [
      'Operational oversight of stimulation-session workflows',
      'Investigator coordination and site-level execution support',
      'Protocol adherence and study-delivery continuity in real-world settings',
    ],
    signals: ['Execution', 'Coordination', 'Protocol adherence'],
    themes: ['Randomized', 'Observational', 'Naturalistic', 'Qualitative'],
    perspective:
      'Operations converts mechanistic study design into reliable, repeatable clinical implementation.',
    metrics: [
      { label: '10+ studies', value: '10+', group: 'Practice metrics' },
      { label: 'Study formats', value: '5', group: 'Practice metrics' },
    ],
  },
  {
    id: 'reg',
    icon: ShieldCheck,
    title: 'Regulatory, GCP & Safety',
    subtitle: 'Compliance-ready documentation and safety oversight',
    short: 'Reg/GCP',
    summary:
      'Regulatory and safety work supports compliant neuromodulation research delivery with CPP/ANSM pathways, GCP alignment, and pharmacovigilance/SAE monitoring.',
    contributions: [
      'CPP / ANSM submission support and protocol documentation readiness',
      'ICH-GCP alignment in study conduct and documentation flows',
      'PV / SAE monitoring frameworks and safety-process support',
    ],
    signals: ['CPP', 'ANSM', 'ICH-GCP', 'PV/SAE'],
    themes: ['Compliance systems', 'Safety oversight', 'Trial governance'],
    perspective:
      'Regulatory rigor protects study integrity and enables responsible innovation in neuromodulation.',
    metrics: [
      { label: 'Frameworks', value: '4+', group: 'Practice metrics' },
      { label: 'Safety lens', value: '24/7', group: 'Practice metrics' },
    ],
  },
  {
    id: 'research',
    icon: FlaskConical,
    title: 'Research & Modeling',
    subtitle: 'Electric field modeling and translational neuroscience',
    short: 'Modeling',
    summary:
      'Research connects computational modeling, stimulation target anatomy, and clinically actionable neuromodulation hypotheses across translational brain science.',
    contributions: [
      'Electric field modeling and synthesis for stimulation personalization',
      'Mechanism-informed trial thinking linking anatomy variability to response',
      'Clinical + translational outputs spanning neuromodulation and brain sciences',
    ],
    signals: ['E-field modeling', 'tDCS / rTMS', 'Translation'],
    themes: [
      'J Affect Disord (2025)',
      'Depression neuromodulation',
      'Schizophrenia modeling',
      'Translational brain science',
    ],
    perspective:
      'Modeling integrates mechanism, anatomy, and execution into one neuromodulation workflow perspective.',
    metrics: [
      { label: 'Citations', value: '722', group: 'Scientific metrics' },
      { label: 'H-index', value: '4', group: 'Scientific metrics' },
      { label: 'Publications', value: '8', group: 'Scientific metrics' },
      { label: 'Oral comms', value: '12+', group: 'Scientific metrics' },
    ],
  },
  {
    id: 'pedagogy',
    icon: GraduationCap,
    title: 'Pedagogy',
    subtitle: 'Training design, anatomy learning, investigator enablement',
    short: 'Pedagogy',
    summary:
      'Pedagogical work supports investigator training and neuroscience education through structured learning design, anatomy teaching innovation, and clinical-research enablement.',
    contributions: [
      'Structured training for clinicians, residents, assistants, and research staff',
      'Neuroscience education innovation (tactile / multisensory approaches)',
      'Knowledge transfer bridging theory, protocol logic, and execution',
    ],
    signals: ['Training', 'Anatomy education', 'Investigator enablement'],
    themes: ['Clinical teams', 'Residents', 'Research assistants'],
    perspective:
      'Pedagogy scales expertise by making complex brain-stimulation workflows teachable and reproducible.',
    metrics: [
      { label: 'Training hours', value: '80+', group: 'Practice metrics' },
      { label: 'Team enablement', value: 'Multi-role', group: 'Practice metrics' },
    ],
  },
  {
    id: 'law',
    icon: Scale,
    title: 'Law & Bioethics',
    subtitle: 'Responsible innovation and medical-law perspective',
    short: 'Law',
    summary:
      'Medical-law and bioethics training adds a governance lens to neurotechnology innovation, risk framing, and responsible translation in clinical neuroscience.',
    contributions: [
      'Ethical framing for neuromodulation innovation and clinical implementation',
      'Medical-law perspective supporting governance-aware decision making',
      'Responsible translation mindset across research and care interfaces',
    ],
    signals: ['Bioethics', 'Medical law', 'Responsible innovation'],
    themes: ['Governance', 'Risk framing', 'Neurotechnology ethics'],
    perspective:
      'Law and bioethics strengthen the network by clarifying what is acceptable, safe, and responsibly scalable.',
    metrics: [
      { label: 'Master ongoing', value: '2025–26', group: 'Practice metrics' },
      { label: 'Governance lens', value: 'Applied', group: 'Practice metrics' },
    ],
  },
];

const PRIMARY_IDS = ['clinical', 'ops', 'reg', 'research'];
const SECONDARY_IDS = ['pedagogy', 'law'];

const glassBase =
  'rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-[22px]';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function GlassPanel({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={cx(glassBase, className)} style={style}>
      {children}
    </div>
  );
}

function Chip({
  children,
  active = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const Comp = onClick ? 'button' : 'span';
  return (
    <Comp
      onClick={onClick}
      className={cx(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] md:text-[12px] leading-none transition-all',
        active
          ? 'border-white/25 bg-white/[0.08] text-white'
          : 'border-white/10 bg-white/[0.03] text-white/72 hover:text-white/90 hover:border-white/20',
        onClick && 'cursor-pointer',
        className
      )}
      type={Comp === 'button' ? 'button' : undefined}
    >
      {children}
    </Comp>
  );
}

function MetricTile({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-[14px] border border-white/10 bg-white/[0.025] px-3 py-2.5">
      <div className="text-[clamp(18px,1.8vw,34px)] leading-none font-bold text-white/96 tabular-nums">
        {metric.value}
      </div>
      <div className="mt-1 text-[11px] md:text-[12px] text-white/65">{metric.label}</div>
    </div>
  );
}

function SelectorRow({
  dim,
  active,
  onClick,
  compact = false,
}: {
  dim: Dimension;
  active: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  const Icon = dim.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'w-full text-left rounded-[18px] border transition-all duration-300',
        'bg-white/[0.025] hover:bg-white/[0.05]',
        active ? 'border-white/20 ring-1 ring-blue-400/30' : 'border-white/8 hover:border-white/15',
        compact ? 'px-3 py-2.5' : 'px-3.5 py-3'
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={cx(
            'shrink-0 rounded-[12px] border flex items-center justify-center',
            compact ? 'w-10 h-10' : 'w-11 h-11',
            active
              ? 'border-blue-400/30 bg-blue-500/10 text-blue-300'
              : 'border-white/10 bg-white/[0.03] text-white/70'
          )}
        >
          <Icon className={compact ? 'w-4 h-4' : 'w-5 h-5'} strokeWidth={1.7} />
        </div>

        <div className="min-w-0">
          <div className={cx('font-semibold leading-tight', compact ? 'text-[14px]' : 'text-[15px] md:text-[16px]')}>
            {dim.title}
          </div>
          <div className="text-white/58 text-[11px] md:text-[12px] leading-snug truncate">
            {dim.subtitle}
          </div>
        </div>
      </div>
    </button>
  );
}

function ConnectorLayer({ activeIndex }: { activeIndex: number }) {
  const leftYs = [18, 30, 42, 54, 66, 78];
  const rightYs = [26, 42, 58, 74];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 1200 760"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="snv3Line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="45%" stopColor="rgba(99,147,255,0.32)" />
          <stop offset="60%" stopColor="rgba(99,147,255,0.16)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* left → center */}
      {leftYs.map((y, i) => {
        const d = `M 150 ${y * 7.2} C 300 ${y * 7.2}, 420 360, 600 380`;
        const isActive = i === activeIndex;
        return (
          <g key={`l-${i}`}>
            <path
              d={d}
              fill="none"
              stroke={isActive ? 'rgba(77,163,255,0.36)' : 'rgba(255,255,255,0.06)'}
              strokeWidth={isActive ? 1.8 : 1}
              strokeDasharray={isActive ? '5 6' : '2 5'}
              className={isActive ? 'snv3-dash-flow' : ''}
            />
            {isActive && (
              <circle r="3.2" fill="rgba(68,152,255,0.95)" className="snv3-orbiter-dot">
                <animateMotion dur="3.6s" repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        );
      })}

      {/* center → right (3 clean bands) */}
      {rightYs.map((y, i) => {
        const d = `M 600 380 C 780 380, 875 ${y * 7.2}, 1045 ${y * 7.2}`;
        const isActive = i === Math.min(activeIndex, 3);
        return (
          <g key={`r-${i}`}>
            <path
              d={d}
              fill="none"
              stroke={isActive ? 'url(#snv3Line)' : 'rgba(255,255,255,0.06)'}
              strokeWidth={isActive ? 1.7 : 1}
              strokeDasharray={isActive ? '6 7' : '2 6'}
              className={isActive ? 'snv3-dash-flow' : ''}
            />
            {isActive && (
              <circle r="2.7" fill="rgba(255,255,255,0.9)">
                <animateMotion dur="4.2s" repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function DesktopCoreRadial({
  active,
  onSelect,
}: {
  active: Dimension;
  onSelect: (id: string) => void;
}) {
  const all = DIMENSIONS;

  return (
    <div className="relative h-full min-h-0 flex items-center justify-center">
      <div className="relative w-[min(34vw,420px)] aspect-square">
        {/* ring field */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[56%] h-[56%] rounded-full border border-white/10" />
          <div className="absolute w-[72%] h-[72%] rounded-full border border-white/8 snv3-slow-rotate" />
          <div className="absolute w-[88%] h-[88%] rounded-full border border-white/6 border-dashed snv3-slow-rotate-rev" />
          <div className="absolute w-full h-full rounded-full border border-white/5" />
          <div className="absolute w-[62%] h-[62%] rounded-full bg-blue-500/5 blur-2xl" />
        </div>

        {/* subtle grid arcs */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.18]" viewBox="0 0 100 100" fill="none">
          <path d="M8 70 C22 40, 44 28, 70 22" stroke="white" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
          <path d="M16 84 C34 66, 54 56, 84 50" stroke="white" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
          <path d="M22 14 C40 30, 56 34, 88 34" stroke="white" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.2" strokeDasharray="1 2" />
        </svg>

        {/* orbit labels / nodes */}
        {all.map((d, i) => {
          const angle = -90 + i * 60;
          const isActive = d.id === active.id;
          const Icon = d.icon;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => onSelect(d.id)}
              className="absolute left-1/2 top-1/2 group"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-44%) rotate(${-angle}deg) translateY(-155px)`,
              }}
              aria-label={d.title}
            >
              <div
                className={cx(
                  'min-w-[88px] max-w-[120px] px-2.5 py-2 rounded-[14px] border transition-all duration-300',
                  'backdrop-blur-lg',
                  isActive
                    ? 'border-blue-400/30 bg-blue-500/10 text-white shadow-[0_0_0_1px_rgba(96,165,250,0.15)]'
                    : 'border-white/10 bg-white/[0.03] text-white/72 hover:text-white/90 hover:border-white/20'
                )}
              >
                <div className="flex items-center gap-2">
                  <Icon className={cx('w-3.5 h-3.5 shrink-0', isActive ? 'text-blue-300' : 'text-white/65')} strokeWidth={1.9} />
                  <span className="text-[10px] md:text-[11px] leading-tight font-medium truncate">
                    {d.short}
                  </span>
                </div>
              </div>
            </button>
          );
        })}

        {/* core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[38%] h-[38%] rounded-full border border-white/12 bg-black/55 backdrop-blur-2xl flex items-center justify-center">
            <div className="absolute inset-[-8%] rounded-full border border-blue-400/20 snv3-pulse-ring" />
            <div className="absolute inset-[-16%] rounded-full border border-blue-400/10 snv3-pulse-ring [animation-delay:1s]" />
            <div className="text-center px-2">
              <Activity className="w-8 h-8 md:w-9 md:h-9 mx-auto text-white/90" strokeWidth={1.8} />
              <div className="mt-2 text-[10px] md:text-[12px] tracking-[0.18em] uppercase text-blue-300 font-semibold">
                Core
              </div>
            </div>
          </div>
        </div>

        {/* active label */}
        <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 text-center w-[92%]">
          <div className="text-[clamp(14px,1.1vw,18px)] font-semibold leading-tight">{active.title}</div>
          <div className="text-[11px] md:text-[12px] text-white/58 mt-1">{active.subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function MobileRadial({
  active,
  onSelect,
}: {
  active: Dimension;
  onSelect: (id: string) => void;
}) {
  const orbit = DIMENSIONS.map((d, i) => ({ ...d, angle: -90 + i * 60 }));

  return (
    <GlassPanel className="p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
        <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-full border border-white/8 snv3-slow-rotate" />
        <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[88%] aspect-square rounded-full border border-white/6 border-dashed snv3-slow-rotate-rev" />
      </div>

      <div className="relative h-[290px]">
        {/* Core */}
        <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-24 h-24 rounded-full border border-white/12 bg-black/55 backdrop-blur-xl flex items-center justify-center">
            <div className="absolute inset-[-8%] rounded-full border border-blue-400/20 snv3-pulse-ring" />
            <Activity className="w-6 h-6 text-white/90" strokeWidth={1.9} />
          </div>
          <div className="text-center mt-2 text-[11px] tracking-[0.16em] uppercase text-blue-300 font-semibold">
            Core
          </div>
        </div>

        {/* radial nodes */}
        {orbit.map((d) => {
          const Icon = d.icon;
          const isActive = d.id === active.id;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => onSelect(d.id)}
              className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%,-50%) rotate(${d.angle}deg) translateY(-108px) rotate(${-d.angle}deg)`,
              }}
              aria-label={d.title}
            >
              <div
                className={cx(
                  'w-[94px] rounded-[14px] border px-2 py-2 backdrop-blur-xl transition-all duration-300',
                  isActive
                    ? 'border-blue-400/30 bg-blue-500/10 text-white'
                    : 'border-white/10 bg-white/[0.03] text-white/75'
                )}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <Icon className={cx('w-3.5 h-3.5', isActive ? 'text-blue-300' : 'text-white/65')} strokeWidth={1.8} />
                  <span className="text-[10px] font-medium leading-tight truncate">{d.short}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* fallback horizontal selector (phone friendly) */}
      <div className="-mx-1 mt-1 overflow-x-auto">
        <div className="flex gap-2 px-1 pb-1 min-w-max">
          {DIMENSIONS.map((d) => (
            <Chip key={d.id} active={d.id === active.id} onClick={() => onSelect(d.id)}>
              {d.short}
            </Chip>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

function UnifiedDetailsPanel({ active }: { active: Dimension }) {
  const Icon = active.icon;

  const grouped = useMemo(() => {
    const map = new Map<string, Metric[]>();
    for (const m of active.metrics) {
      const key = m.group;
      map.set(key, [...(map.get(key) ?? []), m]);
    }
    return Array.from(map.entries());
  }, [active.metrics]);

  return (
    <GlassPanel className="h-full min-h-0 p-4 md:p-[clamp(16px,1.4vw,22px)] flex flex-col relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-8 right-8 h-px bg-white/8 pointer-events-none" />

      {/* Header */}
      <div className="shrink-0">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/80 shrink-0">
            <Icon className="w-5 h-5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">Active dimension</div>
            <h3 className="text-[clamp(18px,1.6vw,30px)] font-bold leading-tight mt-1">{active.title}</h3>
            <p className="text-[12px] md:text-[13px] text-white/65 leading-snug mt-1">{active.subtitle}</p>
          </div>
        </div>

        <p className="mt-3 text-[13px] md:text-[14px] text-white/88 leading-[1.45]">
          {active.summary}
        </p>
      </div>

      {/* Main content */}
      <div className="mt-4 md:mt-5 min-h-0 flex-1 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-4">
        {/* Left column */}
        <div className="min-h-0 flex flex-col gap-4">
          <section className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3.5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Key contributions</div>
            <div className="space-y-2.5">
              {active.contributions.map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2 text-[12px] md:text-[13px] text-white/88 leading-snug"
                >
                  • {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3.5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Domain signals</div>
            <div className="flex flex-wrap gap-2">
              {active.signals.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="min-h-0 flex flex-col gap-4">
          <section className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3.5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Grouped metrics</div>
            <div className="space-y-3">
              {grouped.map(([groupName, items]) => (
                <div key={groupName}>
                  <div className="text-[11px] text-white/60 mb-2">{groupName}</div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {items.map((m) => (
                      <MetricTile key={`${groupName}-${m.label}`} metric={m} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3.5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Research themes</div>
            <div className="flex flex-wrap gap-2">
              {active.themes.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            <div className="mt-3 rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 mb-1">Output lens</div>
              <p className="text-[12px] md:text-[13px] text-white/84 leading-snug">{active.perspective}</p>
            </div>
          </section>
        </div>
      </div>
    </GlassPanel>
  );
}

function MobileDetails({ active }: { active: Dimension }) {
  const Icon = active.icon;
  const grouped = useMemo(() => {
    const map = new Map<string, Metric[]>();
    for (const m of active.metrics) {
      map.set(m.group, [...(map.get(m.group) ?? []), m]);
    }
    return Array.from(map.entries());
  }, [active.metrics]);

  return (
    <div className="space-y-3">
      <GlassPanel className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/80 shrink-0">
            <Icon className="w-5 h-5" strokeWidth={1.8} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">Active dimension</div>
            <div className="text-[18px] font-bold leading-tight mt-1">{active.title}</div>
            <div className="text-[12px] text-white/62 mt-1 leading-snug">{active.subtitle}</div>
          </div>
        </div>
        <p className="mt-3 text-[13px] text-white/88 leading-[1.42]">{active.summary}</p>
      </GlassPanel>

      <details open className={cx(glassBase, 'p-4')}>
        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
          <span className="text-[13px] font-semibold">Key Contributions</span>
          <span className="text-[11px] text-white/55">tap to collapse</span>
        </summary>
        <div className="mt-3 space-y-2">
          {active.contributions.map((item) => (
            <div
              key={item}
              className="rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2 text-[12px] text-white/88 leading-snug"
            >
              • {item}
            </div>
          ))}
        </div>
      </details>

      <details className={cx(glassBase, 'p-4')}>
        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
          <span className="text-[13px] font-semibold">Grouped Metrics</span>
          <span className="text-[11px] text-white/55">tap to expand</span>
        </summary>
        <div className="mt-3 space-y-3">
          {grouped.map(([groupName, items]) => (
            <div key={groupName}>
              <div className="text-[11px] text-white/60 mb-2">{groupName}</div>
              <div className="grid grid-cols-2 gap-2">
                {items.map((m) => (
                  <MetricTile key={`${groupName}-${m.label}`} metric={m} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </details>

      <details className={cx(glassBase, 'p-4')}>
        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between">
          <span className="text-[13px] font-semibold">Themes & Signals</span>
          <span className="text-[11px] text-white/55">tap to expand</span>
        </summary>

        <div className="mt-3">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-2">Domain signals</div>
          <div className="flex flex-wrap gap-2 mb-3">
            {active.signals.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-2">Research themes</div>
          <div className="flex flex-wrap gap-2">
            {active.themes.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="mt-3 rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1">Output lens</div>
            <p className="text-[12px] text-white/84 leading-snug">{active.perspective}</p>
          </div>
        </div>
      </details>
    </div>
  );
}

export default function SkillNetworkOverlayV3() {
  const [activeId, setActiveId] = useState<string>('research');

  const active = useMemo(
    () => DIMENSIONS.find((d) => d.id === activeId) ?? DIMENSIONS[0],
    [activeId]
  );

  const activeIndex = useMemo(
    () => Math.max(0, DIMENSIONS.findIndex((d) => d.id === activeId)),
    [activeId]
  );

  const primary = useMemo(
    () => PRIMARY_IDS.map((id) => DIMENSIONS.find((d) => d.id === id)!).filter(Boolean),
    []
  );
  const secondary = useMemo(
    () => SECONDARY_IDS.map((id) => DIMENSIONS.find((d) => d.id === id)!).filter(Boolean),
    []
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <style>{`
        @keyframes snv3-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes snv3-rotate-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes snv3-pulse {
          0% { transform: scale(0.96); opacity: 0.45; }
          70% { transform: scale(1.08); opacity: 0.0; }
          100% { transform: scale(1.08); opacity: 0.0; }
        }
        @keyframes snv3-dash {
          to { stroke-dashoffset: -42; }
        }
        .snv3-slow-rotate { animation: snv3-rotate 24s linear infinite; }
        .snv3-slow-rotate-rev { animation: snv3-rotate-rev 28s linear infinite; }
        .snv3-pulse-ring { animation: snv3-pulse 2.8s ease-out infinite; }
        .snv3-dash-flow { animation: snv3-dash 2.6s linear infinite; }
      `}</style>

      {/* Desktop connector layer spanning all 3 zones */}
      <ConnectorLayer activeIndex={activeIndex} />

      {/* Desktop layout */}
      <div className="hidden md:grid relative z-10 h-full grid-cols-[minmax(260px,29%)_minmax(320px,31%)_minmax(420px,40%)] gap-[clamp(12px,1.2vw,18px)]">
        {/* LEFT compact selector panel */}
        <GlassPanel className="min-h-0 p-[clamp(12px,1vw,16px)] flex flex-col">
          <div className="shrink-0 mb-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Skill dimensions</div>
          </div>

          <div className="space-y-2.5">
            {primary.map((dim) => (
              <SelectorRow key={dim.id} dim={dim} active={dim.id === active.id} onClick={() => setActiveId(dim.id)} compact />
            ))}
          </div>

          <div className="mt-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-2">Additional dimensions</div>
            <div className="grid grid-cols-2 gap-2">
              {secondary.map((dim) => (
                <button
                  key={dim.id}
                  type="button"
                  onClick={() => setActiveId(dim.id)}
                  className={cx(
                    'rounded-[14px] border px-3 py-2.5 text-left transition-all',
                    dim.id === active.id
                      ? 'border-white/20 bg-white/[0.08] ring-1 ring-blue-400/25'
                      : 'border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/15'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <dim.icon className={cx('w-4 h-4', dim.id === active.id ? 'text-blue-300' : 'text-white/70')} strokeWidth={1.8} />
                    <span className="text-[13px] font-medium">{dim.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
            <div className="rounded-[14px] border border-white/8 bg-white/[0.02] px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1">Research signature</div>
              <p className="text-[12px] text-white/82 leading-snug">
                Mechanism-informed neuromodulation with clinically actionable trial design.
              </p>
            </div>
          </div>
        </GlassPanel>

        {/* CENTER bigger core radial */}
        <div className="min-h-0 relative">
          <DesktopCoreRadial active={active} onSelect={setActiveId} />
        </div>

        {/* RIGHT unified details panel */}
        <div className="min-h-0">
          <UnifiedDetailsPanel active={active} />
        </div>
      </div>

      {/* Mobile layout: radial + tap interactions + collapsible details */}
      <div className="md:hidden relative z-10 h-full min-h-0 flex flex-col">
        <div className="flex-1 min-h-0 overflow-y-auto space-y-3 pr-1">
          <MobileRadial active={active} onSelect={setActiveId} />
          <MobileDetails active={active} />
        </div>
      </div>
    </div>
  );
}
