import React from 'react';

import { Outlet } from 'react-router-dom';

import './index.css';
import SidebarWithHeader from '../../components/SidebarWithHeader';

function Layout() {
  return (
    <SidebarWithHeader>
      <Outlet />
    </SidebarWithHeader>
  );
}

export default Layout;
