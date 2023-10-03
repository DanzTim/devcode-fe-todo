import React, { useState } from 'react';
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';
import styled from 'styled-components';

function TodoList({ data, todos, onAppend, handleRemove }) {
  const navigate = useNavigate();
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
				<BackButton
					className="fa fa-chevron-left"
					onClick={() => {
						navigate('/');
					}}
				/>
				<h1>{activity.title}</h1>
				<RenameButton className="fa fa-pencil" />
				<SortButton className="fa-solid fa-arrow-up-wide-short" />
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
	padding-right: 1rem;
	font-size: 26px;
`;
const RenameButton = styled.i`
	cursor: pointer;
	padding: 1rem;
	font-size: 26px;
`;
const SortButton = styled.i`
	cursor: pointer;
	font-size: 26px;
	padding: 1rem;
	margin-inline-start: auto;
`;
