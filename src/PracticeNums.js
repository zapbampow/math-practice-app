import React, {Component} from 'react';
import './PracticeNums.css';

const PracticeNums = props => {
  const squares = props.squares.slice().map(square => {
    if(square.square === "All" && square.clicked){
      return <div key={square.square} className='practice-num-all clicked' onClick={props.handleClickOptions} >All</div>
    } else if (square.square === "All" && !square.clicked){
      return <div key={square.square} className='practice-num-all' onClick={props.handleClickOptions} >All</div>
    } else if (square.square === 'Enter') {
      return <div key={square.square} className='practice-num-enter' onClick={props.handleClickOptions} >Enter</div>
    } else if (square.clicked){
      return <div  key={square.square}className="practice-num-num clicked" onClick={props.handleClickOptions} >{square.square}</div>
    } else {
      return <div key={square.square} className="practice-num-num" onClick={props.handleClickOptions} >{square.square}</div>
    }

  });


  return (
    <div className="practice-nums-page">
      <div className="practice-num-home-button" onClick={props.homeButton}>Home</div>

      <div className="practice-num-container">
        <div className="practice-nums">
          <div className='practice-num-heading'>What numbers do you want to practice?</div>
          {squares}
      </div>
    </div>
  </div>
  )
}




export default PracticeNums;
