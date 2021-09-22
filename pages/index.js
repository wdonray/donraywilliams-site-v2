import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'
import dynamic from 'next/dynamic'
import { map, lowerCase } from 'lodash'

export default function Home({ countries, test }) {
  console.log(countries, test)
  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact']
  const components = map(sections, (x) => ({
    component: dynamic(() => import(`../components/sections/${x}`)),
    id: x,
  }))

  return (
    <div>
      <Header />
      <Default>
        {components.map((x) => (
          <section key={x.id} id={`section-${lowerCase(x.id)}`}>
            <x.component />
          </section>
        ))}
      </Default>
    </div>
  )
}
