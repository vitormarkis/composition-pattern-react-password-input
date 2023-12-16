import { Button } from "./components/primitives/Button"
import { SecretInput } from "./components/ui-kits/SecretPage.ui-kit"

function App() {
  return (
    <div className="h-screen grid place-items-center bg-[#1E1E1E]">
      <div className="max-w-[300px] w-full mx-auto">
        <div className="flex flex-col gap-2">
          <SecretInput placeholder="your secret" />
          <SecretInput placeholder="your secret" />
          <SecretInput placeholder="your secret" />
          <SecretInput placeholder="your secret" />
          <Button className="bg-red-500">Cancelar</Button>
        </div>
      </div>
    </div>
  )
}

export default App
