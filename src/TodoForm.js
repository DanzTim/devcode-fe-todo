import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ onClose, onAppend }) => {
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
		onAppend({ id: uuidv4(), ...formData, created_at: new Date() });
		onClose();
	};

	return (
		<div className="popup-container">
			<div className="popup-content">
				<span className="close" onClick={onClose}>
					&times;
				</span>
				<h2>Tambah Item</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Nama Item:
						<input
							type="text"
							name="name"
							placeholder="Nama"
							value={formData.name}
							onChange={(e) => handleChange(e)}
						/>
					</label>
					<label>
						Priority:
						<select
							name="priority"
							id="priority"
							required="true"
							onChange={handleChange}
							value={formData.priority}
						>
							<option key="very-high" value="very-high">Very High</option>
							<option key="high" value="high">High</option>
							<option key="medium" value="medium">Medium</option>
							<option key="low" value="low">Low</option>
							<option key="very-low" value="very-low">Very Low</option>
						</select>
					</label>
					<button type="submit">Simpan</button>
				</form>
			</div>
		</div>
	);
};

export default TodoForm;
