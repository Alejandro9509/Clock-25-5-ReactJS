
import './App.css';
import {Container, Col, Row, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [brk, setBrk] = useState(5)
  const [session, setSession] = useState(25)
  const [currentSession, setCurrentSession] = useState(25) 
  const [currentSeconds, setCurrentSeconds] = useState(60)
  const [isPlay, setIsPlay] = useState(true)

  let interval; 
 
  useEffect(() => {
    if(isPlay){
      const interval = setInterval(() => {
        setCurrentSeconds(currentSeconds => currentSeconds -1)
      }, 1000); 
      return () => clearInterval(interval)
    }

  }, [isPlay])
 

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
          <Button onClick={() => setBrk(brk+1)} id="break-decrement"></Button>
          <Col id="break-length">{brk}</Col>
          <Button onClick={
            () => {
              setBrk((brk > 0 )? brk-1: brk)
            }
          } id="break-increment"></Button>
        </Col>
        <Col>
          <Button onClick={() => {
            
            setSession(session => session+1)
            
          }} id="session-decrement"></Button>
          <Col id="session-length">{session}</Col>
          <Button onClick={() => {
            setSession((session > 0) ? session -1: session)
          }} id="session-increment"></Button>
        </Col>
      </Row>
      <Row>
        <Col id="timer-laberl">
          Session
        </Col>
        <Col id="time-left" dangerouslySetInnerHTML={{ __html: currentSession + ":" + ((currentSeconds === 60)? '00' : currentSeconds )}}>
        </Col>
      </Row>
      <Row> 
        <Col>
          <Button onClick={() => setIsPlay(true)}> Iniciar </Button>
          <Button onClick={() => setIsPlay(false)}> Pausa </Button>
          <Button onClick={() => {
            setIsPlay(false)
            setCurrentSeconds(60)
            setCurrentSession(session)
          }}>Detener</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
