import React, {Component} from 'react';

class StatsChosenCatLevel extends Component {
  render(){
    const facts = this.props.mathFacts.slice().filter(obj => (obj.addLevel > 10));
    console.log(facts);

    const displayFacts = facts.map(mathFact => {
      const fact = mathFact.combo[0] + ' + ' + mathFact.combo[1];
      return <li>{fact}</li>
    })

    return(
      <div>
        <h1>You have mastered...</h1>
        <ul>
           {displayFacts}
        </ul>
      </div>
    )
  }
}

export default StatsChosenCatLevel;

// TODO
// Output from conditionals based on category and level
