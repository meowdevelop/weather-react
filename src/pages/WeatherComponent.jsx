import * as React from 'react';
import { connect } from 'react-redux';

//styles
import '../css/style.css';
import '../css/reset.css';

// Components
import Slider from '../components/Slider';
import BtnsContainer from '../components/BtnsContainer';

//images
import cloud from '../images/cloud.png';
import rain from '../images/rain.png';
import snowrain from '../images/snow-and-rain.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png';

//helpers
import days from '../helpers/days.js';
import daysOfWeek from '../helpers/daysOfWeek.js';
import months from '../helpers/months.js';


class WeatherComponent extends React.Component {

  formatDate = (date) => {
    // Форматируем дату
   const monthNumber = date.getMonth();
   const dateNumber = date.getDate();

   return `${dateNumber} ${months[monthNumber]}`;
 };

 formatDayOfWeek = (date) => {
   // Форматируем день недели
   const dayNumber = date.getDay();

   const nowDate = new Date();
   const currentDate = new Date(date);
   const options = {
       year: 'numeric',
       month: 'long',
       day: 'numeric'
   }

   const current = currentDate.toLocaleString("ru", options);
   const now = nowDate.toLocaleString("ru", options);

   return current === now ? 'Сегодня' : daysOfWeek[dayNumber];
 };

 checkRainfall = (rain, snow) => {
    //Форматируем осадки
    if(!rain && !snow) {
     return 'Без осадков';
   }
   if(rain && snow) {
     return 'Снег с дождём';
   }
   if(rain && !snow) {
     return 'Дождь';
   }
   if(!rain && snow) {
     return  'Снег';
   }
 };


  render() {

    //Создаём новый объект с отформатированными данными
    const formattedDays = days.map(day => {
      const newDay = {};

      const dateOfDay = new Date(day.date);

      newDay.date = this.formatDate(dateOfDay);
      newDay.dayOfWeek = this.formatDayOfWeek(dateOfDay);
      newDay.cloudiness = day.cloudiness;
      newDay.dayTemperature = `днём ${day.dayTemperature} ℃`;
      newDay.temperatureNight = `ночью ${day.temperatureNight} ℃`; 
      newDay.rainfall = this.checkRainfall(day.rain, day.snow);
  
      return newDay;
    });

    //Добавляем поле image для каждого дня
    formattedDays.forEach(day => { 
      
        if(day.cloudiness === "Пасмурно" && day.rainfall === "Без осадков") {
          day.image = cloud;
          return;
         } 
        if(day.cloudiness === "Ясно") {
          day.image = sun;
          return;
        }
        if(day.rainfall === "Снег с дождём") {
          day.image = snowrain;
          return;
        }
        if(day.rainfall === "Снег") {
          day.image = snow;
          return;
        }
        if(day.rainfall === "Дождь") {
          day.image = rain;
        }
       
    });
    
    return <section className="wrapper">
          <Slider days={formattedDays}/>
          <BtnsContainer/>
      </section>
     
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
)(WeatherComponent);
