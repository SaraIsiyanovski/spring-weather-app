import { useContext, useEffect } from "react";
import { LeftComponent } from "./components/LeftComponent";
import { RightComponent } from "./components/RightComponent";
import { WeatherContext } from "./context/WeatherContextComponent";
import clearday from "../src/img/clearday.webp";
import clearnight from "../src/img/clearnight.jpg";
import cloudyday from "../src/img/cloudyday.webp";
import cloudynight from "../src/img/cloudynight.avif";
import rainyday from "../src/img/rainyday.webp";
import rainynight from "../src/img/rainynight.avif";
import stormday from "../src/img/stormday.jpeg";
import stormnight from "../src/img/stormnight.webp";
import mistday from "../src/img/mistday.jpg";
import mistnight from "../src/img/mistnight.jpg";
import snowday from "../src/img/snowday.jpg";
import snownight from "../src/img/snownight.jpg";

import "../src/css/style.css";
import { TimeContext } from "./context/TimeContextComponent";

function App() {
  const { data, image, setImage } = useContext(WeatherContext);
  const { realTimestamp, date } = useContext(TimeContext);
  const sky = data[0]?.weather[0].main;
  const sunsetTimestamp = data[0]?.sys.sunset;
  const sunriseTimestamp = data[0]?.sys.sunrise;

  const timestamp = (img1, img2) => {
    if (realTimestamp > sunriseTimestamp && realTimestamp < sunsetTimestamp) {
      setImage(img1);
    } else {
      setImage(img2);
    }
  };

  useEffect(() => {
    switch (sky) {
      case "Clear":
        timestamp(clearday, clearnight);
        break;
      case "Rain":
        timestamp(rainyday, rainynight);
        break;
      case "Mist":
        timestamp(mistday, mistnight);
        break;
      case "Clouds":
        timestamp(cloudyday, cloudynight);
        break;
      case "Snow":
        timestamp(snowday, snownight);
        break;
      case "Thunderstorm":
        timestamp(stormday, stormnight);
        break;
    }
  }, [data]);

  return (
    <div className="App">
      <img className="img" src={image} />
      <div className="components">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}

export default App;
