import React, {Component} from 'react';
import './Quizzing.css';

class Quizzing extends Component {
  render(){
    return (
      <div className='quizzing'>
        <div className='question'>4+5 = <span className='answer'>9</span></div>
        <div className='keypad'>
          <div className='num'>7</div>
          <div className='num'>8</div>
          <div className='num'>9</div>
          <div className='num'>4</div>
          <div className='num'>5</div>
          <div className='num'>6</div>
          <div className='num'>1</div>
          <div className='num'>2</div>
          <div className='num'>3</div>
          <div className='num'>0</div>
          <div className='enter'>Enter</div>
        </div>
      </div>
    )
  }
}

export default Quizzing;
