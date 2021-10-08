import { gql } from '@apollo/client'

const GET_ALL_PRODUCTS_QUERY = gql`
  query getAllProducts($first: Int = 250) {
    products(first: $first) {
      pageInfo {
      hasNextPage
      hasPreviousPage
      }
      edges {
        node {
          id
          title
          handle
          description
          tags
          productType
          priceRange {
            minVariantPrice {
              amount
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
            }
          }
          variants(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                sku
                selectedOptions {
                  name
                  value
                }
                priceV2 {
                  amount
                }
                compareAtPriceV2 {
                  amount
                }
              }
            }
          }
          images(first: 1) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                originalSrc
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export default GET_ALL_PRODUCTS_QUERY
