import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_CART_QUERY } from '../../graphql/queries'

import { LineItem } from '../'
import styles from './Cart.module.scss'

const Cart = ({ cart, removeCartLines, updateCartLines }) => {

  const { loading: cartLoading, error: cartError, data: cartData } = useQuery(GET_CART_QUERY, { variables: { cartId: cart.id } })

  if (cartLoading) {
    return <p>Loading...</p>
  }

  if (cartError) {
    return <p>{cartError.message}</p>
  }

  const line_items = cartData.cart.lines.edges.map((line_item) => {
    return (
      <LineItem
        removeCartLines={removeCartLines}
        updateCartLines={updateCartLines}
        key={line_item.node.id}
        line_item={line_item.node}
      />
    )
  })

  const openCheckout = () => {
    alert('Thanks for checking out this demo!')
    window.location.replace('/')
  }

  return (
    <div>
      <header className="Cart__header">
        <h2>Your Cart</h2>
      </header>
      {line_items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.linesContainer}>
            {line_items}
          </ul>
          <section className="Cart__footer">
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Subtotal</div>
              <div className="Cart-info__pricing">
                <span className="pricing">${parseFloat(cart.estimatedCost.subtotalAmount.amount).toFixed(2)}</span>
              </div>
            </div>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Taxes</div>
              <div className="Cart-info__pricing">
                <span className="pricing">${parseFloat(cart.estimatedCost.totalTaxAmount.amount).toFixed(2)}</span>
              </div>
            </div>
            <div className="Cart-info clearfix">
              <div className="Cart-info__total Cart-info__small">Total</div>
              <div className="Cart-info__pricing">
                <span className="pricing">${parseFloat(cart.estimatedCost.totalAmount.amount).toFixed(2)}</span>
              </div>
            </div>
            <button className="Cart__checkout button" onClick={openCheckout}>Checkout</button>
          </section>
        </>
      )
      }
    </div>
  )
}

export default Cart