import { useMemo, useState } from 'react';
import GlassCard from './GlassCard';
import {
  Activity,
  Brain,
  FlaskConical,
  GraduationCap,
  Scale,
  ShieldCheck,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SkillId =
  | 'clinical'
  | 'trialOps'
  | 'regulatory'
  | 'research'
  | 'pedagogy'
  | 'law';

type Dimension = {
  id: SkillId;
  label: string;
  shortLabel: string;
  subtitle: string;
  miniSubtitle: string;
  icon: LucideIcon;
  description: string;
  contributions: string[];
  domainSignals: string[];
  researchThemes: string[];
  outputLens: string;
  practiceMetrics: Array<{ label: string; value: string }>;
};

type Point = { x: number; y: number };

const GLOBAL_METRICS = [
  { label: 'Citations', value: '722' },
  { label: 'H-index', value: '4' },
  { label: 'Publications', value: '8' },
  { label: 'Oral comms', value: '12+' },
] as const;

const DIMENSIONS: Dimension[] = [
  {
    id: 'clinical',
    label: 'Clinical Neuroscience',
    shortLabel: 'Clinical',
    subtitle: 'Functional neurosurgery / brain-circuit perspective',
    miniSubtitle: 'DBS / functional neurosurgery',
    icon: Brain,
    description:
      'Clinical neuroscience training anchors the portfolio in symptom-circuit reasoning, neuroanatomical interpretation, and translational relevance.',
    contributions: [
      'Functional neuroanatomy perspective',
      'Clinical interpretation of symptom dimensions',
      'Translational framing for protocol relevance',
    ],
    domainSignals: ['Brain circuits', 'Functional neuroanatomy', 'Clinical reasoning'],
    researchThemes: ['DLPFC + Cerebellum', 'Neuropsychiatric stimulation'],
    outputLens:
      'Keeps modeling and research outputs clinically interpretable and connected to real-world therapeutic decision logic.',
    practiceMetrics: [
      { label: 'Core lens', value: 'Clinical' },
      { label: 'Scope', value: 'Brain-circuit' },
      { label: 'Setting', value: 'Functional NSGY' },
      { label: 'Use', value: 'Translation' },
    ],
  },
  {
    id: 'trialOps',
    label: 'Trial Operations',
    shortLabel: 'Trial Ops',
    subtitle: 'Neuromodulation study execution',
    miniSubtitle: '10+ neuromodulation studies',
    icon: Waves,
    description:
      'Operational execution spans study coordination, stimulation workflow logic, and investigator alignment across clinical research formats.',
    contributions: [
      'Study workflow design and session execution logic',
      'Site / investigator coordination',
      'Protocol adherence and operational consistency',
    ],
    domainSignals: ['Study execution', 'Protocol flow', 'Investigator enablement'],
    researchThemes: ['Randomized studies', 'Observational cohorts', 'Qualitative formats'],
    outputLens:
      'Transforms protocol plans into consistent study delivery and high-quality execution in neuromodulation settings.',
    practiceMetrics: [
      { label: 'Studies', value: '10+' },
      { label: 'Formats', value: 'Rand/Obs/Qual' },
      { label: 'Ops focus', value: 'Execution' },
      { label: 'Strength', value: 'Coordination' },
    ],
  },
  {
    id: 'regulatory',
    label: 'Regulatory, GCP & Safety',
    shortLabel: 'Regulatory',
    subtitle: 'Compliance and safety oversight',
    miniSubtitle: 'ANSM / CPP / SAE monitoring',
    icon: ShieldCheck,
    description:
      'Regulatory expertise supports compliant trial execution through documentation rigor, GCP alignment, and safety-awareness workflows.',
    contributions: [
      'CPP / ANSM submission support',
      'ICH-GCP-aligned documentation and conduct',
      'Safety signal awareness (PV / SAE monitoring logic)',
    ],
    domainSignals: ['GCP', 'Safety monitoring', 'Compliance readiness'],
    researchThemes: ['PV / SAE', 'Documentation frameworks', 'Protocol governance'],
    outputLens:
      'Adds reliability, audit readiness, and safer translational execution across clinical neuroscience programs.',
    practiceMetrics: [
      { label: 'Frameworks', value: 'CPP·ANSM·GCP' },
      { label: 'Safety', value: 'PV / SAE' },
      { label: 'Mode', value: 'Compliance' },
      { label: 'Value', value: 'Readiness' },
    ],
  },
  {
    id: 'research',
    label: 'Research & Modeling',
    shortLabel: 'Modeling',
    subtitle: 'Electric field modeling and translational neuroscience',
    miniSubtitle: 'E-field modeling (TMS/tDCS)',
    icon: FlaskConical,
    description:
      'Research connects computational modeling, stimulation target anatomy, and clinically actionable neuromodulation hypotheses.',
    contributions: [
      'Electric field modeling (TMS / tDCS)',
      'Depression-focused neuromodulation synthesis',
      'Mechanism-informed trial thinking',
    ],
    domainSignals: ['E-field modeling', 'tDCS / rTMS', 'Mechanistic framing'],
    researchThemes: ['J Affect Disord (2025)', 'Translational brain science', 'Schizophrenia modeling'],
    outputLens:
      'Integrates computational evidence with symptom-circuit reasoning and practical trial design decisions.',
    practiceMetrics: [
      { label: 'Primary mode', value: 'Modeling' },
      { label: 'Focus', value: 'Mechanism-informed' },
      { label: 'Modalities', value: 'TMS/tDCS' },
      { label: 'Output', value: 'Translation' },
    ],
  },
  {
    id: 'pedagogy',
    label: 'Pedagogy',
    shortLabel: 'Pedagogy',
    subtitle: 'Neuroscience education design',
    miniSubtitle: 'Education + training methods',
    icon: GraduationCap,
    description:
      'Pedagogy strengthens investigator enablement through structured teaching, clearer concept transfer, and applied learning design.',
    contributions: [
      'Investigator training and onboarding support',
      'Multisensory learning approaches',
      'Complex concept communication',
    ],
    domainSignals: ['Training', 'Knowledge transfer', 'Learning design'],
    researchThemes: ['Anatomy learning', 'Teaching innovation'],
    outputLens:
      'Improves adoption quality by making complex neuromodulation concepts teachable, reusable, and operationally clear.',
    practiceMetrics: [
      { label: 'Role', value: 'Training' },
      { label: 'Approach', value: 'Applied pedagogy' },
      { label: 'Audience', value: 'Investigators' },
      { label: 'Value', value: 'Enablement' },
    ],
  },
  {
    id: 'law',
    label: 'Law & Bioethics',
    shortLabel: 'Law',
    subtitle: 'Responsible innovation and governance lens',
    miniSubtitle: 'Bioethics / medical law',
    icon: Scale,
    description:
      'Medical-law and bioethics training add governance and risk-framing perspective to neurotechnology innovation and translation.',
    contributions: [
      'Ethical framing for neuromodulation implementation',
      'Medical-law perspective for governance-aware decisions',
      'Responsible innovation in clinical neurotechnology',
    ],
    domainSignals: ['Bioethics', 'Medical law', 'Responsible innovation'],
    researchThemes: ['Governance', 'Risk framing', 'Neurotechnology ethics'],
    outputLens:
      'Clarifies what is acceptable, safe, and responsibly scalable across research and clinical interfaces.',
    practiceMetrics: [
      { label: 'Master', value: '2025–26' },
      { label: 'Lens', value: 'Governance' },
      { label: 'Focus', value: 'Bioethics' },
      { label: 'Use', value: 'Risk framing' },
    ],
  },
];

const CORE_POINT: Point = { x: 50, y: 50 };

const DESKTOP_POSITIONS: Record<SkillId, Point> = {
  clinical: { x: 50, y: 16 },
  law: { x: 78, y: 33 },
  trialOps: { x: 78, y: 67 },
  regulatory: { x: 50, y: 84 },
  pedagogy: { x: 22, y: 67 },
  research: { x: 22, y: 33 },
};

const MOBILE_POSITIONS: Record<SkillId, Point> = {
  clinical: { x: 50, y: 16 },
  law: { x: 80, y: 34 },
  trialOps: { x: 80, y: 66 },
  regulatory: { x: 50, y: 84 },
  pedagogy: { x: 20, y: 66 },
  research: { x: 20, y: 34 },
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function buildConnectorPath(from: Point, to: Point) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const pull = 0.28;
  const qx = mx + (50 - mx) * pull;
  const qy = my + (50 - my) * pull;
  return `M ${from.x} ${from.y} Q ${qx} ${qy} ${to.x} ${to.y}`;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2">
      {children}
    </div>
  );
}

