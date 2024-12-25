import React, { Children, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { generateToken, messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import "./App.css";
import ThreeD from "./ThreeD";

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

function App() {
  const [name, setName] = useState("");

  const [fullName, setFullName] = useState([]);
  const [comName, setComName] = useState("");

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log("foreGround Payload", payload);

      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-white ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={payload.notification.image}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {payload.notification.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {payload.notification.body}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    });

    if (name != "satish") {
      setFullName(Array.from(name));
    } else {
      setComName(name);
      setFullName([]);
    }

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100); // Delay to ensure the DOM is updated
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value.toLowerCase());
  };

  console.log("Name", comName);
  return (
    <>
      <div className="p-4 min-h-screen overflow-y-auto  flex flex-col justify-end bg-gradient-to-b from-[#200122]  to-[#6f0000]">
        <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg max-w-md">
          <p className="text-lg text-gray-200 font-light mb-4">
            Kindha white box lo nee peru type cheyra... Spelling Thelusu
            GA.......
          </p>
          <h6 className="text-3xl font-bold text-white tracking-widest">
            SATISH
          </h6>
        </div>
        {name && (
          <>
            {fullName.map((each, i) => (
              <div key={i}>
                {/* s */}
                {each == "s" && (
                  <BounceAnimationDiv>
                    <div className="w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
                      <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
                        <div className="col-span-4 row-span-1 rounded-ss-xl border border-white hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out hover:animate-shak">
                          <img
                            src="/assets/s1.jpeg"
                            className="object-cover object-center  rounded-ss-xl  h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 rounded-e-lg border border-white">
                          <img
                            src="/assets/s9.jpeg"
                            className="object-cover object-center  rounded-e-lg  h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 border border-white "></div>
                        <div className="col-span-4 row-span-1 invisible  border border-white">
                          <img
                            src="/assets/s3.jpeg"
                            className="object-cover object-center    h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>

                        <div className="col-span-4 row-span-1 rounded-es-xl border border-white ">
                          <img
                            src="/assets/s4.jpeg"
                            className="object-cover object-center  rounded-es-xl  h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 rounded-se-xl border border-white">
                          <img
                            src="/assets/s5.jpeg"
                            className="object-cover object-center  rounded-se-xl  h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1 invisible border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>

                        <div className="col-span-4 row-span-1 border border-white "></div>
                        <div className="col-span-4 row-span-1  border rounded-s-lg border-white">
                          <img
                            src="/assets/s7.jpeg"
                            className="object-cover object-center  rounded-s-lg  h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 border border-white"></div>
                        <div className="col-span-4 row-span-1 border rounded-ee-xl border-white">
                          <img
                            src="/assets/s8.jpeg"
                            className="object-cover object-center  rounded-ee-xl  h-full w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </BounceAnimationDiv>
                )}

                {/* a */}
                {each == "a" && (
                  <BounceAnimationDiv>
                    <div className="  w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
                      <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
                        <div className="col-span-4 row-span-1 rounded-ss-xl border border-white ">
                          <img
                            src="/assets/s10.jpeg"
                            className="object-cover object-center  rounded-ss-xl  h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 rounded-se-xl border border-white">
                          <img
                            src="/assets/s11.jpeg"
                            className="object-cover object-center  rounded-se-xl  h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 border border-white "></div>
                        <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                        <div className="col-span-4 row-span-1  border border-white">
                          {/* <img
                            src="/assets/s6.jpeg"
                            className="object-cover object-center    h-full w-full"
                          /> */}
                        </div>

                        <div className="col-span-4 row-span-1 border border-white "></div>
                        <div className="col-span-4 row-span-1  border border-white">
                          <img
                            src="/assets/s12.jpeg"
                            className="object-cover object-center    h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 border border-white"></div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                        <div className="col-span-4 row-span-1 border border-white ">
                          {/* <img
                            src="/assets/s14.jpeg"
                            className="object-cover object-center    h-full w-full"
                          /> */}
                        </div>
                        <div className="col-span-4 row-span-1 rounded-b-xl  border border-white">
                          <img
                            src="/assets/s13.jpeg"
                            className="object-cover object-center  rounded-b-xl  h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>
                        <div className="col-span-4 row-span-1 rounded-b-xl border border-white">
                          <img
                            src="/assets/s15.jpeg"
                            className="object-cover object-center rounded-b-xl   h-full w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </BounceAnimationDiv>
                )}

                {/* t */}
                {each == "t" && (
                  <BounceAnimationDiv>
                    <div className="w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
                      <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
                        <div className="col-span-4 row-span-1 border rounded-s-xl border-white ">
                          <img
                            src="/assets/s16.jpeg"
                            className="object-cover object-center rounded-s-xl   h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 border border-white rounded-e-xl">
                          <img
                            src="/assets/s17.jpeg"
                            className="object-cover object-center rounded-e-xl   h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white "></div>
                        <div className="col-span-4 row-span-1   border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible border border-white "></div>
                        <div className="col-span-4 row-span-1  border border-white">
                          <img
                            src="/assets/s19.jpeg"
                            className="object-cover object-center rounded-b-xl   h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>
                        <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                        <div className="col-span-4 row-span-1   border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible border border-white "></div>
                        <div className="col-span-4 row-span-1 invisible border border-white"></div>

                        <div className="col-span-4 row-span-1  border border-white">
                          <img
                            src="/assets/s6.jpeg"
                            className="object-cover object-center    h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1 invisible border border-white"></div>
                      </div>
                    </div>
                  </BounceAnimationDiv>
                )}

                {/* i */}
                {each == "i" && (
                  <BounceAnimationDiv>
                    <div className=" w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
                      <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
                        <div className="col-span-4 row-span-1 rounded-s-xl border border-white ">
                          <img
                            src="/assets/s18.jpeg"
                            className="object-cover object-center  rounded-s-xl  h-full w-full"
                          />
                        </div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 rounded-e-xl border border-white">
                          <img
                            src="/assets/s1.jpeg"
                            className="object-cover object-center rounded-e-xl   h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white "></div>
                        <div className="col-span-4 row-span-1   border border-white">
                          <img
                            src="/assets/s22.jpeg"
                            className="object-cover object-center    h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible border border-white "></div>
                        <div className="col-span-4 row-span-1  border border-white"></div>

                        <div className="col-span-4 row-span-1 invisible border border-white"></div>
                        <div className="col-span-4 row-span-1 invisible  border border-white"></div>

                        <div className="col-span-4 row-span-1   border border-white">
                          <img
                            src="/assets/s1.jpeg"
                            className="object-cover object-center  h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1 invisible border border-white "></div>
                        <div className="col-span-4 row-span-1 rounded-s-xl border border-white">
                          <img
                            src="/assets/s7.jpeg"
                            className="object-cover object-center rounded-b-xl   h-full w-full"
                          />
                        </div>

                        <div className="col-span-4 row-span-1  border border-white"></div>
                        <div className="col-span-4 row-span-1 rounded-e-xl  border border-white">
                          <img
                            src="/assets/s9.jpeg"
                            className="object-cover object-center rounded-e-xl   h-full w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </BounceAnimationDiv>
                )}

                {/* h */}
                {each == "h" && (
                  <BounceAnimationDiv>
                    <div className=" w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
                      <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
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
                )}
              </div>
            ))}
          </>
        )}

        <Toaster position="bottom-center" />
      </div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeName}
        className=" p-2  w-full rounded-full"
        placeholder="Enter Satish"
      />

      {comName == "satish" && (
        <div className="h-screen w-screen bg-[#000]">
          {/* <div className="birthday-text">Happy Birthday</div>
            <div className="grid grid-cols-6">
             s 

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

               a 

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

              t

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

             i 

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

               s 

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

             h 

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
            </div> */}
          <ThreeD />
        </div>
      )}
    </>
  );
}

export default App;
