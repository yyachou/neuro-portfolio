import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import GlassCard from '../components/GlassCard';
import { VIDEO_URLS } from '../constants/profile';
import { Activity, Zap, ShieldPlus, Component } from 'lucide-react';

const focusCards = [
  {
    icon: Zap,
    title: 'Electric Field Modeling',
    desc: 'Personalization and meta-analytic synthesis in depression-focused neuromodulation.',
    tag: 'Modeling',
  },
  {
    icon: Activity,
    title: 'TMS/tDCS Clinical Translation',
    desc: 'Protocol development bridging cortical anatomy variability and response hypotheses.',
    tag: 'Translation',
  },
  {
    icon: ShieldPlus,
    title: 'Neuroprotection & Epileptology',
    desc: 'Taurine-related anti-epileptic and neuroprotective research with translational relevance.',
    tag: 'Neuroprotection',
  },
  {
    icon: Component,
    title: 'Neuroscience Education Innovation',
    desc: 'Tactile, multisensory, and geometric cognition methods in anatomy learning.',
    tag: 'Education Science',
  },
];

function FocusCard({
  icon: Icon,
  title,
  desc,
  tag,
}: {
  icon: any;
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <GlassCard className="min-h-0 p-[clamp(12px,1.3vw,20px)] flex flex-col justify-between overflow-hidden">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="w-[clamp(26px,2vw,34px)] h-[clamp(26px,2vw,34px)] rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
          <Icon className="w-[clamp(14px,1.2vw,20px)] h-[clamp(14px,1.2vw,20px)] text-white/80" strokeWidth={1.6} />
        </div>

        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.75vw,11px)] uppercase tracking-[0.12em] text-white/70">
          {tag}
        </span>
      </div>

      <div>
        <h4 className="text-[clamp(13px,1.15vw,19px)] font-bold leading-[1.15] mb-1.5">
          {title}
        </h4>
        <p className="text-[clamp(10px,0.9vw,14px)] text-white/78 leading-[1.35]">
          {desc}
        </p>
      </div>
    </GlassCard>
  );
}

