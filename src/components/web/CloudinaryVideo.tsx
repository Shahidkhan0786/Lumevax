"use client";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function CloudinaryVideo({ src }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen(); // Safari
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen(); // IE
      }
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg mt-10">
      {/* Cloudinary Video */}
      <video
        ref={videoRef}
        className="w-full h-80 rounded-lg"
        src={src}
        // poster="https://res.cloudinary.com/dmmkouxkh/image/upload/v1738936140/DETAILED_SCREE_mxufwn.mp4"
        onClick={togglePlay}
        controls
      />

      {/* Overlay Controls */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 transition-opacity duration-500">
        <button
          onClick={togglePlay}
          className="p-4 bg-white/80 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-black" />
          ) : (
            <Play className="w-8 h-8 text-black" />
          )}
        </button>
      </div>

      {/* Additional Controls (Mute & Fullscreen) */}
      <div className="absolute bottom-4 right-4 flex gap-2 bg-black/60 text-white px-3 py-2 rounded-lg">
        <button
          onClick={toggleMute}
          className="p-2 transition-transform transform hover:scale-110"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-2 transition-transform transform hover:scale-110"
        >
          <Maximize className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg">
        <h3 className="text-lg font-bold">lumevax</h3>
        <p className="text-sm opacity-80">We Provide Best Quality.</p>
      </div>
    </div>
  );
}
