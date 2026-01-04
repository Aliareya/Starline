import React from 'react'
import img  from '../../assets/images/img/img1.jpg'
import SimpleCart from '../../components/card/SimpleCart'
import { useSiteConstant } from '../../context/SiteContext'

function About() {
  const {aboutcart , missionVisionabout ,statsabout} = useSiteConstant()

  return (
    <div className='w-full h-auto lg:px-11 md:px-6 px-4  '>
      <div className='w-full md:grid lg:grid-cols-4 max-sm:grid md:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5'>
        {statsabout.map((item , index)=>{
          return(
            <SimpleCart item={item} mystyle={'w-full !py-4'} Iconstyle={'w-16 h-16'} is_about={true}/>
          )
        })}
      </div>
      <div className='w-full lg:pt-20 md:pt-10 max-sm:pt-8 flex lg:flex-row max-md:flex-col md:flex-col gap-7'>
        <div className='lg:w-1/2 md:w-full '>
          <h1 className='text-2xl font-bold'>Our Story</h1>
          <p className='text-base font-medium pt-4 text-gray-600'>
            Founded in 2009, TravelEase began with a simple mission: to make bus travel comfortable, safe, and accessible to everyone. What started as a small operation with just three buses has grown into one of the nation's most trusted bus travel companies.
            <br></br>
            <br></br>
            Over the years, we've invested in modern fleet technology, trained hundreds of professional drivers, and connected over 150 cities across the country. Our commitment to excellence has earned us the trust of more than 500,000 travelers.
            <br></br>
            <br></br>
            Today, TravelEase continues to innovate in the bus travel industry, introducing new routes, upgrading our fleet with eco-friendly buses, and enhancing our digital booking experience to make your journey as smooth as possible from start to finish.
          </p>
        </div>
        <div className='lg:w-1/2 lg:h-auto h-80 max-sm:h-60 w-full rounded-lg bg-cover bg-center'
        style={{backgroundImage:`url(${img })`}}></div>
      </div>
      <div className='w-full pt-12 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Our Core Values</h1>
        <div className='w-full pt-5 grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
          {aboutcart.map((item , index)=>{
            return(
              <SimpleCart key={index} item={item} mystyle={'w-full !items-start !justify-start !py-5 !px-5'} Iconstyle={'w-16 h-16'} />
            )
          })}
        </div>
      </div>
      <div className='w-full pt-5 grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
        {missionVisionabout.map((item , index)=>{
            return(
              <SimpleCart key={index} item={item} mystyle={'w-full !items-start !justify-start !py-5 !px-5'} Iconstyle={'w-16 h-16'} />
            )
          })}
      </div>
    </div>
  )
}

export default About
