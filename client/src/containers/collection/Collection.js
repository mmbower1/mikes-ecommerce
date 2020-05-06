import React from 'react';
import { connect } from 'react-redux';
// components
import CollectionItem from '../../components/collection-item/CollectionItem';
// selectors
import { selectCollection } from '../shop/Shop.selectors';
// style
import './Collection.styles.scss';

// match comes from having it in the props in the Route component in containers/Shop.js
const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => {
          return <CollectionItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  // needs state depending on url parameter
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps, { })(Collection)
