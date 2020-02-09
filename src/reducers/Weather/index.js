const initialState = {
    sliderPosition: 0,
    isRightBtnDisabled: false,
    isLeftBtnDisabled: false,
    daysLength: null,
  };
  
  const weather = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_SLIDER_POSITION':
        return {
          ...state,
          sliderPosition: payload === 'plus'? state.sliderPosition + 180 : state.sliderPosition - 180,
        };
      case 'SET_BASE_SLIDER_POSITION':
        return {
          ...state,
          sliderPosition: payload,
        };
      case 'SET_DAYS_LENGTH':
        return {
          ...state,
          daysLength: payload,
        };
      case 'SET_RIGHT_BUTTON_DISABLED':
        return {
          ...state,
          isRightBtnDisabled: state.sliderPosition <= -(state.daysLength * 180 - 4 * 180) ? true : false,
        };
      case 'SET_LEFT_BUTTON_DISABLED':
        return {
          ...state,
          isLeftBtnDisabled: state.sliderPosition === 0 ? true : false,
        };
  
      default:
        return state;
    }
  };
  
  export default weather;
  