import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [menu] = useState(["Home", "About Us", "Our Cars","FAQ","Privacy", "Contact US"]);

  return (
    <SiteContext.Provider value={{ menu }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConstant = () => {
  return useContext(SiteContext);
};
