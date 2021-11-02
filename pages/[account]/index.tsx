import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

const Account = ({ account }: { account: string }) => {
  const router = useRouter();
  return (
    <div>
      <Header />
      {router.query.account}
    </div>
  );
};

export default Account;
