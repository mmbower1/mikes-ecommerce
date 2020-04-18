import React, { Component } from 'react';
import SHOP_DATA from './ShopData.js';
// components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import './Shop.styles.scss';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))
        }
      </div>
    )
  }
}

export default Shop;