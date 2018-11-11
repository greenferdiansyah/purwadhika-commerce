import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/Header";
import MyTab from "./components/tab";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12">
              <Header />
              <MyTab />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;