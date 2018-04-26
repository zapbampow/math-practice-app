import React, {Component} from 'react';

class StatsChooseLevel extends Component {
  render() {
    return (
      <div className='stats-choose-level-container'>
        <h1>Pick a category</h1>
        <div id='mastered' className='stats-level' onClick={this.props.chooseLevel}>Mastered</div>
        <div id='practicing' className='stats-level' onClick={this.props.chooseLevel}>Practicing</div>
        <div id='learning' className='stats-level' onClick={this.props.chooseLevel}>Learning</div>
        <div id='dont-know' className="stats-level" onClick={this.props.chooseLevel}>Don't Yet Know</div>
      </div>
    )
  }
}

export default StatsChooseLevel;
