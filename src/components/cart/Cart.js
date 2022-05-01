import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_CART_QUERY } from '../../graphql/queries'

import { LineItem, CheckoutModal } from '../'
import { CardIcon } from '../icons'

import styles from './Cart.module.scss'

const Cart = ({ cart, removeCartLines, updateCartLines }) => {

  const [modalShow, setModalShow] = useState(false);

  const { loading: cartLoading, error: cartError, data: cartData } = useQuery(GET_CART_QUERY, { variables: { cartId: cart.id } })

  if (cartLoading) {
    return <p>Loading...</p>
  }

  if (cartError) {
    return <p>{cartError.message}</p>
  }

  console.log(cartData)

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

  const onShow = () => {
    setModalShow(true)
  }

  const onHide = () => {
    setModalShow(false)
    window.location.replace('/')
  }

  return (
    <div>
      <header className={styles.cartHeader}>
        <h2>Your Cart</h2>
      </header>
      <CheckoutModal show={modalShow} onHide={onHide} />
      {line_items.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.linesContainer}>
            {line_items}
          </ul>
          <section className={styles.cartDetails}>
            <div className={styles.cartInfo}>
              <span className={styles.subtotal}>Subtotal</span>
              <span className={styles.price}>${parseFloat(cart.estimatedCost.subtotalAmount?.amount).toFixed(2)}</span>
            </div>
            <div className={styles.cartInfo}>
              <span className={styles.taxes}>Taxes</span>
              <span className={styles.price}>${parseFloat(cart.estimatedCost.totalTaxAmount?.amount).toFixed(2)}</span>
            </div>
            <div className={styles.cartInfo}>
              <span className={styles.total}><strong>Total</strong></span>
              <span className={styles.price}><strong>${parseFloat(cart.estimatedCost.totalAmount?.amount).toFixed(2)}</strong></span>
            </div>
          </section>
          <div className={styles.checkoutContainer}>            
            <button bsPrefix='checkoutButton' className={styles.checkoutButton} onClick={onShow}><CardIcon />Checkout</button>
          </div>
        </>
      )
      }
    </div>
  )
}

export default Cart