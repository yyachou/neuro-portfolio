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

// --- Types ---
type SkillId = 'clinical' | 'trialOps' | 'regulatory' | 'research' | 'pedagogy' | 'law';

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

// --- Constants ---
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
    description: 'Clinical neuroscience training anchors the portfolio in symptom-circuit reasoning and translational relevance.',
    contributions: ['Functional neuroanatomy perspective', 'Clinical interpretation of symptom dimensions', 'Translational framing'],
    domainSignals: ['Brain circuits', 'Functional neuroanatomy'],
    researchThemes: ['DLPFC + Cerebellum', 'Neuropsychiatric stimulation'],
    outputLens: 'Keeps modeling and research outputs clinically interpretable.',
    practiceMetrics: [{ label: 'Core lens', value: 'Clinical' }, { label: 'Scope', value: 'Brain-circuit view' }],
  },
  {
    id: 'trialOps',
    label: 'Trial Operations',
    shortLabel: 'Trial Ops',
    subtitle: 'Neuromodulation study execution',
    miniSubtitle: '10+ neuromodulation studies',
    icon: Waves,
    description: 'Operational execution spans study coordination and investigator alignment across clinical research.',
    contributions: ['Study workflow design', 'Site coordination', 'Protocol adherence'],
    domainSignals: ['Study execution', 'Protocol flow'],
    researchThemes: ['Randomized studies', 'Observational cohorts'],
    outputLens: 'Transforms protocol plans into reliable study delivery.',
    practiceMetrics: [{ label: 'Studies', value: '10+' }, { label: 'Portfolio', value: 'Rand/Obs/Qual' }],
  },
  {
    id: 'regulatory',
    label: 'Regulatory & Safety',
    shortLabel: 'Regulatory',
    subtitle: 'Compliance and safety oversight',
    miniSubtitle: 'ANSM / CPP / SAE monitoring',
    icon: ShieldCheck,
    description: 'Regulatory expertise supports compliant trial execution through documentation rigor and GCP alignment.',
    contributions: ['CPP / ANSM submissions', 'ICH-GCP alignment', 'Safety signal awareness'],
    domainSignals: ['GCP', 'Safety monitoring'],
    researchThemes: ['PV / SAE', 'Compliance frameworks'],
    outputLens: 'Adds operational reliability and regulatory readiness.',
    practiceMetrics: [{ label: 'Frameworks', value: 'CPP·ANSM·GCP' }, { label: 'Focus', value: 'Safety + compliance' }],
  },
  {
    id: 'research',
    label: 'Research & Modeling',
    shortLabel: 'Modeling',
    subtitle: 'Electric field modeling',
    miniSubtitle: 'E-field modeling (TMS/tDCS)',
    icon: FlaskConical,
    description: 'Research connects computational modeling with clinically actionable neuromodulation hypotheses.',
    contributions: ['E-field modeling', 'Depression-focused synthesis', 'Mechanistic framing'],
    domainSignals: ['E-field modeling', 'tDCS / rTMS'],
    researchThemes: ['J Affect Disord (2025)', 'Translational brain science'],
    outputLens: 'Integrates computational evidence with clinical reasoning.',
    practiceMetrics: [{ label: 'Primary mode', value: 'Modeling' }, { label: 'Focus', value: 'Mechanism-informed' }],
  },
  {
    id: 'pedagogy',
    label: 'Pedagogy',
    shortLabel: 'Pedagogy',
    subtitle: 'Neuroscience education design',
    miniSubtitle: 'Education + training methods',
    icon: GraduationCap,
    description: 'Pedagogy strengthens investigator enablement through structured teaching and practical design.',
    contributions: ['Investigator training', 'Multisensory learning', 'Complex concept communication'],
    domainSignals: ['Training', 'Knowledge transfer'],
    researchThemes: ['Anatomy learning', 'Teaching innovation'],
    outputLens: 'Improves adoption quality by making concepts easier to teach.',
    practiceMetrics: [{ label: 'Role', value: 'Investigator training' }, { label: 'Mode', value: 'Applied pedagogy' }],
  },
  {
    id: 'law',
    label: 'Law & Bioethics',
    shortLabel: 'Law',
    subtitle: 'Responsible innovation',
    miniSubtitle: 'Bioethics / medical law',
    icon: Scale,
    description: 'Medical-law training adds a governance lens to neurotechnology innovation and risk framing.',
    contributions: ['Ethical framing', 'Medical-law perspective', 'Responsible translation'],
    domainSignals: ['Bioethics', 'Responsible innovation'],
    researchThemes: ['Governance', 'Neurotechnology ethics'],
    outputLens: 'Clarifies what is safe and responsibly scalable.',
    practiceMetrics: [{ label: 'Master', value: '2025–26' }, { label: 'Lens', value: 'Governance' }],
  },
];

