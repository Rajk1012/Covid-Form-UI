import React from "react"
import { directive } from "lit-html"
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
function home(){
    return(
        <div >
          <h1>Home Page</h1>
          <button  type="primary">
             <Link to="/form" class="link">New Patient</Link>
        </button>
        </div>
    )
    
}
export default home