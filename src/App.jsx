
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Foster from './pages/Foster'
import Surrender from './pages/Surrender'
import Store from './pages/Store'
import Volunteer from './pages/Volunteer'
import Contact from './pages/Contact'

function App() {

  return (
    <>
     <Header/> 
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path ='/foster' element={<Foster/>} />
      <Route path ='/surrender' element={<Surrender/>} />
      <Route path ='/store' element={<Store/>} />
      <Route path ='/volunteer' element={<Volunteer/>} />
      <Route path ='/contact' element={<Contact/>} />





      

     </Routes>
     <Footer/>
    </>
  )
}

export default App
