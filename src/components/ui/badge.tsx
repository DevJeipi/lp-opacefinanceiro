import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-md border border-slate-200 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-slate-950 focus-visible:ring-slate-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 transition-[color,box-shadow] overflow-hidden dark:border-slate-800 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900',
    {
        variants: {
            variant: {
                default:
                    'text-center border-transparent bg-gradient-animated text-primary-white font-heading font-bold text-xl rounded-full py-1 px-4',
                secondary:
                    'font-heading font-bold flex items-center justify-center text-primary-white border border-primary-white rounded-full py-0.5 px-2',
                destructive:
                    'border-transparent bg-red-500 text-white [a&]:hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/60 dark:bg-red-900 dark:[a&]:hover:bg-red-900/90 dark:focus-visible:ring-red-900/20 dark:dark:focus-visible:ring-red-900/40 dark:dark:bg-red-900/60',
                outline:
                    'text-primary-blue border border-primary-blue/60 px-6 font-body text-md rounded-full text-center',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

function Badge({
    className,
    variant,
    asChild = false,
    ...props
}: React.ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : 'span'

    return (
        <Comp
            data-slot="badge"
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    )
}

export { Badge, badgeVariants }
