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
      options:["1", "2", '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      mathFacts: [
        {
          combo: [1, 1],
          addLevel: 12,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 2],
          addLevel: 7,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 3],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 4],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 5],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 6],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [1, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        }, {
          combo: [1, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        }, {
          combo: [1, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [2, 2],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 3],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 4],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 5],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 6],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [2, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [3, 3],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 4],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 5],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 6],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [3, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [4, 4],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 5],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 6],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [4, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [5, 5],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 6],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [5, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [6, 6],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [6, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [6, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [6, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [6, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [6, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [6, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [7, 7],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [7, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [7, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [7, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [7, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [7, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [8, 8],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [8, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [8, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [8, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [8, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },

        {
          combo: [9, 9],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [9, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [9, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [9, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [10, 10],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [10, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [10, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [11, 11],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [11, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        },
        {
          combo: [12, 12],
          addLevel: 0,
          subLevel: 0,
          multLevel: 0,
          divLevel: 0,
          addMastered: false,
          subMastered: false,
          multMastered: false,
          divMastered: false
        }
      ],
      quiz:{
        question:'',
        correctAnswer:null,
        userAnswer: '',
        correct:null
      },
      selectedFacts: {
        mastered:[],
        level2:[],
        level1:[]
      },
      isBtnDisabled:false
    }
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickOptions = this.handleClickOptions.bind(this);
    this.handleClickQuiz = this.handleClickQuiz.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.backButton = this.backButton.bind(this);
    this.homeButton = this.homeButton.bind(this);
  }

  handleClickHome(e){
    const newState = {
      practice:e.target.id,
      screen:'options'
    };
    this.setState(newState);
  }

  handleClickOptions(e) {
    // Update 'options' and 'clicked' in state based on what you is clicked
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
        ],
      })
    } else if(e.target.innerHTML === 'Enter') {
      const selectedFacts = {mastered:[], level2:[], level1:[]};
      const options = this.state.options.slice();
      const mathFacts = Object.assign(this.state.mathFacts);
      const match = (arr, val) => {
        return arr.some(el => el == val);
      };

      // Fill selectedFacts
      mathFacts.forEach( obj => {
        if(match(options, obj.combo[0]) || match(options, obj.combo[1])){
          let levelType;
          switch(this.state.practice){
            case 'addition':
              levelType = 'addLevel';
              break;
            case 'subtraction':
              levelType = 'subLevel';
              break;
            case 'multiplication':
              levelType = 'multLevel';
              break;
            case 'division':
              levelType = 'multLevel';
              break;
            default:
              levelType = 'addLevel';
              break;
          }

          if(obj[levelType] <= 6){
            selectedFacts.level1.push(obj);
          } else if(obj[levelType] <= 10 && obj[levelType] > 6){
            selectedFacts.level2.push(obj);
          } else {
            selectedFacts.mastered.push(obj);
          }

        }
      })


      // setState: Change screen to quizzing. Add selectedFacts.
      this.setState({screen:'quizzing', selectedFacts})
    } else {
      let options = this.state.options.slice();
            console.log(options);
      if(!options.includes(e.target.innerHTML)){
        options.push(e.target.innerHTML);
      } else if(this.state.squares[0].clicked === true){
        options = [e.target.innerHTML];
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

  handleClickQuiz(e){
    // Set quiz object to modify, which will be used to setState
    const quiz = Object.assign(this.state.quiz);

    // What to to when clicking 'Enter'
    if(e.target.innerHTML === 'Enter') {
      this.setState({isBtnDisabled:true});
      console.log('btn disabled')
      if(quiz.userAnswer == quiz.answer){
        console.log("Correct!")
        const quiz = Object.assign(this.state.quiz);
        quiz.correct = true;
        const currentQuestion = Object.assign(this.state.currentQuestion);

        switch(this.state.practice){
          case 'addition':
            currentQuestion.addLevel = currentQuestion.addLevel + 1;
            break;
          case 'subtraction':
            currentQuestion.subLevel = currentQuestion.subLevel + 1;
            break;
          case 'multiplication':
            currentQuestion.multLevel = currentQuestion.multLevel + 1;
            break;
          case 'division':
            currentQuestion.divLevel = currentQuestion.divLevel + 1;
            break;
        }

        this.setState({quiz, currentQuestion});
        setTimeout(this.newQuestion, 1500);
      } else {
        console.log("Nope!")
        const quiz = Object.assign(this.state.quiz);
        quiz.correct = false;
        const currentQuestion = Object.assign(this.state.currentQuestion);

        switch(this.state.practice){
          case 'addition':
            currentQuestion.addLevel = currentQuestion.addLevel - 1;
            break;
          case 'subtraction':
            currentQuestion.subLevel = currentQuestion.subLevel - 1;
            break;
          case 'multiplication':
            currentQuestion.multLevel = currentQuestion.multLevel - 1;
            break;
          case 'division':
            currentQuestion.divLevel = currentQuestion.divLevel - 1;
            break;
        }

        this.setState({quiz, currentQuestion});
        setTimeout(this.newQuestion, 3000);
      }
    }
    // Click Backspace
    else if(e.target.innerHTML === "Backspace"){
      quiz.userAnswer = quiz.userAnswer.slice(0, quiz.userAnswer.length-1);
      this.setState({quiz});
    }
    // Clicking number buttons
    else if(quiz.userAnswer){
      quiz.userAnswer = quiz.userAnswer + e.target.innerHTML;
      this.setState({quiz});
    } else {
      quiz.userAnswer = e.target.innerHTML;
      this.setState({quiz});
    }
  }

  newQuestion() {
    const randomLevel = Math.random()*12;

    let level;
    if(this.state.selectedFacts.mastered.length > 0 && this.state.selectedFacts.level2.length > 0 && this.state.selectedFacts.level1.length > 0) {
        (randomLevel > 10) ? level = 'mastered'
        : (randomLevel <=10 && randomLevel > 6) ? level='level2'
        : level='level1' ;
    } else if (this.state.selectedFacts.level2.length > 0 && this.state.selectedFacts.level1.length > 0) {
      (randomLevel > 8) ? level = 'level2' : level = 'level1'
    } else if (this.state.selectedFacts.mastered.length > 0 && this.state.selectedFacts.level1.length > 0){
      (randomLevel > 9) ? level = 'mastered' : level = 'level1'
    } else {
      level = 'level1'
    }

    const randomMathFact = Math.floor(Math.random()*Math.floor(this.state.selectedFacts[level].length));

    const currentQuestion = Object.assign(this.state.selectedFacts[level][randomMathFact]);

    let question;
    let answer;

    switch(this.state.practice){
      case 'addition':
        question = currentQuestion.combo[0] + ' + ' + currentQuestion.combo[1] + ' = ';
        answer =  currentQuestion.combo[0] + currentQuestion.combo[1];
        break;
      case 'subtraction':
      {/*
        TODO: Do the same thing you are doing to do with the division with randomizing.
      */}
        question = (currentQuestion.combo[1] + currentQuestion.combo[0]) + ' - ' + currentQuestion.combo[0] + ' = ';
        answer =  (currentQuestion.combo[1] + currentQuestion.combo[0]) - currentQuestion.combo[0];
        break;
      case 'multiplication':
      question = currentQuestion.combo[0] + ' x ' + currentQuestion.combo[1] + ' = ';
        answer =  currentQuestion.combo[0] * currentQuestion.combo[1];
        break;
      case 'division':
        {/*
          TODO: Figure out which number to use as the divisor, then place it as the divisor.
          Possible solution: Set array with 2 options. Set randomNum. If randomNum <= 0.5, check if first num in array is in options. If yes, use it. If not use, other number. If randomNum > 0.5, check if second num in array is in options. If yes, use it, if not, use other number.
        */}
        question = (currentQuestion.combo[0] * currentQuestion.combo[1]) + ' \xF7 ' + currentQuestion.combo[0] + ' = ';
        answer =  (currentQuestion.combo[0] * currentQuestion.combo[1])/ currentQuestion.combo[0];
        break;
    }



    this.setState({quiz:{question, answer}, currentQuestion, isBtnDisabled:false})
  }

  backButton(){
      this.setState({screen:'options'})
  }

  homeButton(){
      this.setState({
        screen:'home',
        practice:'',
        options:["1", "2", '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        quiz:{
          question:'',
          correctAnswer:null,
          userAnswer: '',
          correct:null
        },
        selectedFacts: {
          mastered:[],
          level2:[],
          level1:[]
        },
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
  }

  render() {
    const screen = ()=> {
      switch(this.state.screen) {
        case 'quizzing':
          return <Quizzing mathFacts={this.state.mathFacts} newQuestion={this.newQuestion} quiz={this.state.quiz} handleClickQuiz={this.handleClickQuiz} options={this.state.options} isBtnDisabled={this.state.isBtnDisabled} backButton={this.backButton} homeButton={this.homeButton} />;
        case 'options':
          return <PracticeNums handleClickOptions={this.handleClickOptions} options={this.state.options} squares={this.state.squares} homeButton={this.homeButton} />;
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

// TODOS
// Major TODOS
// 1. Update UI
      // a. Update the basic UI making it look consistent in general (Done)
      // b. Add Home and back buttons. (Done)
        // - Make the buttons work. (done)
      // c. Make better for smaller screens by adding at least one media query to deal with small screens like iPhone SE.
      // d. Add a 'Next Problem' button
      // e. Add Stats screens
// 2. Refactor to clean up and organize the code
// 3. Refactor for redux and mongo
// 4. Add login, users, etc so there is data persistence.
// 5. Refactor for react-native.

// Remind myself how to compartmentalize the functions so as to clean up this code.
// Wait until the font has loaded to display anything so that it stops displaying and then changing once the font is loaded.
