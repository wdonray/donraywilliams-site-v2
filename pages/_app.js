import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import withApollo from 'next-with-apollo'
import { GetClient } from '../utils/ApolloClient'
import App from 'next/app'

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withApollo(({ initialState }) => {
  return GetClient(initialState)
})(MyApp)

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
