import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

import { GET_ALL_PRODUCTS_QUERY } from './graphql/queries'
import { normalizeProduct } from './graphql/shopify/utils'
import {
  cartLinesAdd,
  cartLinesRemove,
  cartLinesUpdate,
  createCart,
  useCartEffect
} from './graphql/mutations';
import { Homepage, Navigation, Products, Cart } from './components'
import './App.scss'

const App = () => {
  const [cart, setCart] = useState({ lines: { edges: [] } })

  const [createCartMutation,
    { data: createCartData }] = useMutation(createCart);

  const [cartLinesAddMutation,
    { data: cartLinesAddData }] = useMutation(cartLinesAdd);

  const [cartLinesUpdateMutation,
    { data: cartLinesUpdateData }] = useMutation(cartLinesUpdate)

  const [cartLinesRemoveMutation,
    { data: cartLinesRemoveData }] = useMutation(cartLinesRemove)

  const {
    loading: shopLoading, error: shopError, data: shopData
  } = useQuery(GET_ALL_PRODUCTS_QUERY)

  useEffect(() => {
    const variables = { input: {} }
    createCartMutation({ variables }).then(
      res => {
        console.log(res)
      },
      err => {
        console.log('create cart error', err)
      }
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(cart.lines.edges.length)

  useCartEffect(createCartData, 'cartCreate', setCart)
  useCartEffect(cartLinesAddData, 'cartLinesAdd', setCart)
  useCartEffect(cartLinesUpdateData, 'cartLinesUpdate', setCart)
  useCartEffect(cartLinesRemoveData, 'cartLinesRemove', setCart)

  const addToCart = (merchandiseId, quantity) => {
    const variables = { cartId: cart.id, lines: [{ merchandiseId, quantity: parseInt(quantity, 10) }] }

    cartLinesAddMutation({ variables })
  }

  const updateCartLines = (lineId, merchandiseId, quantity) => {
    const variables = { cartId: cart.id, lines: [{ id: lineId, merchandiseId, quantity: parseInt(quantity, 10) }] }
    cartLinesUpdateMutation({ variables })
  };

  const removeCartLines = (lineId) => {
    const variables = { cartId: cart.id, lineIds: [lineId] }
    cartLinesRemoveMutation({ variables })
  }

  if (shopLoading) {
    return <p>Loading...</p>
  }

  if (shopError) {
    return <p>{shopError.message}</p>
  }

  const products = shopData.products.edges.map(({ node: product }) =>
    normalizeProduct(product)
  ) ?? []

  return (
    <div>
      <Router>
        <header>
          <Navigation cart={cart} />
        </header>
        <Switch>
          <Route exact path='/'>
            <Homepage products={products} />
          </Route>
          <Route exact path='/cart'>
            <Cart
              cart={cart}
              updateCartLines={updateCartLines}
              removeCartLines={removeCartLines}
            />
          </Route>
          <Route path='/:category'
            children={
              <Products
                products={products}
                cart={cart}
                addToCart={addToCart}
              />
            }
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
