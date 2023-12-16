import { cn } from "../../lib/utils"

export type IconMagnifyingProps = React.ComponentPropsWithoutRef<"svg">

export function IconMagnifying({ className, ...props }: IconMagnifyingProps) {
  return (
    <svg {...props} className={cn("", className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width={256} height={256} fill="none" />
      <circle
        cx={112}
        cy={112}
        r={80}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <line
        x1="168.57"
        y1="168.57"
        x2={224}
        y2={224}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
