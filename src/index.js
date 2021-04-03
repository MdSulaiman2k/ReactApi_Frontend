import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import restaurants from './restaurants' ;
import reportWebVitals from './reportWebVitals';


const resitems = (restaurants) => {
   return <App id={restaurants.id} htname = {restaurants.name}  img = {restaurants.img}  des  ={restaurants.des}  rating ={restaurants.rating}  time = {restaurants.time}/>
}

var value = (
    <div className="row">
       {restaurants.map(resitems)}
    </div>
);

ReactDOM.render(value,document.getElementById('cont'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
