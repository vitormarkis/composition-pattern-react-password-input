import React from "react"
import { InputSecret } from "../compositions/InputSecret"
import { IconEye } from "../icons/IconEye"
import { IconEyeClosed } from "../icons/IconEyeClosed"

export type InputSecretProps = React.ComponentPropsWithoutRef<
  typeof InputSecret.Input
> & {}

export const InputSecretAbs = React.forwardRef<
  React.ElementRef<typeof InputSecret.Input>,
  InputSecretProps
>(function InputSecretComponent({ className, ...props }, ref) {
  return (
    <InputSecret.Root>
      <InputSecret.Input {...props} ref={ref} />
      <InputSecret.ToggleIconWrapper>
        <InputSecret.OnSecretHide>
          <IconEyeClosed className="w-5 h-5 text-gray-500" />
        </InputSecret.OnSecretHide>
        <InputSecret.OnSecretShow>
          <IconEye className="w-5 h-5 text-gray-500" />
        </InputSecret.OnSecretShow>
      </InputSecret.ToggleIconWrapper>
    </InputSecret.Root>
  )
})

InputSecretAbs.displayName = "InputSecret"

export { InputSecretAbs as InputSecret }
