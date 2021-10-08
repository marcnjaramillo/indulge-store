import React from 'react'

function LineItem({ line_item, removeCartLines, updateCartLines }) {

  const decrementQuantity = (lineId, merchandiseId) => {
    const updatedQuantity = line_item.quantity - 1
    updateCartLines(lineId, merchandiseId, updatedQuantity)
  }

  const incrementQuantity = (lineId, merchandiseId) => {
    const updatedQuantity = line_item.quantity + 1
    updateCartLines(lineId, merchandiseId, updatedQuantity)
  }

  return (
    <li className="Line-item">
      <div className="Line-item__img">
        <img
          // className={s.productImage}
          alt={`${line_item.title}`}
          src={line_item.merchandise.image.originalSrc}
          height={220}
          width={320}
          quality='85'
        />
      </div>
      <div className="Line-item__content">
        <div className="Line-item__content-row">
          <span className="Line-item__title">
            {line_item.merchandise.title}
          </span>
        </div>
        <div className="Line-item__content-row">
          <div className="Line-item__quantity-container">
            <button className="Line-item__quantity-update" onClick={() => decrementQuantity(line_item.id, line_item.merchandise.id)}>-</button>
            <span className="Line-item__quantity">{line_item.quantity}</span>
            <button className="Line-item__quantity-update" onClick={() => incrementQuantity(line_item.id, line_item.merchandise.id)}>+</button>
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