import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client'
import AwsExports from '../api/aws-exports'

const client = new ApolloClient({
    uri: AwsExports.endpoint,
    headers: {
        'X-API-Key': `${AwsExports.apiKey}`,
    },
    cache: new InMemoryCache(),
});

export {
    client,
    ApolloProvider
}