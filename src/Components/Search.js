import React, {useState} from 'react';
import {STUDENTS} from '../studentsList';
// `joiningDate` && `validityDate` format "yyyy-mm-dd"


function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}


function Search(props) {
	
	const [data, setData] = useState({});
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setData({name: e.target.name.value, date: e.target.date.value})
		// STUDENTS.map(item => 
		// 	{
		// 		data.date && 
		// 		(checkValidity(data.date,item.validityDate) &&
		// 		)
				
		// 	});
	}
	console.log(">>>> ",data)
		
	return (
		<form onSubmit={handleSubmit}>
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" name="name" data-testid="studentName" type="text" className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" name="date" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
				</div>
			</label>
			<button type="submit" onClick={props.getData(data)} data-testid="addBtn" className="small mb-0">Add</button>
		</div>
		</form>
	);
}

export default Search;
