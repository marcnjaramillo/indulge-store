import { ShoppingBagIcon } from '@heroicons/react/outline'
import styles from './CartIcon.module.scss'

const CartIcon = ({ cart }) => {
  return (
    <>
      <ShoppingBagIcon
        className='flex-shrink-0 h-8 w-8 xl:h-10 xl:w-10 text-slate-500'
        aria-hidden='true'
      />
      {cart.lines.edges.length !== 0 ? (
        <>
          <span className='text-sm font-bold text-white align-top rounded-xl px-2 ml-[-4px] absolute bg-gradient-to-b from-indigo-500 to-purple-500'>{cart.lines.edges.length}</span>
          <span className='sr-only'>items in cart, view bag</span>
        </>
      ) : undefined}
    </>
  );
};

export default CartIcon;
