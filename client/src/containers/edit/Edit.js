import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// styles
import { Button, Form, Menu } from 'semantic-ui-react';
import './Edit.styles.scss';

const Edit = (props) => {
	return (
    <div>
      <div>
        <Menu size='massive'>
          <Menu.Item>
            <Link to="/">Back</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="edit-container">
        <h2>Update your account</h2>
        <br />
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" placeholder="First name" />
            <Form.Input label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Phone" placeholder="Phone" />
            <Form.Input label="Password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
          <br />
          <div className="edit-button">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
	);
};

Edit.propTypes = {};

export default Edit;
