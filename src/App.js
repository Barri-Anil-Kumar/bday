import "./styles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Happy from "../public/media/happy.mp3";
import Image1 from "../public/images/wave-1.svg";
import Image2 from "../public/images/wave-2.svg";
import Image3 from "../public/images/wave-3.svg";
import Image4 from "../public/images/wave-4.svg";
import Image5 from "../public/images/wave-5.svg";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="front center">
          <div className="cake">
            <div className="candle"></div>
            <div className="top-layer"></div>
            <div className="middle-layer"></div>
            <div className="bottom-layer"></div>
          </div>
        </div>
        <div className="back center">
          <header>
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
            <img src={Image5} id="shape" />
          </header>
          <div>
            <AudioPlayer
              autoPlay
              src={Happy}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
      </div>
    </div>
  );
}
