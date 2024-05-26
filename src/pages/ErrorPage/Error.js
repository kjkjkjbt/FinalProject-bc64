import React from "react";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row px-6 md:pt-10 md:px-10 lg:px-20">
      <div className="error__content mb-8 md:w-[60%] lg:w-[70%]">
        <h1 className="text-[26px] font-medium ">
        Looks like we couldn't find the page you're looking for
        </h1>
        <p className="py-5">Here are some useful links for alternatives:</p>
        <ul className="font-medium underline space-y-2">
          <li>
            <a href="/">Houses/Apartments</a>
          </li>
          <li>
            {" "}
            <a href="/">Transportation</a>
          </li>
          <li>
            <a href="/">Welcome guests with Airbnb</a>
          </li>
          <li>
            <a href="/">Trust & Safe </a>
          </li>
          <li>
            <a href="/">Map site </a>
          </li>
        </ul>
      </div>
      <div className="error__img md:w-[40%] lg:w-[30%]">
        <img
          className="w-60 object-cover lg:pl-16"
          aria-hidden="true"
          alt="Cô gái kem."
          elementtiming="LCP-target"
          src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
          data-original-uri="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
        />
      </div>
    </div>
  );
}
