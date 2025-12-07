import React from 'react'
import AppRoutes from '../routes/AppRoutes';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

function MainLayout() {
  return (
    <div className='w-full '>

      <div className='w-full z-50 px-16 shadow-md bg-[#ffffff]/70 fixed top-0'>
        <Header/>
      </div>

      {/* <div className='px-16 pt-20'> */}
        <AppRoutes/>
      {/* </div> */}

      <div className='w-full px-16'>
        <Footer/>
      </div>

    </div>
  )
}

export default MainLayout
