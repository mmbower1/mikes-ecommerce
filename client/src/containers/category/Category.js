import React from 'react';
// components
import CollectionItem from '../../components/collection-item/CollectionItem';
import './Category.styles.scss';

// match comes from having it in the props in the Route component in containers/Shop.js
const Category = ({ match }) => {
  console.log(match.params);
  return (
    
    <div className="category">
      category page
    </div>
  )
}

export default Category
