import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'
import portrait from '../public/portrait.jpeg'
import dynamic from 'next/dynamic'
import { map, lowerCase } from 'lodash'
import AppSyncConfig from '../api/aws-exports'
import { ApolloProvider, ApolloClient } from '@apollo/client'

export default function Home() {
  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  const client = new ApolloClient({
    url: AppSyncConfig.aws_appsync_graphqlEndpoint,
    region: AppSyncConfig.aws_project_region,
    auth: {
      type: AppSyncConfig.aws_appsync_authenticationType,
      apiKey: AppSyncConfig.aws_appsync_apiKey,
    },
  })

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
