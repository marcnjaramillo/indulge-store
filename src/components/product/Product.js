import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
// import { StarIcon } from '@heroicons/react/solid'
import { useParams } from 'react-router-dom';

import { ProductModal } from '../';

import styles from './Product.module.scss';

const Product = ({ addToCart, show, onHide, product: pageProduct }) => {
  let { handle } = useParams();

  const product = pageProduct.find((product) => product.handle === `${handle}`);

  const [variant] = useState(product.variants[0]);
  const [variantQuantity, setVariantQuantity] = useState(1);

  const decrementQuantity = () => {
    const updatedQuantity = variantQuantity - 1;
    setVariantQuantity(updatedQuantity);
  };

  const incrementQuantity = () => {
    const updatedQuantity = variantQuantity + 1;
    setVariantQuantity(updatedQuantity);
  };

  return (
    <div>
      {/* <ProductModal show={show} onHide={onHide} product={product} /> */}
      <main className='max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto lg:max-w-none'>
          {/* Product */}
          <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
            <img
              src={product.images[0].url}
              alt={`${product.title}`}
              className='w-full h-full object-center object-cover rounded-md'
            />

            {/* Product info */}
            <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
              <h1 className='text-3xl font-extrabold capitalize tracking-tight text-gray-900'>
                {handle.replace(/-/g, ' ')}
              </h1>

              <div className='mt-3'>
                <h2 className='sr-only'>Product information</h2>
                <p className='text-3xl text-gray-900'>${variant.price}</p>
              </div>

              {/* Reviews */}
              {/* <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div> */}

              <div className='mt-6'>
                <h3 className='sr-only'>Description</h3>

                <div className='text-base text-gray-700 space-y-6'>
                  <p>{product.description}</p>
                </div>
              </div>

              <section className='mt-6 max-w-xs'>
                {/* Colors */}
                {/* <div>
                  <h3 className="text-sm text-gray-600">Color</h3>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}
                <div className='mt-1 flex rounded-md shadow-sm'>
                  {variantQuantity > 1 ? (
                    <button
                      type='button'
                      className='relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-500 text-sm font-medium rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                      onClick={() => decrementQuantity()}>
                      <MinusIcon
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-500 text-sm font-medium rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                      disabled>
                      <MinusIcon
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  )}
                  <div className='-ml-px relative flex items-stretch flex-grow focus-within:z-10'>
                    <span className='inline-flex items-center content-center focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-indigo-500'>
                      {variantQuantity}
                    </span>
                  </div>
                  <button
                    type='button'
                    className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-500 text-sm font-medium rounded-r-md text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                    onClick={() => incrementQuantity()}>
                    <PlusIcon
                      className='h-5 w-5 text-white'
                      aria-hidden='true'
                    />
                  </button>
                </div>

                <div className='mt-10 flex sm:flex-col1'>
                  <button
                    className='max-w-xs flex-1 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                    onClick={() => addToCart(variant.id, variantQuantity)}>
                    Add to Bag
                  </button>

                  {/* <button
                    type="button"
                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Add to favorites</span>
                  </button> */}
                </div>
              </section>

              {/* <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open ? 'text-indigo-600' : 'text-gray-900',
                                  'text-sm font-medium'
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section> */}
            </div>
          </div>

          {/* <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">{product.price}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add to bag<span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
};

export default Product;
