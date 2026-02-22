import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import SkillNetworkOverlayV3 from '../components/SkillNetworkOverlayV3';
import { VIDEO_URLS } from '../constants/profile';

export default function ResearchSlide() {
  return (
    <section className="relative w-full h-full overflow-hidden bg-black">
      {/* Background video */}
      <VideoBackground src={VIDEO_URLS.research} />

      {/* Readability overlays (kept subtle so animation stays visible) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(18,29,88,0.22),transparent_48%),radial-gradient(circle_at_78%_32%,rgba(79,34,153,0.14),transparent_46%),linear-gradient(to_bottom,rgba(0,0,0,0.28),rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.22)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      {/* Slide chrome */}
      <div className="relative z-20 h-full flex flex-col px-[4.2%] md:px-[5.2%] py-[3.5%] md:py-[3.6%] overflow-hidden">
        {/* Header */}
        <header className="shrink-0 flex items-center justify-between gap-3 mb-2 md:mb-[1.2%]">
          <Monogram />

          {/* Center label */}
          <div className="min-w-0 text-center flex-1 px-2">
            <span className="hidden md:inline text-[clamp(12px,1.2vw,20px)] text-white/80">
              Neuroscience Portfolio
            </span>
            <span className="md:hidden text-[clamp(11px,3.6vw,14px)] text-white/80">
              Neuro Portfolio
            </span>
          </div>

          {/* Page label */}
          <span className="shrink-0 text-[clamp(11px,1.15vw,20px)] text-white/80">
            Page 003
          </span>
        </header>

        {/* Main content
            Important: keep min-h-0 + no extra mobile scroll wrapper here.
            SkillNetworkOverlayV3 already handles the mobile-first collapsible scrolling internally. */}
        <main className="relative flex-1 min-h-0">
          <SkillNetworkOverlayV3 />
        </main>

        {/* Footer */}
        <footer className="shrink-0 mt-2 md:mt-[1.2%] flex items-center justify-between gap-3">
          <span className="hidden md:inline text-[clamp(10px,0.95vw,14px)] text-white/50">
            Multidimensional skills network
          </span>
          <span className="md:hidden text-[11px] text-white/50">
            Skills network
          </span>

          <div className="flex-1 h-px bg-white/8 mx-2 md:mx-3" />

          <span className="text-[clamp(10px,0.95vw,14px)] text-white/55">
            Brain Research &amp; Publications
          </span>
        </footer>
      </div>
    </section>
  );
}
