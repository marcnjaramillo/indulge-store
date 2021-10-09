import { Link } from 'react-router-dom'
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
      <main className='container'>
        <section className={cn(styles.productSection, 'row')}>
          <h1>Bath Bombs</h1>
          {bathBombs.map(bathBomb => {
            return (
              <span className={cn(styles.product, 'col-6')} key={bathBomb.id}>
                <Link to={`/bath-bombs/${bathBomb.handle}`}>
                  {bathBomb.images && (
                    <img
                      className={cn(styles.productImage, 'img-responsive')}
                      alt='bath bomb'
                      src={bathBomb.images[0].url}
                    />
                  )}
                </Link>
                <p>{bathBomb.title}</p>
                {/* <p>${bathBomb.salePrice}</p> */}
                <p>${bathBomb.regularPrice}</p>
              </span>
            )
          }
          )}
        </section>
        <section className={cn(styles.productSection, 'row')}>
          <h1>Bath Salts</h1>
          {bathSalts.map(bathSalt => {
            return (
              <span className={cn(styles.product, 'col-6')} key={bathSalt.id}>
                <Link to={`/bath-salts/${bathSalt.handle}`}>
                  {bathSalt.images && (
                    <img
                      className={cn(styles.productImage, 'img-responsive')}
                      alt='bath salt'
                      src={bathSalt.images[0].url}
                    />
                  )}
                </Link>
                <p>{bathSalt.title}</p>
                {/* <p>${bathSalt.salePrice}</p> */}
                <p>${bathSalt.regularPrice}</p>
              </span>
            )
          }
          )}
        </section>
        <section className={cn(styles.productSection, 'row')}>
          <h1>Candles</h1>
          {candles.map(candle => {
            return (
              <span className={cn(styles.product, 'col-6')} key={candle.id}>
                <Link to={`/candles/${candle.handle}`}>
                  {candle.images && (
                    <img
                      className={cn(styles.productImage, 'img-responsive')}
                      alt='candle'
                      src={candle.images[0].url}
                    />
                  )}
                </Link>
                <p>{candle.title}</p>
                {/* <p>${candle.salePrice}</p> */}
                <p>${candle.regularPrice}</p>
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