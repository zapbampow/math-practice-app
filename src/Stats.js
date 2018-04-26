import React, {Component} from 'react';
import StatsChooseCat from './StatsChooseCat';
import StatsChooseLevel from './StatsChooseLevel';
import StatsChosenCatLevel from './StatsChosenCatLevel';
import './Stats.css';


class Stats extends Component {
  render(){
    const statsScreenToShow = () => {
      switch(this.props.stats.statsScreen){
        case 'category':
          return <StatsChooseCat chooseCategory={this.props.chooseCategory} />;
          break;
        case 'level':
          return <StatsChooseLevel chooseLevel={this.props.chooseLevel} />;
          break;
        case 'stats':
          return <StatsChosenCatLevel mathFacts={this.props.mathFacts} />;
            break;
        default: return <div>Returned Null</div>;
      //   : ;
      }
    }
    // return {statsScreenToShow};
    return (statsScreenToShow());
  }
}

export default Stats;
