import { lazy } from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import RootLayout from '@/app/layout';

const Home = lazy(() => import('@/app/page'));
const Forms = lazy(() => import('@/app/forms/page'));

export default function Routes() {
  return (
    <Switch>
      <Route element={<RootLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Forms />} path="/forms/:id" />
        <Route element={<Navigate replace to="/forms/new" />} path="/forms" />
      </Route>
    </Switch>
  );
}
