import {useState} from 'react'
import { Button, Image } from 'react-bootstrap'

import { TrashIcon } from '../icons'

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
    <>
      <li className={styles.cartLine}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.productImage}
            alt={`${line_item.title}`}
            src={line_item.merchandise.image.originalSrc}
          />
        </div>
        <div className={styles.lineDetails}>
          <div className={styles.lineTitle}>
            <span>
              {line_item.merchandise.title}
            </span>
          </div>
          <div className={styles.linePrice}>
            <span>
              ${(line_item.quantity * line_item.merchandise.price.amount).toFixed(2)}
            </span>
          </div>
          <div className={styles.lineQuantity}>
            <div className='input-group'>
              <Button variant='outline-secondary' type='button' onClick={() => decrementQuantity(line_item.id, line_item.merchandise.id)}>-</Button>
              <span className={styles.quantity}>{lineQuantity}</span>
              <Button variant='outline-secondary' type='button' onClick={() => incrementQuantity(line_item.id, line_item.merchandise.id)}>+</Button>
            </div>
          </div>
        </div>
        <div>
          <Button bsPrefix='removeButton' className={styles.removeButton} onClick={() => removeCartLines(line_item.id)}><TrashIcon/> Remove</Button>
        </div>
      </li>
    </>
  )
}

export default LineItem