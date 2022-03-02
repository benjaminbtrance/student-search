import Header from './Header';
import Content from './Content';
import './style.css';
import { useEffect, useState } from 'react';

function App() {
	const API_Students_URL = 'http://localhost:3500/body';
	const API_Departments_URL = 'http://localhost:3501/departments';
	const [students, setStudents] = useState([]);
	const [departments, setDepartments] = useState([]);
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

		const fetchDepartment = async () => {
			try {
				const response = await fetch(API_Departments_URL);
				if (!response.ok) throw Error('Did not receive expected data');
				const listDepartments = await response.json();
				console.log(listDepartments);
				setDepartments(listDepartments);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => fetchStudent(), 1000);
		setTimeout(() => fetchDepartment(), 1000);
	}, []);

	return (
		<body>
			<div className="container">
				<Header departmentList={departments} />
				<section>
					<div class="container">
						{isLoading && <p>Loading Students...</p>}
						{fetchError && (
							<p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>
						)}
						<Content studentList={students} />
					</div>
				</section>
			</div>
		</body>
	);
}

export default App;
