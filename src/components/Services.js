import React from 'react';
import Title from './Title';
import Service from './Service';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title wordFirst="our" wordSecond="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service service={service} key={service.id} />;
          {
            /* <Service service={...service} key={service.id} /> */
          }
        })}
      </div>
    </section>
  );
};
export default Services;
