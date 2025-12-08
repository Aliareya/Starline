import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [menu] = useState(["Home", "About", "Cars","FAQ","Privacy", "Contact"]);

  const WhyChooseus = [
  { 
    icon : "ic:outline-security",
    title: "Safe & Secure",
    desc: "GPS tracking and verified drivers for your safety",
  },
  {
    icon : "mingcute:time-line",
    title: "On-Time Guarantee",
    desc: "We respect your time with punctual departures",
  },
  {
    icon : "material-symbols:star-outline-rounded",
    title: "Comfort First",
    desc: "Luxury seats with AC and entertainment",
  }
];





  return (
    <SiteContext.Provider value={{ menu , WhyChooseus}}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConstant = () => {
  return useContext(SiteContext);
};
