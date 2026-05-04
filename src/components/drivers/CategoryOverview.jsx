import React from "react";
import { Link } from "react-router-dom";

const CategoryOverview = () => {
  return (
    <section className="w-full bg-white font-['Poppins'] overflow-hidden">
      
      {/* Top Content */}
      <div className="max-w-[1840px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT */}
        <div>
          <h1 className="text-[38px] font-normal text-[#111827] mb-4">
            Understanding the Different Types of Drivers That Keep Your System Running
          </h1>

          <div className="w-[110px] h-[4px] bg-[#1594ee] mb-5"></div>

          <p className="text-[#7b8491] text-[15px] leading-7 max-w-[460px]">
            Every computer depends on different types of drivers working quietly in the background. 
            These drivers help your system connect with hardware and make sure everything runs smoothly.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-[#111827] text-[16px] leading-7">
            Some drivers handle everyday functions like display, sound, and internet connection, 
            while others focus on specific hardware such as storage devices or external accessories 
            like printers. There are also advanced layers that improve performance, security, and 
            overall system stability. Together, these drivers ensure your device works properly 
            without you needing to worry about what’s happening behind the scenes.
          </p>
        </div>

      </div>

      

    </section>
  );
};

export default CategoryOverview;