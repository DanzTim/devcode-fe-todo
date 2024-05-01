import React from 'react';
import Activity from './Activity';
import { v4 as uuidv4 } from 'uuid';
import emptyActivity from './assets/images/vector-new-activity.webp';

function getCurrentDate() {
	let newDate = new Date();
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	return `${date < 10 ? `0${date}` : `${date}`}-${
		month < 10 ? `0${month}` : `${month}`
	}-${year}`;
}

function ActivitiesList({ activities, onAppend, handleRemove }) {
	let list_activities = activities.map((act) => {
		return <Activity key={act.id} act={act} onRemove={handleRemove} />;
	});

	if (!list_activities.length) {
		list_activities = (
			<img className="image-div" src={emptyActivity} alt="New Activity"></img>
		);
	}

	function addActivity() {
		let newActivity = {
			id: uuidv4(),
			title: 'New Activity',
			created_at: getCurrentDate(),
		};
		onAppend(newActivity);
	}

	return (
		<div className="container">
			<div className="activity">
				<h1>Activity</h1>
				<button onClick={addActivity}>+ Add Activity</button>
				<div className="list-activities">{list_activities}</div>
			</div>
		</div>
	);
}

export default ActivitiesList;