type Point = { x: number; y: number };
const CORE_POINT: Point = { x: 50, y: 50 };

const DESKTOP_POSITIONS: Record<SkillId, Point> = {
  clinical: { x: 50, y: 12 },
  law: { x: 82, y: 30 },
  trialOps: { x: 82, y: 70 },
  regulatory: { x: 50, y: 88 },
  pedagogy: { x: 18, y: 70 },
  research: { x: 18, y: 30 },
};

const MOBILE_POSITIONS: Record<SkillId, Point> = {
  clinical: { x: 50, y: 15 },
  law: { x: 80, y: 35 },
  trialOps: { x: 80, y: 65 },
  regulatory: { x: 50, y: 85 },
  pedagogy: { x: 20, y: 65 },
  research: { x: 20, y: 35 },
};

// --- Helper Functions ---
function buildConnectorPath(from: Point, to: Point) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  // Curve slightly toward the center core for a "bloom" effect
  const pull = 0.2;
  const qx = mx + (50 - mx) * pull;
  const qy = my + (50 - my) * pull;
  return `M ${from.x} ${from.y} Q ${qx} ${qy} ${to.x} ${to.y}`;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function sectionTitle(label: string) {
  return <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">{label}</div>;
}

// --- Components ---
function PolarStage({ active, onSelect, positions, mobile = false }: any) {
  const activePath = useMemo(() => buildConnectorPath(positions[active.id], CORE_POINT), [active.id, positions]);
  const allPaths = useMemo(() => DIMENSIONS.map(d => ({ id: d.id, d: buildConnectorPath(positions[d.id], CORE_POINT) })), [positions]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 sn41-grid opacity-20 pointer-events-none" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Background Network */}
        {allPaths.map(path => (
          <path key={path.id} d={path.d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" />
        ))}
        
        {/* Active Glow Path */}
        <path d={activePath} fill="none" stroke="rgba(97, 168, 255, 0.4)" strokeWidth="0.8" className="sn41-dash-flow" />
        
        {/* Data Pulse */}
        <circle r="0.8" fill="#6db7ff">
          <animateMotion dur="2.5s" repeatCount="indefinite" path={activePath} />
        </circle>

        {/* Ambient Rings */}
        <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(109,183,255,0.1)" strokeWidth="0.2" className="sn41-pulse-ring" />
      </svg>

      {/* Center Core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl z-30">
        <Activity className="w-6 h-6 text-blue-400 mb-1 animate-pulse" />
        <span className="text-[10px] font-black tracking-widest text-white/80">CORE</span>
      </div>

      {/* Nodes */}
      {DIMENSIONS.map((d) => {
        const p = positions[d.id];
        const isActive = d.id === active.id;
        const Icon = d.icon;
        return (
          <button
            key={d.id}
            onClick={() => onSelect(d.id)}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className={cx(
              "absolute -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 sn41-chip-float",
              isActive ? "scale-110" : "scale-100 opacity-70 hover:opacity-100"
            )}
          >
            <div className={cx(
              "p-2.5 rounded-2xl border backdrop-blur-md flex flex-col items-center gap-1",
              isActive ? "bg-blue-500/20 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "bg-white/5 border-white/10"
            )}>
              <Icon className={cx("w-5 h-5", isActive ? "text-blue-300" : "text-white/60")} />
              <span className="text-[10px] font-bold text-white whitespace-nowrap uppercase tracking-tighter">
                {mobile ? d.shortLabel : d.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function MetricTile({ label, value, compact }: any) {
  return (
    <div className={cx("rounded-xl border border-white/10 bg-white/5", compact ? "p-2" : "p-3")}>
      <div className="text-xl font-bold text-white leading-none">{value}</div>
      <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

export default function SkillNetworkOverlayV4_1() {
  const [activeId, setActiveId] = useState<SkillId>('research');
  const active = DIMENSIONS.find((d) => d.id === activeId)!;

  return (
    <div className="relative w-full h-full min-h-0 text-white p-4 md:p-8">
      <style>{`
        .sn41-grid { background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 30px 30px; }
        .sn41-dash-flow { stroke-dasharray: 4, 4; animation: dash 10s linear infinite; }
        @keyframes dash { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        .sn41-pulse-ring { transform-origin: center; animation: pulse 3s ease-out infinite; }
        @keyframes pulse { 0% { transform: scale(0.9); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
        .sn41-chip-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translate(-50%, -50%) translateY(0); } 50% { transform: translate(-50%, -50%) translateY(-5px); } }
      `}</style>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[1fr_1.5fr_1.2fr] gap-6 h-full">
        {/* Left: Selector */}
        <GlassCard className="p-6 flex flex-col gap-4 overflow-y-auto">
          {sectionTitle("Dimensions")}
          {DIMENSIONS.map(d => (
            <button key={d.id} onClick={() => setActiveId(d.id)} className={cx(
              "flex items-center gap-4 p-3 rounded-xl border transition-all",
              activeId === d.id ? "bg-blue-500/10 border-blue-400/40" : "bg-white/5 border-white/5 hover:bg-white/10"
            )}>
              <d.icon className="w-5 h-5 text-blue-400" />
              <div className="text-left">
                <div className="text-sm font-bold">{d.label}</div>
                <div className="text-[10px] text-white/40">{d.shortLabel}</div>
              </div>
            </button>
          ))}
        </GlassCard>

        {/* Center: Stage */}
        <div className="relative">
          <PolarStage active={active} onSelect={setActiveId} positions={DESKTOP_POSITIONS} />
        </div>

        {/* Right: Details */}
        <GlassCard className="p-6 flex flex-col gap-6 overflow-y-auto">
          <div>
            <h2 className="text-3xl font-black text-blue-400 leading-tight">{active.label}</h2>
            <p className="text-sm text-white/60 mt-2 italic">{active.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {GLOBAL_METRICS.map(m => <MetricTile key={m.label} {...m} />)}
          </div>

          <div className="space-y-4">
            {sectionTitle("Key Contributions")}
            {active.contributions.map(c => (
              <div key={c} className="text-xs p-3 rounded-lg bg-white/5 border border-white/10">• {c}</div>
            ))}
          </div>

          <div className="mt-auto">
             <div className="text-[10px] text-white/30 uppercase tracking-widest">Core Insight</div>
             <p className="text-xs text-white/70 mt-1">{active.outputLens}</p>
          </div>
        </GlassCard>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-4 h-full">
        <div className="h-[40vh] relative">
          <PolarStage active={active} onSelect={setActiveId} positions={MOBILE_POSITIONS} mobile />
        </div>
        <GlassCard className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-blue-400">{active.label}</h2>
            <p className="text-xs text-white/60 mb-4">{active.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-6">
               {active.practiceMetrics.map(m => <MetricTile key={m.label} {...m} compact />)}
            </div>
        </GlassCard>
      </div>
    </div>
  );
}
