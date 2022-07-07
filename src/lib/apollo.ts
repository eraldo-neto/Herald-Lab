import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl5bii1ii06bq01t91kcvhlgw/master',
    cache: new InMemoryCache()
})