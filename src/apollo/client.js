import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://mnj-webdevelopment.myshopify.com/api/2021-10/graphql.json',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': '91b47ffc3e0c6130bc24e7df78c26761'
  },
  cache: new InMemoryCache(),
})
