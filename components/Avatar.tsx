import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

interface Props {
  name: string;
  username: string;
  avatar: string;
  size?: number;
}
const Avatar = ({ name, username, avatar, size }: Props) => {
  return (
    <div className="flex cursor-pointer">
      <Link href={`/${username}`} passHref>
        <Image
          className="rounded"
          src={avatar}
          alt={`${name}'s avatar'`}
          width={size ?? 24}
          height={size ?? 24}
        />
      </Link>
    </div>
  );
};

export default Avatar;
