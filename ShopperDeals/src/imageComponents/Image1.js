import React from 'react';
import MyImage from '../images/pic1.jpg';

const Image1 = () => {
  return (
    <div>
      <img className="image_item" src={MyImage} alt="My Image" />
    </div>
  );
};

export default Image1;
