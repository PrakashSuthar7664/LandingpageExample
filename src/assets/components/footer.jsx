import React from "react";

const footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">

        <ul className="flex gap-6 font-lato text-gray-400">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Teitter</a>
          </li>
        </ul>
      
      <div className="flex gap-2">
        <img src="./public/assets/Help-Avatar.svg" alt="" />
        <div>
          <p className="font-thin font-Playfair">Have any Question</p>
          <a href="#" className="font-lato">
            Talk to specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
