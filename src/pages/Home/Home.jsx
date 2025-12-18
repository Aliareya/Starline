import HomeBanner from "../../components/banner/HomeBanner";
import Suggestion from "../../components/shared/Suggestion";
import InfoSection from "./components/InfoSection"
import PupularRoutes from "./components/PupularRoutes";
import WhyChoose from "./components/WhyChoose";
import UserCommend from "./components/UserCommend";
import Loader from "../../components/shared/Loader";

function Home() {

  return (
    <div>
      <HomeBanner/>
      <WhyChoose/>
      <PupularRoutes/>
      <InfoSection/>
      <UserCommend/>
      <Suggestion/>
    </div>
  );
}

export default Home;