function Chip({
  children,
  active = false,
  compact = false,
}: {
  children: string;
  active?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] text-white/78',
        compact
          ? 'px-2.5 py-1 text-[10px]'
          : 'px-3 py-1.5 text-[11px]',
        active && 'border-white/20 bg-white/[0.06] text-white/92'
      )}
    >
      {children}
    </span>
  );
}

function MetricTile({
  label,
  value,
  compact = false,
}: {
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cx(
        'rounded-[14px] border border-white/10 bg-white/[0.03]',
        compact ? 'p-2.5' : 'p-3'
      )}
    >
      <div
        className={cx(
          'font-bold leading-none text-white',
          compact ? 'text-[18px]' : 'text-[22px]'
        )}
      >
        {value}
      </div>
      <div
        className={cx(
          'uppercase tracking-[0.14em] text-white/50 mt-1',
          compact ? 'text-[9px]' : 'text-[10px]'
        )}
      >
        {label}
      </div>
    </div>
  );
}

function DimensionSelectorButton({
  dimension,
  active,
  onClick,
  compact = false,
}: {
  dimension: Dimension;
  active: boolean;
  onClick: () => void;
  compact?: boolean;
}) {
  const Icon = dimension.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'w-full text-left rounded-[16px] border transition-all duration-300 overflow-hidden',
        active
          ? 'border-white/20 bg-white/[0.06]'
          : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/12'
      )}
    >
      <div className={cx('flex items-center gap-3', compact ? 'p-3' : 'p-3.5')}>
        <div
          className={cx(
            'rounded-[12px] border flex items-center justify-center shrink-0',
            active
              ? 'border-white/20 bg-white/[0.06]'
              : 'border-white/10 bg-white/[0.03]',
            compact ? 'w-9 h-9' : 'w-10 h-10'
          )}
        >
          <Icon
            className={cx(
              compact ? 'w-4 h-4' : 'w-[18px] h-[18px]',
              active ? 'text-white/90' : 'text-white/70'
            )}
            strokeWidth={1.7}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className={cx(
              'font-semibold leading-tight truncate',
              compact ? 'text-[13px]' : 'text-[14px]'
            )}
          >
            {dimension.label}
          </div>
          <div
            className={cx(
              'text-white/55 truncate',
              compact ? 'text-[10px]' : 'text-[11px]'
            )}
          >
            {compact ? dimension.shortLabel : dimension.subtitle}
          </div>
        </div>
      </div>
    </button>
  );
}

