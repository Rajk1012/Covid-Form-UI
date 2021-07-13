import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios'

const Registration = () => {

    const[form,setForm] = useState({
        name:"",
        age:0,
        gender:"Male",
        covidTest:"None",
        immunization:"None",
        address:"",
        contact:0,
        adhaar:0,
        symptoms:"",
        medication:"",
        cormobodities:"",
        allergies:"",
        spO2:0
    
    });
    
      
    const handleSubmit = async (e) =>
    {
        const resp = await axios.post("",{

            "Name": form.name,
            "AdhaarNo": form.adhaar,
            "Age": form.age,
            "Contact": form.contact,
            "Medication": form.medication,
            "Symptoms": form.symptoms,
            "CovidTest": form.covidTest,
            "PlaceofLiving": form.address,
            "Gender": form.gender,
            "Immunization": form.immunization,
            "Allergy": form.allergies,
            "Cormebodies": form.cormobodities,
            "SPO2": form.spO2

        });
    }

  return (    
<div className="form">
    <h1 className="Header">Registration Form</h1>
    
  <Form className="Form" onSubmit={handleSubmit}> 

    <Row className="mb-1">

        <Col>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => { setForm({...form,name:e.target.value})}} required name="name" type="text" placeholder="Enter name" />
            </Form.Group>
        </Col>

        <Col>
            <Form.Group >
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={(e) => {setForm({...form,age:e.target.value})}} required name="age" type="number" placeholder="Enter Age" />
            </Form.Group>
        </Col>


    </Row>

    <Row className="mb-3">
        <Col>
        <label for="gender">Gender</label>
            <Form.Control onChange={(e) => {setForm({...form,gender:e.target.value})}} as="select" name="gender" id="gender" className="dropdown">
                <option value="male" >Male</option>
                <option value="female" >Female</option>
                <option value="other" >Other</option>
            </Form.Control>
        </Col>

        <Col>
        <label for="covid">Covid Test</label>
            <Form.Control as="select" onChange={(e) => {setForm({...form,covidTest:e.target.value})}} name="covid" id="covid" className="dropdown">
                <option value="none" >None</option>
                <option value="antigen" >Antigen</option>
                <option value="rtpcr" >RT-PCR</option>
            </Form.Control>
        </Col>

        <Col>
        <label for="immune">Immunization</label>
            <Form.Control as="select" onChange={(e) => {setForm({...form,immunization:e.target.value})}} name="immune" id = "immune" className="dropdown">
                <option value="none" >None</option>
                <option value="dose1" >Dose-1</option>
                <option value="dose2" >Dose-2</option>
            </Form.Control>

        </Col>
    </Row>

      <Form.Group >
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,address:e.target.value})}} required name="address" as="textarea" placeholder="Enter Address" rows={2} />
      </Form.Group>

    <Row className="mb-1" >
     <Col>
        <Form.Group controlId="contact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,contact:e.target.value})}} required name="contact" type="number" placeholder="Enter Mobile Number" />
        </Form.Group>
     </Col>
      
      <Col>
        <Form.Group controlId="adhar">
          <Form.Label>Aadhaar Number</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,adhaar:e.target.value})}} required name="adhar" type="number" placeholder="Enter Aadhaar Number" />
        </Form.Group>
      </Col>
    
    </Row>


    <Row>

    <Col>
      <Form.Group >
          <Form.Label>Symptoms</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,symptoms:e.target.value})}} name="symptoms" required placeholder="Enter Symptoms" as="textarea" rows={4} />
      </Form.Group>
    </Col>

    <Col>      
      <Form.Group >
          <Form.Label>Medication</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,medication:e.target.value})}} name="medication" as="textarea" rows={4} placeholder="Enter Medication" />
      </Form.Group>
    </Col>
    
    </Row>

    <Row>
    <Col>    
      <Form.Group >
          <Form.Label>Cormobodities</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,cormobodities:e.target.value})}} name="cormobodities" as="textarea" rows={4} placeholder="Cormobodities" />
      </Form.Group>
    
    </Col>
    <Col>
      <Form.Group >
          <Form.Label>Allergic to</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,allergies:e.target.value})}} name="allergy" as="textarea" rows={4} placeholder="Enter Allergies" />
      </Form.Group>
    </Col>

    </Row>  
      <Form.Group >

      <Form.Label>SpO2 level</Form.Label>
          <Form.Control onChange={(e) => {setForm({...form,spO2:e.target.value})}} required name="SpO2" type="number" placeholder="Enter the SpO2 level" />
      </Form.Group>     

      <br></br>
      <Button variant="primary" type="submit">Submit</Button>
      <br></br>
  </Form>
</div>
  )
}

export default Registration