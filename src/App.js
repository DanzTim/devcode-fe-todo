import React, { useState, useEffect } from 'react';
import ActivitiesList from './ActivitiesList';
import './App.css';
import Cookies from 'js-cookie';

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

  return (
    <div className="App">
      <header className="App-header">
        TO DO LIST APP
      </header>
        <ActivitiesList activities={activity} onAppend={handleAppend} />
    </div>
  );
}

export default App;
