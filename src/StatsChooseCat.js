import React, {Component} from 'react';

class StatsChooseCat extends Component{
  render(){
    return(
      <div className='stats-choose-cat-container'>
        <h1>Pick a category</h1>
        <div id='addition' className='stats-category' onClick={this.props.chooseCategory}>+ Addition +</div>
        <div id='subtraction' className='stats-category' onClick={this.props.chooseCategory}>- Subtraction -</div>
        <div id='multiplication' className='stats-category' onClick={this.props.chooseCategory}>x Multiplication x</div>
        <div id='division' className="stats-category division" onClick={this.props.chooseCategory}> Division </div>
      </div>
    )
  }
}

export default StatsChooseCat;
