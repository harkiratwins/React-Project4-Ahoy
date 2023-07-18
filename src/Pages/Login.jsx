import logo1 from "../images/logo1.png";
import { Checkbox } from "semantic-ui-react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const [Show, setShow] = useState(false);
  const [details, setDetail] = useState([]);
  const [loader, setLoader] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigater = useNavigate();
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      event.stopPropagation();
      setValidated(true);

    }
     
    else 
    
    {
      setValidated(true);
      setLoader(true);

      
      let person = {
        emailId,
        password,
      };
      console.log(person);

      setDetail([...details, person]);

      const personData = {
        businessId: "4",
        emailId: emailId,
        applicationId: "58",
        password: password,
        ipAddress: "string",
        rememberMe: true,
        isEmployee: true,
      };
      console.log(personData);

      axios
        .post(
          "https://rehntitapistaging.azurewebsites.net/api/Auth/Login",
          personData
        )
        .then((response) => {
          navigater("/Passcode");
          setMessages(response.data.responseMessage);
          console.log(messages);
          setLoader(false);

          localStorage.setItem("message", response.data.responseMessage);
        })
        .catch((error) => {
          setLoader(false);
          toast.error(error.response.data.responseMessage, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  function handleForgot() {
    console.log("hghfd");

    const forgotData = {
      businessId: 4,
      emailId: emailId,
    };

    console.log(forgotData);
    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPassword",
        forgotData
      )
      .then((response) => {
        console.log(response);
        setLoader(false);
        toast.success(response.data.responseMessage, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
      })
      .catch((error)=>{
        console.log(error);
        toast.error(error.response.data.responseMessage, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoader(false);
      });
  }

  return (
    <div class="ui center aligned middle aligned grid common-form">
      <div className="column cmn-shad">
        <img
          title="Always Another Wave"
          alt="Always Another Wave"
          src={logo1}
          className="ui tiny centered image"
        />
        <form
          className="ui large form"
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label>Email</label>
            <div textalign="left" data="txtEmail" className="ui fluid input">
              <input
                id="form-input-control-error-email"
                name="emailId"
                placeholder="Email Address"
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={emailId}
              />
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div data="txtPassword" className="ui fluid input">
              <input
                name="password"
                placeholder="Password"
                type="password"
                aria-invalid="true"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="ui grid">
            <div className="left aligned eight wide column">
              <div className="field custome-checkbox">
                <Checkbox label="Remember me" />
              </div>
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
              <Button
                className="button"
                variant="danger"
                type="submit"
                style={{
                  borderRadius: "20px",
                  width: "90px",
                  height: "36px",
                  border: "1px solid #f54952",
                }}
              >
                {!loader ? (
                  <span>Login</span>
                ) : (
                  <Spinner
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "379px",
                    }}
                    animation="border"
                    size="sm"
                  />
                )}
              </Button>
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
                <Form.Label className="mbt">
                  Enter email to reset password
                </Form.Label>
                <Form.Control
                  type="email"
                  name="emailId"
                  value={emailId}
                  placeholder="E-mail address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Button className="ui button orange-btn" onClick={handleForgot}>
              {!loader ? (
                <span>Send</span>
              ) : (
                <Spinner
                  style={{ position: "absolute", bottom: "23px", left: "38px" }}
                  animation="border"
                  size="sm"
                />
              )}
            </Button>
          </Modal.Body>
        </Modal>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Login;
