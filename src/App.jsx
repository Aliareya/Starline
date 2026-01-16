import { BrowserRouter } from "react-router-dom";
import { SiteContextProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";
import { CarProvider } from "./context/CarContext";
import { SeatProvider } from "./context/SeatContext";

function App() {
  return (
    <SiteContextProvider>
      <SeatProvider>
      <CarProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </CarProvider>
      </SeatProvider>
    </SiteContextProvider>
  );
}

export default App;
