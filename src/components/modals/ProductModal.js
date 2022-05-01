// import {Link} from 'react-router-dom'
// import {Modal, Button, Image} from 'react-bootstrap'
// import cn from 'classnames'

// import styles from './ProductModal.module.scss'

// const ProductModal = (props) => {

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton bsPrefix='modalHeader' className={styles.modalHeader} />
//       <Modal.Body>
//         <h2 className={styles.h2}>Added to your cart!</h2>
//         <section className={styles.modalBody}>
//           <Image src={props.product.images[0].url} className={styles.modalImage} />
//           <h4>{props.product.title}</h4>
//         </section>
//       </Modal.Body>
//       <Modal.Footer bsPrefix='modalFooter' className={styles.modalFooter}>
//         <Link onClick={props.onHide} className={cn(styles.viewCart)} to='/cart'>View Cart & Checkout</Link>
//         <Button bsPrefix='continueShopping' className={styles.continueShopping} onClick={props.onHide}>Continue Shopping</Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export default ProductModal