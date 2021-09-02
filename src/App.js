import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { GET_ALL_PRODUCTS_QUERY } from './graphql/queries'
import { normalizeProduct } from './graphql/shopify/utils'
import { Homepage, Navigation, Products } from './components'
import './App.scss';

const App = () => {

  const { loading: shopLoading, error: shopError, data: shopData } = useQuery(GET_ALL_PRODUCTS_QUERY)

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
          <Navigation />
        </header>
        <Switch>
          <Route exact path='/'>
            <Homepage products={products} />
          </Route>
          <Route path='/:category' children={<Products products={products} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
