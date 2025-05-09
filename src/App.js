import "./styles/App.css";
import Layout from "./tsx-components/Layout.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Games from "./routes/Games.tsx";
import Home from "./routes/Home.tsx";
import NoellesArk from "./routes/NoellesArk.tsx";
import TheLastDiner from "./routes/TheLastDiner.tsx";
import Trackline from "./routes/Trackline.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="games">
              <Route index element={<Games />} />
              <Route path="noelles-ark" element={<NoellesArk />} />
              <Route path="the-last-diner" element={<TheLastDiner />} />
              <Route path="trackline" element={<Trackline />} />
            </Route>
            <Route path="*" element={<>Not Found Route</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
