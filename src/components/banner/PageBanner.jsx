import React from "react";
import { useLocation } from "react-router-dom";

function PageBanner() {
  const location = useLocation().pathname;
  return (
    <>
      <div className="w-full pt-32 pb-20 flex flex-col justify-center items-center">
        {location === "/about" && (
          <>
            <h1 className="text-3xl font-bold ">About StarLine</h1>
            <p className="text-base font-medium text-center pt-5">
              Connecting people and places since 2009 with safe, comfortable,
              <br></br>
              and affordable bus travel.
            </p>
          </>
        )}
        {location === "/contact" && (
          <>
            <h1 className="text-3xl font-bold ">Contact Us</h1>
            <p className="text-base font-medium text-center pt-5 max-sm:px-2">
              Have questions? We're here to help. Reach out to us anytime and we'll respond
              <br></br>
              as soon as we can.
            </p>
          </>
        )}
        {location === "/cars" && (
          <>
            <h1 className="text-3xl font-bold ">Our Cars</h1>
            <p className="text-base font-medium text-center pt-5">
              Experience luxury and comfort with our modern, well-maintained fleet of
              <br></br>
              buses. Each vehicle is equipped with premium amenities for your journey
            </p>
          </>
        )}
        {location === "/faq" && (
          <>
            <h1 className="text-3xl font-bold ">FAQ</h1>
            <p className="text-base font-medium text-center pt-5">
              Find answers to common questions about booking, travel, and our policies.
            </p>
          </>
        )}
        {location === "/privacy" && (
          <>
            <h1 className="text-3xl font-bold ">Privacy Policy</h1>
            <p className="text-base font-medium text-center pt-5">
              Last updated: December 3, 2025
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default PageBanner;
