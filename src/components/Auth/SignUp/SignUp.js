import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts/Layout";
const SignUp = () => {
  return (
    <Layout>
      <Container className="py-5">
        <Row>
          <Col className="col-6 mx-auto">
            <h1 className="text-center mb-3">SignUp</h1>
            <Form>
              <Row>
                <Col className="col-6">
                  <Form.Group className="mb-3" controlId="fName">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your First Name"
                    />
                  </Form.Group>
                </Col>
                <Col className="col-6">
                  <Form.Group className="mb-3" controlId="lName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Last Name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-12">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-6">
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                </Col>
                <Col className="col-6">
                  <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-password" />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit">
                SignIn
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignUp;
