import React from "react";

const HeroSection = () => {
  return (
    
    <div className="flex flex-col-reverse md:flex-row items-center justify-between h-screen px-8 md:px-16 bg-[#0a0e1a] ">
      {/* Content Section */}
      <div className="text-white max-w-lg text-center md:text-left  md:mt-0">
        <h3 className="text-2xl text-green-600 mb-2 relative mt-28">
          Welcome to E Z Fitness
          <span className="block h-1 w-12 bg-green-600 mt-1 mx-auto md:mx-0"></span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 ">
          Exclusive Fitness Club <br /> For Women Only
        </h1>
        <p className="text-base md:text-lg mb-6 px-2 md:px-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="relative mb-8 md:mb-0">
        <div className="w-64 h-64 md:w-80 md:h-80 mt-28 rounded-full bg-green-600 border-4 border-dashed border-white flex items-center justify-center mx-auto">
          <img
            src="https://img.freepik.com/free-vector/professional-tiktok-profile-picture_742173-5866.jpg?t=st=1730050031~exp=1730053631~hmac=b82d04bec44450bf582a6f7e15c4440d0970c1d70387e2fc0bf42d233d98bbb8&w=740"
            alt="Fitness Woman"
            className="rounded-full w-3/4"
          />
        </div>
      </div>

      {/* Floating Boxes */}
      <div className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-md top-1/4 left-6 md:left-10"></div>
      <div className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-md bottom-1/3 left-1/4"></div>
      <div className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-md top-1/2 right-6 md:right-10"></div>

      {/* Profile Picture */}
      <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10">
        <img
          src="https://img.freepik.com/free-vector/professional-tiktok-profile-picture_742173-5866.jpg?t=st=1730050031~exp=1730053631~hmac=b82d04bec44450bf582a6f7e15c4440d0970c1d70387e2fc0bf42d233d98bbb8&w=740"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
