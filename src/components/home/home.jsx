import React from "react"
import { directive } from "lit-html"
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import {Button} from "react-bootstrap"

function home(){
    return(
    <div class="container mt-5" style={{display:"flex",justifyContent:"space-around"}}>
        <div>
        <Link to="/form" class="link">
            <Button variant="success">
                New Patient
            </Button>
        </Link>
        </div>

        <div>
        <Link to="/info" class="link">
            <Button variant="info">
                Get Patient Info
            </Button>
        </Link>
        </div>
        <div>
        <Link to="/post" class="link">
            <Button variant="success">
               Post Covid Care
            </Button>
        </Link>
        </div>
    </div>
    )
    
}
export default home