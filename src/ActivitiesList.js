import React from 'react'
import Activity from './Activity'

function ActivitiesList({activities}) {
    let list_activities = activities.map(act => {    
      return <Activity act={act}/>
    })
    return (
        <div className='list-activities'>
            {list_activities}
        </div>
    )
}

export default ActivitiesList