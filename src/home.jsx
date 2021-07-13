import React from "react"
import './App.css'
import { directive } from "lit-html"
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Registration from "./form"
function home(){
    return(
        <div >
          <h1>Home Page</h1>
          <sl-button  type="primary">
             <Link to="/form" class="link">New Patient</Link>
        </sl-button>
        </div>
    )
    
}
export default home