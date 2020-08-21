import React from 'react';
import TheNav from './components/TheNav';
import './App.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import 'rsuite/dist/styles/rsuite-default.css';
function App() {
	return (
		<div className="App">
			<TheNav />
		</div>
	);
}

export default App;
