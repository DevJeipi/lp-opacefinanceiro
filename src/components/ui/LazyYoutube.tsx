'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyYouTubeProps {
    videoId: string
    className?: string
}

export function LazyYouTube({ videoId, className = '' }: LazyYouTubeProps) {
    const [shouldLoad, setShouldLoad] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=1`

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.25 } // carrega quando 25% do componente estiver visível
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={containerRef}
            className={`relative h-full w-full ${className}`}
        >
            {/* Thumbnail — mostrada até o iframe carregar */}
            {!isLoaded && (
                <img
                    src={thumbnailUrl}
                    alt="Aula de 10 minutos sobre cheque especial"
                    className="absolute inset-0 h-full w-full object-cover"
                    // Pré-carrega a thumbnail com alta prioridade
                    fetchPriority="high"
                />
            )}

            {/* Iframe — só montado quando visível */}
            {shouldLoad && (
                <iframe
                    src={embedUrl}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </div>
    )
}
