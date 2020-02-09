import * as React from 'react';
import { connect } from 'react-redux';

//styles
import '../css/style.css';
import '../css/reset.css';

// Components
import DayComponent from '../components/DayComponent';


class Slider extends React.Component {

  componentWillMount() {
    //Ищем индекс объекта с dayOfWeek === "Сегодня" и смещаем слайдер
    const numToday = this.props.days.findIndex(day => day.dayOfWeek === "Сегодня");
    const position = numToday >= 0 ? -(numToday * 180) : 0;
    this.props.updateState('SET_BASE_SLIDER_POSITION', position);
    this.props.updateState('SET_DAYS_LENGTH', this.props.days.length);

    //проверяем заблокировать ли кнопки
    this.props.updateState('SET_RIGHT_BUTTON_DISABLED', '');
    this.props.updateState('SET_LEFT_BUTTON_DISABLED', '');
  };


  render() {
  
    const { sliderPosition } = this.props.store.weather;
      
    return  <div className="slider" style={{marginLeft: `${sliderPosition}px`}}>
     {this.props.days.map((day) =>
        <DayComponent day={day} />
      )}
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
)(Slider);