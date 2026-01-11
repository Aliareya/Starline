import { BrowserRouter } from "react-router-dom";
import { SiteContextProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";
import { CarProvider } from "./context/CarContext";

function App() {
  return (
    <SiteContextProvider>
      <CarProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </CarProvider>
    </SiteContextProvider>
  );
}

export default App;
