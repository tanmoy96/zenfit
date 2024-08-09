import React from "react";
import Lottie from "react-lottie-player";
import animationData from "@/assets/loader.json"; // Update the path to your Lottie JSON file

const Loader = () => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 300, height: 300 }} // Adjust the size as needed
    />
  );
};

export default Loader;
