import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'
import dynamic from 'next/dynamic'
import { useQuery } from '@apollo/client'
import { listSections } from '../api/queries'
import { map, lowerCase } from 'lodash'

export default function Home() {
  const { data, loading, error } = useQuery(listSections)
  console.log({ data, loading, error })
  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact']
  const components = map(sections, (x) => ({
    component: dynamic(() => import(`../components/sections/${x}`)),
    id: x,
  }))

  return (
    <div>
      <Header sections={sections} />
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
