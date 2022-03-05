import React from 'react';
import {useParams} from 'react-router-dom';
import BigCard from './BigCard';

const Show = ({list}) =>{
    const {id} = useParams();
    // console.log(list[0].show.name)

    var firstItem = list.filter(x=>x.show.id==id).shift();
    console.log(firstItem);
    return (
        <>
          <h1 className='center'>Show: {firstItem.show.name}</h1>
          <div className='home'>
          <BigCard 
            key={firstItem.show.id}
            id={firstItem.show.id}
            name={firstItem.show.name}
            language={firstItem.show.language}
            premiered={firstItem.show.premiered}
            rating={firstItem.show.rating.average}
            image={firstItem.show.image.original}
            summary={firstItem.show.summary}
          />
          </div>
          
        </>
    )
}

export default Show;