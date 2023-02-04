import React, { useState } from 'react';
import ActivitiesList from './ActivitiesList';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [activity, setActivity] = useState([]);
  function handleAppend(newActivity) {
    setActivity([...activity, newActivity]);
  }
  return (
    <div className="App">
      <header className="App-header">
        TO DO LIST APP
      </header>
      <div className='container'>
        <Dashboard activity={activity} onAppend={handleAppend} />
        <ActivitiesList activities={activity}/>
      </div>
    </div>
  );
}

export default App;
