import React, {Component} from 'react'

const QuizEnterBtn = props => {

  const enter = (props.isBtnDisabled)
    ? (<button className='enter' onClick={props.handleClickQuiz} disabled="disabled">Enter</button>)
    : (<button className='enter' onClick={props.handleClickQuiz}>Enter</button>);

  return (enter);
}

export default QuizEnterBtn;