export default function ResearchSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[3.6%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.research} />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center w-full shrink-0 mb-[2.2%]">
        <Monogram />
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Page 003</span>
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex-1 min-h-0 grid grid-cols-[1.55fr_0.9fr] gap-[3.8%] items-stretch">
        {/* LEFT COLUMN */}
        <div className="min-h-0 flex flex-col">
          {/* Title / intro block */}
          <div className="shrink-0">
            <div className="flex flex-wrap gap-2 mb-[clamp(8px,0.7vw,12px)]">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.75vw,11px)] uppercase tracking-[0.12em] text-white/70">
                Neuromodulation
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.75vw,11px)] uppercase tracking-[0.12em] text-white/70">
                Modeling
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.75vw,11px)] uppercase tracking-[0.12em] text-white/70">
                Translational Neuroscience
              </span>
            </div>

            <h2 className="text-[clamp(24px,3.4vw,58px)] tracking-[-0.02em] leading-[1.03] font-bold pr-[2%] max-w-[98%]">
              Brain Stimulation Modeling, Clinical Neuromodulation & Neuroprotection Research
            </h2>

            <p className="text-[clamp(11px,1vw,17px)] opacity-90 leading-[1.45] mt-[clamp(8px,0.9vw,14px)] pr-[6%] max-w-[95%]">
              Scientific work centers on neuromodulation personalization, electric field modeling,
              stimulation target anatomy, and translational brain research—linking computational and
              clinical approaches to improve therapeutic precision.
            </p>
          </div>

          {/* Focus cards grid */}
          <div className="mt-[clamp(10px,1vw,16px)] flex-1 min-h-0 grid grid-cols-2 gap-[clamp(8px,0.9vw,14px)]">
            {focusCards.map((card) => (
              <FocusCard key={card.title} {...card} />
            ))}
          </div>

          {/* Signature strip */}
          <div className="shrink-0 mt-[clamp(8px,0.8vw,12px)]">
            <GlassCard className="p-[clamp(10px,1vw,14px)]">
              <div className="flex items-center justify-between gap-4">
                <div className="text-[clamp(10px,0.85vw,13px)] text-white/75 leading-snug">
                  Research signature: <span className="text-white/95">Mechanism-informed neuromodulation</span> with clinically actionable trial design.
                </div>

                <svg viewBox="0 0 120 26" className="w-[clamp(110px,14vw,190px)] h-auto shrink-0 opacity-80">
                  <defs>
                    <linearGradient id="researchWave" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 18 C12 18, 14 8, 26 9 C38 10, 42 20, 56 15 C70 10, 72 7, 84 10 C96 13, 103 18, 120 8 L120 26 L0 26 Z"
                    fill="url(#researchWave)"
                  />
                  <path
                    d="M0 18 C12 18, 14 8, 26 9 C38 10, 42 20, 56 15 C70 10, 72 7, 84 10 C96 13, 103 18, 120 8"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* RIGHT COLUMN — metrics panel */}
        <GlassCard className="min-h-0 p-[clamp(18px,2vw,30px)] flex flex-col relative overflow-hidden">
          {/* Decorative cortical ring / field contour */}
          <svg
            className="absolute right-[-10%] top-[26%] w-[78%] h-auto opacity-[0.10] pointer-events-none"
            viewBox="0 0 140 140"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
          >
            <circle cx="70" cy="70" r="52" strokeDasharray="2 3" />
            <path d="M26 72 C 46 34, 96 34, 114 70" />
            <path d="M28 88 C 58 58, 94 102, 118 78" />
            <path d="M40 44 C 70 60, 70 86, 100 100" />
          </svg>

          <div className="shrink-0">
            <h3 className="text-[clamp(12px,1vw,16px)] font-bold opacity-80 uppercase tracking-[0.12em] mb-[clamp(10px,0.9vw,14px)]">
              Scientific Metrics
            </h3>

            <div className="grid grid-cols-2 gap-[clamp(8px,0.8vw,12px)] mb-[clamp(10px,0.9vw,14px)]">
              <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
                <div className="text-[clamp(28px,3vw,52px)] font-bold leading-none">722</div>
                <div className="text-[clamp(10px,0.85vw,13px)] text-white/65 mt-1">Citations</div>
              </div>
              <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
                <div className="text-[clamp(28px,3vw,52px)] font-bold leading-none">4</div>
                <div className="text-[clamp(10px,0.85vw,13px)] text-white/65 mt-1">H-index</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-[clamp(10px,0.9vw,14px)]">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.74vw,11px)] text-white/75">
                Depression neuromodulation
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.74vw,11px)] text-white/75">
                Field modeling
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.74vw,11px)] text-white/75">
                Translational brain science
              </span>
            </div>
          </div>

          <div className="w-full h-px bg-white/15 shrink-0 mb-[clamp(10px,0.9vw,14px)]" />

          {/* Outputs list */}
          <div className="min-h-0 flex flex-col">
            <h4 className="text-[clamp(12px,1vw,16px)] font-bold mb-[clamp(8px,0.7vw,12px)]">
              Neuromodulation Outputs
            </h4>

            <div className="flex flex-col gap-[clamp(8px,0.8vw,12px)]">
              {[
                {
                  label: 'J Affect Disord (2025)',
                  text: 'Electric field modeling meta-analysis in depression',
                },
                {
                  label: 'Schizophrenia-focused modeling',
                  text: 'Accepted / submitted neuromodulation work',
                },
                {
                  label: 'Clinical + translational outputs',
                  text: 'Across stimulation and broader brain sciences',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[14px] border border-white/8 bg-white/[0.025] px-[clamp(10px,0.9vw,14px)] py-[clamp(8px,0.8vw,11px)]"
                >
                  <div className="text-[clamp(10px,0.85vw,13px)] text-white/92 font-medium leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[clamp(10px,0.82vw,13px)] text-white/68 leading-snug mt-0.5">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-white/15 my-[clamp(10px,0.9vw,14px)]" />

            <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-[clamp(10px,0.9vw,14px)]">
              <p className="text-[clamp(10px,0.85vw,13px)] text-white/85 italic leading-[1.4]">
                “Mechanism-informed neuromodulation with clinically actionable trial design.”
              </p>
            </div>

            <div className="mt-auto pt-[clamp(8px,0.7vw,12px)]">
              <svg viewBox="0 0 160 24" className="w-full h-auto opacity-45">
                <path
                  d="M0 15 C18 15, 22 6, 36 7 C52 8, 55 18, 70 16 C84 14, 92 6, 108 8 C126 10, 132 18, 160 12"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full text-right shrink-0 mt-[1.6%]">
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-60">Brain Research & Publications</span>
      </div>
    </div>
  );
}