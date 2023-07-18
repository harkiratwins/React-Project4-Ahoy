import logo1 from "../images/logo1.png";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Passcode = () => {
  let passcodeVal = "";
  const [passCode, setPassCode] = useState("");
  const location = useLocation();

  const Navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(true);

  console.log("location.key", location);
  const [Show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickBtn = (val) => {
    if (passCode.length > 5) return;
    passcodeVal = passCode + val;
    setPassCode(passcodeVal);
  };

  const handleClick = () => {
    setConfirmation(false);
  };

  useEffect(() => {
    if (!confirmation) {
      alert("Are you sure you want to go back?");

      Navigate("/");
    }
  }, [confirmation]);

  const passcodeTemplate = [];
  for (let i = 1; i <= 6; i++) {
    const length = passCode.length;
    console.log(passCode, length);
    let addClass = ""; //(i === length || i < length) ? 'active' : '';
    if (i === length || i < length) {
      addClass = "active";
    } else {
      addClass = "";
    }
    passcodeTemplate.push(<small className={`circle ${addClass}`}></small>);
    
  }

  const reset = () => {
    setPassCode("");
  };

  let b = localStorage.getItem("message");
  useEffect(() => {
    toast.success(b, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    localStorage.clear();
  }, []);

  function handleSubmit() {
    const payload = {
      businessId: 4,
      passcode: passCode,
    };

    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/Passcode",
        payload
      )
      .then((res) => {
        console.log(res);

        toast.success(res.data.responseMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(() => {
          Navigate("/dashboard");
        }, 2000);
      })

      .catch((error) => {
        console.log(error);

        if (error) {
          toast.error(error.response.data.responseMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  }

  return (
    <div className="ui center aligned middle aligned grid common-form">
      <div className="column cmn-shad">
        <img
          title="Always Another Wave"
          alt="Always Another Wave"
          src={logo1}
          className="ui tiny centered image"
        />
        <br></br>
        <div className="ui center aligned grid">
          <div className="row">
            <div className="sixteen wide column">
              <p>Enter Passcode</p>
              <br />
              <div className="col d-flex justify-content-center ms-4 gap-2">
                {passcodeTemplate}
              </div>
            </div>
            <div className="sixteen wide column">
              <div className="row d-flex justify-content-center mt-4 ">
                <div className="col-3     ">
                  <button
                    name="1"
                    onClick={() => handleClickBtn("1")}
                    className="passBtn"
                  >
                    1
                  </button>
                </div>
                <div className="col-3   ">
                  {" "}
                  <button
                    name="2"
                    onClick={() => handleClickBtn("2")}
                    className="passBtn "
                  >
                    2
                  </button>
                </div>
                <div className="col-3 ">
                  {" "}
                  <button
                    name="3"
                    onClick={() => handleClickBtn("3")}
                    className="passBtn"
                  >
                    3
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-3   ">
                  {" "}
                  <button
                    name="4"
                    onClick={() => handleClickBtn("4")}
                    className="passBtn"
                  >
                    4
                  </button>
                </div>
                <div className="col-3   ">
                  {" "}
                  <button
                    name="5"
                    onClick={() => handleClickBtn("5")}
                    className="passBtn"
                  >
                    5
                  </button>
                </div>
                <div className="col-3 ">
                  {" "}
                  <button
                    name="6"
                    onClick={() => handleClickBtn("6")}
                    className="passBtn"
                  >
                    6
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-3  ">
                  {" "}
                  <button
                    name="7"
                    onClick={() => handleClickBtn("7")}
                    className="passBtn"
                  >
                    7
                  </button>
                </div>
                <div className="col-3 ">
                  {" "}
                  <button
                    name="8"
                    onClick={() => handleClickBtn("8")}
                    className="passBtn"
                  >
                    8
                  </button>
                </div>
                <div className="col-3  ">
                  {" "}
                  <button
                    name="9"
                    onClick={() => handleClickBtn("9")}
                    className="passBtn"
                  >
                    9
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3 ">
                <div
                  className="col-3 "
                  onClick={() => reset()}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  clear
                </div>
                <div className="col-3 ">
                  {" "}
                  <button
                    name="0"
                    onClick={() => handleClickBtn("0")}
                    className="passBtn"
                  >
                    0
                  </button>
                </div>
                <div className="col-3 " style={{ color: "red" }}>
                  delete
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6    d-flex justify-content-end ">
              <button
                type="button"
                onClick={handleClick}
                style={{
                  borderRadius: "20px",
                  fontSize: "12px",
                  width: "75px",
                  backgroundColor: "	#4B0082",
                }}
                className="btn btn-danger btn-sm  "
              >
                {" "}
                back
              </button>
            </div>
            <div className="col-6    d-flex justify-content-start">
              <button
                type="button"
                onClick={() => handleSubmit()}
                style={{
                  borderRadius: "20px",
                  fontSize: "12px",
                  width: "75px",
                }}
                className="btn btn-danger btn-sm  "
              >
                {" "}
                Confirm
              </button>
            </div>
          </div>
          <div className="row btn-row">
            <div className="center aligned sixteen wide column">
              <a className="orange-color" onClick={() => setShow(true)} href>
                <b>Forgot Passcode?</b>
              </a>
            </div>
          </div>
          <div className="left aligned eight wide column">
            <a className="maroon-color" href="/">
              <i aria-hidden="true" className="mail outline icon"></i>
              Email Login
            </a>
          </div>
          <div className="right aligned eight wide column">
            <a className="maroon-color" href>
              Exit Main App
            </a>
          </div>
        </div>
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
                <Form.Control type="email" placeholder="E-mail address" />
              </Form.Group>
            </Form>
            <Button className="ui button orange-btn" onClick={handleClose}>
              Send
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
export default Passcode;
