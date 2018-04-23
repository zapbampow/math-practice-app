import React, {Component} from 'react';
import Question from './Question'
import './Quizzing.css';

class Quizzing extends Component {
  constructor(props){
    super(props);
    this.state = {
      question:'',
      answer:''
    }
  }

  componentWillMount(){
    this.props.newQuestion();
  }

  render(){
    return (
      <div className='quizzing'>

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

          <div className='backspace' onClick={this.props.handleClickQuiz}>Backspace</div>
          <div className='enter' onClick={this.props.handleClickQuiz}>Enter</div>
        </div>
      </div>
    )
  }
}

export default Quizzing;
