import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Staff = (props) => {
    return (
        <div>
            <Col>
            <Card style={{ width: '300px',height:'650px' }}>
          <Card.Img variant="top" src={props.staff?.picture.medium} />
       <Card.Body>
        <Card.Title>{props.staff?.name.title} {props.staff?.name.first} {props.staff?.name.last}</Card.Title>
        <Card.Text>
        {props.staff?.location.timezone.description}
       </Card.Text>
     </Card.Body>
     <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
     </ListGroup>
    <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
     </Card>
            </Col>
        </div>
    );
};

export default Staff;