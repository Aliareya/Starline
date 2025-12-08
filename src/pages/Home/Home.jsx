import HomeBanner from "../../components/banner/HomeBanner";
import PupularRoutes from "./components/PupularRoutes";
import WhyChoose from "./components/WhyChoose";

function Home() {

  return (
    <div>
      <HomeBanner/>
      <WhyChoose/>
      <PupularRoutes/>
    </div>
  );
}

export default Home;
