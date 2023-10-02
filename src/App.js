import React, { useState, useEffect } from 'react';
import ActivitiesList from './ActivitiesList';
import './App.css';
import Cookies from 'js-cookie';
import { Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';

function App() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const itemsFromCookie = Cookies.get('activities');
    if (itemsFromCookie) {
      setActivity(JSON.parse(itemsFromCookie));
    }
  }, []);

  function handleAppend(newActivity) {
    let newListActivities = [...activity, newActivity]
    setActivity(newListActivities);
    Cookies.set('activities', JSON.stringify(newListActivities));
  }

  function removeActivity(id) {
    let newListActivities = activity.filter(item => item.id !== id)
    setActivity(newListActivities);
    Cookies.set('activities', JSON.stringify(newListActivities));
  }

  return (
		<div className="App">
			<header className="App-header">TO DO LIST APP</header>
			<Routes>
				<Route
					path="/"
					element={
						<ActivitiesList
							activities={activity}
							onAppend={handleAppend}
							handleRemove={removeActivity}
						/>
					}
				/>
				<Route
					path="/detail/:param"
					element={
						<TodoList
							data={activity}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
