import React from 'react';
import './App.css';

function getCurrentDate(){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${date}-${month<10?`0${month}`:`${month}`}-${year}`
}

function Dashboard({activity, onAppend}) {
  let show;
  if (!activity.length) {
    show = <img className='image-div' src='./vector-new-activity.webp' alt='New Activity'></img>
  }
  function handleClick() {
    let newActivity = {
      title: 'New Activity',
      created_at: getCurrentDate()
    }
    onAppend(newActivity)
  }
  return (
    <div className="activity">
      <h1>Activity</h1>
      <button onClick={handleClick}>+ Tambah</button>
      {show}
    </div>
  );
}

export default Dashboard;
