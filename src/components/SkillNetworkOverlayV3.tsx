import { useMemo, useState } from 'react';
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
import GlassCard from './GlassCard';

type DimensionId =
  | 'clinical'
  | 'trial_ops'
  | 'regulatory'
  | 'research'
  | 'pedagogy'
  | 'law';

type Metric = {
  label: string;
  value: string;
  hint?: string;
};

type SkillDimension = {
  id: DimensionId;
  title: string;
  shortTitle: string;
  subtitle: string;
  oneLiner: string;
  paragraph: string;
  icon: LucideIcon;
  category: 'primary' | 'secondary';
  contributions: string[];
  metrics: Metric[];
  signals: string[];
  themes: string[];
  outputLens: string;
};

const DIMENSIONS: SkillDimension[] = [
  {
    id: 'clinical',
    title: 'Clinical Neuroscience',
    shortTitle: 'Clinical',
    subtitle: 'Functional neurosurgery and brain-circuit perspective',
    oneLiner: 'Clinical practice grounds the portfolio in patient-centered neurocircuit reasoning.',
    paragraph:
      'Clinical neuroscience experience provides a practical brain-circuit lens for symptom interpretation, target rationale, and translational relevance in neuromodulation decisions.',
    icon: Brain,
    category: 'primary',
    contributions: [
      'Functional neurosurgery / neuroanatomy perspective for target reasoning',
      'Symptom-to-circuit framing supporting personalized stimulation strategy',
      'Clinical decision logic integrated with research and trial workflows',
    ],
    metrics: [
      { label: 'Core lens', value: 'Clinical', hint: 'practice-grounded' },
      { label: 'Targets', value: 'DLPFC + Cerebellum' },
      { label: 'Modalities', value: 'TMS / tDCS' },
      { label: 'Focus', value: 'Symptoms ↔ circuits' },
    ],
    signals: ['Neuroanatomy', 'Target selection', 'Brain-circuit logic'],
    themes: ['Clinical translation', 'Symptom dimensions', 'Mechanistic targeting'],
    outputLens:
      'Keeps all modeling and trial choices anchored to real clinical questions and actionable brain-based endpoints.',
  },
  {
    id: 'trial_ops',
    title: 'Trial Operations',
    shortTitle: 'Trial Ops',
    subtitle: 'Neuromodulation study execution and coordination',
    oneLiner: 'Operational execution translates protocol intent into consistent study delivery.',
    paragraph:
      'Trial operations experience spans study coordination, visit/session logic, protocol adherence, investigator support, and day-to-day execution in neuromodulation settings.',
    icon: Waves,
    category: 'primary',
    contributions: [
      'Operational oversight of stimulation studies and session flow',
      'Investigator / site coordination and protocol adherence support',
      'Execution bridge from protocol design to real-world study delivery',
    ],
    metrics: [
      { label: 'Studies', value: '10+', hint: 'supported / supervised' },
      { label: 'Formats', value: '5', hint: 'RCT / Obs / Nat / Qual' },
      { label: 'Modalities', value: 'TMS / tDCS' },
      { label: 'Scope', value: 'Neuromodulation trials' },
    ],
    signals: ['Study execution', 'Coordination', 'Protocol adherence'],
    themes: ['Randomized studies', 'Naturalistic studies', 'Operational rigor'],
    outputLens:
      'Ensures brain stimulation protocols remain executable, reproducible, and aligned with real clinical workflows.',
  },
  {
    id: 'regulatory',
    title: 'Regulatory, GCP & Safety',
    shortTitle: 'Regulatory',
    subtitle: 'Compliance-ready documentation and safety oversight',
    oneLiner: 'Regulatory and safety systems make innovation clinically deployable.',
    paragraph:
      'Regulatory and compliance practice includes CPP/ANSM workflows, ICH-GCP alignment, pharmacovigilance support, and SAE monitoring structures for robust study conduct.',
    icon: ShieldCheck,
    category: 'primary',
    contributions: [
      'CPP / ANSM submission support and compliance documentation',
      'ICH-GCP-aligned trial conduct framework and oversight mindset',
      'Pharmacovigilance / SAE monitoring support for clinical safety readiness',
    ],
    metrics: [
      { label: 'Frameworks', value: 'ICH-GCP' },
      { label: 'Authorities', value: 'CPP / ANSM' },
      { label: 'Safety', value: 'PV / SAE' },
      { label: 'Output', value: 'Compliance-ready docs' },
    ],
    signals: ['GCP', 'PV/SAE', 'Regulatory submissions'],
    themes: ['Safety monitoring', 'Compliance systems', 'Clinical governance'],
    outputLens:
      'Adds the governance backbone required to move neuromodulation research toward safe and compliant implementation.',
  },
  {
    id: 'research',
    title: 'Research & Modeling',
    shortTitle: 'Modeling',
    subtitle: 'Electric field modeling and translational neuroscience',
    oneLiner: 'Research connects computational modeling, mechanisms, and clinically relevant hypotheses.',
    paragraph:
      'Research work links electric field modeling, target anatomy, translational neuroscience, and mechanism-informed neuromodulation hypotheses to improve therapeutic precision.',
    icon: FlaskConical,
    category: 'primary',
    contributions: [
      'Electric field modeling (TMS / tDCS) and personalization perspective',
      'Depression-focused neuromodulation synthesis and mechanism framing',
      'Translational research linking computational and clinical approaches',
    ],
    metrics: [
      { label: 'Citations', value: '722' },
      { label: 'H-index', value: '4' },
      { label: 'Publications', value: '8' },
      { label: 'Oral comms', value: '12+' },
    ],
    signals: ['E-field modeling', 'tDCS / rTMS', 'Translation'],
    themes: [
      'J Affect Disord (2025)',
      'Depression neuromodulation',
      'Schizophrenia modeling',
      'Translational brain science',
    ],
    outputLens:
      'Brings a mechanism-informed modeling layer that strengthens protocol rationale and clinically actionable trial design.',
  },
  {
    id: 'pedagogy',
    title: 'Pedagogy',
    shortTitle: 'Pedagogy',
    subtitle: 'Investigator training and neuroscience education innovation',
    oneLiner: 'Pedagogy improves adoption quality by making complex methods learnable.',
    paragraph:
      'Pedagogy contributes structured investigator training and neuroscience education innovation, improving understanding, consistency, and team readiness across study environments.',
    icon: GraduationCap,
    category: 'secondary',
    contributions: [
      'Investigator and team training for neuromodulation procedures',
      'Educational innovation in anatomy / neuroscience communication',
      'Operational knowledge transfer that improves protocol consistency',
    ],
    metrics: [
      { label: 'Role', value: 'Investigator training' },
      { label: 'Audience', value: 'Clinicians / residents / teams' },
      { label: 'Value', value: 'Execution readiness' },
      { label: 'Approach', value: 'Structured teaching' },
    ],
    signals: ['Training', 'Knowledge transfer', 'Education design'],
    themes: ['Team enablement', 'Procedure learning', 'Neuroscience education'],
    outputLens:
      'Improves implementation quality by translating complex neuromodulation concepts into trainable, repeatable practice.',
  },
  {
    id: 'law',
    title: 'Law & Bioethics',
    shortTitle: 'Law',
    subtitle: 'Responsible innovation and medical-law perspective',
    oneLiner: 'Bioethics and law add a governance lens for responsible neurotechnology translation.',
    paragraph:
      'Medical-law and bioethics training adds governance thinking to neurotechnology innovation, risk framing, and responsible translation in clinical neuroscience and research interfaces.',
    icon: Scale,
    category: 'secondary',
    contributions: [
      'Ethical framing for neuromodulation innovation and implementation',
      'Medical-law perspective supporting governance-aware decision making',
      'Responsible translation mindset across research and care interfaces',
    ],
    metrics: [
      { label: 'Master', value: '2025–26', hint: 'ongoing' },
      { label: 'Lens', value: 'Applied governance' },
      { label: 'Focus', value: 'Bioethics + Medical law' },
      { label: 'Use', value: 'Risk framing' },
    ],
    signals: ['Bioethics', 'Medical law', 'Responsible innovation'],
    themes: ['Governance', 'Risk framing', 'Neurotechnology ethics'],
    outputLens:
      'Clarifies what is acceptable, safe, and responsibly scalable as neuromodulation research moves toward implementation.',
  },
];

