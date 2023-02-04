import React, { useState } from 'react';
import ActivitiesList from './ActivitiesList';
import './App.css';
import Cookies from 'js-cookie';

function App() {
  console.log(Cookies.get('activity'));
  const [activity, setActivity] = useState([]);
  function handleAppend(newActivity) {
    setActivity([...activity, newActivity]);
    Cookies.set('activity',activity);
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