function PolarStage({
  active,
  onSelect,
  positions,
  mobile = false,
}: {
  active: Dimension;
  onSelect: (id: SkillId) => void;
  positions: Record<SkillId, Point>;
  mobile?: boolean;
}) {
  const allPaths = useMemo(
    () =>
      DIMENSIONS.map((d) => ({
        id: d.id,
        path: buildConnectorPath(positions[d.id], CORE_POINT),
      })),
    [positions]
  );

  const activePath = useMemo(
    () => buildConnectorPath(positions[active.id], CORE_POINT),
    [active.id, positions]
  );

  const activePosition = positions[active.id];

  return (
    <div className="relative w-full h-full min-h-0">
      {/* Dot grid */}
      <div className="absolute inset-0 sn41-grid opacity-[0.22] pointer-events-none" />

      {/* Subtle moving light field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sn41-aurora absolute inset-[-20%] opacity-70" />
      </div>

      {/* Connector + orbital SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Faint background connector paths */}
        {allPaths.map((p) => (
          <path
            key={p.id}
            d={p.path}
            fill="none"
            stroke="rgba(255,255,255,0.075)"
            strokeWidth="0.35"
            strokeDasharray="1.4 2.2"
          />
        ))}

        {/* Active connector (base) */}
        <path
          d={activePath}
          fill="none"
          stroke="rgba(130,180,255,0.22)"
          strokeWidth="0.95"
          strokeLinecap="round"
        />

        {/* Active connector flow */}
        <path
          d={activePath}
          fill="none"
          stroke="rgba(127,191,255,0.55)"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="sn41-dash-flow"
        />

        {/* Core rings */}
        <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="20.5" fill="none" stroke="rgba(110,170,255,0.08)" strokeWidth="0.25" className="sn41-pulse-ring" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.22" strokeDasharray="2 3" />

        {/* Active node halo marker */}
        <circle
          cx={activePosition.x}
          cy={activePosition.y}
          r={mobile ? 3.8 : 3.2}
          fill="rgba(103,171,255,0.10)"
          stroke="rgba(127,191,255,0.35)"
          strokeWidth="0.4"
          className="sn41-node-halo"
        />
      </svg>

      {/* Core */}
      <div
        className={cx(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-black/45 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center',
          mobile ? 'w-[122px] h-[122px]' : 'w-[154px] h-[154px]'
        )}
      >
        <div className="absolute inset-[8px] rounded-full border border-white/6" />
        <div className="absolute inset-[18px] rounded-full border border-white/5" />

        <Activity
          className={cx(
            'text-white/90 sn41-core-breathe',
            mobile ? 'w-6 h-6 mb-1' : 'w-7 h-7 mb-1.5'
          )}
          strokeWidth={1.8}
        />
        <div className={cx('font-black tracking-[0.16em] text-blue-300', mobile ? 'text-[10px]' : 'text-[12px]')}>
          CORE
        </div>
        <div className={cx('text-white/60 mt-0.5', mobile ? 'text-[9px]' : 'text-[10px]')}>
          Multidimensional practice view
        </div>
      </div>

      {/* Radial chips */}
      {DIMENSIONS.map((dimension, idx) => {
        const p = positions[dimension.id];
        const isActive = active.id === dimension.id;
        const Icon = dimension.icon;

        return (
          <button
            key={dimension.id}
            type="button"
            onClick={() => onSelect(dimension.id)}
            aria-pressed={isActive}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDelay: `${idx * 180}ms`,
            }}
            className={cx(
              'absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 sn41-chip-float',
              isActive ? 'scale-[1.03]' : 'opacity-85 hover:opacity-100'
            )}
          >
            <div
              className={cx(
                'rounded-full border backdrop-blur-xl flex items-center gap-2.5 transition-all duration-300',
                mobile ? 'px-3 py-2 min-w-[118px]' : 'px-3.5 py-2 min-w-[132px]',
                isActive
                  ? 'border-blue-300/35 bg-[linear-gradient(135deg,rgba(76,143,255,0.18),rgba(255,255,255,0.04))]'
                  : 'border-white/10 bg-white/[0.03]'
              )}
            >
              <div
                className={cx(
                  'rounded-full border flex items-center justify-center shrink-0',
                  mobile ? 'w-6 h-6' : 'w-6 h-6',
                  isActive
                    ? 'border-blue-300/30 bg-blue-300/10'
                    : 'border-white/10 bg-white/[0.03]'
                )}
              >
                <Icon
                  className={cx(
                    'w-3.5 h-3.5',
                    isActive ? 'text-blue-200' : 'text-white/75'
                  )}
                  strokeWidth={1.8}
                />
              </div>
              <span
                className={cx(
                  'font-semibold leading-none whitespace-nowrap',
                  mobile ? 'text-[11px]' : 'text-[12px]',
                  isActive ? 'text-white/95' : 'text-white/85'
                )}
              >
                {dimension.shortLabel}
              </span>
            </div>
          </button>
        );
      })}

      {/* Desktop active caption below stage */}
      {!mobile && (
        <div className="absolute inset-x-0 bottom-3 z-20 px-4">
          <div className="mx-auto max-w-[340px] rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3 text-center backdrop-blur-md">
            <div className="text-[16px] font-semibold leading-tight">{active.label}</div>
            <div className="text-[11px] text-white/60 mt-1">{active.subtitle}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopDetailsPanel({ active }: { active: Dimension }) {
  const Icon = active.icon;

  return (
    <GlassCard className="h-full min-h-0 p-4 md:p-5 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="shrink-0 rounded-[16px] border border-white/8 bg-white/[0.025] p-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-white/85" strokeWidth={1.7} />
          </div>

          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-1">
              Active Dimension
            </div>
            <h3 className="text-[clamp(18px,1.65vw,28px)] font-bold leading-[1.05]">
              {active.label}
            </h3>
            <p className="text-[12px] text-white/60 mt-1">{active.subtitle}</p>
          </div>
        </div>

        <p className="text-[13px] leading-[1.45] text-white/85 mt-3">
          {active.description}
        </p>
      </div>

      {/* Unified details panel body */}
      <div className="flex-1 min-h-0 grid grid-rows-[auto_auto_auto_1fr] gap-4">
        {/* Row 1: Contributions + global metrics */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 min-h-0">
          <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
            <SectionLabel>Key Contributions</SectionLabel>
            <div className="space-y-2">
              {active.contributions.map((item) => (
                <div
                  key={item}
                  className="rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2 text-[12px] leading-[1.3] text-white/88"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
            <SectionLabel>Scientific Metrics</SectionLabel>
            <div className="grid grid-cols-2 gap-2">
              {GLOBAL_METRICS.map((metric) => (
                <MetricTile key={metric.label} label={metric.label} value={metric.value} compact />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: practice metrics */}
        <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
          <SectionLabel>Practice Metrics</SectionLabel>
          <div className="grid grid-cols-2 gap-2">
            {active.practiceMetrics.map((metric) => (
              <MetricTile key={metric.label} label={metric.label} value={metric.value} compact />
            ))}
          </div>
        </div>

        {/* Row 3: signals + themes */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
            <SectionLabel>Domain Signals</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {active.domainSignals.map((signal) => (
                <Chip key={signal} compact>
                  {signal}
                </Chip>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
            <SectionLabel>Research Themes</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {active.researchThemes.map((theme) => (
                <Chip key={theme} compact>
                  {theme}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: output lens + micro footer */}
        <div className="grid grid-cols-1 gap-4 min-h-0">
          <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
            <SectionLabel>Output Lens</SectionLabel>
            <p className="text-[13px] text-white/85 leading-[1.4]">
              {active.outputLens}
            </p>
          </div>

          <div className="mt-auto rounded-[14px] border border-white/8 bg-white/[0.015] px-3 py-2 flex items-center gap-3">
            <span className="text-[11px] text-white/55">Portfolio signature</span>
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-[11px] text-white/75">
              Mechanism-informed neuromodulation + operational translation
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function MobileDetailsPanel({
  active,
  onSelect,
  activeId,
}: {
  active: Dimension;
  onSelect: (id: SkillId) => void;
  activeId: SkillId;
}) {
  const Icon = active.icon;

  return (
    <GlassCard className="flex-1 min-h-0 p-3.5 flex flex-col overflow-hidden">
      {/* Quick horizontal selector */}
      <div className="shrink-0 mb-3">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {DIMENSIONS.map((d) => {
            const DIcon = d.icon;
            const isActive = d.id === activeId;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => onSelect(d.id)}
                className={cx(
                  'shrink-0 rounded-full border px-3 py-2 flex items-center gap-2 backdrop-blur-md transition-all',
                  isActive
                    ? 'border-blue-300/35 bg-blue-300/10'
                    : 'border-white/10 bg-white/[0.03]'
                )}
              >
                <DIcon
                  className={cx(
                    'w-3.5 h-3.5',
                    isActive ? 'text-blue-200' : 'text-white/70'
                  )}
                  strokeWidth={1.8}
                />
                <span className="text-[11px] font-medium whitespace-nowrap">
                  {d.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active header */}
      <div className="shrink-0 rounded-[14px] border border-white/8 bg-white/[0.02] p-3 mb-3">
        <div className="flex items-start gap-2.5">
          <div className="w-9 h-9 rounded-[10px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
            <Icon className="w-4.5 h-4.5 text-white/85" strokeWidth={1.7} />
          </div>
          <div className="min-w-0">
            <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">
              Active Dimension
            </div>
            <div className="text-[15px] font-semibold leading-tight mt-0.5">
              {active.label}
            </div>
            <div className="text-[11px] text-white/60 mt-0.5 leading-snug">
              {active.miniSubtitle}
            </div>
          </div>
        </div>

        <p className="text-[12px] text-white/82 leading-[1.35] mt-2.5">
          {active.description}
        </p>
      </div>

      {/* Scrollable mobile content */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-3 pr-0.5">
        {/* grouped metrics */}
        <details open className="rounded-[14px] border border-white/8 bg-white/[0.02] p-3">
          <summary className="list-none cursor-pointer flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">
              Grouped Metrics
            </span>
            <span className="text-[10px] text-white/45">Tap</span>
          </summary>

          <div className="mt-3 space-y-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/45 mb-2">
                Practice Metrics
              </div>
              <div className="grid grid-cols-2 gap-2">
                {active.practiceMetrics.map((metric) => (
                  <MetricTile
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    compact
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/45 mb-2">
                Scientific Metrics
              </div>
              <div className="grid grid-cols-2 gap-2">
                {GLOBAL_METRICS.map((metric) => (
                  <MetricTile
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>
        </details>

        <details open className="rounded-[14px] border border-white/8 bg-white/[0.02] p-3">
          <summary className="list-none cursor-pointer flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">
              Key Contributions
            </span>
            <span className="text-[10px] text-white/45">Tap</span>
          </summary>
          <div className="mt-2.5 space-y-2">
            {active.contributions.map((item) => (
              <div
                key={item}
                className="rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2 text-[12px] leading-[1.3] text-white/88"
              >
                • {item}
              </div>
            ))}
          </div>
        </details>

        <details className="rounded-[14px] border border-white/8 bg-white/[0.02] p-3">
          <summary className="list-none cursor-pointer flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">
              Signals & Themes
            </span>
            <span className="text-[10px] text-white/45">Tap</span>
          </summary>

          <div className="mt-3 space-y-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/45 mb-2">
                Domain Signals
              </div>
              <div className="flex flex-wrap gap-2">
                {active.domainSignals.map((signal) => (
                  <Chip key={signal} compact>
                    {signal}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/45 mb-2">
                Research Themes
              </div>
              <div className="flex flex-wrap gap-2">
                {active.researchThemes.map((theme) => (
                  <Chip key={theme} compact>
                    {theme}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </details>

        <GlassCard className="p-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-white/45 mb-1.5">
            Output Lens
          </div>
          <p className="text-[12px] text-white/84 leading-[1.35]">{active.outputLens}</p>
        </GlassCard>
      </div>
    </GlassCard>
  );
}

export default function SkillNetworkOverlayV4_1() {
  const [activeId, setActiveId] = useState<SkillId>('research');

  const active = useMemo(
    () => DIMENSIONS.find((d) => d.id === activeId) ?? DIMENSIONS[0],
    [activeId]
  );

  const primaryDimensions = useMemo(
    () => DIMENSIONS.filter((d) =>
      ['clinical', 'trialOps', 'regulatory', 'research'].includes(d.id)
    ),
    []
  );

  const secondaryDimensions = useMemo(
    () => DIMENSIONS.filter((d) => ['pedagogy', 'law'].includes(d.id)),
    []
  );

  return (
    <div className="relative w-full h-full min-h-0 text-white">
      <style>{`
        .sn41-grid {
          background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          background-position: center center;
        }

        .sn41-aurora {
          background:
            radial-gradient(circle at 22% 30%, rgba(86, 114, 255, 0.18), transparent 38%),
            radial-gradient(circle at 74% 34%, rgba(151, 101, 255, 0.14), transparent 42%),
            radial-gradient(circle at 58% 76%, rgba(49, 106, 255, 0.12), transparent 44%);
          animation: sn41Aurora 14s ease-in-out infinite alternate;
          filter: blur(22px);
        }

        .sn41-dash-flow {
          animation: sn41Dash 7s linear infinite;
        }

        .sn41-pulse-ring {
          transform-origin: 50px 50px;
          animation: sn41Pulse 3.4s ease-out infinite;
        }

        .sn41-node-halo {
          transform-origin: center;
          animation: sn41NodeHalo 2.4s ease-in-out infinite;
        }

        .sn41-core-breathe {
          animation: sn41CoreBreathe 2.8s ease-in-out infinite;
        }

        .sn41-chip-float {
          animation: sn41Float 7s ease-in-out infinite;
        }

        @keyframes sn41Dash {
          from { stroke-dashoffset: 36; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes sn41Pulse {
          0% { transform: scale(0.96); opacity: 0.85; }
          100% { transform: scale(1.22); opacity: 0.0; }
        }

        @keyframes sn41NodeHalo {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }

        @keyframes sn41CoreBreathe {
          0%, 100% { opacity: 0.85; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-1px); }
        }

        @keyframes sn41Float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-3px); }
        }

        @keyframes sn41Aurora {
          0% { transform: translate3d(-1.5%, -1%, 0) scale(1); }
          100% { transform: translate3d(1.5%, 1.2%, 0) scale(1.03); }
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Desktop / Tablet layout */}
      <div className="hidden lg:grid h-full min-h-0 grid-cols-[320px_minmax(420px,1fr)_520px] gap-4">
        {/* Left compact selector panel */}
        <GlassCard className="h-full min-h-0 p-4 flex flex-col overflow-hidden">
          <div className="shrink-0">
            <SectionLabel>Skill Dimensions</SectionLabel>
          </div>

          <div className="space-y-2.5">
            {primaryDimensions.map((d) => (
              <DimensionSelectorButton
                key={d.id}
                dimension={d}
                active={d.id === activeId}
                onClick={() => setActiveId(d.id)}
              />
            ))}
          </div>

          <div className="mt-4 shrink-0">
            <SectionLabel>Additional Dimensions</SectionLabel>
            <div className="grid grid-cols-2 gap-2">
              {secondaryDimensions.map((d) => (
                <DimensionSelectorButton
                  key={d.id}
                  dimension={d}
                  active={d.id === activeId}
                  onClick={() => setActiveId(d.id)}
                  compact
                />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
            <div className="rounded-[14px] border border-white/8 bg-white/[0.02] p-3">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/45 mb-1.5">
                Research Signature
              </div>
              <p className="text-[12px] text-white/82 leading-[1.35]">
                Mechanism-informed neuromodulation with clinically actionable trial design.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Center bigger core radial */}
        <GlassCard className="h-full min-h-0 p-3 relative overflow-hidden">
          <PolarStage
            active={active}
            onSelect={setActiveId}
            positions={DESKTOP_POSITIONS}
          />
        </GlassCard>

        {/* Right unified details panel */}
        <DesktopDetailsPanel active={active} />
      </div>

      {/* Mobile-first layout (tap + collapse preserved, richer but organized) */}
      <div className="lg:hidden h-full min-h-0 flex flex-col gap-3">
        {/* Radial stage */}
        <GlassCard className="shrink-0 h-[38svh] min-h-[290px] p-2.5 overflow-hidden">
          <PolarStage
            active={active}
            onSelect={setActiveId}
            positions={MOBILE_POSITIONS}
            mobile
          />
        </GlassCard>

        {/* Quick summary strip */}
        <div className="grid grid-cols-2 gap-2 shrink-0">
          <GlassCard className="p-2.5">
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/45 mb-1">
              Active
            </div>
            <div className="text-[13px] font-semibold leading-tight">{active.label}</div>
            <div className="text-[10px] text-white/55 mt-0.5">{active.shortLabel}</div>
          </GlassCard>

          <GlassCard className="p-2.5">
            <div className="text-[10px] uppercase tracking-[0.15em] text-white/45 mb-1">
              Core Signal
            </div>
            <div className="text-[12px] leading-tight text-white/88">
              {active.domainSignals[0] ?? 'Neuromodulation'}
            </div>
            <div className="text-[10px] text-white/55 mt-0.5">{active.miniSubtitle}</div>
          </GlassCard>
        </div>

        {/* Scrollable details */}
        <MobileDetailsPanel
          active={active}
          onSelect={setActiveId}
          activeId={activeId}
        />
      </div>
    </div>
  );
}
