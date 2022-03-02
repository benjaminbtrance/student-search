import Moment from 'react-moment';
import { Card, ListGroup } from 'reactstrap';
const StudentList = ({ students }) => {
	return (
		<ListGroup as="ul">
			{students.map((student) => (
				<li key={student.id}>
					<Card>
						<span class="name">
							{student.familyName}, {student.givenName}
						</span>
						<span class="dob">
							DOB:{' '}
							<span class="value">
								<Moment format="MM/DD/YYYY">{student.dob}</Moment>
							</span>
						</span>
						<span class="admit-date">
							Admitted:{' '}
							<span class="value">
								<Moment format="MMM DD, YYYY">{student.admitDate}</Moment>
							</span>
						</span>
						<span class="grad-date">
							Anticipated Graduation:{' '}
							<span class="value">
								<Moment format="MMM YYYY">
									{student.anticipatedGraduationDate}
								</Moment>
							</span>
						</span>
						<span class="mentor">
							Mentor:{' '}
							<span class="value">
								{student.mentor.familyName}, {student.mentor.givenName}
							</span>
						</span>
					</Card>
				</li>
			))}
		</ListGroup>
	);
};

export default StudentList;
