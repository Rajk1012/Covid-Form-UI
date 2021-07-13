import React, { useState } from "react";
import { ReactDOM } from "react";
import { Button, Col, Form, Row ,Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import axios from "axios";

export default () => {

    const[id,useId] = useState(0);
    const[data,useData] = useState()
    const handleCLick = async (e) => {

        e.preventDefault();

        try{
            const url = "http://localhost:5000/patient/search?AdhaarNo="+id;
            const resp = await axios.get(url);

            if(resp.status === 200){
                useData(resp.data);
            }

            else if(resp.status === 204){
                alert("No Such Patient")
            }
            console.log(resp.data);
        }
        catch(e){
            console.log(e);
        }
        

    }

    const card = () => {
        if(data){
            return(
                <Card style={{width:"50rem"}} className="bg-dark">
                    <Card.Header className="bg-secondary" style={{fontSize:"2rem",textAlign:"center",color:"white"}}>{data.Name}</Card.Header>
                    <Card.Body>
                        <div className="d-flex justify-content-center align-items-center text-white-50">
                            <p className="ml-2" style={{fontSize:"2rem"}} >{data.AdhaarNo}</p>
                            <br></br>
                        </div>

                        <ListGroup className="list-group-flush ">
                            <Row>
                                <Col>
                                    <ListGroupItem className="m-1">Gender : {data.Gender}</ListGroupItem>
                                </Col>
                                <Col>    
                                    <ListGroupItem className="m-1">Age : {data.Age}</ListGroupItem>
                                </Col>
                                <Col>
                                    <ListGroupItem  className="m-1" >Contact : {data.Contact}</ListGroupItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <ListGroupItem className="m-1" >Covid Test : {data.CovidTest}</ListGroupItem>
                                </Col>

                                <Col>
                                    <ListGroupItem className="m-1" >Immunization : {data.Immunization}</ListGroupItem>
                                </Col>

                                <Col>
                                    <ListGroupItem className="m-1">SPO2 Level : {data.SPO2}</ListGroupItem>
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <ListGroupItem className="m-1" style={{textAlign:"center"}}>Address : {data.PlaceofLiving}</ListGroupItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <ListGroupItem className="m-1" style={{textAlign:"center"}}>Medication : {data.Medication}</ListGroupItem>
                                </Col>
                        
                                <Col>
                                    <ListGroupItem className="m-1" style={{textAlign:"center"}}>Cormebodies : {data.Cormebodies}</ListGroupItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <ListGroupItem className="m-1" style={{textAlign:"center"}}>Symptoms : {data.Symptoms}</ListGroupItem>
                                </Col>
                            </Row>
                            
                        </ListGroup>
                        
                    </Card.Body>
                    </Card>
            )
        }
    }

    



    return(
        <div className="d-flex justify-content-center flex-column align-items-center">
            <Form style={{width:"30%"}} className="d-flex flex-column" onSubmit={handleCLick}>
                <Form.Label style={{textAlign:"center"}}> Aadhaar of Patient</Form.Label>
                <Form.Control style={{textAlign:"center"}}  onChange={(e) => {useId(e.target.value)}} required name="id" type="number" placeholder="Enter Aadhaar Number of Patient" />
                <br></br>
                    <Button variant="primary" type="submit">Submit</Button>
                <br></br>
            </Form>
            <div>
                {card()}
            </div>
        </div>
    )

}

 