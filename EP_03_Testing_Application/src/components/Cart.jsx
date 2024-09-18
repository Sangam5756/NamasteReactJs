import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearItems } from '../utils/redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems())
  }

  
  return (
    <div className='text-center '>
      <h1 className='font-semibold text-lg'>Cart</h1>
      <div className='w-9/12 m-auto'>
        <button onClick={handleClearCart} className='bg-red-300 hover:bg-red-500 text-lg font-semibold rounded-md px-2 py-1'>Clear Cart</button>
      {cartItems?.length === 0 && <p>Cart is Empty Add item to the cart</p>}
        <ItemList items={cartItems} />
      </div>

    </div>
  )
}

export default Cart