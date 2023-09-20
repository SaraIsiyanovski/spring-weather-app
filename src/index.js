import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WeatherContextComponent } from "./context/WeatherContextComponent";
import { CityContextComponent } from "./context/CityContextComponent";
import { TimeContextComponent } from "./context/TimeContextComponent";
import { NotFound } from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <WeatherContextComponent>
        <TimeContextComponent>
          <CityContextComponent>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CityContextComponent>
        </TimeContextComponent>
      </WeatherContextComponent>
    </Router>
  </React.StrictMode>
);
