import React, { useEffect } from "react";
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
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
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
  return (
    <div className="App">
      <h1>Engagement Day</h1>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
