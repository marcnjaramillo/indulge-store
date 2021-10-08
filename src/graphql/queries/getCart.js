import { gql } from '@apollo/client'

const cartItem = gql`
  fragment cartItem on ProductVariant {
    id
    price: compareAtPriceV2 {
      amount
      currencyCode
    }
    image {
      originalSrc
    }
    title
  }
`

const GET_CART_QUERY = gql`
  query cartQuery($cartId: ID!) {
    cart(id: $cartId) {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ...cartItem
            }
          }
        }
      }
      estimatedCost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
      buyerIdentity {
        email
        phone
        customer {
          id
        }
        countryCode
      }
    }
  }
  ${cartItem}
`
export default GET_CART_QUERY