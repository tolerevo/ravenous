import React from 'react';
import Bussiness from './Bussines';

function BussinessList() {
  const restaurants = [
    {Bussiness}, 
    {Bussiness}, 
    {Bussiness} 
  ];
  return (
    <div>
{restaurants.map((restaurant) => (
  <Bussiness restaurantObject={restaurant} />
))}
    </div>
  );
}

export default BussinessList;