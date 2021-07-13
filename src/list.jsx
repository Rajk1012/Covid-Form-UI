import React from "react"
import './App.css'
import { directive } from "lit-html"
import Registration from './form'
import home from "./home"
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
function list(){
    function click(){
        console.log("hello");
    }
    return(

        <div >
         <h1 class="text-2xl">Patient List</h1>
              
         <sl-button onClick={click} type="primary">
             <Link to="/home" class="link">Back</Link>
             </sl-button>
          
        </div>
    )
}
export default list