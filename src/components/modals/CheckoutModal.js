import {Link} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

import styles from './CheckoutModal.module.scss'

const CheckoutModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton bsPrefix='modalHeader' className={styles.modalHeader} />
      <Modal.Body>
        <h2 className={styles.h2}>Thanks for stopping by!</h2>
        <section className={styles.modalBody}>
          <p>This is only a demo.</p>
        </section>
      </Modal.Body>
      <Modal.Footer bsPrefix='modalFooter' className={styles.modalFooter}>
        {/* <Link onClick={props.onHide} className={styles.viewCart} to='/cart'>View Cart & Checkout</Link> */}
        <Button bsPrefix='closeDemo' className={styles.closeDemo} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CheckoutModal