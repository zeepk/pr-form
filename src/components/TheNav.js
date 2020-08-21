import React, { Component } from 'react';
import MaterialUI from './MaterialUI';
import PrimeReact from './PrimeReact';
import Bootstrap from './Bootstrap';
import Shards from './Shards';
import ReactSuite from './ReactSuite';
import Grommet from './Grommet';
import Semantic from './Semantic';
export default class TheNav extends Component {
	render() {
		return (
			<div>
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
					<Shards />
				</div>
				<div className="nav-container">
					<ReactSuite />
				</div>
				<div className="nav-container">
					<Grommet />
				</div>
				<div className="nav-container">
					<Semantic />
				</div>
			</div>
		);
	}
}
