import React, { useState } from "react";
import { ReactDOM } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from "axios";

export default () => {

    const[id,useId] = useState(0);

    const handleCLick = async (e) => {

        e.preventDefault();

        try{
            console.log(id);
            const resp = await axios.get("http://localhost:3000/patient/search?AdhaarNo=1");
        }
        catch(e){
            
        }
        

    }

    

    return(
        <div >
            <Form style={{width:"50%"}} onSubmit={handleCLick}>
                <Form.Label style={{textAlign:"center"}}> Aadhaar of Patient</Form.Label>
                <Form.Control  onChange={(e) => {useId(e.target.value)}} required name="id" type="number" placeholder="Enter Aadhaar Number of Patient" />
                <br></br>
                    <Button variant="primary" type="submit">Submit</Button>
                <br></br>
            </Form>
        </div>
    )

}

 