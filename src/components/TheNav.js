import React, { Component } from 'react';
import MaterialUI from './MaterialUI';
import PrimeReact from './PrimeReact';
import Bootstrap from './Bootstrap';
import Shards from './Shards';
import ReactSuite from './ReactSuite';
import Grommet from './Grommet';
export default class TheNav extends Component {
	render() {
		return (
			<div>
				<div style={{ padding: '20px', color: 'white', fontSize: '1.2rem' }}>
					<p>
						Here are some examples of Navigation Bars from different React UI
						Libraries.
					</p>
					<p>
						Clicking on the Brand on the left side of each bar will take you to
						the docs/homepage 😊
					</p>
				</div>
				<div className="nav-container">
					<MaterialUI />
				</div>
				<div className="nav-container">
					<PrimeReact />
				</div>
				<div className="nav-container">
					<Bootstrap />
				</div>
				<div className="nav-container">
					<Grommet />
				</div>
				<div className="nav-container">
					<Shards />
				</div>
				<div className="nav-container" style={{ paddingBottom: '300px' }}>
					<ReactSuite />
				</div>
			</div>
		);
	}
}
