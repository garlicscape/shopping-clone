import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BiSolidPencil } from 'react-icons/bi';
import { login, logout, onUserStateChange } from '../api/firebase';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className='p-3 flex justify-between border-b border-gray-500'>
      <Link to='/' className='flex items-center text-4xl'>
        <FiShoppingBag className='text-red-400' />
        <h2 className='text-red-400  font-bold'>Shopping</h2>
      </Link>
      <nav className='flex items-center gap-4 font-bold text-lg'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-xl'>
          <BiSolidPencil />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
