import * as React from 'react';

//styles
import '../css/style.css';
import '../css/reset.css';

const DayComponent = ({day}) => (
      <div className="block slider__block">
          <p className="day-of-week">{day.dayOfWeek}</p>
          <p className="date">{day.date}</p>
          <div className="img">
            <img src={day.image} alt=""/>
          </div>
          <p className="day-temperature">{day.dayTemperature}</p>
          <p className="night-temperature">{day.temperatureNight}</p>
          <p className="rain">{day.rainfall}</p>
          <p className="cloudiness">{day.cloudiness}</p>
      </div>
);

export default DayComponent;
