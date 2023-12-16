import React from "react"
import { cn } from "../../lib/utils"

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode
}

export const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(function ButtonComponent(
  { children, className, ...props },
  ref
) {
  return (
    <button
      {...props}
      className={cn("h-11 px-4 rounded-md bg-gray-500 text-white text-sm font-medium", className)}
      ref={ref}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"
