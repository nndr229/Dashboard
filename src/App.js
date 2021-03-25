import logo from './logo.svg';
import './App.css';

function App() {
	// need to integrate dashboard
	// function embedDashboard() {
	// 	var containerDiv = document.getElementById('dashboard');
	// 	var options = {
	// 		url: '<signed URL from Step 3>',
	// 		container: containerDiv,
	// 		parameters: {
	// 			country: 'United States',
	// 		},
	// 		scrolling: 'no',
	// 		height: '700px',
	// 		width: '1000px',
	// 	};
	// 	dashboard = QuickSightEmbedding.embedDashboard(options);
	// 	dashboard.on('error', onError);
	// 	dashboard.on('load', onDashboardLoad);
	// }

	return (
		<div className='App'>
			<h1 id='header'>Campaign Dashboard</h1>
			<div id='dashboard'></div>
		</div>
	);
}

export default App;
