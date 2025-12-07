import React from 'react'
import SplitText from '../ui/text/SplitText';
import CircularText from '../ui/text/CircularText';
import bg from "../../assets/images/car/c8.jpg";
import SearchBox from '../shared/SearchBox';

function HomeBanner() {
    const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div
      className="w-full xl:h-[670px] lg:h-[600px]  flex flex-col justify-center items-center bg-top bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-[670px] gradient-light flex pt-10 lg:pt-16 xl:pt-32">
        <div className="w-1/2  flex flex-col pl-20 lg:pl-12">
          <h1 className="xl:text-[70px] lg:text-[50px] text-3xl  text-white font-semibold font-[sans-serif] text-gradient">
            Travel in Comfort,
          </h1>
          <div className="flex mt-5 mb-10">
            <span className="xl:text-[70px] lg:text-[40px] text-3xl  text-[#4bbebe] font-semibold font-[sans-serif] pr-3">
              Arrive with
            </span>
            <SplitText
              text="  Star Line"
              className="xl:text-[50px] lg:text-[50px] text-3xl text-[#ffffff] font-semibold "
              rootMargin=""
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <p className="xl:text-lg lg:text-sm text-sm text-white/90 font-medium font-[sans-serif]">
            Affordable prices meet premium comfort. Our easy-to-use system helps<br></br>
            you
            discover the best deals on every route,making every trip
            budget-friendly<br></br>
            without losing quality or convenience. <br></br>
          </p>
        </div>
        <div className="w-1/2  pl-24 pt-16 relative ">
         <CircularText
            text="STAR*LINE*COMPANY*"
            onHover="speedUp"
            spinDuration={20}
            className="absolute bottom-0"
         />
        </div>
        {/* <div className='w-2/3 lg:w-[95%] pl-20 lg:pl-10 lg:pt-24  absolute -bottom-5 lg:-bottom-16 '>
          <SearchBox/>
        </div> */}
      </div>

    </div>
    
  );
}

export default HomeBanner
