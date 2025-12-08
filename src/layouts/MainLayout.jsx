import React from 'react'
import AppRoutes from '../routes/AppRoutes';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

function MainLayout() {
  return (
    <div className='w-full '>

      <div className='w-full z-50 lg:px-10 md:px-2 px-2  shadow-md bg-[#ffffff] fixed top-0'>
        <Header/>
      </div>

      <div className='pt-20'> 
        <AppRoutes/>
       </div>

      {/* <div className='w-full px-16'>
        <Footer/>
      </div> */}

    </div>
  )
}

export default MainLayout
