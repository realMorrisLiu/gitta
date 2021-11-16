import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="group flex items-center w-24 cursor-pointer select-none">
        <div className="flex group-hover:animate-wiggle">
          <Image src="/gitta.png" width={32} height={32} alt="gitta logo" />
        </div>
        <i className="ml-2">Gitta!</i>
      </div>
    </Link>
  );
};

export default Logo;
