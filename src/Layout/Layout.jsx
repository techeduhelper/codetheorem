import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Layout = ({ visible, isLargeScreen, handleClose, handleOpen }) => {
  return (
    <div className='flex flex-row  w-full min-h-[100vh]'>
      <div className='fixed md:static lg:z-10 z-30'>
        {isLargeScreen || visible ? (
          <Sidebar handleClose={handleClose} />
        ) : null}
      </div>
      <div className='w-full min-h-[100vh] overflow-y-auto scroll-smooth z-10 relative'>
        <div
          className='md:hidden cursor-pointer z-10 fixed top-1 left-1'
          onClick={handleOpen}
        >
          <svg
            width='25'
            height='25'
            viewBox='0 0 19 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.74996 32.3333C0.305515 31.8611 0.0832928 31.3122 0.0832928 30.6867C0.0832928 30.0622 0.305515 29.5139 0.74996 29.0417L12.7916 17L0.708293 4.91668C0.263848 4.47223 0.041626 3.93057 0.041626 3.29168C0.041626 2.65279 0.277737 2.09723 0.74996 1.62501C1.1944 1.18057 1.73607 0.958344 2.37496 0.958344C3.01385 0.958344 3.5694 1.18057 4.04163 1.62501L18.0416 15.6667C18.2361 15.8611 18.375 16.0695 18.4583 16.2917C18.5416 16.5139 18.5833 16.75 18.5833 17C18.5833 17.25 18.5416 17.4861 18.4583 17.7083C18.375 17.9306 18.2361 18.1389 18.0416 18.3333L3.99996 32.375C3.55551 32.8195 3.02051 33.0417 2.39496 33.0417C1.77051 33.0417 1.22218 32.8056 0.74996 32.3333Z'
              fill='#AAAAAA'
            />
          </svg>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
