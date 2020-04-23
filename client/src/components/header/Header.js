import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../img/crown.svg';
import { Link } from 'react-router-dom';
// actions
import { logout } from '../../actions/auth';
// components
import Cart from '../cart/Cart';
import CartIcon from '../cart-icon/CartIcon';
// style
import './Header.styles.scss';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'My Account', value: 1 },
  { key: 2, text: 'Logout', value: () => logout() },
]

const Header = ({ auth: { isAuthenticated, loading, user }, cart, logout }) => {
  const authLinks = (
    <div className="options">
      <CartIcon />
      {cart ? null : <Cart />}
      <Link to="/" onClick={logout}><i className="fa fa-sign-out-alt"></i></Link>
      <Link to='/shop' className="hide-sm">Shop </Link>
      <Menu compact>
        <Dropdown text={isAuthenticated ? user.name : null} options={options} simple item />
      </Menu>
      
    </div>
  );

  const guestLinks = (
    <div className="options">
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option" to='/auth'>
        SIGN-IN
      </Link>
      {/* <Link className="option" to='/contact'>
        CONTACT
      </Link> */}
  </div>
  );

  return (
    <div className="header">
      <Link className="logo-container" to='/'>
        <Logo />
      </Link>
      {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </div>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart.hidden
});

export default connect(mapStateToProps, { logout })(Header);