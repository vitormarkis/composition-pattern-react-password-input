import React, { createContext, useCallback, useContext, useState } from "react"
import { cn } from "../../lib/utils"
import { IconMagnifying } from "../icons/IconMagnifying"

interface IInputContext {
  inputModel: InputModel
}

export const InputContext = createContext({} as IInputContext)

export type InputRootProps = React.ComponentPropsWithoutRef<"div"> & {
  children?: React.ReactNode
}

export const InputRoot = React.forwardRef<React.ElementRef<"div">, InputRootProps>(
  function InputRootComponent({ children, className, ...props }, ref) {
    const [isSecret, setIsSecret] = useState(false)

    const toggleSecret = useCallback(() => {
      setIsSecret(is => !is)
    }, [])

    return (
      <InputContext.Provider
        value={{
          inputModel: {
            isSecret,
            toggleSecret,
          },
        }}
      >
        <div
          {...props}
          data-secret={isSecret}
          className={cn(
            "h-11 rounded-md bg-[hsl(0,0%,14%)] border border-[color:hsl(0,0%,17%)] overflow-hidden flex gap-2 px-2 group",
            className
          )}
          ref={ref}
        >
          {children ?? null}
        </div>
      </InputContext.Provider>
    )
  }
)

InputRoot.displayName = "InputRoot"

type InputModel = {
  toggleSecret(): void
  isSecret: boolean
}

export type InputIconWrapperProps = Omit<React.ComponentPropsWithoutRef<"div">, "onClick"> & {
  onClick?(inputState: InputModel): void
  children: React.ReactNode
}

export const InputIconWrapper = React.forwardRef<React.ElementRef<"div">, InputIconWrapperProps>(
  function InputIconWrapperComponent({ onClick, children, className, ...props }, ref) {
    const { inputModel } = useContext(InputContext)

    function handleOnClick() {
      onClick?.(inputModel)
      return () => {}
    }

    return (
      <div {...props} className={cn("grid place-items-center", className)} ref={ref}>
        {onClick ? (
          <button onClick={handleOnClick} className="p-1 rounded-md hover:bg-[hsl(0,0%,16%)]">
            {children}
          </button>
        ) : (
          children
        )}
      </div>
    )
  }
)

InputIconWrapper.displayName = "InputIconWrapper"

export type InputExampleProps = React.ComponentPropsWithoutRef<"input"> & {}

export const InputExample = React.forwardRef<React.ElementRef<"input">, InputExampleProps>(
  function InputExampleComponent({ className, ...props }, ref) {
    return (
      <InputRoot>
        <InputIconWrapper>
          <IconMagnifying className="w-5 h-5 text-neutral-300" />
        </InputIconWrapper>
        <Input {...props} className={cn(className)} ref={ref} />
      </InputRoot>
    )
  }
)

InputExample.displayName = "InputExample"

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {}

export const Input = React.forwardRef<React.ElementRef<"input">, InputProps>(function InputComponent(
  { className, ...props },
  ref
) {
  const { inputModel: inputState } = useContext(InputContext)
  return (
    <div className="relative w-full h-full">
      <input
        {...props}
        type={inputState.isSecret ? "password" : "text"}
        className={cn(
          "absolute inset-0 w-full h-full bg-transparent focus:outline-0 text-neutral-200",
          className
        )}
        ref={ref}
      />
    </div>
  )
})

Input.displayName = "Input"
