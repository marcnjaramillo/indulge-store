import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import cn from 'classnames'

import styles from './Homepage.module.scss'

const Homepage = ({ products }) => {

  const bathBombs = products.filter(product => product.productType === 'bath-bombs')
  const bathSalts = products.filter(product => product.productType === 'bath-salts')
  const candles = products.filter(product => product.productType === 'candles')

  return (
    <>
      <header className={styles.heroWrapper}>
        <div className={styles.homepageHero}>
          <div className={styles.darkOverlay}>
            <div className={styles.overlayText}>
              <h1 className={styles.heading1}>Indulge...</h1>
              <h2 className={styles.heading2}>in Me Time</h2>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1 className={styles.allProducts}>All Products</h1>
        <section className={cn(styles.productSection, 'row')}>
          <h2 className={styles.sectionHeader}>Bath Bombs</h2>
          {bathBombs.map(bathBomb => {
            return (
              <span className={cn(styles.product, 'col-6 col-lg-4')} key={bathBomb.id}>
                <Link to={`/bath-bombs/${bathBomb.handle}`}>
                  {bathBomb.images && (
                    <Image
                      className={styles.productImage}
                      alt='bath bomb'
                      src={bathBomb.images[0].url}
                    />
                  )}
                </Link>
                <div className={styles.productDetails}>
                  <p className={styles.productText}>{bathBomb.title}</p>
                  <p className={styles.productText}>${bathBomb.price}</p>
                  {/* <p className={styles.productText}>${bathBomb.salePrice}</p> */}
                </div>  
              </span>
            )
          }
          )}
        </section>
        <section className={cn(styles.productSection, 'row')}>
          <h2 className={styles.sectionHeader}>Bath Salts</h2>
          {bathSalts.map(bathSalt => {
            return (
              <span className={cn(styles.product, 'col-6 col-lg-4')} key={bathSalt.id}>
                <Link to={`/bath-salts/${bathSalt.handle}`}>
                  {bathSalt.images && (
                    <Image
                      className={styles.productImage}
                      alt='bath salt'
                      src={bathSalt.images[0].url}
                    />
                  )}
                </Link>
                <div className={styles.productDetails}>
                  <p className={styles.productText}>{bathSalt.title}</p>
                  <p className={styles.productText}>${bathSalt.price}</p>
                  {/* <p className={styles.productText}>${bathSalt.salePrice}</p> */}
                </div>
              </span>
            )
          }
          )}
        </section>
        <section className={cn(styles.productSection, 'row')}>
          <h2 className={styles.sectionHeader}>Candles</h2>
          {candles.map(candle => {
            return (
              <span className={cn(styles.product, 'col-6 col-lg-4')} key={candle.id}>
                <Link to={`/candles/${candle.handle}`}>
                  {candle.images && (
                    <Image
                      className={styles.productImage}
                      alt='candle'
                      src={candle.images[0].url}
                    />
                  )}
                </Link>
                <div className={styles.productDetails}>
                  <p className={styles.productText}>{candle.title}</p>
                  <p className={styles.productText}>${candle.price}</p>
                  {/* <p className={styles.productText}>${candle.salePrice}</p> */}
                </div>
              </span>
            )
          }
          )}
        </section>
      </main>
    </>
  )
}

export default Homepage