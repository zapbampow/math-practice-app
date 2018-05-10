import React, {Component} from 'react';
import StatsChooseCat from './StatsChooseCat';
import StatsChooseLevel from './StatsChooseLevel';
import StatsChosenCatLevel from './StatsChosenCatLevel';
import './Stats.css';


const Stats = props => {

  const statsScreenToShow = () => {
    switch(props.stats.statsScreen){
      case 'category':
        return <StatsChooseCat chooseCategory={props.chooseCategory} homeButton={props.homeButton} />;
        break;
      case 'level':
        return <StatsChooseLevel chooseLevel={props.chooseLevel} backButton={props.backButton} homeButton={props.homeButton} />;
        break;
      case 'stats':
        return <StatsChosenCatLevel mathFacts={props.mathFacts} stats={props.stats} backButton={props.backButton} homeButton={props.homeButton} />;
          break;
      default: return <div>Returned Null</div>;
    //   : ;
    }
  }
  return (statsScreenToShow());
}


export default Stats;
