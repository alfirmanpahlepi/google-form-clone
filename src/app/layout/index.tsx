import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function RootLayout() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-neutral-100">
      <Header />
      <div className="h-full w-full overflow-y-auto overflow-x-hidden">
        <main className="h-[300vh]">
          <Suspense fallback="...">
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
