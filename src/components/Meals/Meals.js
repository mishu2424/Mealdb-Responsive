import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form, FormControl, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText,setSearchText]=useState('')
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
        `)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText])
    const handlerSearch=event=>{
        const searchedText=event.target.value;
        setSearchText(searchedText);
    }
    return (
        <div className="mt-4">
            {/* <h5>hello!</h5> */}
            <Form className="d-flex justify-content-center">
        {/*   <FormControl
           type="search"
           placeholder="Search your foods"
           className="me-auto"
           aria-label="Search"
           onChange={handlerSearch}
        /> */}
        <input style={{
            width:'75%'
        }} placeholder="Search your foods"
         onChange={handlerSearch}
          type="search" />
        <Button variant="outline-primary ms-1">Search</Button>
      </Form>
      <div>
          <Container>
      <Row xs={1} md={3} className="g-4 mt-3">
          {
              meals?.map(meal=><Meal 
                key={meal.idMeal}
                meal={meal}></Meal>)
          }
     </Row>
     </Container>
      </div>
        </div>
    );
};

export default Meals;