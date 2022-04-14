
import './App.css';
import {Container, Col, Row, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [brk, setBrk] = useState(0)
  const [session, setSession] = useState(0)

  return (
    <Container>
      <Row>
        <Col>25 + 5 Clock</Col>
      </Row>
      <Row> 
        <Col id="break-label">Break</Col>
        <Col id="session-label">Session</Col>
      </Row>
      <Row>
        <Col>
          <Button id="break-decrement"></Button>
          <Col id="break-length">5</Col>
          <Button id="break-increment"></Button>
        </Col>
        <Col>
          <Button id="session-decrement"></Button>
          <Col id="session-length">25</Col>
          <Button id="session-increment"></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
