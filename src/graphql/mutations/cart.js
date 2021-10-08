import { useEffect } from 'react'
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

export const createCart = gql`
  mutation createCart ($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
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
      }
    }
  }
  ${cartItem}
`

export const cartLinesAdd = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first:10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ...on ProductVariant {
                id
                price: compareAtPriceV2 {
                  amount
                }
                title
                itemImage: image {
                  originalSrc
                }
              }
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
    }
  }
}
`

export const cartLinesUpdate = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first:10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ...on ProductVariant {
                id
                price: compareAtPriceV2 {
                  amount
                }
                title
                itemImage: image {
                  originalSrc
                }
              }
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
    }
  }
}
`

export const cartLinesRemove = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        lines(first:10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ...on ProductVariant {
                id
                price: compareAtPriceV2 {
                  amount
                }
                title
                itemImage: image {
                  originalSrc
                }
              }
            }
          }
        }
      }
      estimatedCost {
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
    }
  }
}
`

export function useCartEffect(data, key, setDataCallback) {
  useEffect(() => {
    if (data && data[key] && data[key].cart) {
      setDataCallback(data[key].cart)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
}