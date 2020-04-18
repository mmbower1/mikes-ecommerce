import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
// actions
import { login } from '../../actions/auth';
// components
import './Login.styles.scss';

const Login = ({ isAuthenticated, login }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		login(email, password);
		console.log('LOGIN');
	};

	// redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login">
			<h2>LOGIN</h2>
			<Form onSubmit={(e) => onSubmit(e)}>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Email"
            type="email"
            name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input
						placeholder="Password"
            type="password"
            name="password"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</Form.Field>
				<Button type="submit">Login</Button>
			</Form>
		</div>
	);
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { 
  login
})(Login);