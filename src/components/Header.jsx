import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BiSolidPencil } from 'react-icons/bi';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='p-3 flex justify-between border-b border-gray-500'>
      <Link to='/' className='flex items-center text-4xl'>
        <FiShoppingBag className='text-red-400' />
        <h2 className='text-red-400  font-bold'>Shopping</h2>
      </Link>
      <nav className='flex items-center gap-4 font-bold text-lg'>
        <Link to='/products'>Products</Link>
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-xl'>
            <BiSolidPencil />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login}></Button>}
        {user && <Button text={'Logout'} onClick={logout}></Button>}
      </nav>
    </header>
  );
}
