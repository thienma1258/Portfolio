import { Container, Form, Button, FloatingLabel } from "react-bootstrap";

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
          <Form.Group
            className="mb-3 margin-botton-2em"
            controlId="formPlaintextEmail"
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="Email" placeholder="name@example.com" />
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
              <Form.Control type="message" placeholder="Name" />
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
            />
          </Form.Group>
          <Button  variant="primary"  type="submit" className="align-items-right primary">
            Submit form
          </Button>
          <div className="clear"></div>
        </Form>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
