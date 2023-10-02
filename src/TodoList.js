import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function TodoList({data}) {
	let params = useParams();
	let activity = data.find((act) => {
		return act.id === params.param;
	});
	
	return (
		<div className="container">
			<div className="activity">
				<h1>{activity.title}</h1>
			</div>
		</div>
	);
}

export default TodoList;
