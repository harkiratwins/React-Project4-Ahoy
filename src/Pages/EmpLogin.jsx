import React from "react";
import logo1 from "../images/logo1.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const EmpLogin = () => {
  const [Show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="ui center aligned middle aligned grid common-form">
      <div className="column cmn-shad">
        <h3 style={{fontFamily:'sans-serif'}}>Employee Login</h3>
        <img
          title="Always Another Wave"
          alt="Always Another Wave"
          src={logo1}
          className="ui tiny centered image"
        />
        <form className="ui large form">
          <div className="field">
            <label>Email</label>
            <div textalign="left" data="txtEmail" className="ui fluid input">
              <input
                name="txtEmail"
                placeholder="Email Address"
                type="text"
                aria-invalid="true"
              />
            </div>
            {/* <div
              role="alert"
              aria-atomic="true"
              className="ui red pointing above basic prompt label"
            >
              The email field is required.
            </div> */}
          </div>
          <div className="field">
            <label>Password</label>
            <div data="txtPassword" className="ui fluid input">
              <input
                name="txtPassword"
                placeholder="Password"
                type="password"
                aria-invalid="true"
              />
            </div>
            {/* <div
              role="alert"
              aria-atomic="true"
              className="ui red pointing above basic prompt label"
            >
              The password field is required.
            </div> */}
          </div>
          <div className="ui grid">
            <div className="left aligned eight wide column">
            </div>
            <div className="right aligned eight wide column">
              <p
                className="orange-color forget_password_css"
                onClick={() => setShow(true)}
              >
                Forgot Password?
              </p>
            </div>

            <div className="right aligned sixteen wide column">
              <button className="ui button orange-btn">Log in</button>
            </div>
            <div className="left aligned eight wide column">
            <a className="maroon-color" href="/Passcode">
           <span role="img" name="mail outline" className="anticon"></span>
              Passcode Login
            </a>
          </div>
          <div className="right aligned eight wide column">
            <a className="maroon-color" href>
              Exit Main App
            </a>
          </div>
          </div>
        </form>
        <Modal
          size="sm"
          show={Show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          className="modalHeight"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm" className="px-3">
              Reset Password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="px-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="mbt">Enter email to reset password</Form.Label>
                <Form.Control type="email" placeholder="E-mail address" />
              </Form.Group>
            </Form>
            <Button className="ui button orange-btn" onClick={handleClose}>
              Send
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default EmpLogin;
