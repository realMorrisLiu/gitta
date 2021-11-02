import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center w-24 cursor-pointer">
      <div className="flex hover:animate-wiggle">
        <Image src="/gitta.png" width={32} height={32} alt="gitta logo" />
      </div>

      <i className="ml-2">Gitta!</i>
    </div>
  );
};

export default Logo;
