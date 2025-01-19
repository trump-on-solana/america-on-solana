// filepath: /media/joa/linux/projetos/trump-on-solana/trump-on-solana/src/components/marquee/Marquee.jsx
import "./Marquee.css";
import Marquee from "./index.js";

const MarqueeText = () => {
  return (
    <div className="marquee-horizontal">
      <div className="track-horizontal">
        <div className="marquee-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {Marquee.Marquee1}
        </div>
        <div className="marquee-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {Marquee.Marquee1}
        </div>
        <div className="marquee-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {Marquee.Marquee1}
        </div>
        <div className="marquee-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {Marquee.Marquee1}
        </div>
        <div className="marquee-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {Marquee.Marquee1}
        </div>
        <div className="marquee-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {Marquee.Marquee1}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
