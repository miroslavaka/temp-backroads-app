import React from 'react';
import Title from './Title';
import Tour from './Tour';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title wordFirst="featured" wordSecond="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          {
            /* const {id, img, date, title, text, icon, location, duration, price} = tour; */
          }
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
