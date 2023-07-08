import React, { useState } from 'react';

const MyForm = () => {
  const [shirtType, setShirtType] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="shirtType">Shirt Type:</label>
        <input
          type="text"
          id="shirtType"
          value={shirtType}
          onChange={(e) => setShirtType(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="discountPercentage">Discount Percentage:</label>
        <input
          type="number"
          id="discountPercentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          required
          step="1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description of Shirt Type:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="8"
          cols="50"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default MyForm;
