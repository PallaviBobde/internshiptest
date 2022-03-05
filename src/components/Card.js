import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({id,name,language,premiered,rating,image}) => {
    return (
        <div className='card'>
            <img src={image}/>
            <div className='incard'>
            <div className='name'>{name}</div>
            <div className='language'>{language}</div>
            <div className='premiered'>Priemered: {premiered}</div>
            <div className='rating'>{(rating!= null) ? `Rating: ${rating}`: ` `}</div>
            <Link to={`/show/${id}`} className="button">More..</Link>
            </div>
        </div>
    );
}

export default Card;