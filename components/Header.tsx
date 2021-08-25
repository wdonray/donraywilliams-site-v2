import React, { useState, useEffect } from 'react'
import { map } from 'lodash'
import Image from 'next/image'
import { lowerCase } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useDocumentScrollThrottled from '../utils/ScrollThrottle'

type HeaderProps = {
  name: string
  sections: string[]
  portrait: any
}

export default function Header({ name, sections, portrait }: HeaderProps) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const router = useRouter()
  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shallowRouteChange = (section: string, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    router.replace(`#${lowerCase(section)}`, undefined, { shallow: true, scroll: false })
  }

  const sectionsList = map(sections, (section: string) => (
    <li key={section}>
      <a className="cursor-pointer" onClick={(event) => shallowRouteChange(section, event)}>
        {section}
      </a>
    </li>
  ))

  return (
    <header className={`header ${shouldHideHeader ? 'hidden' : ''}`}>
      <div className="bg-flower-background h-24 w-full"> </div>
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
