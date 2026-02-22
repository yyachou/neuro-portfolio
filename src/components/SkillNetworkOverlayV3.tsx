import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import GlassCard from './GlassCard';
import {
  Activity,
  Brain,
  FlaskConical,
  GraduationCap,
  Scale,
  ShieldCheck,
  Waves,
  ChevronDown,
  ChevronUp,
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
      'Clinical neuroscience training anchors the portfolio in symptom-circuit reasoning, patient-facing decision pathways, and translational relevance for neuromodulation strategy.',
    contributions: [
      'Functional neuroanatomy perspective for cortical target reasoning',
      'Clinical interpretation of symptom dimensions and treatment pathways',
      'Translational framing from bedside constraints to protocol design',
    ],
    domainSignals: ['Brain circuits', 'Functional neuroanatomy', 'Clinical framing'],
    researchThemes: ['DLPFC + Cerebellum', 'Neuropsychiatric stimulation', 'Target selection'],
    outputLens:
      'Keeps modeling and research outputs clinically interpretable and aligned with real therapeutic decision-making.',
    practiceMetrics: [
      { label: 'Core lens', value: 'Clinical' },
      { label: 'Scope', value: 'Brain-circuit view' },
    ],
  },
  {
    id: 'trialOps',
    label: 'Trial Operations',
    shortLabel: 'Trial Ops',
    subtitle: 'Neuromodulation study execution and coordination',
    miniSubtitle: '10+ neuromodulation studies',
    icon: Waves,
    description:
      'Operational execution spans study coordination, stimulation-session logistics, investigator alignment, and protocol adherence across neuromodulation-focused clinical research.',
    contributions: [
      'Neuromodulation study workflow design and execution support',
      'Site/investigator coordination and protocol adherence routines',
      'Pragmatic translation of study logic into repeatable operations',
    ],
    domainSignals: ['Study execution', 'Coordination', 'Protocol flow'],
    researchThemes: ['Randomized studies', 'Observational cohorts', 'Naturalistic designs'],
    outputLens:
      'Transforms protocol plans into reliable study delivery, preserving consistency between scientific intent and implementation.',
    practiceMetrics: [
      { label: 'Studies', value: '10+' },
      { label: 'Portfolio', value: 'Rand/Obs/Qual' },
    ],
  },
  {
    id: 'regulatory',
    label: 'Regulatory, GCP & Safety',
    shortLabel: 'Regulatory',
    subtitle: 'Compliance-ready documentation and safety oversight',
    miniSubtitle: 'ANSM / CPP / SAE monitoring',
    icon: ShieldCheck,
    description:
      'Regulatory and safety expertise supports compliant trial execution through documentation rigor, GCP alignment, pharmacovigilance awareness, and structured safety monitoring.',
    contributions: [
      'CPP / ANSM submission support and compliance-ready documentation',
      'ICH-GCP aligned processes for trial conduct and oversight',
      'Safety signal awareness, SAE/AE monitoring support, and traceability',
    ],
    domainSignals: ['GCP', 'Safety monitoring', 'Documentation'],
    researchThemes: ['PV / SAE', 'Compliance frameworks', 'Trial governance'],
    outputLens:
      'Adds operational reliability and regulatory readiness so neuromodulation programs remain scalable, auditable, and safe.',
    practiceMetrics: [
      { label: 'Frameworks', value: 'CPP·ANSM·GCP' },
      { label: 'Focus', value: 'Safety + compliance' },
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
      'Research connects computational modeling, stimulation target anatomy, and clinically actionable neuromodulation hypotheses across translational brain science outputs.',
    contributions: [
      'Electric field modeling for brain stimulation personalization (TMS/tDCS)',
      'Depression-focused neuromodulation synthesis and mechanistic framing',
      'Mechanism-informed trial thinking connecting computation to endpoints',
    ],
    domainSignals: ['E-field modeling', 'tDCS / rTMS', 'Translation'],
    researchThemes: [
      'J Affect Disord (2025)',
      'Depression neuromodulation',
      'Schizophrenia modeling',
      'Translational brain science',
    ],
    outputLens:
      'Integrates computational evidence and clinical reasoning into a coherent neuromodulation design perspective.',
    practiceMetrics: [
      { label: 'Primary mode', value: 'Modeling' },
      { label: 'Focus', value: 'Mechanism-informed' },
    ],
  },
  {
    id: 'pedagogy',
    label: 'Pedagogy',
    shortLabel: 'Pedagogy',
    subtitle: 'Neuroscience education design and investigator training',
    miniSubtitle: 'Education + training methods',
    icon: GraduationCap,
    description:
      'Pedagogy strengthens both neuroscience education and investigator enablement through structured teaching, multisensory learning methods, and practical training design.',
    contributions: [
      'Investigator and team training for neuromodulation study conduct',
      'Educational design using tactile/multisensory anatomy learning concepts',
      'Communication of complex brain concepts for mixed clinical/research audiences',
    ],
    domainSignals: ['Training', 'Education design', 'Knowledge transfer'],
    researchThemes: ['Anatomy learning', 'Investigator enablement', 'Teaching innovation'],
    outputLens:
      'Improves adoption quality by making complex protocols and neuroscience concepts easier to teach, learn, and apply.',
    practiceMetrics: [
      { label: 'Role', value: 'Investigator training' },
      { label: 'Mode', value: 'Applied pedagogy' },
    ],
  },
  {
    id: 'law',
    label: 'Law & Bioethics',
    shortLabel: 'Law',
    subtitle: 'Responsible innovation and medical-law perspective',
    miniSubtitle: 'Bioethics / medical law',
    icon: Scale,
    description:
      'Medical-law and bioethics training adds a governance lens to neurotechnology innovation, risk framing, and responsible translation in clinical neuroscience.',
    contributions: [
      'Ethical framing for neuromodulation innovation and clinical implementation',
      'Medical-law perspective supporting governance-aware decision making',
      'Responsible translation mindset across research and care interfaces',
    ],
    domainSignals: ['Bioethics', 'Medical law', 'Responsible innovation'],
    researchThemes: ['Governance', 'Risk framing', 'Neurotechnology ethics'],
    outputLens:
      'Strengthens the network by clarifying what is acceptable, safe, and responsibly scalable in applied neuromodulation.',
    practiceMetrics: [
      { label: 'Master', value: '2025–26 ongoing' },
      { label: 'Lens', value: 'Governance' },
    ],
  },
];

