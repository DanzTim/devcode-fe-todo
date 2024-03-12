import React, { useState } from 'react';
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';
import styled from 'styled-components';

function TodoList({ data, todos, onAppend, handleRemove, titleChange }) {
	const navigate = useNavigate();
	let params = useParams();
	let activity = data.find((act) => {
		return act.id === params.param;
	});

	let list_todos = todos
		.filter((item) => {
			return item.activity_group_id === activity.id;
		})
		.map((item) => {
			return <Todo key={item.id} todo={item} onRemove={handleRemove} />;
		});

	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(activity.title);

	const toggleEditing = () => {
		setIsEditing(true);
	};

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSaveClick = () => {
		setIsEditing(false);
		titleChange(activity.id, title);
	};

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

	const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
			titleChange(activity.id, title);
    }
  };

	return (
		<div className="container">
			<div className="activity">
				<BackButton
					className="fa fa-chevron-left"
					onClick={() => {
						navigate('/');
					}}
				/>
				{isEditing ? (
					<InputTitleTextBox
						type="text"
						value={title}
						onChange={handleTitleChange}
						onBlur={handleSaveClick}
						onKeyDown={handleEnter}
						autoFocus
					/>
				) : (
					<h1 onClick={toggleEditing}>{title}</h1>
				)}
				<RenameButton className="fa fa-pencil" onClick={toggleEditing} />
				<SortButton className="fa-solid fa-arrow-up-wide-short" />
				<button onClick={togglePopup}>+ Tambah</button>
				<div className={`${showPopup ? "page-mask" : ""}`}></div>
				<TodoForm
					visible={showPopup}
					onClose={togglePopup}
					onAppend={onAppend}
				/>
				<div className="list-todos">{list_todos}</div>
			</div>
		</div>
	);
}

export default TodoList;

const BackButton = styled.i`
	cursor: pointer;
	padding-right: 1rem;
	font-size: 24px;
`;
const RenameButton = styled.i`
	cursor: pointer;
	padding: 1rem;
	font-size: 22px;
	opacity: 0.3;
`;
const SortButton = styled.i`
	cursor: pointer;
	font-size: 24px;
	padding: 1rem;
	margin-inline-start: auto;
	opacity: 0.5;
`;
const InputTitleTextBox = styled.input`
	font-size: 2em;
	background: none;
	border: none;
	outline: none;
	border-bottom: 1px black solid;
`;