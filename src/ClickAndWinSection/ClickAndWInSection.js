import { Button, Card, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

const ClickAndWinSection = (props) => {

    const style = {
        textAlign: "center"
    }

    var participants = props.participants;

    
    
return (
    <>
        <Card style={style}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#luckydraw">
                <Nav.Item>
                    <Nav.Link href="#first">Click & Win</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#luckydraw">Luck Draw</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#exchange">Coin Exchange</Nav.Link>
                </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Lucky Draw Winner</Card.Title>
                    <Card.Text>
                        Winner: {participants[winner].name}
                        <p>
                            Price: {participants[winner].Age}
                        </p>
                        Friday, 19 Feb 
                    </Card.Text>
                    <Button variant="success">Draw Now</Button>
            </Card.Body>
        </Card>
    </>
);
}

export default ClickAndWinSection;