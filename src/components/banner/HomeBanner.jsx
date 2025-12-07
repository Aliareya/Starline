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
      className="w-full h-[670px] flex flex-col justify-center items-center bg-top bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-[670px] gradient-light flex pt-32">
        <div className="w-1/2  flex flex-col  pl-20">
          <h1 className="text-[70px] text-white font-semibold font-[sans-serif] text-gradient">
            Travel in Comfort,
          </h1>
          <div className="flex items-center mb-10">
            <span className="text-[50px] text-[#4bbebe] font-semibold font-[sans-serif] pr-3">
              Arrive with
            </span>
            <SplitText
              text="  Star Line"
              className="text-[50px] text-[#ffffff] font-semibold "
              rootMargin=""
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <p className="text-lg text-white/90 font-medium font-[sans-serif]">
            Affordable prices meet premium comfort. Our easy-to-use system helps
            you<br></br>
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
        <div className='w-2/3 pl-20  absolute -bottom-5 '>
          <SearchBox/>
        </div>
      </div>

    </div>
  );
}

export default HomeBanner
