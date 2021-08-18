type HeaderProps = {
  name: string
}
export default function Header({ name }: HeaderProps) {
  return (
    <nav className="border-b-2 border-pink bg-gray h-16">
      <div className="container h-full mx-auto flex flex-row justify-around items-center">
        <h2>{name}</h2>
        <h2>items here</h2>
      </div>
    </nav>
  )
}
