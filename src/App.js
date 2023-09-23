import React, { useState, useEffect } from 'react';
import ActivitiesList from './ActivitiesList';
import './App.css';
import Cookies from 'js-cookie';
import { Routes } from "react-router-dom";

const NewPage = () => (
  <div>
    <h1>This is the new page</h1>
  </div>
);

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

  function handleRemove(id) {
    let newListActivities = activity.filter(item => item.id !== id)
    setActivity(newListActivities);
    Cookies.set('activities', JSON.stringify(newListActivities));
  }

  return (
    <div className="App">
      <header className="App-header">
        TO DO LIST APP
      </header>
        <Routes path="/new-page" component={NewPage} />
        <ActivitiesList activities={activity} onAppend={handleAppend} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
