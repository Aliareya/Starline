import HomeBanner from "../../components/banner/HomeBanner";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div>
      <HomeBanner/>
      <div className="w-full h-[700px] bg-white"></div>
    </div>
  );
}

export default Home;
