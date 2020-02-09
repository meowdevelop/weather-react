import * as React from 'react';
import { connect } from 'react-redux';

//styles
import '../css/style.css';
import '../css/reset.css';

// Components
import SliderButton from './SliderButton';


class BtnsContainer extends React.Component {


   onClickRight = () => {
    this.props.updateState('SET_SLIDER_POSITION', 'plus');
    //проверяем заблокировать ли кнопки
    this.props.updateState('SET_RIGHT_BUTTON_DISABLED', '');
    this.props.updateState('SET_LEFT_BUTTON_DISABLED', '');
   };

   onClickLeft = () => {
    this.props.updateState('SET_SLIDER_POSITION', 'minus');
    //проверяем заблокировать ли кнопки
    this.props.updateState('SET_RIGHT_BUTTON_DISABLED', '');
    this.props.updateState('SET_LEFT_BUTTON_DISABLED', '');

};

  render() {
    const {isRightBtnDisabled, isLeftBtnDisabled} = this.props.store.weather;
      
    return <div className="slider-btn__btns">
    <SliderButton classes='slider-btn slider-btn_prev'
                  text='Назад'
                  onClick={this.onClickRight} 
                  isDisabled={isLeftBtnDisabled}/>

    <SliderButton classes='slider-btn slider-btn_next' 
                  text='Вперёд' 
                  onClick={this.onClickLeft} 
                  isDisabled={isRightBtnDisabled}/>
  </div>
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    updateState: (type, payload) => {
      dispatch({ type, payload });
    },
  }),
)(BtnsContainer);