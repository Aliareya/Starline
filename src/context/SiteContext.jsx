import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [menu] = useState(["Home", "About", "Cars","FAQ","Privacy", "Contact"]);
  const [footerMenuP1] = useState(["Home", "About", "Cars", "Contact"]);
  const [footerMenuP2] = useState(["Privacy", "Services" , "FAQ" , "Terms"]);

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

const siteBio = 
`With over 15 years of experience, TravelEase has been connecting people
 across the nation with safe, comfortable, and affordable bus travel. Our modern fleet and 
 professional drivers ensure every journey is memorable for all the right reasons.`

 const userCommend = [
  {
    name: "Sarah Johnson",
    stars: 5,
    commnet: "Excellent service! The bus was comfortable and the driver was professional."
  },
  {
    name: "Michael Chen",
    stars: 5,
    commnet: "Best bus travel experience. Clean, on-time, and affordable. Highly recommend!"
  },
  {
    name: "Emma Davis",
    stars: 4,
    commnet: "Safe and comfortable journey. Will definitely book again for my next trip."
  }
];





  return (
    <SiteContext.Provider value={{ menu , WhyChooseus ,footerMenuP1 ,footerMenuP2 ,siteBio ,userCommend}}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConstant = () => {
  return useContext(SiteContext);
};
