import React from "react"
import { SecretInput } from "../compositions/InputSecret"
import { IconEye } from "../icons/IconEye"
import { IconEyeClosed } from "../icons/IconEyeClosed"

export type SecretInputProps = React.ComponentPropsWithoutRef<typeof SecretInput.Input>

export function SecretInputComponent({ className, ...props }: SecretInputProps) {
  return (
    <SecretInput.Root>
      <SecretInput.Input {...props} />
      <SecretInput.ToggleIconWrapper>
        <IconEye data-visible-on-secret={true} className="w-5 h-5 text-gray-500" />
        <IconEyeClosed data-visible-on-secret={false} className="w-5 h-5 text-gray-500" />
      </SecretInput.ToggleIconWrapper>
    </SecretInput.Root>
  )
}

// export function ButtonSomething(...) {...}

export { SecretInputComponent as SecretInput }
