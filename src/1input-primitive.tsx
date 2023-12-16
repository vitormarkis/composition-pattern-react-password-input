import { Button } from "./components/primitives/Button"
import {
  IconMagnifying,
  Input,
  InputIconWrapper,
  InputRoot,
} from "./components/primitives/Input"

function App() {
  return (
    <div className="h-screen grid place-items-center bg-[#1E1E1E]">
      <div className="max-w-[600px] w-full mx-auto">
        <div className="flex gap-8 w-full">
          <div className="flex flex-col grow gap-2">
            <InputRoot>
              <Input />
            </InputRoot>
            <Button>Cancelar</Button>
          </div>
          <div className="flex flex-col grow gap-2">
            <InputRoot>
              <InputIconWrapper>
                <IconMagnifying className="w-5 h-5 text-gray-500" />
              </InputIconWrapper>
              <Input />
            </InputRoot>
            <Button>Cancelar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
