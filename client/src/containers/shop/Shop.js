import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Shop.styles.scss';
// components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import Header from '../../components/header/Header';

const Shop = ({ collections }) => {
  return (
    <div>
      <Header />
      <div className="shop-page">
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps, null)(Shop);