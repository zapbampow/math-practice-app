import React, {Component} from 'react';
import './PracticeNums.css';

class PracticeNums extends Component {
  render(){
    const squares = this.props.squares.slice().map(square => {
      if(square.square === "All" && square.clicked){
        return <div key={square.square} className='practice-num-all clicked' onClick={this.props.handleClickOptions} >All</div>
      } else if (square.square === "All" && !square.clicked){
        return <div key={square.square} className='practice-num-all' onClick={this.props.handleClickOptions} >All</div>
      } else if (square.square === 'Enter') {
        return <div key={square.square} className='practice-num-enter' onClick={this.props.handleClickOptions} >Enter</div>
      } else if (square.clicked){
        return <div  key={square.square}className="practice-num-num clicked" onClick={this.props.handleClickOptions} >{square.square}</div>
      } else {
        return <div key={square.square} className="practice-num-num" onClick={this.props.handleClickOptions} >{square.square}</div>
      }

    });


    return (
      <div className="practice-num-container">
        <div className="practice-num-home-button">Home</div>
        <div className="practice-nums">
          <div className='practice-num-heading'>What numbers do you want to practice?</div>
          {squares}
      </div>
    </div>
    )
  }
}

export default PracticeNums;
