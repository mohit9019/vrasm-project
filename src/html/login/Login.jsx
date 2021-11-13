import Navba from "../home/Navba";
import Footer from "../home/Footer";
import {Form, Button,} from "react-bootstrap";
import "../../css/login/Login.css";
function Login(){
    return(
        <>
        <Navba />
          <div className="log">  <Form>
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree with Terms & Conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></div>
        </>
    );
}
export default Login;