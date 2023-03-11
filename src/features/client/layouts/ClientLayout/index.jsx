import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../../../store/reducers/userReducer';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import CookieModal from '../../components/CookieModal/CookieModal';

import './index.scss';
import { Box, useMediaQuery } from '@chakra-ui/react';

function Layout() {
  const [smallerScreen] = useMediaQuery('(max-width: 800px)');

  return (
    <div className="Layout">
      <Header />
      <Box
        as="main"
        className="Layout__main"
        padding={smallerScreen ? '120px 0 68px' : '80px 0 68px'}
      >
        <Outlet />
      </Box>
      <Footer />
      <CookieModal />
    </div>
  );
}

export default Layout;
