import React, {Component} from 'react';

const StatsChooseLevel = props => {

  return (
    <div className='stats-container'>
      <div className='stats-nav-buttons'>
        <span className='stats-back' onClick={props.backButton}>Back</span>
        <span className='stats-home' onClick={props.homeButton}>Home</span>
      </div>

    <div className='stats-choose-level-container'>
      <h1>Pick a category</h1>
      <div id='mastered' className='stats-level' onClick={props.chooseLevel}>Mastered</div>
      <div id='practicing' className='stats-level' onClick={props.chooseLevel}>Practicing</div>
      <div id='learning' className='stats-level' onClick={props.chooseLevel}>Learning</div>
      <div id='dont-know' className="stats-level" onClick={props.chooseLevel}>Don't Yet Know</div>
    </div>
  </div>
  )
}


export default StatsChooseLevel;
