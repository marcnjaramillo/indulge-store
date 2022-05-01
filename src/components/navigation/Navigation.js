import { Fragment, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

import { CartIcon } from '../icons';
import bathBomb from '../../assets/images/bath-bomb-category.jpeg';
import bathSalt from '../../assets/images/bath-salt-category.jpeg';
import candle from '../../assets/images/candle-category.jpeg';
import logo from '../../assets/images/brand-transparent.png';

const navigation = {
  categories: [
    {
      featured: [
        {
          name: 'Bath Bombs',
          to: '/bath-bombs',
          imageSrc: bathBomb,
          imageAlt: 'Bath bomb',
        },
        {
          name: 'Candles',
          to: '/candles',
          imageSrc: candle,
          imageAlt: 'Candle',
        },
        {
          name: 'Bath Salts',
          to: '/bath-salts',
          imageSrc: bathSalt,
          imageAlt: 'Bath salt',
        },
      ],
    },
  ],
  pages: [
    { name: 'Bath Bombs', to: '/bath-bombs' },
    { name: 'Candles', to: '/candles' },
    { name: 'Bath Salts', to: '/bath-salts' },
  ],
};

const Navigation = ({ cart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'>
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <NavLink
                      to={page.to}
                      className='-m-2 p-2 block font-medium text-gray-900'>
                      {page.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <div className='relative bg-gray-900'>
        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Secondary navigation */}
            <div className='bg-neutral-100 py-2'>
              <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div>
                  <div className='h-16 flex items-center justify-between'>
                    {/* Logo (lg+) */}
                    <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                      <NavLink to='/'>
                        <span className='sr-only'>Indulge</span>
                        <img
                          src={logo}
                          alt='brand logo'
                          className='h-[72px] w-auto'
                        />
                      </NavLink>
                    </div>

                    <div className='hidden h-full lg:flex'>
                      {/* Flyout menus */}
                      <Popover.Group className='px-4 bottom-0 inset-x-0'>
                        <div className='h-full flex justify-center space-x-8'>
                          {navigation.pages.map((page) => (
                            <NavLink
                              key={page.name}
                              to={page.to}
                              className='flex items-center text-md font-medium text-zinc-600'>
                              {page.name}
                            </NavLink>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className='flex-1 flex items-center lg:hidden'>
                      <button
                        type='button'
                        className='-ml-2 p-2 text-slate-500'
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <NavLink to='/' className='lg:hidden'>
                      <span className='sr-only'>Indulge</span>
                      <img
                        src={logo}
                        alt='brand logo'
                        className='h-[72px] w-auto'
                      />
                    </NavLink>

                    <div className='flex-1 flex items-center justify-end'>
                      <div className='flex items-center lg:ml-8'>
                        <div className='ml-4 flow-root lg:ml-8'>
                          <NavLink
                            to='/cart'
                            className='group -m-2 p-2 flex items-center'>
                            <CartIcon cart={cart} />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
