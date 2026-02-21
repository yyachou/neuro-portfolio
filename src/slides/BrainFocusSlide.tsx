import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import GlassCard from '../components/GlassCard';
import { VIDEO_URLS } from '../constants/profile';

const STUDY_MIX = [
  { label: 'Rand. multicenter DB', value: 4 },
  { label: 'Rand. monocenter DB', value: 2 },
  { label: 'Observational', value: 3 },
  { label: 'Naturalistic', value: 1 },
  { label: 'Qualitative', value: 1 },
];

function KpiMiniCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2">
      <div className="text-[clamp(14px,4.4vw,20px)] font-bold leading-none">{value}</div>
      <div className="text-[11px] text-white/70 leading-tight mt-1">{label}</div>
    </div>
  );
}

function MetricChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[12px] border border-white/10 bg-white/[0.03] px-2.5 py-2">
      <div className="text-[clamp(13px,4.2vw,18px)] font-bold leading-none">{value}</div>
      <div className="text-[10px] text-white/65 mt-1 leading-tight">{label}</div>
    </div>
  );
}

export default function BrainFocusSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[4%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.focus} />

      {/* ========================= DESKTOP ========================= */}
      <div className="hidden md:flex md:flex-col relative z-10 h-full min-h-0">
        <div className="flex justify-between items-center w-full shrink-0">
          <Monogram />
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Page 001</span>
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-center">
          <h2 className="text-[clamp(28px,4vw,64px)] tracking-[-0.02em] leading-[1.02] font-bold whitespace-pre-line mb-[3.2%] max-w-[82%]">
            {'Brain Circuits, Symptoms, and\nNeuromodulation Strategy'}
          </h2>

          <div className="flex gap-[4%] w-full items-stretch justify-between min-h-0">
            {/* LEFT COLUMN — profile + KPI anchor */}
            <GlassCard className="flex-[0_0_24%] flex flex-col p-[clamp(18px,2.2vw,30px)] min-h-0">
              <p className="text-[clamp(12px,1.08vw,18px)] opacity-90 leading-[1.5] mb-[6%]">
                MD/PhD clinician-researcher in neuroscience focused on neuromodulation protocols,
                functional neuroanatomy, and trial operations with measurable brain-based endpoints.
              </p>

              <div className="mt-auto">
                <div className="flex items-end gap-2 leading-none">
                  <span className="text-[clamp(34px,4.8vw,76px)] font-bold">10+</span>
                </div>
                <p className="text-[clamp(12px,1.05vw,17px)] text-white/80 leading-[1.25] mt-2">
                  Neuromodulation studies
                  <br />
                  supervised / supported
                </p>

                {/* KPI mini-grid */}
                <div className="grid grid-cols-2 gap-[clamp(8px,0.8vw,12px)] mt-[clamp(14px,1.3vw,20px)]">
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
                    <div className="text-[clamp(16px,1.5vw,24px)] font-bold">80+</div>
                    <div className="text-[clamp(10px,0.8vw,13px)] text-white/70 leading-tight">
                      training hours
                    </div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
                    <div className="text-[clamp(16px,1.5vw,24px)] font-bold">3</div>
                    <div className="text-[clamp(10px,0.8vw,13px)] text-white/70 leading-tight">
                      e-field model projects
                    </div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
                    <div className="text-[clamp(16px,1.5vw,24px)] font-bold">8</div>
                    <div className="text-[clamp(10px,0.8vw,13px)] text-white/70 leading-tight">
                      publications
                    </div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
                    <div className="text-[clamp(16px,1.5vw,24px)] font-bold">12</div>
                    <div className="text-[clamp(10px,0.8vw,13px)] text-white/70 leading-tight">
                      oral comms
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* CENTER COLUMN — study mix + execution */}
            <GlassCard className="flex-[0_0_40%] flex flex-col p-[clamp(18px,2.2vw,30px)] min-h-0">
              <p className="text-[clamp(12px,1.08vw,18px)] opacity-90 leading-[1.5] mb-[clamp(10px,1vw,14px)]">
                Work bridges cortical target selection, stimulation parameters, clinical endpoints,
                and regulatory execution across neuroscience studies—connecting mechanistic brain
                hypotheses to real-world trial delivery.
              </p>

              <div className="text-[clamp(11px,0.9vw,14px)] text-white/70 uppercase tracking-[0.12em] mb-2">
                Study portfolio mix (current / recent)
              </div>

              <div className="flex flex-col gap-[clamp(8px,0.8vw,12px)]">
                {STUDY_MIX.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] px-[clamp(10px,1vw,14px)] py-[clamp(8px,0.7vw,11px)]"
                  >
                    <div className="w-[clamp(28px,2vw,34px)] text-[clamp(14px,1.2vw,20px)] font-bold tabular-nums">
                      {item.value}
                    </div>
                    <div className="flex-1 text-[clamp(11px,0.95vw,15px)] text-white/85 leading-tight">
                      {item.label}
                    </div>
                    <div className="h-[6px] w-[clamp(42px,6vw,96px)] rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white/70"
                        style={{ width: `${Math.min(100, item.value * 25)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[clamp(10px,1vw,14px)] grid grid-cols-2 gap-[clamp(8px,0.8vw,12px)]">
                <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-3 py-2">
                  <div className="text-[clamp(10px,0.8vw,12px)] text-white/60 uppercase tracking-[0.12em]">
                    Compliance
                  </div>
                  <div className="text-[clamp(11px,0.9vw,14px)] text-white/85">
                    CPP · ANSM · ICH-GCP · PV/SAE
                  </div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-3 py-2">
                  <div className="text-[clamp(10px,0.8vw,12px)] text-white/60 uppercase tracking-[0.12em]">
                    Modalities / Targets
                  </div>
                  <div className="text-[clamp(11px,0.9vw,14px)] text-white/85">
                    rTMS · tDCS · DLPFC · Cerebellum
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* RIGHT COLUMN — targets / modalities / scientific signals */}
            <div className="flex-[0_0_24%] flex flex-col gap-[clamp(10px,1vw,16px)] min-h-0">
              <GlassCard className="p-[clamp(14px,1.5vw,20px)]">
                <div className="text-[clamp(10px,0.8vw,12px)] text-white/60 uppercase tracking-[0.14em] mb-2">
                  Targets
                </div>
                <h3 className="text-[clamp(18px,2vw,30px)] font-bold leading-tight">
                  DLPFC +<br />
                  Cerebellum
                </h3>
                <p className="text-[clamp(11px,0.9vw,14px)] text-white/75 mt-2 leading-snug">
                  Key stimulation targets in protocol design
                </p>
              </GlassCard>

              <GlassCard className="p-[clamp(14px,1.5vw,20px)]">
                <div className="text-[clamp(10px,0.8vw,12px)] text-white/60 uppercase tracking-[0.14em] mb-2">
                  Modalities
                </div>
                <h3 className="text-[clamp(18px,2vw,30px)] font-bold leading-tight">TMS / tDCS</h3>
                <p className="text-[clamp(11px,0.9vw,14px)] text-white/75 mt-2 leading-snug">
                  Brain stimulation workflow + protocol operations
                </p>
              </GlassCard>

              <GlassCard className="p-[clamp(14px,1.5vw,20px)] mt-auto">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-2 py-2">
                    <div className="text-[clamp(14px,1.2vw,20px)] font-bold leading-none">722</div>
                    <div className="text-[clamp(9px,0.72vw,11px)] text-white/65 mt-1">citations</div>
                  </div>
                  <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-2 py-2">
                    <div className="text-[clamp(14px,1.2vw,20px)] font-bold leading-none">4</div>
                    <div className="text-[clamp(9px,0.72vw,11px)] text-white/65 mt-1">h-index</div>
                  </div>
                  <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-2 py-2">
                    <div className="text-[clamp(14px,1.2vw,20px)] font-bold leading-none">+30%</div>
                    <div className="text-[clamp(9px,0.72vw,11px)] text-white/65 mt-1">training evals</div>
                  </div>
                </div>

                <svg viewBox="0 0 100 34" className="w-full h-auto overflow-visible opacity-80">
                  <defs>
                    <linearGradient id="waveGradBrainFocusDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 24 C 12 24, 18 10, 30 13 C 42 16, 50 7, 62 11 C 74 15, 84 8, 100 20 L 100 34 L 0 34 Z"
                    fill="url(#waveGradBrainFocusDesktop)"
                  />
                  <path
                    d="M 0 24 C 12 24, 18 10, 30 13 C 42 16, 50 7, 62 11 C 74 15, 84 8, 100 20"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                  <circle cx="0" cy="24" r="2.2" fill="black" stroke="white" strokeWidth="1.2" />
                  <circle cx="100" cy="20" r="2.2" fill="black" stroke="white" strokeWidth="1.2" />
                </svg>
              </GlassCard>
            </div>
          </div>
        </div>

        <div className="w-full text-right shrink-0">
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-60">Clinical Neuro Focus</span>
        </div>
      </div>

      {/* ========================= MOBILE ========================= */}
      <div className="md:hidden relative z-10 h-full flex flex-col min-h-0">
        {/* Compact header */}
        <div className="flex justify-between items-center w-full shrink-0 mb-3">
          <Monogram />
          <span className="text-[clamp(11px,3.4vw,14px)] opacity-85">Page 001</span>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
          {/* Short mobile title */}
          <h2 className="text-[clamp(22px,8vw,34px)] tracking-[-0.02em] leading-[1.03] font-bold">
            Brain Circuits, Symptoms & Neuromodulation Strategy
          </h2>

          {/* Short intro */}
          <p className="text-[clamp(12px,3.8vw,16px)] text-white/88 leading-[1.4]">
            Clinician-researcher in neuromodulation and brain stimulation trials, bridging cortical
            targets, protocol operations, and measurable clinical endpoints.
          </p>

          {/* Hero row */}
          <div className="grid grid-cols-2 gap-3">
            <GlassCard className="p-4">
              <div className="text-[11px] uppercase tracking-[0.12em] text-white/60 mb-2">
                Portfolio
              </div>
              <div className="text-[clamp(26px,9vw,40px)] font-bold leading-none">10+</div>
              <div className="text-[12px] text-white/78 mt-2 leading-snug">
                Neuromodulation studies supervised / supported
              </div>
            </GlassCard>

            <GlassCard className="p-4">
              <div className="text-[11px] uppercase tracking-[0.12em] text-white/60 mb-2">
                Core Focus
              </div>
              <div className="text-[clamp(15px,4.8vw,20px)] font-bold leading-tight">
                TMS / tDCS
              </div>
              <div className="text-[12px] text-white/78 mt-2 leading-snug">
                DLPFC · Cerebellum targets
              </div>
            </GlassCard>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 gap-3">
            <KpiMiniCard value="80+" label="training hours" />
            <KpiMiniCard value="3" label="e-field model projects" />
            <KpiMiniCard value="8" label="publications" />
            <KpiMiniCard value="12" label="oral comms" />
          </div>

          {/* Targets + modalities cards */}
          <div className="grid grid-cols-1 gap-3">
            <GlassCard className="p-4">
              <div className="text-[11px] uppercase tracking-[0.12em] text-white/60 mb-2">
                Targets
              </div>
              <div className="text-[clamp(15px,4.8vw,20px)] font-bold">DLPFC + Cerebellum</div>
              <p className="text-[12px] text-white/75 mt-2 leading-snug">
                Key stimulation targets in protocol design and clinical neuromodulation strategy.
              </p>
            </GlassCard>

            <GlassCard className="p-4">
              <div className="text-[11px] uppercase tracking-[0.12em] text-white/60 mb-2">
                Modalities
              </div>
              <div className="text-[clamp(15px,4.8vw,20px)] font-bold">TMS / tDCS</div>
              <p className="text-[12px] text-white/75 mt-2 leading-snug">
                Brain stimulation workflow, investigator coordination, and protocol operations.
              </p>
            </GlassCard>
          </div>

          {/* Collapsible study mix */}
          <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-semibold text-white/95 text-[clamp(13px,4vw,16px)]">
                Study Portfolio Mix
              </span>
              <span className="text-white/60 text-[12px]">Tap to expand</span>
            </summary>

            <div className="mt-3 space-y-2.5">
              {STUDY_MIX.map((item) => (
                <div
                  key={`mobile-${item.label}`}
                  className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 text-[14px] font-bold tabular-nums">{item.value}</div>
                    <div className="flex-1 text-[12px] text-white/85 leading-tight">
                      {item.label}
                    </div>
                    <div className="h-[6px] w-[72px] rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white/70"
                        style={{ width: `${Math.min(100, item.value * 25)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>

          {/* Collapsible execution / compliance */}
          <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-semibold text-white/95 text-[clamp(13px,4vw,16px)]">
                Operations & Compliance
              </span>
              <span className="text-white/60 text-[12px]">Tap to expand</span>
            </summary>

            <div className="mt-3 space-y-3">
              <p className="text-[12px] text-white/82 leading-[1.4]">
                Work bridges cortical target selection, stimulation parameters, clinical endpoints,
                and regulatory execution across neuroscience studies.
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="text-[10px] text-white/60 uppercase tracking-[0.12em]">
                    Compliance
                  </div>
                  <div className="text-[12px] text-white/85 mt-1">CPP · ANSM · ICH-GCP · PV/SAE</div>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="text-[10px] text-white/60 uppercase tracking-[0.12em]">
                    Modalities / Targets
                  </div>
                  <div className="text-[12px] text-white/85 mt-1">
                    rTMS · tDCS · DLPFC · Cerebellum
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* Scientific signals */}
          <GlassCard className="p-4">
            <div className="grid grid-cols-3 gap-2 mb-3">
              <MetricChip value="722" label="citations" />
              <MetricChip value="4" label="h-index" />
              <MetricChip value="+30%" label="training evals" />
            </div>

            <svg viewBox="0 0 100 34" className="w-full h-auto overflow-visible opacity-80">
              <defs>
                <linearGradient id="waveGradBrainFocusMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 24 C 12 24, 18 10, 30 13 C 42 16, 50 7, 62 11 C 74 15, 84 8, 100 20 L 100 34 L 0 34 Z"
                fill="url(#waveGradBrainFocusMobile)"
              />
              <path
                d="M 0 24 C 12 24, 18 10, 30 13 C 42 16, 50 7, 62 11 C 74 15, 84 8, 100 20"
                fill="none"
                stroke="white"
                strokeWidth="1.4"
              />
              <circle cx="0" cy="24" r="2.2" fill="black" stroke="white" strokeWidth="1.2" />
              <circle cx="100" cy="20" r="2.2" fill="black" stroke="white" strokeWidth="1.2" />
            </svg>
          </GlassCard>
        </div>

        {/* Mobile footer */}
        <div className="shrink-0 text-right mt-2">
          <span className="text-[11px] opacity-60">Clinical Neuro Focus</span>
        </div>
      </div>
    </div>
  );
}
