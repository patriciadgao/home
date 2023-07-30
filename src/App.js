import { useState } from "react";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { MenuPage } from "./components/MenuPage";
import { Sidebar } from "./components/Sidebar";
import { About } from "./components/pages/about/About";
import { CollageBook } from "./components/pages/collagebook/CollageBook";
import { Home } from "./components/pages/home/Home";
import { Poetry } from "./components/pages/poetry/Poetry";
import { Websites } from "./components/pages/websites/Websites";

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
              <Route path="collagebook/*" element={<CollageBook />} />
              <Route path="poetry" element={<Poetry />} />
              <Route path="websites" element={<Websites />} />
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
