"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"

const ProgressVariants = cva(
  "h-full w-full flex-1 bd-primary transition-all",
  {
    variants: {
      variant: {
        default: "bg-sky-600",
        success: "bg-emerald-700",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface ProgressProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProgressVariants> {}

type CombineProgressProps = ProgressProps & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  CombineProgressProps
>(({ className, value, variant, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(ProgressVariants({ variant: "success" }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
