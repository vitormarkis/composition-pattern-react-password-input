import { InputSecret } from "./components/compositions/InputSecret"
import { IconPhone } from "./components/icons/IconPhone"
import { Button } from "./components/primitives/Button"
import { Input, InputRoot } from "./components/primitives/Input"
import { InputSecret as InputSecretAbs } from "./components/ui-kits/SecretPage.ui-kit"

function App() {
  return (
    <div className="h-screen grid place-items-center bg-[#1E1E1E]">
      <div className="max-w-[300px] w-full mx-auto">
        <div className="flex flex-col gap-2">
          <InputSecretAbs placeholder="your secret" />
          <InputSecretAbs placeholder="your secret" />
          <InputSecretAbs placeholder="your secret" />
          {/* componentes primitivos */}
          <InputRoot>
            <Input placeholder="rotating phone" />
            {/* componentes abstraídos */}
            <InputSecret.ToggleIconWrapper>
              <InputSecret.OnSecretRotate>
                <IconPhone className="h-5 w-5 text-gray-500" />
              </InputSecret.OnSecretRotate>
            </InputSecret.ToggleIconWrapper>
          </InputRoot>
          <Button className="bg-red-500">Cancelar</Button>
        </div>
      </div>
    </div>
  )
}

export default App
