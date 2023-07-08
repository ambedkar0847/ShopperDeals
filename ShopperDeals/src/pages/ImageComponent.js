import React from 'react';

const ImageComponent = (props) => {
  const { imagePath, altText } = props;

  return (
    <div>
      <h2>Image Component</h2>
      <img src={require(`${imagePath}`).default} alt={altText} />
    </div>
  );
};

export default ImageComponent;
