import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const ProductModal = (props) => {
  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={props.onHide}>
        <div
          className='flex min-h-screen text-center md:block md:px-2 lg:px-4'
          style={{ fontSize: 0 }}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden md:inline-block md:align-middle md:h-screen'
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            enterTo='opacity-100 translate-y-0 md:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 md:scale-100'
            leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'>
            <div className='flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl'>
              <div className='w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                <button
                  type='button'
                  className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
                  onClick={props.onHide}>
                  <span className='sr-only'>Close</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                <div className='w-full flex justify-center'>
                  <div className='w-75'>
                    <h1 className='text-3xl font-medium text-gray-900 sm:pr-12 mb-12'>
                      It's in the bag!
                    </h1>

                    <div className='rounded-lg bg-gray-100 overflow-hidden mb-8'>
                    <img
                      src={props.product.images[0].url}
                      alt={props.product.title}
                      className='object-center object-cover'
                    />
                  </div>
                    <h2 className='text-xl font-medium text-gray-900 sm:pr-12'>
                      {props.product.title}
                    </h2>

                    <section
                      aria-labelledby='information-heading'
                      className='mt-1'>
                      <h3 id='information-heading' className='sr-only'>
                        Product information
                      </h3>

                      <p className='font-medium text-gray-900'>
                        ${props.product.price}
                      </p>
                    </section>

                    <section aria-labelledby='options-heading' className='mt-8'>
                      <button
                        className='mt-8 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                        onClick={props.onHide}>
                        Continue Shopping
                      </button>

                      <p className='absolute top-4 left-4 text-center sm:static sm:mt-8'>
                        <Link
                          className='font-medium text-indigo-600 hover:text-indigo-500'
                          onClick={props.onHide}
                          to='/cart'>
                          View Cart & Checkout
                        </Link>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductModal;
