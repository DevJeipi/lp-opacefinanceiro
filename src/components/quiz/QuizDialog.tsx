'use client'

import { AnimatePresence, motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { QuizForm } from './QuizForm'
import { cn } from '@/lib/utils'

interface QuizDialogProps {
    isOpen: boolean
    onClose: () => void
    onComplete?: () => void
    className?: string
}

export function QuizDialog({
    isOpen,
    onClose,
    onComplete,
    className,
}: QuizDialogProps) {
    const handleComplete = () => {
        if (onComplete) {
            onComplete()
        }
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            onClose()
                        }
                    }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className={cn('relative mx-4 w-full max-w-lg', className)}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            onClick={onClose}
                            className="absolute -top-12 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black z-10"
                            aria-label="Fechar formulário"
                        >
                            <XIcon className="size-5" />
                        </motion.button>
                        <QuizForm onComplete={handleComplete} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

