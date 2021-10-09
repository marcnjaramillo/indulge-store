import {useState} from 'react'
import styles from './LineItem.module.scss'

function LineItem({ line_item, removeCartLines, updateCartLines }) {

  const [lineQuantity, setLineQuantity] = useState(line_item.quantity)

  const decrementQuantity = (lineId, merchandiseId) => {
    const updatedQuantity = line_item.quantity - 1
    updateCartLines(lineId, merchandiseId, updatedQuantity)
    setLineQuantity(updatedQuantity)
  }

  const incrementQuantity = (lineId, merchandiseId) => {
    const updatedQuantity = line_item.quantity + 1
    updateCartLines(lineId, merchandiseId, updatedQuantity)
    setLineQuantity(updatedQuantity)
  }

  return (
    <li className={styles.cartLine}>
      <div className={styles.imageContainer}>
        <img
          className={styles.productImage}
          alt={`${line_item.title}`}
          src={line_item.merchandise.image.originalSrc}
          height={220}
          width={320}
          quality='85'
        />
      </div>
      <div className={styles.lineDetails}>
        <div className={styles.lineTitle}>
          <span className="Line-item__title">
            {line_item.merchandise.title}
          </span>
        </div>
        <div className={styles.lineRow}>
          <div className="Line-item__quantity-container">
          <div className="input-group">
            <button className="btn btn-outline-secondary" type="button" onClick={() => decrementQuantity(line_item.id, line_item.merchandise.id)}>-</button>
            <span className={styles.quantity}>{lineQuantity}</span>
            <button className="btn btn-outline-secondary" type="button" onClick={() => incrementQuantity(line_item.id, line_item.merchandise.id)}>+</button>
          </div>
          </div>
          <span className="Line-item__price">
            ${(line_item.quantity * line_item.merchandise.price.amount).toFixed(2)}
          </span>
          <button className="Line-item__remove" onClick={() => removeCartLines(line_item.id)}>×</button>
        </div>
      </div>
    </li>
  )
}

export default LineItem