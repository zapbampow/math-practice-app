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
      options:[],
      mathFacts: {
        mastered: [],
        level2: [],
        level1: [
          {
            combo: [1, 1],
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
            combo: [1, 2],
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
        ]
      },
      quiz:{
        question:'',
        correctAnswer:null,
        userAnswer: '',
        correct:null
      }
    }
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickOptions = this.handleClickOptions.bind(this);
    this.handleClickQuiz = this.handleClickQuiz.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
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
        ],

      })
    } else if(e.target.innerHTML === 'Enter') {
      this.setState({screen:'quizzing'})
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

  handleClickQuiz(e){
    const quiz = Object.assign(this.state.quiz);
    if(e.target.innerHTML === 'Enter') {
      if(quiz.userAnswer == quiz.answer){
        console.log("Correct!")
        const quiz = this.state.quiz;
        quiz.correct = true;
        this.setState({quiz});
        setTimeout(this.newQuestion, 1500);
      } else {
        console.log("Nope!")
        const quiz = this.state.quiz;
        quiz.correct = false;
        this.setState({quiz});
        setTimeout(this.newQuestion, 3000);
      }
    } else if(e.target.innerHTML === "Backspace"){
      console.log("Backspace pressed")
    } else if(quiz.userAnswer){
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
    if(this.state.mathFacts.mastered.length > 0 && this.state.mathFacts.level2.length > 0 && this.state.mathFacts.length > 0) {
        (randomLevel > 10) ? level = 'mastered'
        : (randomLevel <=10 && randomLevel > 6) ? level='level2'
        : level='level1' ;
    } else if (this.state.mathFacts.level2.length > 0 && this.state.mathFacts.length > 0) {
      (randomLevel > 8) ? level = 'level2' : level = 'level1'
    } else if (this.state.mathFacts.mastered.length > 0 && this.state.mathFacts.length > 0){
      (randomLevel > 9) ? level = 'mastered' : level = 'level1'
    } else {
      level = 'level1'
    }

    const randomMathFact = Math.floor(Math.random()*Math.floor(this.state.mathFacts[level].length));

    const question = this.state.mathFacts[level][randomMathFact].combo[0] + ' + ' + this.state.mathFacts[level][randomMathFact].combo[1] + ' = ';

    const answer =  this.state.mathFacts[level][randomMathFact].combo[0] + this.state.mathFacts[level][randomMathFact].combo[1];

    this.setState({quiz:{question, answer}})
  }

  render() {
    const screen = ()=> {switch(this.state.screen) {
      case 'quizzing':
        return <Quizzing mathFacts={this.state.mathFacts} newQuestion={this.newQuestion} quiz={this.state.quiz} handleClickQuiz={this.handleClickQuiz} />;
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

// TODOS
// in handleClickQuiz: on correct answer 1.setState({quiz.correct:true}) -> changes className to include correct styling(green letters) 2. Also setState on that problem's level and update grouping if needed.
// Add next problem button which changes the problem view
// on incorrect answer 1. setState quiz.correct:false -> also changes className 2. reveal the correct answer in green next to the wrong answer.
// Test this for addition.
// Then add a new condition so that it shows different problems bases on the the practice state.
// Then add a new condition to show different problems based on options state.
// On Quiz component add a backspace button so user can backspace on an userAnswer
// On quiz and options components add keyboard functionality for numbers and Enter

// Refactor for redux
// Add user login and data persistence for userAnswer

// Refactor for react-native

// Remind myself how to compartmentalize the functions so as to clean up this code.
