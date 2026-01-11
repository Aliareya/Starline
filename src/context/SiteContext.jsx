import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [menu] = useState(["Home","Today Routes", "About", "Cars","FAQ", "Contact"]);
  const [footerMenuP1] = useState(["Home", "About", "Cars", "Contact"]);
  const [footerMenuP2] = useState(["Privacy", "Services" , "FAQ" , "Terms"]);

  const WhyChooseus = [
  { 
    icon : "ic:outline-security",
    title: "Safe & Secure",
    description: "GPS tracking and verified drivers for your safety",
  },
  {
    icon : "mingcute:time-line",
    title: "On-Time Guarantee",
    description: "We respect your time with punctual departures",
  },
  {
    icon : "material-symbols:star-outline-rounded",
    title: "Comfort First",
    description: "Luxury seats with AC and entertainment",
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

const aboutcart =  [
  {
    title: "Safety First",
    description:
      "Your safety is our top priority. All our buses are equipped with modern safety features and driven by experienced professionals."
  },
  {
    title: "Customer Comfort",
    description:
      "We believe in providing exceptional comfort throughout your journey with luxury seating and premium amenities."
  },
  {
    title: "Reliability",
    description:
      "We respect your time. Our buses depart on schedule and arrive on time, ensuring you reach your destination as planned."
  },
  {
    title: "Affordability",
    description:
      "Quality travel shouldn't break the bank. We offer competitive pricing without compromising on service quality."
  }
];

const missionVisionabout = [
  {
    title: "Our Mission",
    description:
      "To provide safe, comfortable, and affordable bus travel that connects communities and creates memorable journey experiences for all our passengers."
  },
  {
    title: "Our Vision",
    description:
      "To be the nation's most trusted and preferred bus travel company, setting new standards in passenger comfort, safety, and environmental sustainability."
  }
];

const statsabout = [
  {
    title: "500K+",
    description: "Happy Travelers",
    icon:'mdi:users-outline'
  },
  {
    title: "150+",
    description: "Cities Connected",
    icon:'jam:world'
  },
  {
    title: "15+",
    description: "Years Experience",
    icon:'ic:outline-group-work'
  },
  {
    title: "99.9%",
    description: "Safety Record",
    icon:'tdesign:secured'
  }
];

const aboutbanner = {title:'About StarLine' , desc : "Connecting people and places since 2009 with safe, comfortable,<br></br> and affordable bus travel"}



  return (
    <SiteContext.Provider value={{aboutbanner, statsabout,missionVisionabout,aboutcart ,  menu , WhyChooseus ,footerMenuP1 ,footerMenuP2 ,siteBio ,userCommend}}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConstant = () => {
  return useContext(SiteContext);
};
