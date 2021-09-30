import React from 'react';
import { useHistory } from 'react-router';

const Detail = (props) => {
    const history=useHistory();
    const handlerHistory=()=>{
        history.push('/meals')
    }
    return (
        <div>
            <h1>{props.detail.strMeal}</h1>
            <h3>{props.detail.strInstructions}</h3>
            <button onClick={handlerHistory} >Back to home!</button>
        </div>
    );
};

export default Detail;