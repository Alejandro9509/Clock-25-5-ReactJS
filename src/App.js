
import './App.css';
import {Container, Col, Row, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

let interval

class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brk: 5, 
      session: 25, 
      currentSession: 25, 
      currentSeconds: 60, 
      isPlay: false
    }
  }

  clearTimeOut() {
    clearInterval(interval)
    this.setState({
      currentSession: this.state.session, 
      currentSeconds: 60, 
      isPlay: false
    })
  }
  startTimeOut(){
      
      if(this.state.isPlay)
      {
        return
      }
      interval = setInterval(() => {

        this.setState({
          currentSeconds: (this.state.currentSeconds > 1)?this.state.currentSeconds - 1: 60  
        })
        if(this.state.currentSeconds === 60) {
          this.setState({
            currentSession: (this.state.currentSession === 0)? this.state.brk - 1: this.state.currentSession - 1
          })
        }
      }, 1000); 
      return () => clearInterval(interval)
  }
 
  render() {
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
            <Button onClick={() => this.setState({
              brk: this.state.brk + 1
            })} id="break-decrement"></Button>
            <Col id="break-length">{this.state.brk}</Col>
            <Button onClick={
              () => this.setState({
                brk: this.state.brk - 1
              })
            } id="break-increment"></Button>
          </Col>
          <Col>
            <Button onClick={() => {
              this.clearTimeOut()
              this.setState({
                session: this.state.session + 1,
                currentSession: this.state.session + 1
              }) 
              
            }} id="session-decrement"></Button>
            <Col id="session-length">{this.state.session}</Col>
            <Button onClick={() => {
              this.clearTimeOut()
              if(this.state.session === 0){
                return 
              }
              this.setState({
                session: this.state.session -1,
                currentSession: this.state.session -1
              }) 
            }} id="session-increment"></Button>
          </Col>
        </Row>
        <Row>
          <Col id="timer-laberl">
            Session
          </Col>
          <Col id="time-left" dangerouslySetInnerHTML={{ __html: this.state.currentSession + ":" + ((this.state.currentSeconds === 60)
                                                                                                     ? '00' 
                                                                                    : (this.state.currentSeconds < 10)? "0"+this.state.currentSeconds : this.state.currentSeconds )}}>
          </Col>
        </Row>
        <Row> 
          <Col>
            <Button onClick={() => {
             this.startTimeOut()
             this.setState({
               isPlay: true
             })
            }}> Iniciar </Button>
            <Button onClick={() => {
              clearInterval(interval)
              this.setState({
                isPlay: false
              })
            }}> Pausa </Button>
            <Button onClick={() => {
             this.clearTimeOut() 
            }}>Detener</Button>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default App;
