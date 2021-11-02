import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Activity = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen relative flex">
        <aside className="w-96 ml-4 pl-4 pr-8 py-8 h-screen border-r sticky top-0 overflow-y-auto">
          <div>
            <h1 className="text-sm font-bold">Repositories</h1>
          </div>

          <div className="w-full border-b my-4"></div>

          <div>
            <h1 className="text-sm font-bold">Contributions</h1>
          </div>
        </aside>
        <section className="bg-gray-100 flex-1 relative">
          <section className="p-6"></section>
          <aside className="sticky top-0"></aside>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Activity;
