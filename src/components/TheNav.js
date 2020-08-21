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
				<div
					style={{
						padding: '50px 0',
						color: 'white',
						fontSize: '1.2rem',
						textAlign: 'center',
					}}
				>
					<p>
						Here are some examples of Navigation Bars from different React UI
						Libraries.
					</p>
					<p>
						Clicking on the Brand on the left side of each bar will take you to
						the docs/homepage
						<span role="img" aria-label="smile">
							😊
						</span>
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
				<div className="nav-container" style={{ paddingBottom: '100px' }}>
					<ReactSuite />
				</div>
				<div className="footer">
					<ul className="footer-ul">
						<li className="footer-li">
							<p className="made-by">
								<span role="img" aria-label="laptop">
									💻
								</span>
								Version 1.0.2
							</p>
						</li>
						<li className="footer-li"></li>
						<li className="footer-li">
							<p className="made-by">
								<span role="img" aria-label="smile">
									😊
								</span>
								Contact me for suggestions!{' '}
								<a
									className="footer-link"
									href="https://twitter.com/matthughes2112"
								>
									@matthughes2112
								</a>
							</p>
						</li>
						<li className="footer-li">
							<p className="made-by">
								<a
									className="footer-link"
									href="https://github.com/zeepk/ui-libraries"
								>
									<span role="img" aria-label="cat">
										🐈
									</span>
									Github Source
								</a>
							</p>
						</li>
						<li className="footer-li"></li>
					</ul>
				</div>
			</div>
		);
	}
}
