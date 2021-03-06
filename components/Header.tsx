import React, { useState } from 'react'
import { map, lowerCase } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import useDocumentScrollThrottled from '../utils/ScrollThrottle'
import portrait from '../public/portrait.jpeg'
import { Section } from '../utils/types'
import { MenuIcon } from '@heroicons/react/solid'
//TODO: Fix "blinking"

function Header({ sections }: { sections: Section[] }) {
  const [shouldHideHeader, setShouldHideHeader] = useState<boolean>(false)

  useDocumentScrollThrottled((callbackData: any) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > 30
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, 30)
  })

  const sectionsList = map(sections, (section: Section) => (
    <li key={section.id}>
      <Link
        href={'/[slug]'}
        as={`/#${lowerCase(section.name)}`}
        shallow={true}
        scroll={false}
        replace
      >
        <a>{section.name}</a>
      </Link>
    </li>
  ))

  return (
    <header className={`header ${shouldHideHeader ? 'hidden' : ''}`}>
      <div className="bg-flower-background bg-center bg-cover h-24 w-full"> </div>
      <nav className="shadow-md h-16 bg-gray w-full">
        <div className="h-full mx-3 md:mx-12 2xl:container 2xl:mx-auto flex flex-row justify-between items-center">
          <div className="flex flex-row gap-x-2 md:gap-x-6 items-center">
            <Link href="/">
              <a className="w-16 sm:w-24 md:w-auto">
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
            <h1 className="text-sm md:text-lg lg:text-2xl font-extrabold">{'Donray Williams'}</h1>
          </div>
          <ul className="md:text-sm lg:text-lg hidden md:flex flex-row justify-end gap-x-4 ">
            {sectionsList}
          </ul>
          <MenuIcon className="h-8 w-8 md:hidden text-black-light" />
        </div>
      </nav>
    </header>
  )
}

export default Header
