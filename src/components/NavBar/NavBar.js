import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Accounts } from "../AWSAuth/Accounts";
import Login from "../AWSAuth/Login";
import Settings from "../AWSAuth/Settings";
import SignUp from "../AWSAuth/SignUp";
import Status from "../AWSAuth/Status";

const routes = [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/signup",
      component: SignUp
    },
    {
      path: "/settings",
      component: Settings
    }
  ];

const NavBar = () => {
return (
    <>
        <Navbar bg="light" expand="lg">
            <Container> 
                <Navbar.Brand href="#home">Coin Nepal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#link">Luck Draw</Nav.Link>
                    <Nav.Link href="#link">Cryptocurrencies</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">News</Nav.Link>
                    <Nav.Link href="#link">Marketplace</Nav.Link>
                    <Nav.Link href="#link">Events</Nav.Link>

                    
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Accounts>
                                <Status />
                            </Accounts>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);
}

export default NavBar;