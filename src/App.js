import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import PracticeNums from './PracticeNums';
import Quizzing from './Quizzing';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      screen:'home',
      practice:'',
      squares:[
        {square: 'All', clicked:true},
        {square:'1', clicked:false},
        {square:'2', clicked:false},
        {square:'3', clicked:false},
        {square:'4', clicked:false},
        {square:'5', clicked:false},
        {square:'6', clicked:false},
        {square:'7', clicked:false},
        {square:'8', clicked:false},
        {square:'9', clicked:false},
        {square:'10', clicked:false},
        {square:'11', clicked:false},
        {square:'12', clicked:false},
        {square:"Enter", clicked:"false"}
      ],
      options:[]
    }
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickOptions = this.handleClickOptions.bind(this);
  }

  handleClickHome(e){
    const newState = {
      practice:e.target.id,
      screen:'options'
    };
    this.setState(newState);
  }

  handleClickOptions(e) {
    // Update options and clicked in state based on what you is clicked
    if(e.target.innerHTML === 'All'){
      this.setState({
        options:['1','2','3','4','5','6','7','8','9', '10', '11', '12'],
        squares:[
          {square: 'All', clicked:true},
          {square:'1', clicked:false},
          {square:'2', clicked:false},
          {square:'3', clicked:false},
          {square:'4', clicked:false},
          {square:'5', clicked:false},
          {square:'6', clicked:false},
          {square:'7', clicked:false},
          {square:'8', clicked:false},
          {square:'9', clicked:false},
          {square:'10', clicked:false},
          {square:'11', clicked:false},
          {square:'12', clicked:false},
          {square:"Enter", clicked:"false"}
        ]
      })
    } else if(e.target.innerHTML === 'Enter') {
      console.log('enter');
    } else {
      let options = this.state.options.slice();
      if(!options.includes(e.target.innerHTML)){
        options.push(e.target.innerHTML);
      } else {
        const location = options.indexOf(e.target.innerHTML);
        options.splice(location, 1);
      }

      // Update squares clicked state based on what is clicked
      let squares = this.state.squares.slice();
      for(let i in  squares){
        if(squares[i].square === e.target.innerHTML){
          squares[i].clicked = !squares[i].clicked;
          break;
        }
      }
      // If a number is clicked, then the All btn is unclicked
      squares[0].clicked = false;

      this.setState({options, squares});

    }
  }

  render() {
    const screen = ()=> {switch(this.state.screen) {
      case 'quizzing':
        return <Quizzing  />;
      case 'options':
        return <PracticeNums handleClickOptions={this.handleClickOptions} options={this.state.options} squares={this.state.squares} />;
      default:
          return <Home handleClickHome={this.handleClickHome}/>;
      }
    };

    return (
      <div className="App">
        {screen()}
      </div>
    );
  }
}

export default App;
