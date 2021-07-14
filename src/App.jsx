import React from 'react'
import home from './components/home/home'
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Registration from './components/form/form'
import Info from "./components/getinfo/getinfo"
import './App.css'

function App(){
  return(
    <>
    <BrowserRouter> 
    <nav style={{
          position: "sticky",
          top: "0",
          zIndex: "1020"
    }}>
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/form" className="link">Registration Form</Link>
              </li>
            <li>
              <Link to="/info" className="link">Patients</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
      <Switch>
        <Route  path="/form" component={Registration} />
        <Route path="/info" component={Info}/>
        <Route path="/" component={home}/>
      </Switch>      
      </div>       
    </BrowserRouter>

    </>
     
  )
}

export default App