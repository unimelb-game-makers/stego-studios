import "./styles/App.css";
import Layout from "./tsx-components/Layout.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Games from "./routes/Games.tsx";
import Home from "./routes/Home.tsx";
import CreatureArk from "./routes/Creatureark.tsx";
import CreepyCook from "./routes/Creepycook.tsx";
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
              <Route path="creatureark" element={<CreatureArk />} />
              <Route path="creepycook" element={<CreepyCook />} />
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
