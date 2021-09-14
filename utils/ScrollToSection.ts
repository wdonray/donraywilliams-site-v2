import { includes, replace } from 'lodash'

function getSection(url: string): HTMLElement | null {
  let el: HTMLElement | null = null;
  if (includes(url, '#')) {
    const id: string = replace(url, '/#', 'section-')
    el = document.getElementById(id)
  }
  return el;
}

function scrollToSection(url: string) {
  const el: HTMLElement = getSection(url)
  if (el) {
    window.scroll({ top: el.offsetTop - 170, behavior: 'smooth' })
    el.focus()
  }
}

export { scrollToSection, getSection }