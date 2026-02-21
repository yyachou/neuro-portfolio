import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoBackground({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls;
    // Check if the source is a standard MP4
    const isMp4 = src.toLowerCase().endsWith('.mp4');

    if (isMp4) {
      // Handle standard MP4 natively
      video.src = src;
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      // Handle M3U8 streaming
      hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback for Safari's native HLS support
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => { 
      if (hls) hls.destroy(); 
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay 
      loop 
      muted 
      playsInline
    />
  );
}