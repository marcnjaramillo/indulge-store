import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/outline';

const LineItem = ({ line_item, removeCartLines, updateCartLines }) => {
  const [lineQuantity, setLineQuantity] = useState(line_item.quantity);

  const decrementQuantity = (lineId, merchandiseId) => {
    const updatedQuantity = line_item.quantity - 1;
    updateCartLines(lineId, merchandiseId, updatedQuantity);
    setLineQuantity(updatedQuantity);
  };

  const incrementQuantity = (lineId, merchandiseId) => {
    const updatedQuantity = line_item.quantity + 1;
    updateCartLines(lineId, merchandiseId, updatedQuantity);
    setLineQuantity(updatedQuantity);
  };

  return (
    <>
      <li key={line_item.id} className='flex py-6 sm:py-10'>
        <div className='w-1/2 flex-shrink-0'>
          <img
            className='w-full h-full rounded-md object-center object-cover'
            src={line_item.merchandise.image.originalSrc}
            alt={`${line_item.title}`}
          />
        </div>

        <div className='ml-4 flex-1 flex flex-col justify-between sm:ml-6'>
          <div className='relative pr-9 sm:gap-x-6 sm:pr-0'>
            <div>
              <div className='flex justify-between'>
                <h3 className='text-sm'>
                  <Link
                    to={`${line_item.merchandise.product.productType}/${line_item.merchandise.product.handle}`}
                    className='font-medium text-gray-700 hover:text-gray-800'>
                    {line_item.merchandise.title}
                  </Link>
                </h3>
              </div>

              <p className='my-8 text-sm font-medium text-gray-900'>
                ${line_item.merchandise.price.amount}
              </p>
            </div>

            <div className='mt-4 sm:mt-0 sm:pr-9'>
              <label htmlFor={`quantity-${line_item.id}`} className='sr-only'>
                Quantity, {line_item.title}
              </label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                {lineQuantity > 1 ? (
                  <button
                    type='button'
                    className='relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-500 text-sm font-medium rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                    onClick={() =>
                      decrementQuantity(line_item.id, line_item.merchandise.id)
                    }>
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
                  <span className='inline-flex items-center justify-center focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border-indigo-500'>
                    {lineQuantity}
                  </span>
                </div>
                <button
                  type='button'
                  className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-500 text-sm font-medium rounded-r-md text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'
                  onClick={() =>
                    incrementQuantity(line_item.id, line_item.merchandise.id)
                  }>
                  <PlusIcon className='h-5 w-5 text-white' aria-hidden='true' />
                </button>
              </div>

              <div className='absolute top-0 right-0'>
                <button
                  type='button'
                  className='-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500'
                  onClick={() => removeCartLines(line_item.id)}>
                  <span className='sr-only'>Remove</span>
                  <TrashIcon className='h-5 w-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>

          {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                      {product.inStock ? (
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      ) : (
                        <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                      )}

                      <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                    </p> */}
        </div>
      </li>
    </>
  );
};

export default LineItem;
