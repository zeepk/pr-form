import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
export default class Bootstrap extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" expand="lg">
					<Navbar.Brand href="https://react-bootstrap.github.io/">
						React-Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item className="action">Action</NavDropdown.Item>
								<NavDropdown.Item className="action">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item className="action">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item className="action">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<p className="description">
					Very easy to implement, and themes are simple & plentiful. Similar
					feel to regular HTML.
				</p>
			</div>
		);
	}
}
