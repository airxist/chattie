import Back from "../assets/icons/Back"
import Button from "./Button"

type TopBarProps = {
  className?: string
}

const TopBar = ({
  className
} : TopBarProps) => {
  return (
    <header className={`${className} px-5 md:px-32 py-5`}>
      <div className="flex items-center space-x-3">
        <Button>
          <Back />
        </Button>
        <h2 className="font-semibold">Some Title</h2>
      </div>
    </header>
  )
}

export default TopBar
