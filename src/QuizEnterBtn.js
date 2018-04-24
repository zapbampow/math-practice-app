import React, {Component} from 'react'

class QuizEnterBtn extends Component {

  componentWillReceiveProps(nextProps){
    console.log('nextProps =')
    console.log(nextProps);
  }

  render(){
    const props = this.props;
    const enter = (props.isBtnDisabled)
      ?(<button className='enter' onClick={props.handleClickQuiz} disabled >Enter</button>)
      :(<button className='enter' onClick={props.handleClickQuiz} >Enter</button>);

    return (enter);
  }
}

export default QuizEnterBtn;
