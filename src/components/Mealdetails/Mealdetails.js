import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';

const Mealdetails = (props) => {
    const {mealId}=useParams();
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data.meals))
    },[])
    console.log(mealId);

    return (
        <div>
            {
                details.map(detail=><Detail
                    key={detail.idMeal}
                    detail={detail}></Detail>)
            }
        </div>
    );
};

export default Mealdetails;