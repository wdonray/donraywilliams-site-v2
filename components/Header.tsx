import { map } from 'lodash'
import Image from 'next/image'

type HeaderProps = {
  name: string
  sections: string[]
  portrait: any
}
export default function Header({ name, sections, portrait }: HeaderProps) {
  const sectionsList = map(sections, (section: string) => (
    <li key="section">
      <a>{section}</a>
    </li>
  ))

  return (
    <nav className="shadow-md h-16 bg-gray">
      <div className="container h-full mx-auto flex flex-row justify-around items-center">
        <div className="flex flex-row gap-x-2 items-center">
          <Image
            className="rounded-full"
            width={125}
            height={125}
            src={portrait}
            alt="Picture of me"
          />
          <h2 className="text-xl font-extrabold">{name}</h2>
        </div>
        <ul className="flex flex-row justify-end gap-x-4">{sectionsList}</ul>
      </div>
    </nav>
  )
}
