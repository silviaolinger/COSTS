import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./componets/Pages/Home"
import Company from './componets/Pages/Company'
import Contact from './componets/Pages/Contact'
import NewProject from './componets/Pages/NewProject'
function App() {
  return (
    <Router>
      <ul>
      <li>Home</li>
      <li>Contact</li>
      </ul>
      <Switch>
        
        <Route exact path="/">
          <Home/>
           </Route>
           <Route exact path="/Company">
          <Company/>
           </Route>
           <Route exact path="/Contact">
          <Contact/>
          </Route>
          <Route exact path="/NewProject">
          <NewProject/>
           </Route>
           

      </Switch>
      <p>Footer</p>
    </Router>

  )
}

export default App;
