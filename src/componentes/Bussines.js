import React from 'react';
import '../hojas-de-estilo/Bussiness.css';


const bussiness = {
  ImageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

function Bussiness(props) {
  return (
    <div>
      <div className='contenedor-principal'>
        <ul className='contenedor-restaurante'>
          <h1>{bussiness.name}</h1>
          <img src={bussiness.ImageSrc} alt={bussiness.name} />
          <li>{bussiness.address}</li>
          <li>{bussiness.city}</li>
          <li>{bussiness.state}</li>
          <li>{bussiness.zipCode}</li>
          <li className='remark'>{bussiness.category}</li>
          <li className='remark'>{bussiness.rating}</li>
          <li className='remark'>{bussiness.reviewCount}</li>
        </ul>
      </div>
    </div>
  );
}

export default Bussiness;