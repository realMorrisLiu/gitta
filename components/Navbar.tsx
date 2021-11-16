import React, { useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Avatar from './Avatar';

const navs = [
  { href: '/activity', name: 'Activity' },
  { href: '/explore', name: 'Explore' },
  { href: '/extensions', name: 'Extensions' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-8 py-4 font-serif bg-gray-800 text-white">
      <div className="flex items-center">
        <Logo />

        <input
          type="text"
          placeholder="Search"
          className="mx-4 w-64 px-2 py-1 rounded font-sans text-sm bg-gray-700 focus:bg-gray-200 focus:text-black"
        />

        <div className="font-sans">
          {navs.map(({ href, name }) => (
            <button
              key={href}
              className={classNames(
                'px-2 py-1 text-sm font-semibold',
                router.pathname === href
                  ? 'text-white'
                  : 'text-gray-400 opacity-80'
              )}
            >
              <Link href={href}>{name}</Link>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <Avatar
          name="Morris Liu"
          username="realMorrisLiu"
          avatar="/avatar.jpeg"
        />
      </div>
    </header>
  );
};

export default Navbar;
