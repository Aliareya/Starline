import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [menu] = useState(["Home", "About", "Cars","FAQ","Privacy", "Contact"]);


//   Experience comfort from the moment you depart.
// Reach your destination feeling refreshed with Star Line.


  return (
    <SiteContext.Provider value={{ menu }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConstant = () => {
  return useContext(SiteContext);
};
