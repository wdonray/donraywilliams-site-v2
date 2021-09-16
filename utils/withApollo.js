import { ApolloProvider } from '@apollo/client'
import { GetClient } from './ApolloClient'
import withApollo from 'next-with-apollo'

export default withApollo(
  ({ initialState }) => {
    return GetClient(initialState)
  },
  {
    render: function Render({ Page, props }) {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  }
)
