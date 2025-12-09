import HomeBanner from "../../components/banner/HomeBanner";
import PupularRoutes from "./components/PupularRoutes";
import WhyChoose from "./components/WhyChoose";

function Home() {

  return (
    <div>
      <HomeBanner/>
      <WhyChoose/>
      <PupularRoutes/>
      <div className="w-full h-auto py-20 px-20 btn-gradient mb-10">
        <h1 className="lg:text-4xl md:text-3xl text-3xl text-white max-sm:font-bold font-semibold text-center font-[sans-serif]">Popular Routes</h1>
        <p className="text-base font-medium pt-3 text-center darkgreen">Find the best deals on our most traveled routes</p>
      </div>
    </div>
  );
}

export default Home;
