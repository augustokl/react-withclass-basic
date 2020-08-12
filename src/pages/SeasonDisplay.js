import React from 'react';
import './SeasonDisplay.css'

const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const seasonConfig = {
  winter: {
    text: 'Burr, it is chilly',
    icon: 'snowflake'
  },
  summer: {
    text: 'Lets hit the beach',
    icon: 'sun'
  }
}

const SeasonDisplay  = ({lat}) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${icon} icon`} />
        <h1 className='text'>{ text }</h1>
        <i className={`icon-right massive ${icon} icon`} />
      </div>
    )
} 

export default SeasonDisplay;