import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { generateToken, messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
import toast, { Toaster } from "react-hot-toast";

function App() {
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
  }, []);

  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value.toLowerCase());
  };
  return (
    <div className="p-4 h-screen flex flex-col justify-end bg-gradient-to-b from-[#200122]  to-[#6f0000]">
      {/* s */}
      {name == "s" && (
        <div className="flex justify-center">
          <div className="w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
            <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
              <div className="col-span-4 row-span-1 rounded-ss-xl border border-white ">
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
        </div>
      )}

      {/* a */}
      {name == "sa" && (
        <div className="flex justify-center mt-5">
          <div className="  w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
            <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
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
        </div>
      )}

      {/* t */}
      {name == "sat" && (
        <div className="flex justify-center mt-5">
          <div className="w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
            <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
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
        </div>
      )}

      {/* i */}
      {name == "sati" && (
        <div className="flex justify-center mt-5">
          <div className=" w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
            <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
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
        </div>
      )}

      {/* s */}

      {name == "satis" && (
        <div className="App flex justify-center">
          <div className="  w-[60vw] h-[40vh] md:w-[20vw] md:h-[50vh] p-4">
            <div className="grid grid-cols-12 grid-rows-5 h-full w-full  gap-2">
              <div className="col-span-4 row-span-1 rounded-ss-xl border border-white "></div>
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
        </div>
      )}

      {/* h */}
      {name == "satish" && (
        <div className="App flex justify-center">
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
        </div>
      )}
      <Toaster position="bottom-center" />

      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeName}
        className=" p-2  w-full rounded-full"
        placeholder="Enter Satish"
      />

      {/* <button>Click Me</button> */}
    </div>
  );
}

export default App;
