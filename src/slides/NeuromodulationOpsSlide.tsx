import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import GlassCard from '../components/GlassCard';
import { VIDEO_URLS } from '../constants/profile';
import { Brain, Waves, ShieldCheck, GraduationCap, FlaskConical } from 'lucide-react';

const OpsCard = ({ icon: Icon, title, desc }: any) => (
  <GlassCard className="flex-1 min-h-0 flex flex-col justify-end overflow-hidden p-[clamp(14px,1.8vw,28px)]">
    <Icon
      className="w-[clamp(22px,2.1vw,36px)] h-[clamp(22px,2.1vw,36px)] text-white mb-[clamp(8px,1vw,14px)] shrink-0"
      strokeWidth={1.35}
    />
    <h3 className="text-[clamp(16px,1.65vw,30px)] font-bold leading-[1.05] mb-[clamp(4px,0.5vw,8px)]">
      {title}
    </h3>
    <p className="text-[clamp(11px,0.95vw,16px)] text-white/80 leading-[1.35]">{desc}</p>
  </GlassCard>
);

const MobileOpsCard = ({ icon: Icon, title, desc, tag }: any) => (
  <GlassCard className="p-4 overflow-hidden">
    <div className="flex items-start justify-between gap-3 mb-2">
      <div className="w-9 h-9 rounded-[12px] border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
        <Icon className="w-4.5 h-4.5 text-white/85" strokeWidth={1.5} />
      </div>
      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase text-white/70">
        {tag}
      </span>
    </div>

    <h3 className="text-[clamp(14px,4.4vw,18px)] font-bold leading-[1.12] mb-1.5">{title}</h3>
    <p className="text-[12px] text-white/78 leading-[1.35]">{desc}</p>
  </GlassCard>
);

