import StudentList from './StudentList';

const Content = ({ studentList }) => {
	return (
		<>
			{studentList.length ? (
				<StudentList students={studentList} />
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</>
	);
};

export default Content;
