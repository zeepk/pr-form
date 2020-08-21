import React from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
} from 'shards-react';

const Shards = () => {
	const [open, toggleNav] = React.useState(false);

	return (
		<div>
			<Nav style={{ backgroundColor: '#4a4a4a', padding: '10px' }} pills>
				<NavItem style={{ margin: '0 30px 0 10px' }}>
					<h4
						style={{ color: 'white' }}
						href="https://designrevision.com/docs/shards-react/getting-started"
					>
						Shards React
					</h4>
				</NavItem>
				<NavItem style={{ marginLeft: '10px' }}>
					<NavLink active href="#">
						Active
					</NavLink>
				</NavItem>
				<NavItem style={{ marginLeft: '10px' }}>
					<Dropdown open={open} toggle={() => toggleNav(!open)} group>
						<Button>Dropdown</Button>
						<DropdownToggle split />
						<DropdownMenu>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavItem>
				<NavItem>
					<NavLink href="#">Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">Another Link</NavLink>
				</NavItem>
				<NavItem>
					<NavLink disabled href="#">
						Disabled Link
					</NavLink>
				</NavItem>
			</Nav>
			<p className="description">
				Nice and customizable, but might need to override CSS for some coloring.
			</p>
		</div>
	);
};

export default Shards;
