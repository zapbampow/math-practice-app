import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import PracticeNums from './PracticeNums';
import Quizzing from './Quizzing';
import Stats from './Stats';
import state from './state'

class App extends Component {
  constructor(props) {
    super(props);
    this.state=state;
    this.handleClickHome = this.handleClickHome.bind(this);
    this.handleClickOptions = this.handleClickOptions.bind(this);
    this.handleClickQuiz = this.handleClickQuiz.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.backButton = this.backButton.bind(this);
    this.homeButton = this.homeButton.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.chooseLevel = this.chooseLevel.bind(this);
  }

  handleClickHome(e) {
    if (e.target.id === 'stats') {
      this.setState({
        screen: 'stats',
        stats: {
          statsScreen: 'category'
        }
      });

    } else {
      const newState = {
        practice: e.target.id,
        screen: 'options'
      };
      this.setState(newState);
    }
  }

  handleClickOptions(e) {
    // Update 'options' and 'clicked' in state based on what you is clicked
    if (e.target.innerHTML === 'All') {
      this.setState({
        options: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12'
        ],
        squares: [
          {
            square: 'All',
            clicked: true
          }, {
            square: '1',
            clicked: false
          }, {
            square: '2',
            clicked: false
          }, {
            square: '3',
            clicked: false
          }, {
            square: '4',
            clicked: false
          }, {
            square: '5',
            clicked: false
          }, {
            square: '6',
            clicked: false
          }, {
            square: '7',
            clicked: false
          }, {
            square: '8',
            clicked: false
          }, {
            square: '9',
            clicked: false
          }, {
            square: '10',
            clicked: false
          }, {
            square: '11',
            clicked: false
          }, {
            square: '12',
            clicked: false
          }, {
            square: "Enter",
            clicked: "false"
          }
        ]
      })
    } else if (e.target.innerHTML === 'Enter') {
      const selectedFacts = {
        mastered: [],
        level2: [],
        level1: []
      };
      const options = this.state.options.slice();
      const mathFacts = Object.assign(this.state.mathFacts);
      const match = (arr, val) => {
        return arr.some(el => el == val);
      };

      // Fill selectedFacts
      mathFacts.forEach(obj => {
        // if (match(options, obj.combo[0]) || match(options, obj.combo[1])) {
        if (match(options, obj.combo[0])) {
          let levelType;
          switch (this.state.practice) {
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

          if (obj[levelType] <= 6) {
            selectedFacts.level1.push(obj);
          } else if (obj[levelType] <= 10 && obj[levelType] > 6) {
            selectedFacts.level2.push(obj);
          } else {
            selectedFacts.mastered.push(obj);
          }

        }
      })

      // setState: Change screen to quizzing. Add selectedFacts.
      this.setState({screen: 'quizzing', selectedFacts})
    } else {
      let options = this.state.options.slice();
      if (!options.includes(e.target.innerHTML)) {
        options.push(e.target.innerHTML);
      } else if (this.state.squares[0].clicked === true) {
        options = [e.target.innerHTML];
      } else {
        const location = options.indexOf(e.target.innerHTML);
        options.splice(location, 1);
      }

      // Update squares clicked state based on what is clicked
      let squares = this.state.squares.slice();
      for (let i in squares) {
        if (squares[i].square === e.target.innerHTML) {
          squares[i].clicked = !squares[i].clicked;
          break;
        }
      }
      // If a number is clicked, then the All btn is unclicked
      squares[0].clicked = false;

      this.setState({options, squares});
    }
  }

