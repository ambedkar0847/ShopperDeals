import React from 'react';

const ImageGrid = () => {
  const imageData = [
    {
      imageUrl: 'images/pic1.jpg',
      itemName: 'Item 1',
      description: 'Description for Item 1',
    },
    {
      imageUrl: 'images/pic2.jpg',
      itemName: 'Item 2',
      description: 'Description for Item 2',
    },
    {
      imageUrl: 'images/pic3.jpg',
      itemName: 'Item 3',
      description: 'Description for Item 3',
    },
    // Add more image data objects as needed
  ];

  return (
    <div className="image-grid">
      {imageData.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.imageUrl} alt={image.itemName} />
          <h3>{image.itemName}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
