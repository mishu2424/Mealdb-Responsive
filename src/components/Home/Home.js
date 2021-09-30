import { Button } from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Staff from '../Staff/Staff';

const Home = () => {
    const [members,setMembers]=useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5000')
        .then(res=>res.json())
        .then(data=>setMembers(data.results))
    },[])
    return (
        <div className="mt-2">
            <h4 className="text-center fw-bold bg-warning text-dark">Staff members</h4>
            <div>
                {
                    members?.length===0 ? <div className="d-flex justify-content-center align-items-center mt-5">
                        <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                    </div>:
                   <Container>
                   <Row xs={1} md={4} className="g-4">
                   {
                   members?.map(member=><Staff 
                    key={member.location.street.number}
                    staff={member}></Staff>)
                   }
                   </Row>
               </Container>
                
                }
            </div>
           
            
        </div>
    );
};

export default Home;