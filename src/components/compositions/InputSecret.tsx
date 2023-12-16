import React, { useContext } from "react"
import {
  Input as InputPrim,
  InputRoot,
  InputIconWrapper,
  InputContext,
} from "../primitives/Input"
import { Slot } from "@radix-ui/react-slot"

type RootProps = React.ComponentPropsWithoutRef<typeof InputRoot>

function Root(props: RootProps) {
  return <InputRoot {...props} />
}

export type InputProps = React.ComponentPropsWithoutRef<typeof InputPrim> & {}

export const Input = React.forwardRef<
  React.ElementRef<typeof InputPrim>,
  InputProps
>(function InputComponent({ ...props }, ref) {
  return <InputPrim {...props} ref={ref} />
})

Input.displayName = "Input"

type ToggleIconWrapperProps = React.ComponentPropsWithoutRef<
  typeof InputIconWrapper
>

function ToggleIconWrapper({ ...props }: ToggleIconWrapperProps) {
  return (
    <InputIconWrapper
      {...props}
      onClick={inputModel => {
        props.onClick && props.onClick(inputModel)
        inputModel.toggleSecret()
      }}
    />
  )
}

function OnSecretHide(props: { children: React.ReactNode }) {
  const { inputModel } = useContext(InputContext)
  return inputModel.isSecret ? props.children : null
}

function OnSecretShow(props: { children: React.ReactNode }) {
  const { inputModel } = useContext(InputContext)
  return inputModel.isSecret ? null : props.children
}

function OnSecretRotate(props: { children: React.ReactNode }) {
  return (
    <Slot className="group-data-[secret=true]:rotate-[136deg] transition-rotate duration-500 ease-in-out">
      {props.children}
    </Slot>
  )
}

export const InputSecret = {
  Root,
  Input,
  ToggleIconWrapper,
  OnSecretHide,
  OnSecretShow,
  OnSecretRotate,
}