  handleClickQuiz(e) {
    // Set quiz object to modify, which will be used to setState
    const quiz = Object.assign(this.state.quiz);

    // What to to when clicking 'Enter'
    if (e.target.innerHTML === 'Enter') {
      this.setState({isBtnDisabled: true});
      if (quiz.userAnswer == quiz.answer) {
        const quiz = Object.assign(this.state.quiz);
        quiz.correct = true;
        const currentQuestion = Object.assign(this.state.currentQuestion);

        switch (this.state.practice) {
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

        switch (this.state.practice) {
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
        setTimeout(this.newQuestion, 3000)// Click Backspace;
      }
    } else if (e.target.innerHTML === "Delete") {
      quiz.userAnswer = quiz.userAnswer.slice(0, quiz.userAnswer.length - 1);
      this.setState({quiz});
    } else if (quiz.userAnswer) {
      quiz.userAnswer = quiz.userAnswer + e.target.innerHTML;
      this.setState({quiz});
    } else {
      quiz.userAnswer = e.target.innerHTML;
      this.setState({quiz});
    }
  }

  newQuestion() {
    const randomLevel = Math.random() * 12;

    let level;
    if (this.state.selectedFacts.mastered.length > 0 && this.state.selectedFacts.level2.length > 0 && this.state.selectedFacts.level1.length > 0) {
      (randomLevel > 10)
        ? level = 'mastered'
        : (randomLevel <= 10 && randomLevel > 6)
          ? level = 'level2'
          : level = 'level1';
    } else if (this.state.selectedFacts.level2.length > 0 && this.state.selectedFacts.level1.length > 0) {
      (randomLevel > 8)
        ? level = 'level2'
        : level = 'level1'
    } else if (this.state.selectedFacts.mastered.length > 0 && this.state.selectedFacts.level1.length > 0) {
      (randomLevel > 9)
        ? level = 'mastered'
        : level = 'level1'
    } else {
      level = 'level1'
    }

    const randomMathFact = Math.floor(Math.random() * Math.floor(this.state.selectedFacts[level].length));

    const currentQuestion = Object.assign(this.state.selectedFacts[level][randomMathFact]);

    let question;
    let answer;

    switch (this.state.practice) {
      case 'addition':
        question = currentQuestion.combo[0] + ' + ' + currentQuestion.combo[1] + ' = ';
        answer = currentQuestion.combo[0] + currentQuestion.combo[1];
        break;
      case 'subtraction':
        question = (currentQuestion.combo[1] + currentQuestion.combo[0]) + ' - ' + currentQuestion.combo[0] + ' = ';
        answer = (currentQuestion.combo[1] + currentQuestion.combo[0]) - currentQuestion.combo[0];
        break;
      case 'multiplication':
        question = currentQuestion.combo[0] + ' x ' + currentQuestion.combo[1] + ' = ';
        answer = currentQuestion.combo[0] * currentQuestion.combo[1];
        break;
      case 'division':
        question = (currentQuestion.combo[0] * currentQuestion.combo[1]) + ' \xF7 ' + currentQuestion.combo[0] + ' = ';
        answer = (currentQuestion.combo[0] * currentQuestion.combo[1]) / currentQuestion.combo[0];
        break;
    }

    this.setState({
      quiz: {
        question,
        answer
      },
      currentQuestion,
      isBtnDisabled: false
    })
  }

  backButton() {
    if (this.state.screen === 'quizzing') {
      this.setState({screen: 'options'})
    } else if (this.state.stats.statsScreen === 'level') {
      const stats = Object.assign(this.state.stats);
      stats.statsScreen = 'category';
      this.setState({stats})
    } else if (this.state.stats.statsScreen === 'stats') {
      const stats = Object.assign(this.state.stats);
      stats.statsScreen = 'level';
      this.setState({stats});
    }
  }

  homeButton() {
    this.setState({
      screen: 'home',
      practice: '',
      options: [
        "1",
        "2",
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
      ],
      quiz: {
        question: '',
        correctAnswer: null,
        userAnswer: '',
        correct: null
      },
      selectedFacts: {
        mastered: [],
        level2: [],
        level1: []
      },
      squares: [
        {
          square: 'All',
          clicked: true
        }, {
          square: '1',
          clicked: false
        }, {
          square: '2',
          clicked: false
        }, {
          square: '3',
          clicked: false
        }, {
          square: '4',
          clicked: false
        }, {
          square: '5',
          clicked: false
        }, {
          square: '6',
          clicked: false
        }, {
          square: '7',
          clicked: false
        }, {
          square: '8',
          clicked: false
        }, {
          square: '9',
          clicked: false
        }, {
          square: '10',
          clicked: false
        }, {
          square: '11',
          clicked: false
        }, {
          square: '12',
          clicked: false
        }, {
          square: "Enter",
          clicked: "false"
        }
      ]
    })
  }

  chooseCategory(e) {
    const stats = Object.assign(this.state.stats);
    stats.category = e.target.id;
    stats.statsScreen = 'level';
    this.setState({stats});
  }

  chooseLevel(e) {
    const stats = Object.assign(this.state.stats);
    stats.level = e.target.id;
    stats.statsScreen = 'stats';
    this.setState({stats});
  }

  render() {
    const screen = () => {
      switch (this.state.screen) {
        case 'stats':
          return <Stats stats={this.state.stats} chooseCategory={this.chooseCategory} chooseLevel={this.chooseLevel} mathFacts={this.state.mathFacts} backButton={this.backButton} homeButton={this.homeButton}/>;
        case 'quizzing':
          return <Quizzing mathFacts={this.state.mathFacts} newQuestion={this.newQuestion} quiz={this.state.quiz} handleClickQuiz={this.handleClickQuiz} options={this.state.options} isBtnDisabled={this.state.isBtnDisabled} backButton={this.backButton} homeButton={this.homeButton}/>;
        case 'options':
          return <PracticeNums handleClickOptions={this.handleClickOptions} options={this.state.options} squares={this.state.squares} homeButton={this.homeButton}/>;
        default:
          return <Home handleClickHome={this.handleClickHome}/>;
      }
    };

    return (<div className="App">
      {screen()}
    </div>);
  }
}

export default App;

// TODOS
// Major TODOS
// 1. Update UI

// 2. Add additional option to look at a given number and see how well you have mastered each of the combos for that number.

// 3. Refactor to clean up and organize the code
// 4. Optional refactor: save state to localStorage. On initial render, get state from localStoraged
// 5. Add backend. Use express and mongo to save to backend.
// 4. Refactor for redux and mongo
// 5. Add login, users, etc so there is data persistence.
// 6. Refactor for react-native.

// Remind myself how to compartmentalize the functions so as to clean up this code.
// Wait until the font has loaded to display anything so that it stops displaying and then changing once the font is loaded.
