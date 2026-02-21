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
    <p className="text-[clamp(11px,0.95vw,16px)] text-white/80 leading-[1.35]">
      {desc}
    </p>
  </GlassCard>
);

export default function NeuromodulationOpsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-[5.2%] py-[3.4%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.trials} />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center w-full shrink-0">
        <Monogram />
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Page 002</span>
      </div>

      {/* Title block */}
      <div className="relative z-10 shrink-0 flex flex-col items-center text-center mt-[1.3%] mb-[2%]">
        <span className="text-[clamp(12px,1.15vw,20px)] opacity-90 mb-1">
          Clinical Research Operations in Brain Stimulation
        </span>
        <h2 className="text-[clamp(22px,3.2vw,52px)] font-bold tracking-[-0.02em] leading-[1.05] max-w-[92%]">
          Protocol Design, Safety, and Investigator Enablement
        </h2>
      </div>

      {/* Card area */}
      <div className="relative z-10 flex-1 min-h-0 w-full flex flex-col gap-[clamp(8px,1vw,16px)]">
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
      <div className="relative z-10 shrink-0 w-full text-center mt-[1.4%]">
        <span className="text-[clamp(10px,0.9vw,14px)] text-white/60 leading-snug">
          Research practice spans neuromodulation, neuropsychiatry-oriented stimulation protocols, and translational clinical neuroscience.
        </span>
      </div>
    </div>
  );
}