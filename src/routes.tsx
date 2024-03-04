import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { MenuLeft } from './pages/MenuLeft';
import { MenuFooter } from './pages/MenuFooter';
import { FormPage } from './pages/FormPage';
import { NavHeader } from './components/NavHeader';
import { Login } from './pages/Login';
import { Image } from './pages/Image';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/menuleft" element={ <MenuLeft /> } />
        <Route path="/menufooter" element={ <MenuFooter /> } />
        <Route path="/form" element={ <FormPage /> } />
        <Route path="/navheader" element={ <NavHeader /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/image" element={ <Image /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;