type Point = { x: number; y: number };

const DESKTOP_POSITIONS: Record<SkillId, Point> = {
  clinical: { x: 62, y: 16 },
  law: { x: 71, y: 33 },
  trialOps: { x: 81, y: 62 },
  regulatory: { x: 31, y: 80 },
  pedagogy: { x: 22, y: 59 },
  research: { x: 23, y: 26 },
};

const MOBILE_POSITIONS: Record<SkillId, Point> = {
  clinical: { x: 66, y: 18 },
  law: { x: 73, y: 38 },
  trialOps: { x: 78, y: 66 },
  regulatory: { x: 31, y: 83 },
  pedagogy: { x: 27, y: 62 },
  research: { x: 19, y: 29 },
};

const CORE_POINT: Point = { x: 50, y: 50 };

function sectionTitle(label: string) {
  return (
    <div className="text-[10px] md:text-[clamp(10px,0.78vw,12px)] uppercase tracking-[0.18em] text-white/55 mb-2 md:mb-2.5">
      {label}
    </div>
  );
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function metricTile(item: { label: string; value: string }, compact?: boolean) {
  return (
    <div
      key={`${item.label}-${item.value}`}
      className={cx(
        'rounded-[14px] border border-white/10 bg-white/[0.03]',
        compact ? 'p-2.5' : 'p-3 md:p-3.5'
      )}
    >
      <div className={cx('font-bold leading-none', compact ? 'text-[18px]' : 'text-[20px] md:text-[24px]')}>
        {item.value}
      </div>
      <div className={cx('text-white/65 mt-1 leading-tight', compact ? 'text-[10px]' : 'text-[11px] md:text-[12px]')}>
        {item.label}
      </div>
    </div>
  );
}

function buildConnectorPath(from: Point, to: Point) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  // Gentle curvature toward center for cleaner rhythm.
  const curveX = mx - dy * 0.08;
  const curveY = my + dx * 0.06;
  return `M ${from.x} ${from.y} Q ${curveX} ${curveY} ${to.x} ${to.y}`;
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
  const connectorPath = useMemo(
    () => buildConnectorPath(positions[active.id], CORE_POINT),
    [active.id, positions]
  );

  const chipClass =
    'absolute -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-[18px] transition-all duration-300';

  return (
    <div className="relative w-full h-full">
      {/* grid dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="sn41-grid absolute inset-0" />
      </div>

      {/* stage svg overlays */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* subtle ambient orbit */}
        <g className="sn41-orbit-slow" opacity={mobile ? 0.16 : 0.14}>
          <circle cx="50" cy="50" r={mobile ? 24 : 26} fill="none" stroke="white" strokeWidth="0.22" />
          <circle
            cx="50"
            cy="50"
            r={mobile ? 31 : 34}
            fill="none"
            stroke="white"
            strokeWidth="0.2"
            strokeDasharray="1.6 2.4"
          />
          {!mobile && (
            <>
              <circle cx="50" cy="50" r="19" fill="none" stroke="white" strokeWidth="0.18" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="white"
                strokeWidth="0.18"
                strokeDasharray="1 2.8"
              />
            </>
          )}
        </g>

        {/* one active connector only */}
        <path
          d={connectorPath}
          fill="none"
          stroke="rgba(97, 168, 255, 0.60)"
          strokeWidth={mobile ? 0.55 : 0.42}
          strokeDasharray={mobile ? '3 2.4' : '2.2 2.2'}
          className="sn41-dash-flow"
          strokeLinecap="round"
        />
        <path
          d={connectorPath}
          fill="none"
          stroke="rgba(97, 168, 255, 0.18)"
          strokeWidth={mobile ? 1.2 : 0.9}
          strokeLinecap="round"
        />

        {/* pulse dot moving to core */}
        <circle r={mobile ? 0.7 : 0.55} fill="rgba(118,181,255,0.95)">
          <animateMotion dur={mobile ? '2.2s' : '2.6s'} repeatCount="indefinite" path={connectorPath} />
        </circle>

        {/* core glow rings */}
        <circle cx="50" cy="50" r={mobile ? 13.8 : 11.6} fill="rgba(0,0,0,0.54)" />
        <circle cx="50" cy="50" r={mobile ? 13.8 : 11.6} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.32" />
        <circle
          cx="50"
          cy="50"
          r={mobile ? 17.4 : 15.2}
          fill="none"
          stroke="rgba(78,136,255,0.18)"
          strokeWidth="0.24"
          className="sn41-pulse-ring"
        />
      </svg>

      {/* floating chips */}
      {DIMENSIONS.map((d) => {
        const p = positions[d.id];
        const isActive = d.id === active.id;
        const Icon = d.icon;

        const style = {
          left: `${p.x}%`,
          top: `${p.y}%`,
          animationDelay: `${(p.x + p.y) % 7 * 0.22}s`,
        } as CSSProperties;

        return (
          <button
            key={d.id}
            type="button"
            onClick={() => onSelect(d.id)}
            style={style}
            className={cx(
              chipClass,
              mobile
                ? 'h-11 px-3.5 max-w-[42vw] min-w-[108px]'
                : 'h-[clamp(42px,3.5vw,52px)] px-[clamp(12px,1.1vw,16px)] max-w-[220px] min-w-[140px]',
              'sn41-chip-float',
              isActive
                ? 'border-[#6DB7FF]/45 bg-[linear-gradient(135deg,rgba(62,107,211,0.18),rgba(30,63,136,0.20))] shadow-[inset_0_0_0_1px_rgba(109,183,255,0.08)]'
                : 'border-white/12 bg-white/[0.025] hover:bg-white/[0.04]'
            )}
            aria-pressed={isActive}
            aria-label={`Activate ${d.label}`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={cx(
                  'shrink-0 rounded-[10px] border flex items-center justify-center',
                  mobile ? 'w-7 h-7' : 'w-8 h-8',
                  isActive ? 'border-[#6DB7FF]/35 bg-[#58a6ff]/10' : 'border-white/10 bg-white/[0.02]'
                )}
              >
                <Icon
                  className={cx(mobile ? 'w-4 h-4' : 'w-[17px] h-[17px]', isActive ? 'text-[#8fc6ff]' : 'text-white/70')}
                  strokeWidth={1.7}
                />
              </div>
              <span
                className={cx(
                  'truncate text-left font-medium leading-none',
                  mobile ? 'text-[12px]' : 'text-[13px] md:text-[14px]',
                  isActive ? 'text-white/95' : 'text-white/85'
                )}
                title={d.label}
              >
                {mobile ? d.shortLabel : d.label}
              </span>
            </div>
          </button>
        );
      })}

      {/* center core */}
      <div
        className={cx(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 flex flex-col items-center justify-center text-center',
          mobile
            ? 'w-[34vw] h-[34vw] min-w-[136px] min-h-[136px] max-w-[176px] max-h-[176px]'
            : 'w-[clamp(164px,19vw,220px)] h-[clamp(164px,19vw,220px)]'
        )}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(110,132,255,0.10),transparent_55%),radial-gradient(circle_at_65%_70%,rgba(69,28,161,0.12),transparent_60%)]" />
        <div className="relative z-10 flex flex-col items-center">
          <Activity className={cx(mobile ? 'w-7 h-7 mb-1.5' : 'w-8 h-8 mb-2', 'text-white/85')} strokeWidth={1.8} />
          <div
            className={cx(
              'font-bold tracking-[0.12em] text-[#78b9ff]',
              mobile ? 'text-[11px]' : 'text-[13px] md:text-[14px]'
            )}
          >
            CORE
          </div>
          <div className={cx('text-white/60 mt-1 leading-tight', mobile ? 'text-[11px]' : 'text-[12px]')}>
            {mobile ? 'Practice view' : 'Multidimensional practice view'}
          </div>
        </div>
      </div>

      {/* active caption below core */}
      <div
        className={cx(
          'absolute left-1/2 -translate-x-1/2 text-center px-2',
          mobile ? 'bottom-[8%]' : 'bottom-[7%]'
        )}
      >
        <div className={cx('font-semibold text-white/92 leading-tight', mobile ? 'text-[14px]' : 'text-[18px]')}>
          {active.label}
        </div>
        <div className={cx('text-white/60 leading-tight', mobile ? 'text-[11px] mt-0.5' : 'text-[12px] mt-1')}>
          {active.subtitle}
        </div>
      </div>
    </div>
  );
}

