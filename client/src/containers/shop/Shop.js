import React from 'react';
import { connect } from 'react-redux';
// components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import './Shop.styles.scss';

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {
        collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))
      }
    </div>
  )
};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps, null)(Shop);