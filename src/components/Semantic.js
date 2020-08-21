import React from 'react';

const Semantic = () => {
	return (
		<div>
			<div class="ui secondary  menu">
				<a class="item">Home</a>
				<a class="item">Messages</a>
				<a class="item">Friends</a>
				<div class="right menu">
					<div class="item">
						<div class="ui icon input">
							<input type="text" placeholder="Search..." />
							<i class="search link icon"></i>
						</div>
					</div>
					<a class="ui item active">Logout</a>
				</div>
			</div>
			<p className="description"></p>
		</div>
	);
};

export default Semantic;