const PRIMARY_IDS = DIMENSIONS.filter((d) => d.category === 'primary').map((d) => d.id);
const SECONDARY_IDS = DIMENSIONS.filter((d) => d.category === 'secondary').map((d) => d.id);

const ORBIT_POSITIONS: Record<
  DimensionId,
  { angle: number; ring: 1 | 2; xBias?: number; yBias?: number }
> = {
  clinical: { angle: 300, ring: 2 },
  trial_ops: { angle: 20, ring: 2 },
  regulatory: { angle: 120, ring: 2 },
  research: { angle: 210, ring: 2 },
  pedagogy: { angle: 155, ring: 1, xBias: -2 },
  law: { angle: 335, ring: 1, xBias: 1 },
};

function polar(cx: number, cy: number, radius: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
}

function dimById(id: DimensionId) {
  return DIMENSIONS.find((d) => d.id === id)!;
}

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

function MetricCell({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-[14px] border border-white/8 bg-white/[0.02] px-3 py-2.5">
      <div className="text-[clamp(16px,1.35vw,30px)] font-bold leading-none text-white/95">
        {metric.value}
      </div>
      <div className="mt-1 text-[clamp(10px,0.76vw,12px)] text-white/62">{metric.label}</div>
      {metric.hint ? (
        <div className="mt-0.5 text-[clamp(9px,0.72vw,11px)] text-white/45">{metric.hint}</div>
      ) : null}
    </div>
  );
}

