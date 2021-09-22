import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client'


const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export {
    client,
    ApolloProvider
}