import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  return (
    <div className='relative'>
      <BsFillCartPlusFill className='text-4xl' />
      {products && (
        <p className='w-6 h-6 text-center leading-6 align-top rounded-full bg-brand text-white font-bold absolute -top-2 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
