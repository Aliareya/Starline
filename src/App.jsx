import { SiteContextProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <SiteContextProvider>
      <MainLayout />
    </SiteContextProvider>
  );
}

export default App;
