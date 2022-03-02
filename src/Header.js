import { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const Header = ({ departmentList }) => {
	const [showDepartment, setShowDepartment] = useState(false);
	const [showSubjects, setShowSubjects] = useState(false);

	return (
		<header>
			<section>
				<Container>
					<Row>
						<Col md="2">
							<Button onClick={() => setShowDepartment(!showDepartment)}>
								All Departments
							</Button>
						</Col>
						<Row>
							{showDepartment ? (
								<Col>
									{departmentList.map((department) => (
										<Row>
											<Col md="2">
												<Button
													className="btn btn-secondary btn-sm"
													key={department.name}
												>
													{department.name}
												</Button>
											</Col>
											<Col md="10">
												<Container>
													<Row>
														{department.subjects.map((subject) => (
															<Col md="auto">
																<Button
																	className="g-col-1 btn-secondary btn-sm"
																	key={subject.subjects}
																>
																	{subject}
																</Button>
															</Col>
														))}
													</Row>
												</Container>
											</Col>
										</Row>
									))}
								</Col>
							) : null}
							{showSubjects ? (
								<Col>
									{departmentList.map((department) => (
										<Row>
											<Col md="2">
												<Button
													className="btn btn-secondary btn-sm"
													key={department.name}
												>
													{department.name}
												</Button>
											</Col>
											<Col md="10">
												<Container>
													<Row>
														{department.subjects.map((subject) => (
															<Col md="auto">
																<Button
																	className="g-col-1 btn-secondary btn-sm"
																	key={subject.subjects}
																>
																	{subject}
																</Button>
															</Col>
														))}
													</Row>
												</Container>
											</Col>
										</Row>
									))}
								</Col>
							) : null}
						</Row>
					</Row>
				</Container>
			</section>
		</header>
	);
};

Header.defaultProps = {
	title: 'Default Title',
};

export default Header;
