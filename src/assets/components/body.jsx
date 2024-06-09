import React from "react";

const body = () => {
  return (
    <div className="lg:flex ">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        {" "}
        <img
          src="./public/assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-[45deg] h-64 md:h-96"
        />
        <img
          src="./public/assets/Pink-Shape.svg"
          alt="2st"
          className="absolute -rotate-[30deg] h-64  md:h-96 "
        />
        <img
          src="./public/assets/Purple-Shape.svg"
          alt="3st"
          className="absolute -rotate-[15deg] h-64 md:h-96"
        />
        <img
          src="./Hero-Model.png"
          alt="4st"
          className="absolute h-64 md:h-96"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-Playfair leading-tight">
        
          Host your Website in less then 5 Miniutes
        </h1>
        <p className="font-lato text-gray-400">
          With Hoster , get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>
        <form action="#" className="flex flex-col gap-4 my-3 md:flex-row ">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="./public/assets/Checkmark.svg" alt="chck icon " />
          <p className="font-lato text-gray-400">No spam , Ever , Unsubscribe Any time </p>
        </div>
      </div>
    </div>
  );
};

export default body;
