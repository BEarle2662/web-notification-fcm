import React from "react";
import Lottie from "lottie-react";
import animationData from "./bdayanmi.json"; // Adjust the path as necessary
import { motion } from "framer-motion";
const BounceAnimationDiv = ({ children }) => {
  return (
    <motion.div
      className="flex justify-center mt-5"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

const LottieCom = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen  p-4">
      <div className="w-64 h-64">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="flex justify-center items-center min-h-[40vh] bg-gradient-to-b from-[#200122] to-[#6f0000] rounded-lg">
        <div className="grid grid-cols-6">
          {/* s */}

          <BounceAnimationDiv>
            <div className="col-span-1  p-4">
              <div className="grid grid-cols-12 grid-rows-5 h-full w-full gap-1  md:gap-2">
                <div className="col-span-4 row-span-1 rounded-ss-xl border border-white">
                  <img
                    src="/assets/s1.jpeg"
                    className="object-cover object-center  rounded-ss-xl"
                  />
                </div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-e-lg border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-es-xl border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-se-xl border border-white"></div>
                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1  border rounded-s-lg border-white"></div>

                <div className="col-span-4 row-span-1 border border-white"></div>
                <div className="col-span-4 row-span-1 border rounded-ee-xl border-white"></div>
              </div>
            </div>
          </BounceAnimationDiv>
          {/* a */}
          <BounceAnimationDiv>
            <div className="col-span-1 p-4">
              <div className="grid grid-cols-12 grid-rows-5 h-full w-full gap-1  md:gap-2">
                <div className="col-span-4 row-span-1 rounded-ss-xl border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-se-xl border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white"></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1 rounded-b-xl  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>
                <div className="col-span-4 row-span-1 rounded-b-xl border border-white"></div>
              </div>
            </div>
          </BounceAnimationDiv>
          {/* t */}
          <BounceAnimationDiv>
            <div className="col-span-1  p-4">
              <div className="grid grid-cols-12 grid-rows-5 h-full w-full gap-1  md:gap-2">
                <div className="col-span-4 row-span-1 border rounded-s-xl border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white rounded-e-xl"></div>

                <div className="col-span-4 row-span-1 invisible border border-white "></div>
                <div className="col-span-4 row-span-1   border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>
                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1   border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white "></div>
                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1  border border-white"></div>
                <div className="col-span-4 row-span-1 invisible border border-white"></div>
              </div>
            </div>
          </BounceAnimationDiv>
          {/* i */}
          <BounceAnimationDiv>
            <div className="col-span-1  p-4">
              <div className="grid grid-cols-12 grid-rows-5 h-full w-full gap-1  md:gap-2">
                <div className="col-span-4 row-span-1 rounded-s-xl border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-e-xl border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white "></div>
                <div className="col-span-4 row-span-1   border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>
                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1   border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white "></div>
                <div className="col-span-4 row-span-1 rounded-s-xl border border-white"></div>

                <div className="col-span-4 row-span-1  border border-white"></div>
                <div className="col-span-4 row-span-1 rounded-e-xl  border border-white"></div>
              </div>
            </div>
          </BounceAnimationDiv>
          {/* s */}
          <BounceAnimationDiv>
            <div className="col-span-1 p-4">
              <div className="grid grid-cols-12 grid-rows-5 h-full w-full gap-1  md:gap-2">
                <div className="col-span-4 row-span-1 rounded-ss-xl border border-white">
                  <img
                    src="/assets/s1.jpeg"
                    className="object-cover object-center  rounded-ss-xl  h-full w-full"
                  />
                </div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-e-lg border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-es-xl border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-se-xl border border-white"></div>
                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1  border rounded-s-lg border-white"></div>

                <div className="col-span-4 row-span-1 border border-white"></div>
                <div className="col-span-4 row-span-1 border rounded-ee-xl border-white"></div>
              </div>
            </div>
          </BounceAnimationDiv>
          {/* h */}
          <BounceAnimationDiv>
            <div className="col-span-1 p-4">
              <div className="grid grid-cols-12 grid-rows-5 h-full w-full gap-1  md:gap-2">
                <div className="col-span-4 row-span-1 rounded-ss-xl border border-white "></div>
                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 rounded-se-xl border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white"></div>
                <div className="col-span-4 row-span-1  border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>

                <div className="col-span-4 row-span-1 border border-white "></div>
                <div className="col-span-4 row-span-1 rounded-es-xl   border border-white"></div>

                <div className="col-span-4 row-span-1 invisible border border-white"></div>
                <div className="col-span-4 row-span-1 rounded-ee-xl border border-white"></div>
              </div>
            </div>
          </BounceAnimationDiv>
        </div>
      </div>
    </div>
  );
};

export default LottieCom;
