import React, { useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';
import styled from 'styled-components';

function TodoList({ data, todos, onAppend, handleRemove }) {
	let params = useParams();
	let activity = data.find((act) => {
		return act.id === params.param;
	});

	let list_todos = todos.map((item) => {
		return <Todo key={item.id} todo={item} onRemove={handleRemove} />;
	});

	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	if (!list_todos.length) {
		list_todos = (
			<img
				className="image-div"
				src="./vector-new-todo.webp"
				alt="New Todo"
			></img>
		);
	}

	return (
		<div className="container">
			<div className="activity">
				<BackButton className="fa fa-chevron-left"></BackButton>
				<h1>{activity.title}</h1>
				<RenameButton />
				<SortButton />
				<button onClick={togglePopup}>+ Tambah</button>
				{showPopup && <TodoForm onClose={togglePopup} onAppend={onAppend} />}
				<div className="list-activities">{list_todos}</div>
			</div>
		</div>
	);
}

export default TodoList;

const BackButton = styled.i`
	cursor: pointer;
	font-size: 26px;
`;
const RenameButton = styled.div``;
const SortButton = styled.div``;
