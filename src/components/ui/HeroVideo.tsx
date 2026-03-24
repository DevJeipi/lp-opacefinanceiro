'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

interface HeroVideoProps {
    src: string
    poster?: string
}

export function HeroVideo({ src, poster }: HeroVideoProps) {
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    function toggleMute() {
        if (!videoRef.current) return
        videoRef.current.muted = !videoRef.current.muted
        setIsMuted(videoRef.current.muted)
    }

    return (
        <div className="relative h-full w-full">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={poster}
                className="h-full w-full object-cover"
            >
                <source src={src} type="video/mp4" />
            </video>

            {/* Botão de mute */}
            <button
                onClick={toggleMute}
                className={`absolute right-4 bottom-4 flex items-center gap-2 rounded-full px-4 py-2.5 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isMuted
                        ? 'animate-pulse bg-white/20 ring-2 ring-white/60'
                        : 'bg-black/50 ring-1 ring-white/20'
                }`}
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
            >
                {isMuted ? (
                    <>
                        <VolumeX size={18} className="text-white drop-shadow" />
                        <span className="text-xs font-semibold tracking-wide drop-shadow">
                            🔇 Toque para ouvir
                        </span>
                    </>
                ) : (
                    <>
                        <Volume2
                            size={18}
                            className="text-green-400 drop-shadow"
                        />
                        <span className="text-xs font-semibold tracking-wide text-green-400 drop-shadow">
                            🔊 Som ativado
                        </span>
                    </>
                )}
            </button>
        </div>
    )
}
