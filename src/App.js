import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Accounts } from "./components/AWSAuth/Accounts";
import Login from "./components/AWSAuth/Login";
import SignUp from "./components/AWSAuth/SignUp";
import Settings from "./components/AWSAuth/Settings";
import NavBar from "./components/NavBar/NavBar";




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      luckyDrawParticipant: [
        {name: "BTC", Age: "55000"},
        {name: "ETH", Age: "1950"},
        {name: "ADA", Age: "1"}
      ]
    }
  };

  // coinMarketCapApi = () => {

  //   const uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  //   // "Access-Control-Allow-Origin": "*", // allow requests from any other server
  //   // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',// allow these verbs
  //   // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Cache-Control",
  //   const headers = {
  //     "Access-Control-Allow-Origin": "*",
  //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  //     "Content-Type": "application/json",
  //     'X-CMC_PRO_API_KEY': 'd5f4226f-ded7-4d1a-8bb4-cbeb7549850b'
  //   }

  //   fetch(uri, { headers })
  //       .then(response => response.json())
  //       .then(data => console.log(data));

  // }
  
  render() {
    // this.coinMarketCapApi();
    return (
      <>
        <NavBar />
        {/* <HeroSection/> */}
        <Container>
          <Row>
          <Col>
          <Accounts>
            <SignUp />
          </Accounts>
          </Col>
          <Col>
            <Accounts>
              <Login />
            </Accounts>
          </Col>
          </Row>
          <Row>
            <Col>
              <Accounts>
                <Settings />
              </Accounts>
            </Col>
          </Row>
        </Container>

          {/* <ClickAndWinSection participants = {this.state.luckyDrawParticipant}/> */}
      </>
    );
    }
}

export default App;
