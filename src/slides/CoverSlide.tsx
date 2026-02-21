import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import { VIDEO_URLS } from '../constants/profile';

export default function CoverSlide() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between px-[5.2%] py-[4%]">
      <VideoBackground src={VIDEO_URLS.cover} />
      
      <div className="relative z-10 flex justify-between items-center w-full">
        <Monogram />
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full mb-[3%]">
        <h1 className="text-[clamp(32px,5vw,96px)] tracking-[-0.02em] leading-[1.05] font-bold text-center">
          Yassine Yachou, MD, PhD
        </h1>
        <h2 className="text-[clamp(20px,2.5vw,48px)] opacity-90 mt-[1.5%] font-medium">
          Medical Researcher in Neuroscience & Neuromodulation
        </h2>
        <p className="text-[clamp(14px,1.5vw,24px)] opacity-75 mt-[2%] tracking-wide">
          Clinical Trials · Neurostimulation · Translational Brain Research
        </p>
      </div>

      {/* Animated Foreground Motif */}
      <svg className="absolute bottom-[10%] right-[10%] w-[30%] h-auto opacity-20 pointer-events-none" viewBox="0 0 200 50">
        <path d="M0,25 Q40,5 50,25 T100,25 T150,25 T200,25" fill="none" stroke="white" strokeWidth="1" className="animate-pulse" />
      </svg>

      <div className="relative z-10 flex justify-between items-center w-full">
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-60 w-1/3 text-left">Paris, France</span>
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-60 w-1/3 text-center">Brain & Neuromodulation Portfolio</span>
        <span className="text-[clamp(12px,1.2vw,20px)] opacity-60 w-1/3 text-right">2026</span>
      </div>
    </div>
  );
}