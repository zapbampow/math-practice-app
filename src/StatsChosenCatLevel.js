import React, {Component} from 'react';

class StatsChosenCatLevel extends Component {
  render(){
    // mastered, practicing, learning, dont-know
    let facts;
    let statsHeading;

    const level = this.props.stats.category === 'addition'
      ? 'addLevel'
      : this.props.stats.category === "subtraction"
        ? 'subLevel'
        : this.props.stats.category === 'multiplication'
        ? 'multLevel'
        : 'divLevel';

    if(this.props.stats.level === 'mastered'){
      facts = this.props.mathFacts.slice().filter(obj => obj[level] > 10);
      statsHeading = "You have mastered...";
    } else if(this.props.stats.level === 'practicing'){
      facts = this.props.mathFacts.slice().filter(obj => obj[level] <=10 && obj[level] > 6);
      statsHeading = "You're practicing...";
    }else if(this.props.stats.level === 'learning'){
      facts = this.props.mathFacts.slice().filter(obj => obj[level] <= 6 && obj[level] > 0);
      statsHeading = "You're learning...";
    } else {
      facts = this.props.mathFacts.slice().filter(obj => obj[level] <= 0);
      statsHeading = "You don't yet know...";
    }

// TODO: add conditional to displayFacts to show a different symbol for facts based on category. 
    const displayFacts = facts.map(mathFact => {
      const fact = mathFact.combo[0] + " + " + mathFact.combo[1];
      const key = mathFact.combo[0].toString() + mathFact.combo[1].toString();
      console.log(key);
      return <div key={key} className="stat-fact">{fact}</div>
    })


    return(
      <div className='stats-container'>
        <div className='stats-nav-buttons'>
          <span className='stats-back' onClick={this.props.backButton}>Back</span>
          <span className='stats-home' onClick={this.props.homeButton}>Home</span>
        </div>


        <div className='stats-main'>
          <h1>{statsHeading}</h1>
          <div className="stats-grid">
             {displayFacts}
          </div>
        </div>
      </div>
    )
  }
}

export default StatsChosenCatLevel;

// TODO
// Output from conditionals based on category and level