function SelectorItem({
  item,
  activeId,
  onSelect,
  compact = false,
}: {
  item: Dimension;
  activeId: SkillId;
  onSelect: (id: SkillId) => void;
  compact?: boolean;
}) {
  const Icon = item.icon;
  const isActive = item.id === activeId;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className={cx(
        'w-full text-left rounded-[16px] border transition-all duration-200',
        compact ? 'px-3 py-2.5' : 'px-3.5 py-3',
        isActive
          ? 'border-[#6DB7FF]/40 bg-[linear-gradient(180deg,rgba(74,132,255,0.11),rgba(59,80,158,0.07))]'
          : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.035]'
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={cx(
            'rounded-[12px] border flex items-center justify-center shrink-0',
            compact ? 'w-8 h-8' : 'w-9 h-9',
            isActive ? 'border-[#6DB7FF]/35 bg-[#58a6ff]/10' : 'border-white/10 bg-white/[0.02]'
          )}
        >
          <Icon className={cx(compact ? 'w-4 h-4' : 'w-[17px] h-[17px]', isActive ? 'text-[#8fc6ff]' : 'text-white/70')} strokeWidth={1.7} />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className={cx(
              'font-semibold truncate leading-tight',
              compact ? 'text-[13px]' : 'text-[13px] md:text-[14px]',
              isActive ? 'text-white/96' : 'text-white/90'
            )}
            title={item.label}
          >
            {item.label}
          </div>
          {!compact && (
            <div className="text-[11px] text-white/58 truncate mt-0.5" title={item.subtitle}>
              {item.subtitle}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

function UnifiedDetailsPanel({ active }: { active: Dimension }) {
  return (
    <GlassCard className="h-full min-h-0 p-[clamp(14px,1.15vw,18px)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="shrink-0">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
            <active.icon className="w-[18px] h-[18px] text-white/75" strokeWidth={1.7} />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-0.5">Active dimension</div>
            <h3 className="text-[clamp(18px,1.8vw,28px)] font-bold leading-[1.06]">{active.label}</h3>
            <div className="text-[clamp(11px,0.9vw,14px)] text-white/70 mt-1">{active.subtitle}</div>
          </div>
        </div>

        <p className="text-[clamp(11px,0.92vw,14px)] text-white/86 leading-[1.4] mt-3">
          {active.description}
        </p>
      </div>

      {/* Organized body */}
      <div className="mt-4 flex-1 min-h-0 grid grid-rows-[auto_auto_1fr] gap-3">
        {/* Row 1: contributions + grouped metrics */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-3">
            {sectionTitle('Key contributions')}
            <div className="space-y-2">
              {active.contributions.map((line) => (
                <div
                  key={line}
                  className="rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2.5 text-[12px] md:text-[13px] text-white/88 leading-[1.28]"
                >
                  • {line}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-3">
              {sectionTitle('Scientific metrics')}
              <div className="grid grid-cols-2 gap-2">
                {GLOBAL_METRICS.map((m) => metricTile(m))}
              </div>
            </div>

            <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-3">
              {sectionTitle('Grouped metrics')}
              <div className="grid grid-cols-2 gap-2">
                {active.practiceMetrics.map((m) => metricTile(m, true))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: chips */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-3">
            {sectionTitle('Domain signals')}
            <div className="flex flex-wrap gap-2">
              {active.domainSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/78"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-3">
            {sectionTitle('Research themes')}
            <div className="flex flex-wrap gap-2">
              {active.researchThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/78"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: output lens */}
        <div className="min-h-0 rounded-[16px] border border-white/10 bg-white/[0.02] p-3 flex flex-col">
          {sectionTitle('Output lens')}
          <div className="text-[12px] md:text-[13px] text-white/88 leading-[1.35] max-w-[95%]">
            {active.outputLens}
          </div>

          <div className="mt-auto pt-3 opacity-45">
            <svg viewBox="0 0 180 18" className="w-full h-auto">
              <path
                d="M0 12 C18 12, 22 6, 34 7 C44 8, 50 14, 62 11 C72 8, 79 6, 92 8 C108 10, 116 14, 132 10 C148 6, 160 10, 180 8"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export default function SkillNetworkOverlayV4_1() {
  const [activeId, setActiveId] = useState<SkillId>('research');
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const active = DIMENSIONS.find((d) => d.id === activeId) ?? DIMENSIONS[0];
  const primary = useMemo(
    () => DIMENSIONS.filter((d) => ['clinical', 'trialOps', 'regulatory', 'research'].includes(d.id)),
    []
  );
  const secondary = useMemo(
    () => DIMENSIONS.filter((d) => ['pedagogy', 'law'].includes(d.id)),
    []
  );

  return (
    <div className="relative w-full h-full min-h-0">
      {/* Scoped animation styles */}
      <style>{`
        .sn41-grid{
          background-image:
            radial-gradient(circle at center, rgba(255,255,255,0.22) 1px, transparent 1.35px);
          background-size: 8% 12%;
          background-position: center;
          mask-image: radial-gradient(circle at center, black 48%, rgba(0,0,0,0.55) 78%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 48%, rgba(0,0,0,0.55) 78%, transparent 100%);
        }
        .sn41-dash-flow{
          stroke-dashoffset: 0;
          animation: sn41Dash 8s linear infinite;
        }
        .sn41-orbit-slow{
          transform-origin: 50% 50%;
          animation: sn41Orbit 28s linear infinite;
        }
        .sn41-pulse-ring{
          transform-origin: 50% 50%;
          animation: sn41Pulse 2.8s ease-in-out infinite;
        }
        .sn41-chip-float{
          animation: sn41Float 5.8s ease-in-out infinite;
        }
        @keyframes sn41Dash{
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -120; }
        }
        @keyframes sn41Orbit{
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes sn41Pulse{
          0%,100% { opacity: 0.28; transform: scale(0.98); }
          50% { opacity: 0.7; transform: scale(1.03); }
        }
        @keyframes sn41Float{
          0%,100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-2px); }
        }
      `}</style>

      {/* DESKTOP / TABLET */}
      <div className="hidden md:grid h-full min-h-0 grid-cols-[minmax(260px,0.92fr)_minmax(340px,1.02fr)_minmax(420px,1.16fr)] gap-[clamp(12px,1.15vw,18px)]">
        {/* Left compact selector panel */}
        <GlassCard className="h-full min-h-0 p-[clamp(12px,1vw,16px)] flex flex-col overflow-hidden">
          <div className="shrink-0">
            <div className="text-[clamp(10px,0.8vw,12px)] uppercase tracking-[0.18em] text-white/55 mb-3">
              Skill dimensions
            </div>

            <div className="space-y-2">
              {primary.map((d) => (
                <SelectorItem key={d.id} item={d} activeId={activeId} onSelect={setActiveId} />
              ))}
            </div>

            <div className="text-[clamp(10px,0.8vw,12px)] uppercase tracking-[0.18em] text-white/55 mt-4 mb-2">
              Additional dimensions
            </div>

            <div className="grid grid-cols-2 gap-2">
              {secondary.map((d) => (
                <SelectorItem key={d.id} item={d} activeId={activeId} onSelect={setActiveId} compact />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-3">
            <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-3">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/55 mb-1.5">
                Research signature
              </div>
              <p className="text-[12px] text-white/85 leading-[1.32]">
                Mechanism-informed neuromodulation with clinically actionable trial design.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Center bigger core radial */}
        <GlassCard className="h-full min-h-0 p-[clamp(10px,0.9vw,14px)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_50%,rgba(62,97,210,0.07),transparent_58%),radial-gradient(circle_at_34%_20%,rgba(168,152,255,0.05),transparent_44%)] pointer-events-none" />
          <div className="relative h-full min-h-0">
            <PolarStage active={active} onSelect={setActiveId} positions={DESKTOP_POSITIONS} />
          </div>
        </GlassCard>

        {/* Right unified details panel */}
        <UnifiedDetailsPanel active={active} />
      </div>

      {/* MOBILE */}
      <div className="md:hidden h-full min-h-0 flex flex-col">
        {/* Mobile radial hero (clean + phone-friendly) */}
        <div className="shrink-0">
          <GlassCard className="p-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(115,134,255,0.14),transparent_54%),radial-gradient(circle_at_78%_36%,rgba(133,75,255,0.12),transparent_48%)] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/60">Skill network</div>
                <div className="rounded-full border border-[#6DB7FF]/25 bg-[#58a6ff]/8 px-2.5 py-1 text-[10px] text-[#9fd0ff]">
                  Active · {active.shortLabel}
                </div>
              </div>

              <div className="relative w-full aspect-square max-h-[43vh]">
                <PolarStage active={active} onSelect={setActiveId} positions={MOBILE_POSITIONS} mobile />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Bottom sheet / collapsible details (preserved mobile-first behavior) */}
        <div className="mt-3 flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
          {/* Active summary + toggle */}
          <GlassCard className="p-3">
            <button
              type="button"
              onClick={() => setMobileExpanded((v) => !v)}
              className="w-full text-left"
              aria-expanded={mobileExpanded}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                  <active.icon className="w-[17px] h-[17px] text-white/75" strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/55">Active dimension</div>
                  <div className="text-[17px] font-semibold leading-tight text-white/95">{active.label}</div>
                  <div className="text-[12px] text-white/65 mt-0.5 leading-snug">{active.miniSubtitle}</div>
                </div>

                <div className="shrink-0 text-white/65 mt-1">
                  {mobileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            </button>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {GLOBAL_METRICS.map((m) => metricTile(m, true))}
            </div>

            {mobileExpanded && (
              <div className="mt-3 space-y-3">
                <div className="rounded-[14px] border border-white/10 bg-white/[0.02] p-3">
                  {sectionTitle('About this dimension')}
                  <p className="text-[12px] text-white/86 leading-[1.35]">{active.description}</p>
                </div>

                <details className="rounded-[14px] border border-white/10 bg-white/[0.02] p-3" open>
                  <summary className="list-none cursor-pointer flex items-center justify-between">
                    <span className="text-[13px] font-medium text-white/92">Key contributions</span>
                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">tap</span>
                  </summary>
                  <div className="mt-2 space-y-2">
                    {active.contributions.map((line) => (
                      <div
                        key={line}
                        className="rounded-[12px] border border-white/8 bg-white/[0.02] px-3 py-2 text-[12px] text-white/86 leading-[1.28]"
                      >
                        • {line}
                      </div>
                    ))}
                  </div>
                </details>

                <details className="rounded-[14px] border border-white/10 bg-white/[0.02] p-3">
                  <summary className="list-none cursor-pointer flex items-center justify-between">
                    <span className="text-[13px] font-medium text-white/92">Signals & themes</span>
                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">tap</span>
                  </summary>
                  <div className="mt-2 space-y-3">
                    <div>
                      {sectionTitle('Domain signals')}
                      <div className="flex flex-wrap gap-2">
                        {active.domainSignals.map((signal) => (
                          <span
                            key={signal}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/78"
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {sectionTitle('Research themes')}
                      <div className="flex flex-wrap gap-2">
                        {active.researchThemes.map((theme) => (
                          <span
                            key={theme}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/78"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>

                <details className="rounded-[14px] border border-white/10 bg-white/[0.02] p-3">
                  <summary className="list-none cursor-pointer flex items-center justify-between">
                    <span className="text-[13px] font-medium text-white/92">Practice lens</span>
                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">tap</span>
                  </summary>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {active.practiceMetrics.map((m) => metricTile(m, true))}
                  </div>
                  <p className="mt-2 text-[12px] text-white/86 leading-[1.35]">{active.outputLens}</p>
                </details>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
