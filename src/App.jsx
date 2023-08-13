
import Header from './components/layouts/Header'
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home'
import Productos from './components/pages/Productos'
import Servicios from './components/pages/Servicios'
import Nosotros from './components/pages/Nosotros'
import Contactanos from './components/pages/Contactanos'

import './App.css'
import '../src/styles/components/layout/header.css'
import './styles/components/layout/nav.css'
import './styles/components/layout/footer.css'
import './styles/components/pages/home.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">

      <Header />
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/Productos' element={<Productos/>} />
        <Route path='/Servicios' element={<Servicios/>} />
        <Route path='/Nosotros' element={<Nosotros/>} />
        <Route path='/Contactanos' element={<Contactanos/>} />
     </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  )
}

export default App
