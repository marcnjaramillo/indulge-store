import { gql } from '@apollo/client'

const cartItem = gql`
  fragment cartItem on ProductVariant {
    id
    price: priceV2 {
      amount
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
        }
        subtotalAmount {
          amount
        }
        totalTaxAmount {
          amount
        }
        totalDutyAmount {
          amount
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