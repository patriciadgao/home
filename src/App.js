import { useState } from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { MenuPage } from "./components/MenuPage";
import { Sidebar } from "./components/Sidebar";
import { About } from "./components/pages/about/About";
import { Arts } from "./components/pages/arts/Arts";
import { CollageBook } from "./components/pages/arts/collagebook/CollageBook";
import { PlaylistCovers } from "./components/pages/arts/playlistcovers/PlaylistCovers";
import { Home } from "./components/pages/home/Home";
import { Poetry } from "./components/pages/poetry/Poetry";
import { Websites } from "./components/pages/websites/Websites";
import { PatsQuestions } from "./components/pages/websites/patsquestions/PatsQuestions";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="App">
      <div className="flex items-stretch min-h-screen text-slate-600">
        <HashRouter>
          <Sidebar isMenuOpen={isMenuOpen} />
          <Routes>
            <Route
              path="/"
              element={
                <MenuPage onMenuClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <Outlet />
                </MenuPage>
              }
            >
              <Route path="about" element={<About />} />
              <Route path="arts">
                <Route path="" element={<Arts />} />
                <Route path="collagebook/*" element={<CollageBook />} />
                <Route path="playlistcovers/*" element={<PlaylistCovers />} />
              </Route>
              <Route path="arts" element={<Arts />} />
              <Route path="poetry" element={<Poetry />} />
              <Route path="websites" element={<Websites />} />
              <Route path="websites">
                <Route path="" element={<Websites />} />
                <Route path="patsquestions" element={<PatsQuestions />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
