import React from 'react';
import { Nav, Anchor, Menu, TextInput, Button } from 'grommet';
import { Home, Notification, ChatOption } from 'grommet-icons';

const Grommet = () => {
	const [value, setValue] = React.useState('');

	return (
		<div>
			<Nav direction="row" background="neutral-3" pad="small">
				<Button primary label="Grommet" href="https://v2.grommet.io/" />
				<Anchor icon={<Home />} hoverIndicator />
				<Menu
					label="Menu"
					items={[
						{ label: 'First', href: '#' },
						{ label: 'Second', href: '#' },
					]}
				/>
				<Anchor icon={<Notification />} hoverIndicator />
				<Anchor icon={<ChatOption />} hoverIndicator />
				<TextInput
					placeholder="Search"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</Nav>
			<p className="description">
				Looks like a home run. Customizable, lots of components, theming built
				in, hundreds of icons, what does it NOT have?
			</p>
		</div>
	);
};

export default Grommet;
