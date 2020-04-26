import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Shop.styles.scss';
// components
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
// semantic
import { Button, Menu } from 'semantic-ui-react';

const Shop = ({ collections }) => {
  return (
    <div>
      <div className="header">
        <Menu size='massive'>
          <Menu.Item>
            <Link to="/">Back</Link>
          </Menu.Item>
        </Menu>
      </div>
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