export default function NeuromodulationOpsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[3.4%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.trials} />

      {/* ========================= DESKTOP ========================= */}
      <div className="hidden md:flex md:flex-col relative z-10 h-full min-h-0">
        {/* Header */}
        <div className="flex justify-between items-center w-full shrink-0">
          <Monogram />
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Page 002</span>
        </div>

        {/* Title block */}
        <div className="shrink-0 flex flex-col items-center text-center mt-[1.3%] mb-[2%]">
          <span className="text-[clamp(12px,1.15vw,20px)] opacity-90 mb-1">
            Clinical Research Operations in Brain Stimulation
          </span>
          <h2 className="text-[clamp(22px,3.2vw,52px)] font-bold tracking-[-0.02em] leading-[1.05] max-w-[92%]">
            Protocol Design, Safety, and Investigator Enablement
          </h2>
        </div>

        {/* Card area */}
        <div className="flex-1 min-h-0 w-full flex flex-col gap-[clamp(8px,1vw,16px)]">
          {/* Top row */}
          <div className="min-h-0 flex gap-[clamp(8px,1vw,16px)] flex-[1_1_0%]">
            <OpsCard
              icon={Brain}
              title="Targeted Neuromodulation Protocols"
              desc="Design and piloting of brain stimulation studies integrating cortical targets, symptom dimensions, and translational neuroanatomical rationale."
            />
            <OpsCard
              icon={Waves}
              title="TMS / tDCS Execution"
              desc="Operational oversight of stimulation-based studies, session logic, investigator coordination, and protocol adherence in clinical settings."
            />
            <OpsCard
              icon={ShieldCheck}
              title="Regulatory, GCP & Safety"
              desc="CPP / ANSM submissions, ICH-GCP alignment, pharmacovigilance support, SAE monitoring frameworks, and compliance-ready documentation."
            />
          </div>

          {/* Bottom row */}
          <div className="min-h-0 flex gap-[clamp(8px,1vw,14px)] flex-[0.82_1_0%]">
            <OpsCard
              icon={GraduationCap}
              title="Investigator Training"
              desc="Structured training for clinicians, residents, assistants, and research teams on neuromodulation circuits, procedures, and study conduct."
            />
            <OpsCard
              icon={FlaskConical}
              title="Trial Portfolio Breadth"
              desc="Randomized multicenter double-blind, monocentric randomized, observational, naturalistic, and qualitative neuroscience study formats."
            />
          </div>
        </div>

        {/* Footer note */}
        <div className="shrink-0 w-full text-center mt-[1.4%]">
          <span className="text-[clamp(10px,0.9vw,14px)] text-white/60 leading-snug">
            Research practice spans neuromodulation, neuropsychiatry-oriented stimulation protocols,
            and translational clinical neuroscience.
          </span>
        </div>
      </div>

      {/* ========================= MOBILE ========================= */}
      <div className="md:hidden relative z-10 h-full flex flex-col min-h-0">
        {/* Compact header */}
        <div className="flex justify-between items-center w-full shrink-0 mb-3">
          <Monogram />
          <span className="text-[11px] opacity-85">Page 002</span>
        </div>

        {/* Scrollable mobile content */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
          {/* Title */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.12em] text-white/70 mb-2">
              Brain Stimulation Research Operations
            </div>
            <h2 className="text-[clamp(22px,8vw,34px)] font-bold tracking-[-0.02em] leading-[1.03]">
              Protocol Design, Safety & Investigator Enablement
            </h2>
            <p className="text-[12px] text-white/85 leading-[1.4] mt-2">
              Operational neuroscience practice spanning protocol setup, stimulation execution,
              regulatory compliance, and clinician training.
            </p>
          </div>

          {/* Quick summary chips */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/75">
              rTMS / tDCS
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/75">
              GCP / Safety
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/75">
              Training
            </span>
          </div>

          {/* Core cards (always visible) */}
          <div className="grid grid-cols-1 gap-3">
            <MobileOpsCard
              icon={Brain}
              tag="Design"
              title="Targeted Neuromodulation Protocols"
              desc="Design and piloting of stimulation studies integrating cortical targets, symptom dimensions, and translational neuroanatomical rationale."
            />
            <MobileOpsCard
              icon={Waves}
              tag="Execution"
              title="TMS / tDCS Execution"
              desc="Study operations, session logic, investigator coordination, and protocol adherence in clinical settings."
            />
            <MobileOpsCard
              icon={ShieldCheck}
              tag="Safety"
              title="Regulatory, GCP & Safety"
              desc="CPP / ANSM submissions, ICH-GCP alignment, pharmacovigilance support, and SAE monitoring frameworks."
            />
          </div>

          {/* Secondary cards (collapsed by default on mobile) */}
          <details className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-semibold text-white/95 text-[clamp(13px,4vw,16px)]">
                Training & Trial Breadth
              </span>
              <span className="text-white/60 text-[12px]">Tap to expand</span>
            </summary>

            <div className="mt-3 grid grid-cols-1 gap-3">
              <MobileOpsCard
                icon={GraduationCap}
                tag="Training"
                title="Investigator Training"
                desc="Structured training for clinicians, residents, assistants, and research teams on neuromodulation procedures and study conduct."
              />
              <MobileOpsCard
                icon={FlaskConical}
                tag="Portfolio"
                title="Trial Portfolio Breadth"
                desc="Randomized multicenter/monocenter, observational, naturalistic, and qualitative neuroscience study formats."
              />
            </div>
          </details>

          {/* Compact footer note card */}
          <GlassCard className="p-4">
            <div className="text-[11px] uppercase tracking-[0.12em] text-white/60 mb-2">
              Practice Scope
            </div>
            <p className="text-[12px] text-white/80 leading-[1.4]">
              Neuromodulation, neuropsychiatry-oriented stimulation protocols, and translational
              clinical neuroscience.
            </p>
          </GlassCard>
        </div>

        {/* Mobile footer */}
        <div className="shrink-0 w-full text-center mt-2">
          <span className="text-[11px] text-white/60">Clinical Neuro Operations</span>
        </div>
      </div>
    </div>
  );
}
