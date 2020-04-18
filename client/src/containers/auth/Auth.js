import React from 'react';
// components
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
// semantic
import { Accordion, Icon } from 'semantic-ui-react'

class Auth extends React.Component {
	state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

	render() {
		const { activeIndex } = this.state

		return (
			<div className="auth">
				<Login />
				<br />
				<div className="register">
					<Accordion>
						<Accordion.Title
								active={activeIndex === 0}
								index={0}
								onClick={this.handleClick}
							>
								<Icon name='dropdown' />
								or Register
							</Accordion.Title>
							<Accordion.Content active={activeIndex === -1}>
								<Register />
							</Accordion.Content>
						</Accordion>
					</div>
			</div>
		);
	}
};

export default Auth;