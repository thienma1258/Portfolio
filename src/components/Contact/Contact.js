import { Container, Form, Button,FloatingLabel } from "react-bootstrap";

const GetInTouchSection = () => {
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

        <Form>
          <Form.Group  className="mb-3" controlId="formPlaintextEmail" class ="margin-botton-2em">
          <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formPlaintextEmail" class ="margin-botton-2em">
          <FloatingLabel
    controlId="floatingInput"
    label="name"
    className="mb-3"
  >
    <Form.Control type="message" placeholder="name"  />
  </FloatingLabel>
          </Form.Group>
          <Form.Group
          className="mb-3 margin-botton-2em"
          controlId="formPlaintextPassword"
        >
          <Form.Label column sm="2">
            Message
          </Form.Label>
          <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
        </Form.Group>
        <Button type="submit"  className="align-items-right" >Submit form</Button>
        <div class ="clear"></div>
        </Form>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
