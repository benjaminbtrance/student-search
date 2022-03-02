import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';

import './style.css';

function App() {
	const API_Students_URL = 'http://localhost:3500/body';
	const API_Departments_URL = 'http://localhost:3501/departments';
	const [items, setItems] = useState([]);
	const [students, setStudents] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchStudent = async () => {
			try {
				const response = await fetch(API_Students_URL);
				if (!response.ok) throw Error('Did not receive expected data');
				const listStudents = await response.json();
				console.log(listStudents.studentData.students);
				setStudents(listStudents.studentData.students);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => fetchStudent(), 1000);
	}, []);

	// const addItem = (item) => {
	// 	const id = items.length ? items[items.length - 1].id + 1 : 1;
	// 	const myNewItem = { id, checked: false, item };
	// 	const listItems = [...items, myNewItem];
	// 	setItems(listItems);
	// };

	// const handleCheck = (id) => {
	// 	const listItems = items.map((item) =>
	// 		item.id === id ? { ...item, checked: !item.checked } : item
	// 	);
	// 	setItems(listItems);
	// };

	// const handleDelete = (id) => {
	// 	const listItems = items.filter((item) => item.id !== id);
	// 	setItems(listItems);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (!newItem) return;
	// 	addItem(newItem);
	// 	setNewItem('');
	// };

	return (
		<body>
			<div class="body-wrapper">
				<Header title="Grocery List" />
				<section>
					<div class="data-wrapper">
						{isLoading && <p>Loading Students...</p>}
						{fetchError && (
							<p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>
						)}
						<Content studentsList={students} />
					</div>
				</section>
			</div>
			{/* <Header title="Grocery List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.item.toLowerCase().includes(search.toLowerCase())
						)}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} /> */}
		</body>
	);
}

export default App;
