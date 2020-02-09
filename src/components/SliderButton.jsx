import * as React from 'react';

//styles
import '../css/style.css';
import '../css/reset.css';

const SliderButton = ({classes, text, onClick, isDisabled}) => ( 

  <button className={classes} onClick={onClick} disabled={isDisabled}>{text}</button>

);

export default SliderButton;