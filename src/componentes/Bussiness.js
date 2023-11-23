import React from 'react';


const bussiness = {
  image: " ",
  name: " ",
  address: " ",
  city: " ",
  state: " ",
  zipcode: " ",
  category: " ",
  rating: 0,
  review: " "
};


function Bussiness() {
    return (
    <div>
      <ul>
          <hi>{bussiness.name}</hi>
          <li>{bussiness.image}</li>
          <li>{bussiness.address}</li>
          <li>{bussiness.city}</li>
          <li>{bussiness.state}</li>
          <li>{bussiness.zipcode}</li>
          <li>{bussiness.category}</li>
          <li>{bussiness.rating}</li>
          <li>{bussiness.review}</li>
        </ul>
    </div>
  );
}
export default Bussiness;