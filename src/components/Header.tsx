import Back from "../assets/icons/Back"

type headerProps = {
  className?: string
}

const Header = ({
  className
} : headerProps) => {
  return (
    <header className={className}>
      <div className="flex items-center space-x-3">
        <Back />
        <h2 className="font-semibold">Some Title</h2>
      </div>
    </header>
  )
}

export default Header
