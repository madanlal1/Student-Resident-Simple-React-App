import React from 'react';

function ResidentsList(props) {
	console.log("> ::> ",props.name)
	
	return (
		<div className="pa-10 mt-10 w-75">
					<div className="font-weight-bold text-center">Residents List</div>
					<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
					{/* {
						props.data.map(element => */}
						<li key="item1" className="slide-up-fade-in">
							{props.name}
						</li>
					{/* )}	 */}
					</ul>
				</div>
	);
}

export default ResidentsList;
