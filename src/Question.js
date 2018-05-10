/* jshint 'esversion:6' */

import React, { Component } from 'react';
import './Question.css';

const Question = props => {
  const question = () => {
    switch(props.quiz.correct){
      case true:
        return <div className='question correct-answer'>{props.quiz.question}
          <span className='answer'>{props.quiz.userAnswer}</span>
        </div>;
      case false:
        return <div className='question wrong-answer'>{props.quiz.question}
          <span className='answer'>{props.quiz.userAnswer}</span>
          <span className='correct-answer'> ({props.quiz.answer})</span>
        </div>;
      default:
        return <div className='question'>{props.quiz.question}
          <span className='answer'>{props.quiz.userAnswer}</span>
        </div>;
    }
  };

  return (
    <div className="question-container">{question()}</div>
  )
}

// class Question extends Component {
//   render(){
//     const question = () => {
//       switch(this.props.quiz.correct){
//         case true:
//           return <div className='question correct-answer'>{this.props.quiz.question}
//             <span className='answer'>{this.props.quiz.userAnswer}</span>
//           </div>;
//         case false:
//           return <div className='question wrong-answer'>{this.props.quiz.question}
//             <span className='answer'>{this.props.quiz.userAnswer}</span>
//             <span className='correct-answer'> ({this.props.quiz.answer})</span>
//           </div>;
//         default:
//           return <div className='question'>{this.props.quiz.question}
//             <span className='answer'>{this.props.quiz.userAnswer}</span>
//           </div>;
//       }
//     };
//
//     return (
//       <div className="question-container">{question()}</div>
//     )
//   }
//
// }

export default Question;
