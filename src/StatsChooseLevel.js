import React, {Component} from 'react';

class StatsChooseLevel extends Component {
  render() {
    return (
      <div className='stats-container'>
        <div className='stats-nav-buttons'>
          <span className='stats-back' onClick={this.props.backButton}>Back</span>
          <span className='stats-home' onClick={this.props.homeButton}>Home</span>
        </div>

      <div className='stats-choose-level-container'>
        <h1>Pick a category</h1>
        <div id='mastered' className='stats-level' onClick={this.props.chooseLevel}>Mastered</div>
        <div id='practicing' className='stats-level' onClick={this.props.chooseLevel}>Practicing</div>
        <div id='learning' className='stats-level' onClick={this.props.chooseLevel}>Learning</div>
        <div id='dont-know' className="stats-level" onClick={this.props.chooseLevel}>Don't Yet Know</div>
      </div>
    </div>
    )
  }
}

export default StatsChooseLevel;
