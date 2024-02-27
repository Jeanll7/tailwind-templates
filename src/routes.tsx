
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { MenuLeft } from './pages/MenuLeft';
import { MenuFooter } from './pages/MenuFooter';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/menuleft" element={ <MenuLeft /> } />
        <Route path="/menufooter" element={ <MenuFooter /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;

