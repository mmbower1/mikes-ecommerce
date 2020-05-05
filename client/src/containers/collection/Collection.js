import React from 'react';
import { connect } from 'react-redux';
// components
import CollectionItem from '../../components/collection-item/CollectionItem';
// selectors
import { selectCategory } from '../shop/Shop.selectors';
import './Collection.styles.scss';

// match comes from having it in the props in the Route component in containers/Shop.js
const Collection = ({ match }) => {
  return (
    <div className="collection-page">
      category page
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.collectionId)(state) // needs state depending on url parameter
})

export default connect(mapStateToProps, { })(Collection)
