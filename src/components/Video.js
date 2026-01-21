import { useRef, useState } from "react";
import gta from "../assets/gta.mp4";

export const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
   }
  };


  return (
    <div className="max-w-3xl mx-auto p-4 py-12">
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl border border-slate-200 select-none"
        onClick={togglePlay}
      >
        <video ref={videoRef} className="w-full aspect-video rounded-[2rem] shadow-xl transition-transform duration-500 hover:scale-[1.02]" src={gta}
        autoPlay 
        muted 
        loop 
        playsInline
        >
        </video>
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 p-5 rounded-full shadow-xl">
            {isPlaying ? (
              // Pause Icon
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              // Play Icon
              <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
