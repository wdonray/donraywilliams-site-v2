import React, { useState } from 'react'
import { map, lowerCase } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import useDocumentScrollThrottled from '../utils/ScrollThrottle'

type HeaderProps = {
  name: string
  sections: string[]
  portrait: any
}

//TODO: Fix "blinking"

export default function Header({ name, sections, portrait }: HeaderProps) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)

  useDocumentScrollThrottled((callbackData: any) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > 30
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, 30)
  })

  const sectionsList = map(sections, (section: string) => (
    <li key={section}>
      <Link href={'/[slug]'} as={`/#${lowerCase(section)}`} shallow={true} scroll={false} replace>
        <a>{section}</a>
      </Link>
    </li>
  ))

  return (
    <header className={`header ${shouldHideHeader ? 'hidden' : ''}`}>
      <div className="bg-flower-background bg-center bg-cover h-24 w-full"> </div>
      <nav className="shadow-md h-16 bg-gray w-full">
        <div className="container h-full mx-auto flex flex-row justify-around items-center">
          <div className="flex flex-row gap-x-6 items-center">
            <Link href="/">
              <a>
                <Image
                  className="rounded-full border-gray header-image cursor-pointer"
                  width={125}
                  height={125}
                  quality={100}
                  src={portrait}
                  objectFit={'cover'}
                  alt="Picture of me"
                />
              </a>
            </Link>
            <h2 className="text-xl font-extrabold">{name}</h2>
          </div>
          <ul className="flex flex-row justify-end gap-x-4">{sectionsList}</ul>
        </div>
      </nav>
    </header>
  )
}
