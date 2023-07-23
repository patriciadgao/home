import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MenuPage } from './components/MenuPage';
import { Sidebar } from './components/Sidebar';
import { About } from './components/pages/about/About';
import { CollageBook } from './components/pages/collagebook/CollageBook';
import { Home } from './components/pages/home/Home';
import { OtherAdventures } from './components/pages/otheradventures/OtherAdventures';
import { Poetry } from './components/pages/poetry/Poetry';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="flex items-stretch min-h-screen text-slate-600">
        <BrowserRouter>
          <Sidebar isMenuOpen={isMenuOpen} />
          <Routes>
            <Route path="/" element={<MenuPage onMenuClick={() => setIsMenuOpen(!isMenuOpen)}><Outlet /></MenuPage>}>
              <Route path="about" element={<About />} />
              <Route path="collagebook" element={<CollageBook />} />
              <Route path="poetry" element={<Poetry />} />
              <Route path="otheradventures" element={<OtherAdventures />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;