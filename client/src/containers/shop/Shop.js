import React from 'react';
import { connect } from 'react-redux';
import './Shop.styles.scss';
// components
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Header from '../../components/header/Header';

const Shop = ({ collections }) => {
  return (
    <div>
      <Header />
      <div className="shop-page">
        <CollectionOverview />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps, null)(Shop);