import TableHeader from './TableHeader';
import '../App.css';
import Table from './Table';
import InboxList from './InboxList';

function App() {
	return (
		<>
			<InboxList/>
			<Table rowTitles={[1, 2]} colTitles={[1, 2]}/>
		</>
	);
}

export default App;