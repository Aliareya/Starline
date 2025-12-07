import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [menu] = useState(["Home", "About", "Cars","FAQ","Privacy", "Contact"]);


//   Experience comfort from the moment you depart.
// Reach your destination feeling refreshed with Star Line.

//  Affordable prices meet premium comfort. Our easy-to-use system helps<br></br>
//             you
//             discover the best deals on every route,making every trip
//             budget-friendly<br></br>
//             without losing quality or convenience. <br></br>

  return (
    <SiteContext.Provider value={{ menu }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConstant = () => {
  return useContext(SiteContext);
};
