"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  children?: React.ReactNode
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {children ? (
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        >
          {children}
        </div>
      ) : (
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        />
      )}
    </div>
  )
)
Progress.displayName = "Progress"

export { Progress }

