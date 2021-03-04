import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

var heroSectionStyle = {


}
const HeroSection = () => {
return (
    <>
        <Row>
            <Col xs={8}>
            <Card className="text-center">
                <Card.Header>Last Draw</Card.Header>
                <Card.Body>
                    <Card.Title>$400 Cash Prize</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Buy Ticket</Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
            </Col>
            <Col xs={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Recent Winners</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
);
}

export default HeroSection;