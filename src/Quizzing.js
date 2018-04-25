import React, {Component} from 'react';
import Question from './Question'
import './Quizzing.css';
import QuizEnterBtn from './QuizEnterBtn'

class Quizzing extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.newQuestion();
  }

  render(){
    return (
      <div className='quizzing'>
        <div className='nav-buttons'>
          <span className='quizzing-back' onClick={this.props.backButton}>Back</span>
          <span className='quizzing-home' onClick={this.props.homeButton}>Home</span>
        </div>

        <Question quiz={this.props.quiz} />
        <div className='keypad'>
          <div className='num' onClick={this.props.handleClickQuiz}>7</div>
          <div className='num' onClick={this.props.handleClickQuiz}>8</div>
          <div className='num' onClick={this.props.handleClickQuiz}>9</div>
          <div className='num' onClick={this.props.handleClickQuiz}>4</div>
          <div className='num' onClick={this.props.handleClickQuiz}>5</div>
          <div className='num' onClick={this.props.handleClickQuiz}>6</div>
          <div className='num' onClick={this.props.handleClickQuiz}>1</div>
          <div className='num' onClick={this.props.handleClickQuiz}>2</div>
          <div className='num' onClick={this.props.handleClickQuiz}>3</div>
          <div className='num' onClick={this.props.handleClickQuiz}>0</div>

          <div className='backspace' onClick={this.props.handleClickQuiz}>Delete</div>
          <QuizEnterBtn isBtnDisabled={this.props.isBtnDisabled} handleClickQuiz={this.props.handleClickQuiz} />
        </div>
      </div>
    )
  }
}

export default Quizzing;
