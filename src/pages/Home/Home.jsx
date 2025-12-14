import HomeBanner from "../../components/banner/HomeBanner";
import Suggestion from "../../components/shared/Suggestion";
import Button from "../../components/ui/botton/Button";
import PupularRoutes from "./components/PupularRoutes";
import WhyChoose from "./components/WhyChoose";

function Home() {

  return (
    <div>
      <HomeBanner/>
      <WhyChoose/>
      <PupularRoutes/>
      <Suggestion/>
    </div>
  );
}

export default Home;
