import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from "./componets/pages/Home"
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'


function App() {
  
  return (
    <Router>
      <ul>
       <li>Home</li>
       <li>Contact</li>

      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Company" element ={<Company/>} />
        <Route path="/Contact" element ={<Contact/>} />
        <Route path="/NewProject'" element ={<NewProject/>} />
      </Routes>
   
      <p>Footer</p>
    

</Router>
  );
}

export default App;
