// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import {Accordion, Button, Image} from 'react-bootstrap'
// // import cn from 'classnames'

// import { ProductModal } from '../'

// import styles from './Product.module.scss'

// const Product = ({ addToCart, show, onHide, product: pageProduct }) => {

//   let { handle } = useParams()

//   const product = pageProduct.find(product => product.handle === `${handle}`)

//   const [variant] = useState(product.variants[0])
//   const [variantQuantity, setVariantQuantity] = useState(1)

//   const decrementQuantity = () => {
//     const updatedQuantity = variantQuantity - 1
//     setVariantQuantity(updatedQuantity)
//   }

//   const incrementQuantity = () => {
//     const updatedQuantity = variantQuantity + 1
//     setVariantQuantity(updatedQuantity)
//   }

//   return (
//     <div className={styles.productLayout}>
//       <ProductModal show={show} onHide={onHide} product={product} />
//       <header className={styles.productHeader}>
//         <Image src={product.images[0].url} alt={`${product.title}`} className={styles.productImage} />
//       </header>
//       <main className={styles.productHeadingContainer}>
//         <h1 className={styles.productHeading}>{handle.replace(/-/g, ' ')}</h1>
//         <p className={styles.productPrice}>${variant.price}</p>
//       </main>
//       <section className={styles.addToCart}>
//         <div className="input-group">
//           {variantQuantity > 1 ? (
//             <Button bsPrefix='button' className={styles.button} variant='outline-secondary' type='button' onClick={() => decrementQuantity()}>-</Button>
//           ) : (
//             <Button bsPrefix='button' className={styles.button} variant='outline-secondary' type='button' disabled>-</Button>
//           )}
//           <span className={styles.quantity}>{variantQuantity}</span>
//           <Button bsPrefix='button' className={styles.button} variant='outline-secondary' type='button' onClick={() => incrementQuantity()}>+</Button>
//         </div>
//         <Button bsPrefix='addButton' className={styles.addButton} onClick={() => addToCart(variant.id, variantQuantity)}>Add to Cart</Button>
//       </section>
//       <section className={styles.productDescription}>
//         <Accordion>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>Description</Accordion.Header>
//             <Accordion.Body className={styles.descriptionBody}>
//               {product.description}
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </section>
//     </div>

//   )
// }

// export default Product