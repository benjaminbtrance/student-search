import StudentList from './StudentList';

const Content = ({ studentsList }) => {
	return (
		<>
			{studentsList.length ? (
				<StudentList students={studentsList} />
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</>
	);
};

export default Content;
