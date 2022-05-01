import { NavLink, Link } from 'react-router-dom';

import bathBomb from '../../assets/images/bath-bomb-category.jpeg';
import bathSalt from '../../assets/images/bath-salt-category.jpeg';
import candle from '../../assets/images/candle-category.jpeg';
import hero from '../../assets/images/homepage-hero.jpeg';

const categories = [
  {
    name: 'Bath Bombs',
    href: '/bath-bombs',
    imageSrc: bathBomb,
  },
  {
    name: 'Candles',
    href: '/candles',
    imageSrc: candle,
  },
  {
    name: 'Bath Salts',
    href: '/bath-salts',
    imageSrc: bathSalt,
  },
];

const Homepage = () => {
  // const bathBombs = products.filter(
  //   (product) => product.productType === 'bath-bombs'
  // );
  // const bathSalts = products.filter(
  //   (product) => product.productType === 'bath-salts'
  // );
  // const candles = products.filter(
  //   (product) => product.productType === 'candles'
  // );

  return (
    <>
      <main>
        {/* Decorative image and overlay */}
        <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
          <img
            src={hero}
            alt='hero image of spa products'
            className='w-full h-full object-center object-cover'
          />
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gray-900 opacity-50'
        />
                <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-48 lg:px-0'>
          <h1 className='text-4xl font-display tracking-tight text-white lg:text-6xl'>
            Indulge in...
          </h1>
          <h3 className='text-4xl font-display tracking-tight text-white lg:text-6xl'>
            Me Time
          </h3>
          <p className='mt-4 text-xl font-sans text-white'>
            Everyone needs time to unwind. Find what you need to turn your "me"
            time into a luxury spa experience - without having to leave your
            home.
          </p>
          <NavLink
            to='/'
            className='mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-xl font-bold font-sans text-white bg-gradient-to-b from-indigo-500 to-purple-500 hover:from-sky-600 hover:to-cyan-400'>
            Go Ahead - Indulge
          </NavLink>
        </div>
        {/* Category section */}
        <section
          aria-labelledby='category-heading'
          className='pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8'>
          <div className='px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0'>
            <h2
              id='category-heading'
              className='text-2xl font-extrabold font-sans tracking-tight text-gray-900'>
              Shop by Category
            </h2>
            {/* <NavLink
              href='#'
              className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'>
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </NavLink> */}
          </div>

          <div className='mt-4 flow-root'>
            <div className='-my-2'>
              <div className='box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible'>
                <div className='absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8'>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className='relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto'>
                      <span aria-hidden='true' className='absolute inset-0'>
                        <img
                          src={category.imageSrc}
                          alt='category image'
                          className='w-full h-full object-center object-cover'
                        />
                      </span>
                      <span
                        aria-hidden='true'
                        className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50'
                      />
                      <span className='relative mt-auto text-center text-xl font-bold text-white'>
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className='mt-6 px-4 sm:hidden'>
            <a
              href='#'
              className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'>
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </a>
          </div> */}
        </section>
      </main>
    </>
  );
};

export default Homepage;
