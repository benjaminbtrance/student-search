const Header = ({ title }) => {
	return (
		<header>
			<section class="filter-list">
				<a class="btn btn-expand" href="view2.html">
					+
				</a>
				<div class="department-list">
					<div class="department">
						<div class="dept-name active">All Departments</div>
						<div class="subjects-wrapper">
							<div class="subject-name active">All Subjects</div>
						</div>
					</div>
				</div>
			</section>
		</header>
	);
};

Header.defaultProps = {
	title: 'Default Title',
};

export default Header;
