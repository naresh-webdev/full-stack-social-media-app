import React from "react";
import { Triangle } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-10 ">
      <Triangle
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      ></Triangle>
      <p className="text-lg text-center px-2 mt-5"> {message} </p>
    </div>
  );
};

export default Spinner;
