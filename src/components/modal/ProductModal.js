import {Link} from 'react-router-dom'
import {Modal, Button, Image} from 'react-bootstrap'
import cn from 'classnames'

import styles from './ProductModal.module.scss'

const ProductModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={styles.modalHeader} />
      <Modal.Body>
      <h2>Added to your cart!</h2>
        <section className={styles.modalBody}>
          <Image src={props.product.images[0].url} className={styles.modalImage} />
          <p>{props.product.title}</p>
        </section>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Link onClick={props.onHide} className={cn('btn', styles.viewCart)} to='/cart'>View Cart & Checkout</Link>
        <Button className={styles.continueShopping} onClick={props.onHide}>Continue Shopping</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductModal