import { Container, Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import { useState, useRef } from "react";
import { send } from "emailjs-com";
import { EMAIL_JS_CONFIG } from "../../config/config";


const GetInTouchSection = () => {
  const form = useRef();

  const [toSend, setToSend] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [enableSubmit, setEnableSubmit] = useState(true);
  const [notification, setNotification] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      toSend.email.length === 0 ||
      toSend.name.length === 0 ||
      toSend.message.length === 0
    ) {
      setNotification("please fill our form");
      return;
    }
    setEnableSubmit(false);
    send(
      EMAIL_JS_CONFIG.serviceID,
      EMAIL_JS_CONFIG.templateID,
      toSend,
      EMAIL_JS_CONFIG.userID
    ).then(
      (result) => {
        setNotification("Submit success.Please wait until I contact you");
      },
      (error) => {
        console.log(error.text);
        setNotification(
          "Submit fail.Please directly email through my personal email cpud1258@gmail.com"
        );
      }
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Get in Tounch </strong>
        </h1>
        <p style={{ color: "white" }}>
          For business inquiries and collaborations please contact me below and
          leave a link to your website or portfolio. I am looking forward to
          hearing from you!
        </p>

        <Form ref={form} onSubmit={onSubmit}>
          <Form.Group
            className="mb-3 margin-botton-2em"
            controlId="formPlaintextEmail"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="Email"
                onChange={handleChange}
                name="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            className="mb-3 margin-botton-2em"
            controlId="formPlaintextEmail"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="message"
                onChange={handleChange}
                name="name"
                placeholder="Name"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            className="mb-3 margin-botton-2em"
            controlId="formPlaintextPassword"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              name="message"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            disabled={!enableSubmit}
            variant="primary"
            type="submit"
            className="align-items-right primary margin-botton-2em"
          >
            Submit form
          </Button>
          {notification.length > 0 ? <Alert className="alert-notification">{notification}</Alert> : ""}
        </Form>
        <div className="clear"></div>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
