import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
          <PeopleFill/>
          <h1>Mutiple Users</h1>
          <h5>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</h5>
      </Col>

      <Col xs={4}>
        <h1>Welcome to this template</h1>
        <p>Now get to work and modify this app!</p>
      </Col>

        <Col xs={4}>
            <Image roundedCircle src="/images/meteor-logo.png" width="150px" />
        </Col>

    </Row>
  </Container>
);

export default Landing;
