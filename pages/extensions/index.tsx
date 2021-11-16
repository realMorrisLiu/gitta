import React, { ReactElement } from 'react';

import Layout from '@/components/Layout';

const Extensions = () => {
  return <div></div>;
};

Extensions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Extensions;
