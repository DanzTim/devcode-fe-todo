import React, { useState } from 'react';

export const EditTodoForm = ({ todo, visible, onClose, onEdit }) => {
	const [formData, setFormData] = useState({
		name: todo.name,
		priority: todo.priority,
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onEdit({ id: todo.id, ...formData });
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
				<h2 style={{ marginBottom: '10px' }}>Tambah List Item</h2>
				<div className="close" onClick={onClose}>
					&times;
				</div>
			</div>
			<div className="popup-content">
				<form style={{ marginLeft: '5px' }}>
					<label style={{ marginTop: '20px', marginBottom: '10px' }}>
						Nama:
					</label>
					<input
						type="text"
						name="name"
						placeholder="Nama Item"
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
					Simpan
				</button>
			</div>
		</div>
	);
};