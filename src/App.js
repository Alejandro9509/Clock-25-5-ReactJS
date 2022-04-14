
import './App.css';
import {Container, Col, Row} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Container></Container>
      <Container>
        <Row> 
          <Col id="break-label"></Col>
          <Col id="session-label"></Col>
        </Row>
      </Container>
      <Container></Container>
    </Container>
  );
}

export default App;
