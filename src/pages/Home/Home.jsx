import React from "react";
import bg from "../../assets/images/car/c8.jpg";
import HomeBanner from "../../components/banner/HomeBanner";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div>
      <HomeBanner/>
    </div>
  );
}

export default Home;
