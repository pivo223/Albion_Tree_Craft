import React, { Component } from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { Checkbox, Row, Col, Input, Button } from 'antd';
=======
import { Checkbox, Row, Col, Input, Button } from "antd";
>>>>>>> 4365abe7ab06c249998796925984c789e1c5ce35
import Town from "./components/towns/town";
import Tier from "./components/tiers/tier-resourse";
import Resourse from "./components/resourses/resourse";
import { Fort } from "./components/towns/town";
import "./index.css";
import "antd/dist/antd.css";

class App extends Component {
<<<<<<< HEAD


  valueSelectTown = (valTown) => {
    this.setState({ town: valTown })
  
  }

  valueSelectRes = (valRes) => {
    this.setState({ res: valRes })
 
  }

  valueSelectTier = (valTier) => {
    this.setState({ tier: valTier })

  }
=======
  valueSelectTown = (valTown) => {
    this.setState({ town: valTown });
  };

  valueSelectRes = (valRes) => {
    this.setState({ res: valRes });
  };

  valueSelectTier = (valTier) => {
    this.setState({ tier: valTier });
  };
>>>>>>> 4365abe7ab06c249998796925984c789e1c5ce35

  valuePersent = () => {
    if (
      Fort.some(
        (element) =>
          JSON.stringify(element) ===
          JSON.stringify({ town: this.state.town, res: this.state.res })
      )
    ) {
      this.setState({ persent: 35 });
    } else {
      this.setState({ persent: 15 });
    }
  };

  state = {
    town: undefined,
    res: undefined,
    persent: 15,
    tier: undefined,
  };
  render() {
<<<<<<< HEAD
    const { town, persent, res, tier } = this.state
   
    return (
      <div className="main-page">
        <Row style={{ border: "2px solid", padding: 10 ,margin: 3}} gutter={5}>
          <Col xs= {12} sm={12} md= {6}>
            <Town selectTown={this.valueSelectTown} valueTown={town} />
          </Col>
          <Col xs= {12} sm={12} md= {6}>
            <Resourse selectRes={this.valueSelectRes} valueRes={res} />
          </Col>
          <Col xs= {12} sm={12} md= {6}>
            <Button style={{ backgroundColor: "#ffffff", color: "red", textAlign: "center", width: "auto" }}
              onClick={() => { this.valuePersent() }}>{"Посчитать % возврата " + persent}</Button >
          </Col>
          <Col xs= {12} sm={12} md= {6}>
=======
    const { town, persent, res, tier } = this.state;
    console.log(this.state);
    return (
      <div className="main-page">
        <Row style={{ border: "2px solid", padding: 10 }} gutter={5}>
          <Col xs={12} sm={12} md={6}>
            <Town selectTown={this.valueSelectTown} valueTown={town} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Button
              block
              style={{
                backgroundColor: "#ffffff",
                color: "red",
                textAlign: "center",
              }}
              onClick={() => {
                this.valuePersent();
              }}>
              {"Посчитать % возврата " + persent}
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Resourse selectRes={this.valueSelectRes} valueRes={res} />
          </Col>
          <Col xs={12} sm={12} md={6}>
>>>>>>> 4365abe7ab06c249998796925984c789e1c5ce35
            <Tier selectTier={this.valueSelectTier} valueTier={tier} />
          </Col>
        </Row>
        <Row style={{ border: "2px solid", padding: 10,margin: 3 }} gutter={5}>
          <Col xs= {6} sm={6} md= {3}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "auto" }}
              type="text"
              placeholder="Вводим количество"
            />
          </Col>
          <Col xs= {6} sm={6} md= {3}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "auto" }}
              type="text"
              placeholder="Результат подсчета готового ресурса"
              disabled
            />
          </Col>
<<<<<<< HEAD
          <Col xs= {3} sm={3} md= {2}>
            <Checkbox.Group style={{ width: 'auto' }}>
=======
          <Col span={2}>
            <Checkbox.Group style={{ width: "auto" }}>
>>>>>>> 4365abe7ab06c249998796925984c789e1c5ce35
              <Checkbox value="Х">Раскрыть дерево</Checkbox>
            </Checkbox.Group>
          </Col>
          <Col xs= {6} sm={6} md= {3}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "auto" }}
              type="text"
              placeholder="результат подсчета обычного ресурса"
              disabled
            />
          </Col>
          <Col xs= {6} sm={6} md= {3}>
            <Input
              className="form-control"
              style={{ margin: 30, width: "auto" }}
              type="text"
              placeholder="результат после переработки % от городов"
              disabled
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
