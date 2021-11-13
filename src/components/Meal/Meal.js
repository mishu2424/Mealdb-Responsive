import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './Meal.css'
const Meal = (props) => {
   const {idMeal}=props.meal;
    return (
        <>
            
 
    <Col>
      <Card>
        <Card.Img variant="top" src={props.meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{props.meal.strMeal}</Card.Title>
          <Card.Text>
           {props.meal.strInstructions.slice(0,20)}
          </Card.Text>
          <Link to={`/meal/${idMeal}`}>Details</Link>
          <br />
          <Link to={`/meal/${idMeal}`}>
          <Button  variant="primary">Details</Button>
          </Link>
        </Card.Body>
        <Rating className="ms-3" 
           emptySymbol="far fa-star design"
           fullSymbol="fas fa-star design"            
           initialRating={3}/>

      </Card>
    </Col>
        </>
    );
};

export default Meal;