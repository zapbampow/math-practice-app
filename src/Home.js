/* jshint esversion:6 */
import React, {Component} from 'react';
import './Home.css';

class Home extends Component{
  render(){
    return (
      <div className="home">
        <h1>What do you want to practice?</h1>
        <div id='addition' className='addition math-name' onClick={this.props.handleClickHome}>+ Addition +</div>
        <div id='subtraction' className='subtraction math-name' onClick={this.props.handleClickHome}>- Subtraction -</div>
        <div id='multiplication' className='multiplication math-name' onClick={this.props.handleClickHome}>x Multiplication x</div>
        <div id='division' className="division math-name" onClick={this.props.handleClickHome}> Division </div>
        <button id="stats" className="stats-button" onClick={this.props.handleClickHome}>What You've Learned</button>
      </div>
    );
  }
}

export default Home;
