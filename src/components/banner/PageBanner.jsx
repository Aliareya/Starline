import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function PageBanner() {
  const location = useLocation();
  const isCarDetails = useMatch("/car/:id");
  const navigate = useNavigate();

  const banners = {
    "/about": {
      title: "About StarLine",
      desc: (
        <>
          Connecting people and places since 2009 with safe, comfortable,
          <br />
          and affordable bus travel.
        </>
      ),
    },
    "/contact": {
      title: "Contact Us",
      desc: (
        <>
          Have questions? We're here to help. Reach out to us anytime and we'll
          respond
          <br />
          as soon as we can.
        </>
      ),
    },
    "/cars": {
      title: "Our Cars",
      desc: (
        <>
          Experience luxury and comfort with our modern, well-maintained fleet
          of
          <br />
          buses. Each vehicle is equipped with premium amenities for your
          journey.
        </>
      ),
    },
    "/faq": {
      title: "FAQ",
      desc: "Find answers to common questions about booking, travel, and our policies.",
    },
    "/privacy": {
      title: "Privacy Policy",
      desc: "Last updated: December 3, 2025",
    },
  };

  const banner = banners[location.pathname];

  return (
    <>
      {banner && (
        <div className="w-full pt-32 pb-20 flex flex-col justify-center items-center text-center">
          {banner && (
            <>
              <h1 className="text-3xl font-bold">{banner.title}</h1>
              <p className="text-base font-medium pt-5 max-sm:px-2">
                {banner.desc}
              </p>
            </>
          )}

          {isCarDetails && (
            <div>
              <div
                onClick={() => navigate("/cars")}
                className="px-5 py-2  absolute left-7 max-sm:left-2 cursor-pointer top-24 flex items-center gap-2"
              >
                <Icon
                  icon="famicons:arrow-back"
                  width="20"
                  height="20"
                  style={{ color: "#000" }}
                />
                <span className="text-sm">Back</span>
              </div>
              <h1 className="text-3xl font-bold">Car Details</h1>
              <p className="text-base font-medium pt-5">
                Explore specifications, amenities, and booking options for this
                vehicle.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PageBanner;
