import React, { ReactElement } from 'react';

import Layout from '@/components/Layout';

const Explore = () => {
  return <div></div>;
};

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Explore;
