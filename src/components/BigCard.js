import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const BigCard = ({name,language,premiered,rating,image,summary}) =>{
    const [flag,setFlag]=useState(0);

    const handleSubmit =(e)=>{
        e.preventDefault();
        setFlag(0);
    }
    return (
        <div className='bigcard'>
            <img src={image}/>
            <div className='inbigcard'>
            <div className='name'>{name}</div>
            <div className='language'>{language}</div>
            <div className='premiered'>Priemered: {premiered}</div>
            <div className='rating'>Rating: {rating}</div>
            <div className='summary'>summary: {summary}</div>
            <Link to='/' className='button'>Go Back</Link>
            {
                flag===0 ? <button className='button bgblue' onClick={()=>{setFlag(1)}}>Book Ticket</button> : <br/>
            }
            
            {
                flag ? 
                <form onSubmit={handleSubmit}>
                <div className='formfield'>
                    <label>Show name: </label>
                    <input value={name} />
                </div>
                <div className='formfield'>
                    <label>Tickets: </label>
                    <input type="number" />
                </div>
                <button className='button' type='submit'>Book</button>
               </form> 
               :
               <br/>
            }
           
            </div>
        </div>
    )
}

export default BigCard;