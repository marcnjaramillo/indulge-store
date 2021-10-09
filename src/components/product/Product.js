import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import cn from 'classnames'

import styles from './Product.module.scss'

const Product = ({ addToCart, product: pageProduct }) => {

  let { handle } = useParams()

  const product = pageProduct.find(product => product.handle === `${handle}`)

  const [variant] = useState(product.variants[0])
  const [variantQuantity, setVariantQuantity] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const decrementQuantity = () => {
    const updatedQuantity = variantQuantity - 1
    setVariantQuantity(updatedQuantity)
  }

  const incrementQuantity = () => {
    const updatedQuantity = variantQuantity + 1
    setVariantQuantity(updatedQuantity)
  }

  return (
    <div className='container'>
      <header className={styles.productHeader}>
        <img src={product.images[0].url} alt={`${product.title}`} className={styles.productImage} />
        <h1 className={styles.productHeading}>{handle.replace(/-/g, ' ')}</h1>
        <p className={styles.productPrice}>${variant.price}</p>
      </header>
      <main className={styles.productBody}>
        <div className={styles.addToCart}>
          <div className="input-group">
            <button className="btn btn-outline-secondary" type="button" onClick={() => decrementQuantity()}>-</button>
            <span className={styles.quantity}>{variantQuantity}</span>
            <button className="btn btn-outline-secondary" type="button" onClick={() => incrementQuantity()}>+</button>
          </div>
          <button className={styles.addButton} onClick={() => addToCart(variant.id, variantQuantity)}>Add to Cart</button>
        </div>
        <section className={styles.productDescription}>
          <p>
            <span>Description</span>
            <button className='btn btn-outline-secondary' type="button" data-bs-toggle="collapse" data-bs-target="#collapseDetails" aria-expanded={!isOpen ? true : false} aria-controls="collapseDetails" onClick={toggleOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
          </p>
          <div className={`${isOpen ? 'collapse' : 'collapse show'}`} id="collapseDetails">
            <div>
              {product.description}
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}

export default Product