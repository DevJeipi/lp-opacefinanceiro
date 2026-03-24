'use client'

import { useState } from 'react'
import { Play, XIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type AnimationStyle =
    | 'from-bottom'
    | 'from-center'
    | 'from-top'
    | 'from-left'
    | 'from-right'
    | 'fade'
    | 'top-in-bottom-out'
    | 'left-in-right-out'

interface HeroVideoProps {
    animationStyle?: AnimationStyle
    videoSrc: string
    thumbnailSrc: string
    thumbnailAlt?: string
    className?: string
}

const animationVariants = {
    'from-bottom': {
        initial: { y: '100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    },
    'from-center': {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.5, opacity: 0 },
    },
    'from-top': {
        initial: { y: '-100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '-100%', opacity: 0 },
    },
    'from-left': {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
    },
    'from-right': {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
    },
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    'top-in-bottom-out': {
        initial: { y: '-100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    },
    'left-in-right-out': {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
    },
}

export function HeroVideoDialog({
    animationStyle = 'from-center',
    videoSrc,
    thumbnailSrc,
    thumbnailAlt = 'Video thumbnail',
    className,
}: HeroVideoProps) {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const selectedAnimation = animationVariants[animationStyle]

    return (
        <div className={cn('relative aspect-[9/16] w-full', className)}>
            <button
                type="button"
                aria-label="Play video"
                className="group absolute inset-0 cursor-pointer border-0 bg-transparent p-0"
                onClick={() => setIsVideoOpen(true)}
            >
                <Image
                    src={thumbnailSrc}
                    alt={thumbnailAlt}
                    width={1080}
                    height={1920}
                    className="size-full rounded-md border-4 border-yellow-400 object-cover shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8] dark:border-yellow-400"
                />
                <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                    <div className="flex size-28 items-center justify-center rounded-full bg-slate-900/10 backdrop-blur-md dark:bg-slate-50/10">
                        <div
                            className={`from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]`}
                        >
                            <Play
                                className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                                style={{
                                    filter: 'drop-shadow(0 4px 3px rgb(0 0 / 0.07)) 2px 0.06))',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </button>
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (
                                e.key === 'Escape' ||
                                e.key === 'Enter' ||
                                e.key === ''
                            ) {
                                setIsVideoOpen(false)
                            }
                        }}
                        onClick={() => setIsVideoOpen(false)}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                    >
                        <motion.div
                            {...selectedAnimation}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 300,
                            }}
                            className="relative mx-4 w-full md:mx-0"
                            style={{
                                width: 'min(28rem, min(90vw, calc(90vh * 9 / 16)))',
                                maxHeight: '90vh',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute -top-12 right-0 z-10 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
                            >
                                <XIcon className="size-5" />
                            </motion.button>
                            <div
                                className="relative isolate z-[1] w-full overflow-hidden rounded-2xl border-2 border-white"
                                style={{ aspectRatio: '9/16' }}
                            >
                                <iframe
                                    src={videoSrc}
                                    title="Hero Video player"
                                    className="h-full w-full rounded-2xl"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
