import React, { Component } from 'react';
import { Navbar, Nav, Icon, Dropdown } from 'rsuite';

export default class ReactSuite extends Component {
	render() {
		return (
			<div>
				<Navbar appearance="inverse">
					<Navbar.Header style={{ marginLeft: '20px' }}>
						<a href="#" className="navbar-brand logo">
							RSUITE
						</a>
					</Navbar.Header>
					<Navbar.Body>
						<Nav>
							<Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
							<Nav.Item>News</Nav.Item>
							<Nav.Item>Products</Nav.Item>
							<Dropdown title="About">
								<Dropdown.Item>Company</Dropdown.Item>
								<Dropdown.Item>Team</Dropdown.Item>
								<Dropdown.Item>Contact</Dropdown.Item>
							</Dropdown>
						</Nav>
						<Nav pullRight>
							<Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
						</Nav>
					</Navbar.Body>
				</Navbar>
				<p className="description">
					Simplicity is a benefit. Not many color options, might have to
					override in CSS. Dropdown looks nice. Limited icons.
				</p>
			</div>
		);
	}
}
