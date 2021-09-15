import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'
import portrait from '../public/portrait.jpeg'
import dynamic from 'next/dynamic'
import { map, lowerCase } from 'lodash'
import { ApolloProvider } from '@apollo/client'
import { GetClient } from '../utils/ApolloClient'
export default function Home() {
  const client = GetClient()

  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  const components = map(sections, (x) => ({
    component: dynamic(() => import(`../components/sections/${x}`)),
    id: x,
  }))

  return (
    <ApolloProvider client={client}>
      <Header portrait={portrait} name={'Donray Williams'} sections={sections} />
      <Default>
        {components.map((x) => (
          <section key={x.id} id={`section-${lowerCase(x.id)}`}>
            <x.component />
          </section>
        ))}
      </Default>
    </ApolloProvider>
  )
}
