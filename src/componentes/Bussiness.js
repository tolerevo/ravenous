import React from 'react';

const Bussiness = props => {
  const Bussi = {
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

  return (
    <div>
      <div className='contenedor-principal'>
        <ul className='contenedor-restaurante'>
          <h1>{Bussi.name}</h1>
          <img src={Bussi.ImageSrc} alt={Bussi.name} />
          <li>{Bussi.address}</li>  
          <li>{Bussi.city}</li>
          <li>{Bussi.state}</li>
          <li>{Bussi.zipCode}</li>
          <li>{Bussi.category}</li>
          <li>{Bussi.rating}</li>
          <li>{Bussi.reviewCount}</li>
        </ul>
      </div>
    </div>
  );
};
Bussiness.defaultProps = { name: 'El realto' };

class Elrealto extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <div>
        <Bussiness />
      </div>
    );
  }
};

export default Elrealto;
