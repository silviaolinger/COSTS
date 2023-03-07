
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'

 export default function App() {
  
  return (
    <BrowserRouter>
      <div>
      <Link to ="/"> Home</Link>
      <Link to ="/Contact"> Contact</Link>
      <Link to ="/Company"> Company</Link>
      <Link to ="/NewProject"> NewProject</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Company" element={<Company />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/NewProject" element={<NewProject />} />
      
      </Routes>
    </BrowserRouter>

  )
}

