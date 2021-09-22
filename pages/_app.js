import '../styles/globals.css'
import { client, ApolloProvider } from '../utils/ApolloClient'

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
