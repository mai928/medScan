import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Services from "./Pages/Services"
import AboutUs from "./Pages/AboutUs"

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/services" element={<Services/>}/>
     <Route path="/about" element={<AboutUs/>}/>
     </Routes>
     <Footer/>
   </BrowserRouter>
  )
}

export default App
