import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

function PageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default PageLayout;
