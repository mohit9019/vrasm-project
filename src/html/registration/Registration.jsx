import Navba from "../home/Navba";
import { Form, Col, Row, Button, } from "react-bootstrap";
import "../../css/registration/Registration.css";
import Preview from "../preview/Preview";
import React, { useState } from 'react';

function Registration() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="regist">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User-Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="Conform password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Address" />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>

            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="As a Buyer"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                onClick={() => setShow(false)}
              />
              <Form.Check
                type="radio"
                label="As a creator"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                onClick={() => setShow(true)}
              />
            </Col>
          </Form.Group>

          {show ? <div className="live">
            <Form.Group className="mb-3">
              <Form.Label>College Name</Form.Label>
              <Form.Control type="text" placeholder="College Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" placeholder="Course" />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>College ID</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </div> : null}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
export default Registration;