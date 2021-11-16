import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '@/components/Layout';

interface RepositoryProps {
  account: string;
  repository: string;
}
const Repository = ({ account, repository }: RepositoryProps) => {
  return (
    <div>
      <div>{account}</div>
      <div>{repository}</div>
    </div>
  );
};

Repository.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...context.params,
    },
  };
};

export default Repository;
