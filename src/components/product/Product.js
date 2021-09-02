import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import cn from 'classnames'

import styles from './Product.module.scss'

const Product = ({ product: pageProduct }) => {

  let { handle } = useParams()

  const product = pageProduct.find(product => product.handle === `${handle}`)

  const [variant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);



  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  return (
    <div className='container'>
      <header>
        <img src={product.images[0].url} alt={`${product.title}`} className={styles.productImage} />
        <h1 className={styles.productHeading}>{handle.replace(/-/g, ' ')}</h1>
      </header>
      <main>
        <section>{product.description}</section>
        <p>${variant.regularPrice}</p>
        <label>
          Quantity
          <input min='1' type='number' defaultValue={quantity} onChange={handleQuantityChange}></input>
        </label>
      </main>
    </div>

  )
}

export default Product