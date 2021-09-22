import { gql } from '@apollo/client'
import { client } from '../utils/ApolloClient'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 4),
      test: 'hello',
    },
  }
}
