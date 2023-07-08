import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ to, label }) => {
  return (
    <Link to={to}>
      <div>{label}</div>
    </Link>
  );
};

export default ListItem;
