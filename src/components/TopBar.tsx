import Back from "../assets/icons/Back"
import { AppContextType } from "../constants/interfaces"
import { useGlobalContext } from "../utils/context"
import Button from "./Button"

type TopBarProps = {
  className?: string
}

const TopBar = ({
  className
} : TopBarProps) => {
  const { title } = useGlobalContext() as AppContextType
  return (
    <header className={`${className} h-[70px] px-5 md:px-32 py-5`}>
      <div className="flex items-center space-x-3">
        <Button>
          <Back />
        </Button>
        <h2 className="font-semibold">{ title }</h2>
      </div>
    </header>
  )
}

export default TopBar
