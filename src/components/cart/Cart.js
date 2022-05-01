import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  QuestionMarkCircleIcon
} from '@heroicons/react/solid';

import { useQuery } from '@apollo/client';

import { GET_CART_QUERY } from '../../graphql/queries';

import { LineItem, CheckoutModal } from '../';

import styles from './Cart.module.scss';

const Cart = ({ cart, removeCartLines, updateCartLines }) => {
  const [modalShow, setModalShow] = useState(false);

  const {
    loading: cartLoading,
    error: cartError,
    data: cartData,
  } = useQuery(GET_CART_QUERY, { variables: { cartId: cart.id } });

  if (cartLoading) {
    return <p>Loading...</p>;
  }

  if (cartError) {
    return <p>{cartError.message}</p>;
  }

  console.log(cartData);

  const line_items = cartData.cart.lines.edges.map((line_item) => {
    return (
      <LineItem
        removeCartLines={removeCartLines}
        updateCartLines={updateCartLines}
        key={line_item.node.id}
        line_item={line_item.node}
      />
    );
  });

  const onShow = () => {
    setModalShow(true);
  };

  const onHide = () => {
    setModalShow(false);
    window.location.replace('/');
  };

  return (
    <div>
      <CheckoutModal show={modalShow} onHide={onHide} />
      <main className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Shopping Cart
        </h1>

        <div className='mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16'>
          <section aria-labelledby='cart-heading' className='lg:col-span-7'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>

            {line_items.length === 0 ? (
              <p className={styles.emptyCart}>Your cart is empty.</p>
            ) : (
              <ul className='border-t border-b border-gray-200 divide-y divide-gray-200'>
                {line_items}
              </ul>
            )}
          </section>

          {/* Order summary */}
          <section
            aria-labelledby='summary-heading'
            className='mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5'>
            <h2
              id='summary-heading'
              className='text-lg font-medium text-gray-900'>
              Order summary
            </h2>

            <dl className='mt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm text-gray-600'>Subtotal</dt>
                <dd className='text-sm font-medium text-gray-900'>
                  $
                  {parseFloat(
                    cart.estimatedCost.subtotalAmount?.amount
                  ).toFixed(2)}
                </dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='flex items-center text-sm text-gray-600'>
                  <span>Shipping estimate</span>
                  <Link
                    to='#'
                    className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                  </Link>
                </dt>
                <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='flex text-sm text-gray-600'>
                  <span>Tax estimate</span>
                  <Link
                    to='#'
                    className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                  </Link>
                </dt>
                <dd className='text-sm font-medium text-gray-900'>
                  $
                  {parseFloat(
                    cart.estimatedCost.totalTaxAmount?.amount
                  ).toFixed(2)}
                </dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='text-base font-medium text-gray-900'>
                  Order total
                </dt>
                <dd className='text-base font-medium text-gray-900'>
                  $
                  {parseFloat(cart.estimatedCost.totalAmount?.amount).toFixed(
                    2
                  )}
                </dd>
              </div>
            </dl>

            <div className='mt-6'>
              <button
                type='submit'
                className='w-full border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                onClick={onShow}>
                Checkout
              </button>
            </div>
          </section>
        </div>

        {/* Related products */}
        {/* <section aria-labelledby="related-heading" className="mt-24">
          <h2 id="related-heading" className="text-lg font-medium text-gray-900">
            You may also like&hellip;
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={relatedProduct.imageSrc}
                    alt={relatedProduct.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={relatedProduct.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Cart;
