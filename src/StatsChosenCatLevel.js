import React, {Component} from 'react';

const StatsChosenCatLevel = props => {

  // mastered, practicing, learning, dont-know
  let facts;
  let statsHeading

  const level = props.stats.category === 'addition'
    ? 'addLevel'
    : props.stats.category === "subtraction"
      ? 'subLevel'
      : props.stats.category === 'multiplication'
      ? 'multLevel'
      : 'divLevel';

  const symbol = () => {
    switch(props.stats.category){
      case 'addition':
        return " + ";
        break;
      case 'subtraction':
        return " - ";
        break;
      case 'multiplication':
        return " x ";
        break;
      case 'division':
        // Returns an obelus symbol
        return ' ' + String.fromCharCode(247) + ' ';
        break;
      default:
        return <span className='stats-div-symbol'></span>;
        break;
    }
  }

  if(props.stats.level === 'mastered'){
    facts = props.mathFacts.slice().filter(obj => obj[level] > 10);
    statsHeading = "You have mastered...";
  } else if(props.stats.level === 'practicing'){
    facts = props.mathFacts.slice().filter(obj => obj[level] <=10 && obj[level] > 6);
    statsHeading = "You're practicing...";
  }else if(props.stats.level === 'learning'){
    facts = props.mathFacts.slice().filter(obj => obj[level] <= 6 && obj[level] > 0);
    statsHeading = "You're learning...";
  } else {
    facts = props.mathFacts.slice().filter(obj => obj[level] <= 0);
    statsHeading = "You don't yet know...";
  }

  const displayFacts = facts.map(mathFact => {
    let fact;
    if(props.stats.category === 'addition' || props.stats.category === 'multiplication'){
      fact = mathFact.combo[0] + symbol() + mathFact.combo[1];
    } else if (props.stats.category === 'subtraction'){
      fact = mathFact.combo[0] + mathFact.combo[1] + symbol() + mathFact.combo[0];
    } else {
      fact = mathFact.combo[0] * mathFact.combo[1] + symbol() + mathFact.combo[0]
    }
    const key = mathFact.combo[0].toString() + mathFact.combo[1].toString();
    return <div key={key} className="stat-fact">{fact}</div>
  })


  return(
    <div className='stats-container'>
      <div className='stats-nav-buttons'>
        <span className='stats-back' onClick={props.backButton}>Back</span>
        <span className='stats-home' onClick={props.homeButton}>Home</span>
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


export default StatsChosenCatLevel;

// TODO
// Output from conditionals based on category and level
