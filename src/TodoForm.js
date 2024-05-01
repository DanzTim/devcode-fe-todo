import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ visible, onClose, onAppend }) => {
	let params = useParams();

	const [formData, setFormData] = useState({
		name: '',
		activity_group_id: params.param,
		priority: 'very-high',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAppend({ id: uuidv4(), ...formData, status: false, created_at: new Date() });
		onClose();
	};

	return (
		<div
			className={`
			popup-container
			${visible ? 'visible' : 'invisible'}
			`}
		>
			<div className="modal-header">
				<h2 style={{ marginBottom: '10px' }}>Add List Item</h2>
				<div className="close" onClick={onClose}>
					&times;
				</div>
			</div>
			<div className="popup-content">
				<form style={{ marginLeft: '5px' }}>
					<label style={{ marginTop: '20px', marginBottom: '10px' }}>
						Name:
					</label>
					<input
						type="text"
						name="name"
						placeholder="Item Name"
						value={formData.name}
						onChange={(e) => handleChange(e)}
						style={{ marginBottom: '20px', width: '100%' }}
					/>
					<label style={{ marginBottom: '10px' }}>Priority:</label>
					<select
						name="priority"
						id="priority"
						required={true}
						onChange={handleChange}
						value={formData.priority}
					>
						<option key="very-high" value="very-high">
							Very High
						</option>
						<option key="high" value="high">
							High
						</option>
						<option key="medium" value="medium">
							Medium
						</option>
						<option key="low" value="low">
							Low
						</option>
						<option key="very-low" value="very-low">
							Very Low
						</option>
					</select>
				</form>
			</div>
			<div className="modal-footer">
				<button
					style={{ display: 'block', marginTop: '30px' }}
					type="submit"
					id="AddFormSubmit"
					onClick={handleSubmit}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default TodoForm;
