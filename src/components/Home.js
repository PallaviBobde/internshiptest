import React from 'react';
import Card from './Card';

const Home = ({list}) => {
    return (
        <>
        <h1 className='center'>Shows</h1>
        <div className='home'>
        {
        list.map((elem)=>
        <Card 
              key={elem.show.id}
              id={elem.show.id}
              name={elem.show.name}
              language={elem.show.language}
              premiered={elem.show.premiered}
              rating={elem.show.rating.average}
              image={elem.show.image.medium}
        />
        )
      }
        </div>
        </>
        
    );
}

export default Home;