import React from 'react';

import './ErrorDisplay.css'

const ErrorDisplay = ({error}) => {
  return (
    <div className='error-display'>
      <div className='content'>
        <h1>{error}!</h1>
        <i className="huge frown outline icon" />
      </div>
    </div>
  )
}

export default ErrorDisplay;