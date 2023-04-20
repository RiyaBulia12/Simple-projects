import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
return(
  <section>
    <div className='title'>
      <h2>Tours Details</h2>
      <span className='underline'></span>
    </div>
    <div>
    {tours.map((tour) => {
      return(<Tour key={tour.id} {...tour}/>)
    })}
    </div>
  </section>
)
};

export default Tours;
