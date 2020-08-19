import React from 'react';
import './App.css';

import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
function App() {
	return (
		<div className="App">
			<div
				style={{
					minHeight: '80vh',
					backgroundColor: 'white',
					borderRadius: '5%',
					padding: '50px',
					margin: '0 auto',
					border: '3px solid black',
					boxShadow: '-5px 10px 10px black',
				}}
			>
				<div className="p-field p-grid">
					<label
						htmlFor="firstname3"
						className="p-col-fixed"
						style={{ width: '100px' }}
					>
						Firstname
					</label>
					<div className="p-col">
						<InputText id="firstname3" type="text" />
					</div>
					<label
						htmlFor="lastname3"
						className="p-col-fixed"
						style={{ width: '100px' }}
					>
						Lastname
					</label>
					<div className="p-col">
						<InputText id="lastname3" type="text" />
					</div>
				</div>
				<div className="p-field p-grid">
					<Slider
						value={this.state.value}
						onChange={(e) => this.setState({ value: e.value })}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
