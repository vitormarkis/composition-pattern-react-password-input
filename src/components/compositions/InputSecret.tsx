import React, { useContext } from "react"
import { cn } from "../../lib/utils"
import { Input as InputPrim, InputRoot, InputIconWrapper, InputContext } from "../primitives/Input"
import st from "./InputSecret.module.css"

type RootProps = React.ComponentPropsWithoutRef<typeof InputRoot>

function Root({ className, ...props }: RootProps) {
  return <InputRoot {...props} className={cn("", className)} />
}

type InputProps = React.ComponentPropsWithoutRef<typeof InputPrim>

function Input({ className, ...props }: InputProps) {
  return <InputPrim {...props} className={cn("", className)} />
}

type ToggleIconWrapperProps = React.ComponentPropsWithoutRef<typeof InputIconWrapper>

function ToggleIconWrapper({ className, ...props }: ToggleIconWrapperProps) {
  const { inputModel } = useContext(InputContext)

  return (
    <InputIconWrapper
      {...props}
      onClick={() => {
        inputModel.toggleSecret()
      }}
      className={cn("", className, inputModel.isSecret ? st.isSecret : st.isNotSecret)}
    />
  )
}

export const SecretInput = {
  Root,
  Input,
  ToggleIconWrapper,
}
