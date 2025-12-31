import { BrowserRouter } from "react-router-dom";
import { SiteContextProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <SiteContextProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </SiteContextProvider>
  );
}

export default App;
