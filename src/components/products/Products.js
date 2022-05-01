import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import { Product } from '../';

const Products = ({ products, cart, addToCart, show, onHide }) => {
  let { category } = useParams();
  let { url, path } = useRouteMatch();

  const pageProducts = products.filter(
    (product) => product.productType === `${category}`
  );

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <main className='py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8'>
            <section className='px-4 flex items-center justify-between sm:px-6 lg:px-0'>
              <h2 className='text-2xl font-extrabold capitalize tracking-tight text-gray-900'>
                {category.replace(/-/g, ' ')}
              </h2>
            </section>
            <section
              aria-labelledby='product-heading'
              className='mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3'>
              <div className='mt-8 relative'>
                <div className='relative w-full pb-6 -mb-6 overflow-x-auto'>
                  <ul
                    className='mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8'>
                    {pageProducts.map((product) => (
                      <li
                        key={product.id}
                        className='w-64 inline-flex flex-col text-center lg:w-auto lg:mb-4'>
                        <div className='group relative'>
                          <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                            {product.images && (
                              <img
                                src={product.images[0].url}
                                alt={`${product.title}`}
                                className='w-full h-full object-center object-cover group-hover:opacity-75'
                              />
                            )}
                          </div>
                          <div className='mt-6'>
                            {/* <p className='text-sm text-gray-500'>
                              {product.color}
                            </p> */}
                            <h3 className='mt-1 font-semibold text-gray-900'>
                              <Link to={`${url}/${product.handle}`}>
                                <span
                                  aria-hidden='true'
                                  className='absolute inset-0'
                                />
                                {product.title}
                              </Link>
                            </h3>
                            <p className='mt-1 text-gray-900'>
                              ${product.price}
                            </p>
                          </div>
                        </div>

                        {/* <h4 className="sr-only">Available colors</h4>
                  <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="w-4 h-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </Route>
        <Route path={`${path}/:handle`}>
          <Product
            product={pageProducts}
            cart={cart}
            addToCart={addToCart}
            show={show}
            onHide={onHide}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Products;