function LeftSelectorPanel({
  activeId,
  onSelect,
}: {
  activeId: DimensionId;
  onSelect: (id: DimensionId) => void;
}) {
  return (
    <GlassCard className="h-full min-h-0 p-4 md:p-4.5 flex flex-col overflow-hidden">
      <div className="shrink-0">
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-3">
          Skill Dimensions
        </div>

        <div className="space-y-2.5">
          {PRIMARY_IDS.map((id) => {
            const item = dimById(id);
            const Icon = item.icon;
            const isActive = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelect(id)}
                className={cn(
                  'w-full text-left rounded-[16px] border px-3 py-2.5 transition-all duration-300',
                  'bg-white/[0.02] border-white/8 hover:border-white/18 hover:bg-white/[0.035]',
                  isActive && 'border-white/20 bg-white/[0.05] ring-1 ring-white/10'
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-[12px] border flex items-center justify-center shrink-0 transition-all',
                      isActive
                        ? 'border-[#4da6ff]/35 bg-[#0a1d36]/60 text-[#66b6ff]'
                        : 'border-white/10 bg-white/[0.02] text-white/70'
                    )}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[clamp(12px,0.98vw,16px)] font-semibold text-white/94 truncate">
                      {item.title}
                    </div>
                    <div className="text-[clamp(10px,0.78vw,12px)] text-white/58 truncate">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 mt-4">
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2.5">
          Additional Dimensions
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {SECONDARY_IDS.map((id) => {
            const item = dimById(id);
            const Icon = item.icon;
            const isActive = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelect(id)}
                className={cn(
                  'rounded-[14px] border px-3 py-2.5 flex items-center gap-2.5 text-left transition-all',
                  'bg-white/[0.02] border-white/8 hover:border-white/18 hover:bg-white/[0.035]',
                  isActive && 'border-white/20 bg-white/[0.05] ring-1 ring-white/10'
                )}
              >
                <Icon
                  size={15}
                  className={isActive ? 'text-[#66b6ff]' : 'text-white/70'}
                  strokeWidth={1.7}
                />
                <span className="text-[clamp(11px,0.9vw,15px)] font-medium text-white/92 truncate">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="rounded-[16px] border border-white/8 bg-white/[0.02] p-3">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1.5">
            Research Signature
          </div>
          <p className="text-[clamp(10px,0.82vw,13px)] text-white/78 leading-[1.35]">
            Mechanism-informed neuromodulation with clinically actionable trial design.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function CoreRadial({
  activeId,
  onSelect,
}: {
  activeId: DimensionId;
  onSelect: (id: DimensionId) => void;
}) {
  const active = dimById(activeId);

  const nodes = useMemo(() => {
    const cx = 50;
    const cy = 50;
    return DIMENSIONS.map((d) => {
      const def = ORBIT_POSITIONS[d.id];
      const radius = def.ring === 2 ? 31 : 22;
      const { x, y } = polar(cx, cy, radius, def.angle);
      return {
        ...d,
        x: x + (def.xBias ?? 0),
        y: y + (def.yBias ?? 0),
      };
    });
  }, []);

  const activeNode = nodes.find((n) => n.id === activeId)!;
  const pathToCore = `M ${activeNode.x} ${activeNode.y} Q 56 48 50 50`;
  const pathOut = `M 50 50 Q 73 48 94 50`;

  return (
    <GlassCard className="h-full min-h-0 p-4 md:p-5 relative overflow-hidden">
      {/* subtle inner glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_58%_42%,rgba(88,120,255,0.12),transparent_40%),radial-gradient(circle_at_45%_58%,rgba(125,64,255,0.08),transparent_46%)]" />

      <div className="relative h-full min-h-0 flex flex-col">
        <div className="shrink-0 text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Core Network</div>
        </div>

        <div className="relative flex-1 min-h-0 mt-2">
          {/* SVG rings + connectors */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* grid dots */}
            <g opacity="0.18">
              {Array.from({ length: 11 }).map((_, yi) =>
                Array.from({ length: 11 }).map((__, xi) => (
                  <circle
                    key={`${xi}-${yi}`}
                    cx={5 + xi * 9}
                    cy={5 + yi * 9}
                    r="0.25"
                    fill="white"
                    opacity={xi === 5 && yi === 5 ? 0 : 1}
                  />
                ))
              )}
            </g>

            {/* orbits */}
            <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.35" />
            <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.35" />
            <circle
              cx="50"
              cy="50"
              r="36.5"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeDasharray="1.4 1.8"
              strokeWidth="0.3"
              className="snv4-rotate-slow"
              style={{ transformOrigin: '50px 50px' }}
            />

            {/* faint ambient paths */}
            <path
              d="M14 68 C 25 64, 30 58, 39 54"
              fill="none"
              stroke="rgba(99,173,255,0.18)"
              strokeWidth="0.4"
              strokeDasharray="1.5 2"
              className="snv4-dash-ambient"
            />
            <path
              d="M50 50 C 64 35, 78 32, 87 20"
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="0.35"
              strokeDasharray="1.2 2"
              className="snv4-dash-ambient"
              style={{ animationDelay: '1.2s' }}
            />

            {/* active connectors */}
            <path
              d={pathToCore}
              fill="none"
              stroke="rgba(80,170,255,0.65)"
              strokeWidth="0.55"
              strokeLinecap="round"
              strokeDasharray="2 2"
              className="snv4-dash-active"
            />
            <path
              d={pathOut}
              fill="none"
              stroke="rgba(255,255,255,0.20)"
              strokeWidth="0.45"
              strokeLinecap="round"
              strokeDasharray="1.8 2.2"
              className="snv4-dash-active"
              style={{ animationDelay: '0.6s' }}
            />

            {/* core pulse rings */}
            <circle
              cx="50"
              cy="50"
              r="16.8"
              fill="none"
              stroke="rgba(103,177,255,0.25)"
              strokeWidth="0.4"
              className="snv4-pulse-ring"
            />
            <circle
              cx="50"
              cy="50"
              r="16.8"
              fill="none"
              stroke="rgba(103,177,255,0.18)"
              strokeWidth="0.35"
              className="snv4-pulse-ring"
              style={{ animationDelay: '1.7s' }}
            />

            {/* active node ping */}
            <circle
              cx={activeNode.x}
              cy={activeNode.y}
              r="2.2"
              fill="rgba(80,170,255,0.15)"
              stroke="rgba(103,177,255,0.7)"
              strokeWidth="0.35"
              className="snv4-pulse-node"
            />
          </svg>

          {/* center core button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[clamp(150px,18vw,250px)] aspect-square rounded-full border border-white/10 bg-black/45 backdrop-blur-[10px] flex flex-col items-center justify-center">
              <div className="absolute inset-[6%] rounded-full border border-white/8" />
              <div className="absolute inset-[12%] rounded-full border border-[#66b6ff]/15" />

              <Activity
                className="text-white/90 mb-1.5 snv4-core-float"
                size={28}
                strokeWidth={1.9}
              />
              <div className="text-[clamp(11px,1vw,16px)] font-bold tracking-[0.16em] text-[#73b8ff] uppercase">
                Core
              </div>
              <div className="mt-1 text-[clamp(9px,0.75vw,12px)] text-white/55 text-center px-4 leading-tight">
                Multidimensional practice view
              </div>
            </div>
          </div>

          {/* orbit node labels/buttons */}
          {nodes.map((n) => {
            const Icon = n.icon;
            const isActive = n.id === activeId;

            const isSecondary = n.category === 'secondary';
            const width = isSecondary ? 'w-[110px]' : 'w-[132px]';
            const labelClass = isSecondary
              ? 'text-[11px]'
              : 'text-[11.5px]';
            const top = `${n.y}%`;
            const left = `${n.x}%`;

            return (
              <button
                key={n.id}
                type="button"
                onClick={() => onSelect(n.id)}
                className={cn(
                  'absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1.5',
                  'backdrop-blur-[10px] transition-all duration-300 text-left',
                  width,
                  isActive
                    ? 'border-[#66b6ff]/35 bg-[#091933]/55 shadow-[0_0_0_1px_rgba(102,182,255,0.1)]'
                    : 'border-white/10 bg-black/25 hover:border-white/20 hover:bg-white/[0.03]'
                )}
                style={{ top, left }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Icon
                    size={13}
                    className={isActive ? 'text-[#66b6ff]' : 'text-white/65'}
                    strokeWidth={1.8}
                  />
                  <span
                    className={cn(
                      'font-medium truncate',
                      labelClass,
                      isActive ? 'text-white/96' : 'text-white/78'
                    )}
                  >
                    {n.shortTitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="shrink-0 text-center mt-1">
          <div className="text-[clamp(14px,1.2vw,22px)] font-semibold text-white/95">
            {active.title}
          </div>
          <div className="text-[clamp(10px,0.85vw,13px)] text-white/62">
            {active.subtitle}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function UnifiedDetailsPanel({ active }: { active: SkillDimension }) {
  const Icon = active.icon;

  return (
    <GlassCard className="h-full min-h-0 p-4 md:p-5 overflow-hidden">
      <div className="h-full min-h-0 flex flex-col">
        {/* Header */}
        <div className="shrink-0">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-[12px] border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80">
              <Icon size={18} strokeWidth={1.6} />
            </div>

            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                Active Dimension
              </div>
              <h3 className="text-[clamp(20px,1.8vw,34px)] font-bold leading-[1.05] text-white/96 mt-0.5">
                {active.title}
              </h3>
              <p className="text-[clamp(11px,0.9vw,14px)] text-white/68 mt-1">
                {active.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-3.5 text-[clamp(12px,0.95vw,16px)] text-white/84 leading-[1.4]">
            {active.paragraph}
          </p>
        </div>

        <div className="w-full h-px bg-white/10 my-4 shrink-0" />

        {/* Main info blocks */}
        <div className="min-h-0 flex flex-col gap-4">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-4">
            {/* Contributions */}
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                Key Contributions
              </div>
              <div className="space-y-2.5">
                {active.contributions.slice(0, 3).map((item, idx) => (
                  <div
                    key={`${active.id}-c-${idx}`}
                    className="rounded-[14px] border border-white/8 bg-white/[0.02] px-3 py-2.5"
                  >
                    <div className="text-[clamp(11px,0.9vw,14px)] leading-[1.35] text-white/88">
                      • {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grouped metrics */}
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                Grouped Metrics
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {active.metrics.slice(0, 4).map((metric) => (
                  <MetricCell key={`${active.id}-${metric.label}`} metric={metric} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1.05fr_0.95fr] gap-4 min-h-0">
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                Domain Signals
              </div>
              <div className="flex flex-wrap gap-2">
                {active.signals.map((s) => (
                  <span
                    key={`${active.id}-signal-${s}`}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[clamp(10px,0.8vw,12px)] text-white/78"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                Research Themes
              </div>
              <div className="flex flex-wrap gap-2">
                {active.themes.map((t) => (
                  <span
                    key={`${active.id}-theme-${t}`}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[clamp(10px,0.8vw,12px)] text-white/78"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[16px] border border-white/8 bg-white/[0.02] px-3.5 py-3">
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1.5">
              Output Lens
            </div>
            <p className="text-[clamp(11px,0.9vw,14px)] text-white/84 leading-[1.35]">
              {active.outputLens}
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function MobileRadialMini({
  activeId,
  onSelect,
}: {
  activeId: DimensionId;
  onSelect: (id: DimensionId) => void;
}) {
  const nodes = useMemo(() => {
    const cx = 50;
    const cy = 50;
    return DIMENSIONS.map((d) => {
      const def = ORBIT_POSITIONS[d.id];
      const r = def.ring === 2 ? 32 : 22;
      const p = polar(cx, cy, r, def.angle);
      return { ...d, x: p.x, y: p.y };
    });
  }, []);

  const active = dimById(activeId);
  const activeNode = nodes.find((n) => n.id === activeId)!;

  return (
    <GlassCard className="relative p-3 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(82,146,255,0.12),transparent_48%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/55">Core network</div>
          <div className="text-[10px] text-white/55">Tap nodes / chips</div>
        </div>

        <div className="relative h-[180px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.45" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.45" />
            <circle
              cx="50"
              cy="50"
              r="36"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeDasharray="1.4 1.8"
              strokeWidth="0.35"
              className="snv4-rotate-slow"
              style={{ transformOrigin: '50px 50px' }}
            />

            {/* active connector */}
            <path
              d={`M ${activeNode.x} ${activeNode.y} Q 56 48 50 50`}
              fill="none"
              stroke="rgba(80,170,255,0.75)"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeDasharray="2 2"
              className="snv4-dash-active"
            />
            <circle
              cx={activeNode.x}
              cy={activeNode.y}
              r="2.5"
              fill="rgba(80,170,255,0.18)"
              stroke="rgba(103,177,255,0.8)"
              strokeWidth="0.45"
              className="snv4-pulse-node"
            />
            <circle
              cx="50"
              cy="50"
              r="16.5"
              fill="none"
              stroke="rgba(103,177,255,0.24)"
              strokeWidth="0.5"
              className="snv4-pulse-ring"
            />
          </svg>

          {/* node tap targets */}
          {nodes.map((n) => {
            const isActive = n.id === activeId;
            const Icon = n.icon;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => onSelect(n.id)}
                className={cn(
                  'absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border backdrop-blur-[8px]',
                  'flex items-center justify-center transition-all duration-300',
                  isActive
                    ? 'border-[#66b6ff]/40 bg-[#0a1d36]/70 text-[#66b6ff] scale-110'
                    : 'border-white/12 bg-black/35 text-white/70'
                )}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                aria-label={n.title}
              >
                <Icon size={14} strokeWidth={1.8} />
              </button>
            );
          })}

          {/* core */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[86px] h-[86px] rounded-full border border-white/10 bg-black/45 backdrop-blur-[8px] flex flex-col items-center justify-center">
              <Activity size={18} className="text-white/90 mb-1 snv4-core-float" strokeWidth={1.9} />
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#73b8ff] font-semibold">
                Core
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-[15px] font-semibold text-white/95">{active.title}</div>
          <div className="text-[11px] text-white/65 leading-snug mt-0.5">{active.subtitle}</div>
        </div>
      </div>
    </GlassCard>
  );
}

function MobileCollapseBlock({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="rounded-[16px] border border-white/10 bg-white/[0.03] p-3 overflow-hidden"
    >
      <summary className="list-none cursor-pointer flex items-center justify-between gap-2">
        <span className="text-[13px] font-semibold text-white/95">{title}</span>
        <span className="text-[10px] text-white/55">tap</span>
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}

function MobileView({
  activeId,
  onSelect,
}: {
  activeId: DimensionId;
  onSelect: (id: DimensionId) => void;
}) {
  const active = dimById(activeId);

  return (
    <div className="md:hidden h-full min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
        {/* Selector chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {DIMENSIONS.map((d) => {
            const Icon = d.icon;
            const isActive = d.id === activeId;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => onSelect(d.id)}
                className={cn(
                  'shrink-0 rounded-full border px-3 py-2 flex items-center gap-2 backdrop-blur-[10px] transition-all',
                  isActive
                    ? 'border-[#66b6ff]/35 bg-[#0a1d36]/65'
                    : 'border-white/10 bg-white/[0.03]'
                )}
              >
                <Icon
                  size={14}
                  className={isActive ? 'text-[#66b6ff]' : 'text-white/70'}
                  strokeWidth={1.8}
                />
                <span
                  className={cn(
                    'text-[11px] whitespace-nowrap',
                    isActive ? 'text-white/95' : 'text-white/78'
                  )}
                >
                  {d.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mini radial */}
        <MobileRadialMini activeId={activeId} onSelect={onSelect} />

        {/* Active summary */}
        <GlassCard className="p-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-[11px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
              <active.icon size={16} className="text-white/85" strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                Active Dimension
              </div>
              <div className="text-[17px] font-semibold leading-tight text-white/95 mt-0.5">
                {active.title}
              </div>
              <div className="text-[11px] text-white/65 leading-snug mt-1">
                {active.subtitle}
              </div>
            </div>
          </div>
          <p className="mt-3 text-[12px] text-white/82 leading-[1.35]">{active.oneLiner}</p>
        </GlassCard>

        {/* Collapsible blocks */}
        <MobileCollapseBlock title="Key Contributions" defaultOpen>
          <div className="space-y-2">
            {active.contributions.map((c, idx) => (
              <div
                key={`${active.id}-mc-${idx}`}
                className="rounded-[12px] border border-white/8 bg-white/[0.02] p-2.5"
              >
                <p className="text-[12px] text-white/85 leading-[1.3]">• {c}</p>
              </div>
            ))}
          </div>
        </MobileCollapseBlock>

        <MobileCollapseBlock title="Grouped Metrics" defaultOpen={active.id === 'research'}>
          <div className="grid grid-cols-2 gap-2">
            {active.metrics.slice(0, 4).map((m) => (
              <div
                key={`${active.id}-mm-${m.label}`}
                className="rounded-[12px] border border-white/8 bg-white/[0.02] p-2.5"
              >
                <div className="text-[18px] font-bold leading-none text-white/95">{m.value}</div>
                <div className="mt-1 text-[10px] text-white/62">{m.label}</div>
                {m.hint ? <div className="text-[9px] text-white/45 mt-0.5">{m.hint}</div> : null}
              </div>
            ))}
          </div>
        </MobileCollapseBlock>

        <MobileCollapseBlock title="Signals, Themes & Output Lens">
          <div className="space-y-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/55 mb-1.5">
                Domain Signals
              </div>
              <div className="flex flex-wrap gap-2">
                {active.signals.map((s) => (
                  <span
                    key={`${active.id}-ms-${s}`}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/78"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/55 mb-1.5">
                Themes
              </div>
              <div className="flex flex-wrap gap-2">
                {active.themes.map((t) => (
                  <span
                    key={`${active.id}-mt-${t}`}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/78"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] border border-white/8 bg-white/[0.02] p-2.5">
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/55 mb-1">
                Output Lens
              </div>
              <p className="text-[12px] text-white/84 leading-[1.3]">{active.outputLens}</p>
            </div>
          </div>
        </MobileCollapseBlock>

        <div className="pb-1">
          <GlassCard className="p-3">
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/50 mb-1">
              Research Signature
            </div>
            <p className="text-[12px] text-white/80 leading-[1.3]">
              Mechanism-informed neuromodulation with clinically actionable trial design.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function DesktopView({
  activeId,
  onSelect,
}: {
  activeId: DimensionId;
  onSelect: (id: DimensionId) => void;
}) {
  const active = dimById(activeId);

  return (
    <div className="hidden md:grid h-full min-h-0 grid-cols-[300px_minmax(360px,1fr)_560px] gap-5 lg:gap-6 items-stretch">
      <LeftSelectorPanel activeId={activeId} onSelect={onSelect} />
      <CoreRadial activeId={activeId} onSelect={onSelect} />
      <UnifiedDetailsPanel active={active} />
    </div>
  );
}

export default function SkillNetworkOverlayV4() {
  const [activeId, setActiveId] = useState<DimensionId>('research');

  return (
    <div className="relative h-full min-h-0">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .snv4-dash-active {
          stroke-dashoffset: 0;
          animation: snv4Dash 3.2s linear infinite;
        }
        .snv4-dash-ambient {
          animation: snv4Dash 6.4s linear infinite;
        }
        .snv4-pulse-ring {
          transform-origin: center;
          animation: snv4PulseRing 3.4s ease-out infinite;
        }
        .snv4-pulse-node {
          transform-origin: center;
          animation: snv4PulseNode 2.2s ease-in-out infinite;
        }
        .snv4-core-float {
          animation: snv4Float 4.2s ease-in-out infinite;
        }
        .snv4-rotate-slow {
          animation: snv4Rotate 24s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes snv4Dash {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -18; }
        }
        @keyframes snv4PulseRing {
          0%   { opacity: 0.65; transform: scale(1); }
          70%  { opacity: 0.05; transform: scale(1.14); }
          100% { opacity: 0; transform: scale(1.18); }
        }
        @keyframes snv4PulseNode {
          0%,100% { opacity: 0.85; transform: scale(1); }
          50%     { opacity: 1; transform: scale(1.18); }
        }
        @keyframes snv4Float {
          0%,100% { transform: translateY(0px); opacity: 0.92; }
          50%     { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes snv4Rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .snv4-dash-active,
          .snv4-dash-ambient,
          .snv4-pulse-ring,
          .snv4-pulse-node,
          .snv4-core-float,
          .snv4-rotate-slow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Desktop organized 3-zone layout */}
      <DesktopView activeId={activeId} onSelect={setActiveId} />

      {/* Mobile-first collapse behavior */}
      <MobileView activeId={activeId} onSelect={setActiveId} />
    </div>
  );
}
