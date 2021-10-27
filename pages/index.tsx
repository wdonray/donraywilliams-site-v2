import Header from '../components/Header'
import Default from '../layout/Default'
import dynamic from 'next/dynamic'
import { useQuery } from '@apollo/client'
import { listSections } from '../api/queries'
import { map, lowerCase, sortBy } from 'lodash'
import { Section } from '../utils/types'

export default function Home() {
  const { data, loading, error } = useQuery(listSections)

  if (loading) {
    return <div></div>
  }

  const sections = sortBy(data.listSections.items, (section: Section) => section.order)

  const components = map(sections, (x) => ({
    component: dynamic(() => import(`../components/sections/${x.name}`)) as any,
    id: x.id,
    name: x.name,
    content: x.content,
  }))

  return (
    <div>
      <Header sections={sections} />
      <Default>
        {components.map((x) => (
          <section key={x.id} id={`section-${lowerCase(x.name)}`}>
            <x.component content={x.content} name={x.name} />
          </section>
        ))}
      </Default>
    </div>
  )
}
