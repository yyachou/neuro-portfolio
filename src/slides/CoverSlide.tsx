import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import { VIDEO_URLS } from '../constants/profile';

function TagChip({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-white/75 tracking-[0.08em] uppercase">
      {text}
    </span>
  );
}

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between px-[5.2%] py-[4%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.cover} />
      {/* Mobile readability overlays (local contrast, not full dim) */}
      <div className="md:hidden absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/35" />
      <div
        className="md:hidden absolute z-[1] pointer-events-none
                   left-[4%] right-[4%] top-[18%] h-[58%]
                   rounded-[28px]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.28)_48%,rgba(0,0,0,0)_78%)]"
      />
      {/* ========================= DESKTOP ========================= */}
      <div className="hidden md:flex md:flex-col md:justify-between relative z-10 h-full">
        <div className="flex justify-between items-center w-full">
          <Monogram />
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
        </div>

        <div className="flex flex-col justify-center items-center w-full mb-[3%]">
          <h1 className="text-[clamp(32px,5vw,96px)] tracking-[-0.02em] leading-[1.05] font-bold text-center">
            Yassine Yachou, MD, PhD
          </h1>
          <h2 className="text-[clamp(20px,2.5vw,48px)] opacity-90 mt-[1.5%] font-medium text-center max-w-[90%]">
            Medical Researcher in Neuroscience & Neuromodulation
          </h2>
          <p className="text-[clamp(14px,1.5vw,24px)] opacity-75 mt-[2%] tracking-wide text-center">
            Clinical Trials · Neurostimulation · Translational Brain Research
          </p>
        </div>

        {/* Animated Foreground Motif (desktop) */}
        <svg
          className="absolute bottom-[10%] right-[10%] w-[30%] h-auto opacity-20 pointer-events-none"
          viewBox="0 0 200 50"
        >
          <path
            d="M0,25 Q40,5 50,25 T100,25 T150,25 T200,25"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="animate-pulse"
          />
        </svg>

        <div className="flex justify-between items-center w-full">
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-60 w-1/3 text-left">Paris, France</span>
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-60 w-1/3 text-center">
            Brain & Neuromodulation Portfolio
          </span>
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-60 w-1/3 text-right">2026</span>
        </div>
      </div>

      {/* ========================= MOBILE ========================= */}
      <div className="md:hidden relative z-10 h-full flex flex-col justify-between min-h-0">
        {/* Header (simplified) */}
        <div className="flex justify-between items-center w-full shrink-0">
          <Monogram />
          <span className="text-[11px] opacity-80">Neuro Portfolio</span>
        </div>

        {/* Main content (compact + readable) */}
        {/* Main content (compact + readable) */}
        <div className="flex-1 min-h-0 flex flex-col justify-center items-center text-center px-[1%]">
          {/* Local glass panel behind hero text */}
          <div className="w-full max-w-[96%] rounded-[24px] border border-white/10 bg-black/20 backdrop-blur-xl px-4 py-5">
            <h1 className="text-[clamp(26px,9vw,40px)] tracking-[-0.02em] leading-[1.02] font-bold max-w-[95%] mx-auto">
              Yassine Yachou, MD, PhD
            </h1>

            <p className="text-[clamp(13px,4vw,17px)] text-white/95 mt-3 leading-[1.22] max-w-[96%] mx-auto">
              Medical Researcher in Neuroscience
              <br />
              <span className="text-white/90">Neuromodulation · Clinical Trials</span>
            </p>

            <p className="text-[11px] text-white/85 mt-3 tracking-[0.04em] max-w-[96%] mx-auto leading-[1.25]">
              Neurostimulation · Translational Brain Research
            </p>

            {/* Stronger chips for readability */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-[100%]">
              <span className="rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-3 py-1 text-[10px] text-white/90 tracking-[0.08em] uppercase">
                Clinical Trials
              </span>
              <span className="rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-3 py-1 text-[10px] text-white/90 tracking-[0.08em] uppercase">
                Neuromodulation
              </span>
              <span className="rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-3 py-1 text-[10px] text-white/90 tracking-[0.08em] uppercase">
                Brain Research
              </span>
            </div>
          </div>
        </div>
  );
}
