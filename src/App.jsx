// filepath: /media/joa/linux/projetos/trump-on-solana/trump-on-solana/src/App.jsx
import { useState } from "react";
import StarBackground from "./components/StarBackground";
import Marquee from "./components/marquee/Marquee.jsx";
import trumpImage from "./imgs/trump.png";

function App() {
  const [notification, setNotification] = useState(false);
  const contractAddress = "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setNotification(true);
      setTimeout(() => setNotification(false), 2000);
    });
  };

  return (
    <>
      <section>
        <StarBackground />
        <div className="striped-background min-h-screen flex flex-col items-center justify-center gap-10">
          <Marquee />
          <div className="flex flex-col lg:flex-row justify-center items-center mt-8 gap-8 h-full">
            <img
              src={trumpImage}
              alt="Trump"
              className="w-[80%] max-w-[400px] sm:w-[80%] lg:w-[150%] object-contain"
            />
            <div className="flex flex-col text-9xl">
              <div className="grid grid-cols-1 grid-rows-3 gap-4 text-white ml-8 mb-8 text-center">
                <div className="text-[40px] width-[200px] text border-t border-gray-400 pb-4 text-center lg:text-right">
                  47º president of the USA IS BACK! AND HE PUTS HIS FAITH IN
                  AMERICA ON SOLANA
                </div>
                <div className="text-[40px] width-[200px] text drop-shadow-lg border-t border-gray-400 pb-4 text-center lg:text-right">
                  BUY NOW OUR TOKEN AO$!
                  <br />
                  <br />
                  <button
                    onClick={copyToClipboard}
                    className="underline cursor-pointer drop-shadow-md hover:scale-105 hover:text-yellow-300 transition-all duration-200"
                  >
                    CLICK HERE TO COPY OUR CONTRACT!
                  </button>
                </div>
                <div className="text-[40px] width-[200px] text pb-4 border-t border-gray-400 drop-shadow-lg text-center lg:text-right">
                  AMERICA ON SOLANA is waiting the return of the President of
                  United States of America Donald Trump
                </div>
              </div>
            </div>
          </div>
          {notification && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded z-50 shadow-lg">
              Contract address copied to clipboard!
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
