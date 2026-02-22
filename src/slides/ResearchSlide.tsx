import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import GlassCard from '../components/GlassCard';
import SkillNetworkOverlay from '../components/SkillNetworkOverlay';
import { VIDEO_URLS } from '../constants/profile';
import { Activity, Zap, ShieldPlus, Component } from 'lucide-react';

const mobileFocusCards = [
  {
    icon: Zap,
    title: 'Electric Field Modeling',
    desc: 'Personalization and meta-analytic synthesis for neuromodulation protocols.',
    tag: 'Modeling',
  },
  {
    icon: Activity,
    title: 'TMS/tDCS Translation',
    desc: 'Protocol development bridging anatomy variability and response hypotheses.',
    tag: 'Translation',
  },
  {
    icon: ShieldPlus,
    title: 'Neuroprotection',
    desc: 'Epileptology and translational relevance in brain-focused therapeutic research.',
    tag: 'Neuro',
  },
  {
    icon: Component,
    title: 'Education Innovation',
    desc: 'Tactile and multisensory neuroanatomy learning methods.',
    tag: 'Education',
  },
];

function MobileFocusCard({
  title,
  desc,
  tag,
  icon: Icon,
}: {
  title: string;
  desc: string;
  tag: string;
  icon: any;
}) {
  return (
    <GlassCard className="p-3 min-h-[132px] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="w-8 h-8 rounded-[10px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-white/80" strokeWidth={1.6} />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] tracking-[0.1em] uppercase text-white/70">
          {tag}
        </span>
      </div>

      <h4 className="text-[clamp(12px,4vw,16px)] font-bold leading-[1.12] mb-1.5">{title}</h4>
      <p className="text-[clamp(10px,3.2vw,13px)] text-white/75 leading-[1.3]">{desc}</p>
    </GlassCard>
  );
}

export default function ResearchSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[3.6%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.research} />

      {/* Global readability layers (very subtle, preserve video) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/24" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(0,0,0,0.28),transparent_55%)]" />

      {/* ========================= DESKTOP / TABLET ========================= */}
      <div className="hidden md:flex relative z-10 h-full flex-col min-h-0">
        {/* Header */}
        <div className="flex justify-between items-center w-full shrink-0 mb-[1.5%]">
          <Monogram />
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Page 003</span>
        </div>

        {/* Title strip */}
        <div className="shrink-0 mb-[1.6%]">
          <div className="flex flex-wrap items-center gap-2 mb-[clamp(8px,0.7vw,12px)]">
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

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-[3.2%] items-start">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,54px)] tracking-[-0.02em] leading-[1.03] font-bold max-w-[98%]">
                Brain Stimulation Modeling, Clinical Neuromodulation & Neuroprotection Research
              </h2>
              <p className="text-[clamp(11px,1vw,16px)] text-white/88 leading-[1.4] mt-[clamp(8px,0.9vw,14px)] max-w-[92%]">
                Scientific work centers on neuromodulation personalization, electric field
                modeling, stimulation target anatomy, and translational brain research—linking
                computational and clinical approaches to improve therapeutic precision.
              </p>
            </div>

            {/* Compact metrics bar (desktop) */}
            <GlassCard className="p-[clamp(10px,1vw,14px)]">
              <div className="grid grid-cols-2 gap-[clamp(8px,0.8vw,12px)]">
                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="text-[clamp(22px,2.2vw,36px)] font-bold leading-none">722</div>
                  <div className="text-[clamp(10px,0.82vw,12px)] text-white/65 mt-1">Citations</div>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="text-[clamp(22px,2.2vw,36px)] font-bold leading-none">4</div>
                  <div className="text-[clamp(10px,0.82vw,12px)] text-white/65 mt-1">H-index</div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.74vw,11px)] text-white/75">
                  J Affect Disord (2025)
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.74vw,11px)] text-white/75">
                  tDCS / rTMS
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[clamp(9px,0.74vw,11px)] text-white/75">
                  DLPFC + Cerebellum
                </span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Network animation area */}
        <div className="relative flex-1 min-h-0 rounded-[24px] border border-white/8 bg-black/10 backdrop-blur-[2px] overflow-hidden">
          {/* Local contrast island behind network center/right */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_50%,rgba(0,0,0,0.20),transparent_58%)]" />
          <SkillNetworkOverlay />
        </div>

        {/* Footer */}
        <div className="w-full text-right shrink-0 mt-[1.2%]">
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-60">
            Brain Research & Publications
          </span>
        </div>
      </div>

      {/* ========================= MOBILE ========================= */}
      <div className="md:hidden relative z-10 h-full flex flex-col min-h-0">
        {/* Compact header */}
        <div className="flex justify-between items-center w-full shrink-0 mb-3">
          <Monogram />
          <span className="text-[11px] opacity-85">Neuroscience Portfolio</span>
          <span className="text-[11px] opacity-85">Page 003</span>
        </div>

        {/* Scrollable content inside the slide */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
          {/* Topic tags */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/75">
              Neuromodulation
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/75">
              Modeling
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/75">
              Translational
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[clamp(22px,8.2vw,36px)] tracking-[-0.02em] leading-[1.03] font-bold">
            Brain Stimulation Modeling & Clinical Neuromodulation Research
          </h2>

          {/* Intro */}
          <p className="text-[clamp(12px,3.8vw,16px)] text-white/88 leading-[1.4]">
            Research focused on neuromodulation personalization, electric field modeling, and
            translational brain science linking mechanistic hypotheses to clinically useful precision.
          </p>

          {/* Compact mobile skill network substitute (readable) */}
          <GlassCard className="p-3.5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.12em] text-white/60 mb-1">
                  Multidimensional Practice
                </div>
                <div className="text-[13px] font-semibold text-white/92 leading-tight">
                  Clinical · Research · Regulatory · Education
                </div>
              </div>
              <div className="relative w-14 h-14 shrink-0">
                <div className="absolute inset-0 rounded-full border border-white/15" />
                <div className="absolute inset-[5px] rounded-full border border-white/10" />
                <div className="absolute inset-[10px] rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white/80" strokeWidth={1.7} />
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                '10+ studies',
                '80+ training hrs',
                'CPP/ANSM/GCP',
                'E-field modeling',
                'tDCS / rTMS',
                '722 citations',
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Mobile focus cards */}
          <div className="grid grid-cols-2 gap-3">
            {mobileFocusCards.map((card) => (
              <MobileFocusCard key={card.title} {...card} />
            ))}
          </div>

          {/* Collapsible Scientific Metrics */}
          <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-semibold text-white/95 text-[clamp(13px,4vw,16px)]">
                Scientific Metrics
              </span>
              <span className="text-white/60 text-[12px]">Tap to expand</span>
            </summary>

            <div className="mt-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[clamp(24px,7vw,34px)] font-bold leading-none">722</div>
                  <div className="text-[11px] text-white/65 mt-1">Citations</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[clamp(24px,7vw,34px)] font-bold leading-none">4</div>
                  <div className="text-[11px] text-white/65 mt-1">H-index</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[clamp(20px,6vw,28px)] font-bold leading-none">8</div>
                  <div className="text-[11px] text-white/65 mt-1">Publications</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[clamp(20px,6vw,28px)] font-bold leading-none">12+</div>
                  <div className="text-[11px] text-white/65 mt-1">Oral comms</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/75">
                  Depression neuromodulation
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/75">
                  Field modeling
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/75">
                  Translational brain science
                </span>
              </div>
            </div>
          </details>

          {/* Collapsible outputs */}
          <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-semibold text-white/95 text-[clamp(13px,4vw,16px)]">
                Selected Outputs
              </span>
              <span className="text-white/60 text-[12px]">Tap to expand</span>
            </summary>

            <div className="mt-3 space-y-2">
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
                  className="rounded-xl border border-white/8 bg-white/[0.025] p-3"
                >
                  <div className="text-[12px] text-white/92 font-medium leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-white/68 leading-snug mt-1">{item.text}</div>
                </div>
              ))}
            </div>
          </details>

          {/* Signature strip */}
          <GlassCard className="p-3">
            <div className="text-[12px] text-white/80 leading-[1.35]">
              Research signature:{' '}
              <span className="text-white/95">Mechanism-informed neuromodulation</span> with
              clinically actionable trial design.
            </div>
            <svg viewBox="0 0 120 26" className="w-full h-auto mt-2 opacity-70">
              <path
                d="M0 18 C12 18, 14 8, 26 9 C38 10, 42 20, 56 15 C70 10, 72 7, 84 10 C96 13, 103 18, 120 8"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
              />
            </svg>
          </GlassCard>
        </div>

        {/* Mobile footer */}
        <div className="shrink-0 text-right mt-2">
          <span className="text-[11px] opacity-60">Research & Publications</span>
        </div>
      </div>
    </div>
  );
}
