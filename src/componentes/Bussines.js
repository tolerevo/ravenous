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

function Bussiness() {
  return (
    <>
     <div className='contenedor-restaurante'>
      <h1>{bussiness.name}</h1>
      <img src={bussiness.ImageSrc} alt={bussiness.name} />
      <ul>
        <li>{bussiness.address}.  .  .  .   {bussiness.category}</li>
        <li>{bussiness.city}.  .  .  . .  .  .  . .  .   Rating{bussiness.rating}</li>
        <li>state {bussiness.state} .  .  .   .  .  .  .  .  .  .  .  Review{bussiness.reviewCount}</li>
        <li>zipCode {bussiness.zipCode}</li>
       </ul>
     </div>
    </>
  );
}

export default Bussiness;