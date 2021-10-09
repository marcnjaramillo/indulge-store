import { Link, Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import cn from 'classnames'

import { Product } from '../'

import styles from './Products.module.scss'

const Products = ({ products, cart, addToCart }) => {

  let { category } = useParams()
  let { url, path } = useRouteMatch()

  const pageProducts = products.filter(product => product.productType === `${category}`)

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <header>
            <h1 className={styles.categoryHeading}>{category.replace(/-/g, ' ')}</h1>
          </header>
          <main>
            <section className={cn(styles.productSection, 'row')}>
              {pageProducts.map(product => {
                return (
                  <span className={cn(styles.product, 'col-6')} key={product.id}>
                    <Link to={`${url}/${product.handle}`}>
                      {product.images && (
                        <img
                          className={cn(styles.productImage, 'img-responsive')}
                          alt={`${product.title}`}
                          src={product.images[0].url}
                        />
                      )}
                    </Link>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    {/* <p>${product.regularPrice}</p> */}
                  </span>
                )
              }
              )}
            </section>
          </main>
        </Route>
        <Route path={`${path}/:handle`}>
          <Product
            product={pageProducts}
            cart={cart}
            addToCart={addToCart}
          />
        </Route>
      </Switch>
    </>
  )
}

export default Products