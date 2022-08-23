
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Inputs(props) {
  


  const handle = () => {
    props.handler()
    
    
  }


  return (
    <>
    
  
    
      <InputGroup className="mb-3" style={{
          marginTop: "30px",
          width : "500px",
          height : "40px",
          marginLeft : "40%",
          
        }}>
        <Form.Control 
          value={props.demo} 
          onChange={(e)=>{props.sinput(e.target.value)}}
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2"  onClick={handle}>
          Add
        </Button>
      </InputGroup>
    

    
    
    </>
  );
}

export default Inputs ;