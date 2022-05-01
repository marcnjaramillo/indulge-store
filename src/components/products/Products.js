import { Link, Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import cn from 'classnames'

import { Product } from '../'

import styles from './Products.module.scss'

const Products = ({ products, cart, addToCart, show, onHide }) => {

  let { category } = useParams()
  let { url, path } = useRouteMatch()

  const pageProducts = products.filter(product => product.productType === `${category}`)

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <header className={styles.pageHeading}>
            <h1 className={styles.categoryHeading}>{category.replace(/-/g, ' ')}</h1>
          </header>
          <main>
            <section className={cn(styles.productSection, 'row')}>
              {pageProducts.map(product => {
                return (
                  <span className={cn(styles.product, 'col-6 col-lg-4')} key={product.id}>
                    <Link to={`${url}/${product.handle}`}>
                      {product.images && (
                        <image
                          className={styles.productImage}
                          alt={`${product.title}`}
                          src={product.images[0].url}
                        />
                      )}
                    </Link>
                    <div className={styles.productDetails}>
                      <p className={styles.productText}>{product.title}</p>
                      <p className={styles.productText}>${product.price}</p>
                      {/* <p className={styles.productText}>${product.regularPrice}</p> */}
                    </div>
                  </span>
                )
              }
              )}
            </section>
          </main>
        </Route>
        {/* <Route path={`${path}/:handle`}>
          <Product
            product={pageProducts}
            cart={cart}
            addToCart={addToCart}
            show={show}
            onHide={onHide}
          />
        </Route> */}
      </Switch>
    </>
  )
}

export default Products