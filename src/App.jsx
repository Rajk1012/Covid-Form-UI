import React from 'react'
import list from './list'
import home from './home'
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Registration from './form'
import './App.css'

function App(){
  return(
    <>
    <BrowserRouter> 
    <nav>
          <ul>
            <li>
              <Link to="/home" className="link">Home</Link>
            </li>
            <li>
              <Link to="/form" className="link">Registration Form</Link>
              </li>
            <li>
              <Link to="/list" className="link">Patients</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route  path="/form" component={Registration} />
        <Route path="/home" component={home}/>
        <Route path="/list" component={list}/>
        <Route path="/" component={home}/>
      </Switch>             
    </BrowserRouter>
   </>
  )
}

export default App