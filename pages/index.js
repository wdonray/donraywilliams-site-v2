import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'
import portrait from '../public/portrait.jpeg'
import dynamic from 'next/dynamic'
import { map, lowerCase } from 'lodash'

export default function Home() {
  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  const components = map(sections, (x) => ({
    component: dynamic(() => import(`../components/sections/${x}`)),
    id: x,
  }))

  return (
    <div>
      {/* Header */}
      <Header portrait={portrait} name={'Donray Williams'} sections={sections} />
      {/* Content */}
      <Default>
        {components.map((x) => (
          <section key={x.id} id={lowerCase(x.id)}>
            <x.component />
          </section>
        ))}
      </Default>
    </div>
  )
}
