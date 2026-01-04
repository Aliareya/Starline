import React from 'react'
import AppRoutes from '../routes/AppRoutes';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import PageBanner from '../components/banner/PageBanner';
import { useLocation } from 'react-router-dom';

function MainLayout() {
  const is_home = useLocation().pathname;
  const not_banner = ['/' , "/login" , '/register']
  const is_inclode = not_banner.includes(is_home)

  return (
    <div className='w-full '>

      <div className='w-full z-50 lg:px-10 md:px-2 px-2  shadow-md bg-[#ffffff] fixed top-0'>
        <Header/>
      </div>
      {!is_inclode && (
       <PageBanner/>
      )}
      <div className={`${is_inclode ? 'pt-20' : ''}`}> 
        <AppRoutes/>
       </div>

      <div className='w-full '>
        <Footer/>
      </div>

    </div>
  )
}

export default MainLayout
