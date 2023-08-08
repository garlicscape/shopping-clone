import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 relative'>
      <div className='w-full h-full bg-cover bg-banner'></div>
      <div className='absolute top-32 text-center w-full text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl'>Shop with us</h2>
        <p className='text-2xl'>Best Product, High quality</p>
      </div>
    </section>
  );
}
