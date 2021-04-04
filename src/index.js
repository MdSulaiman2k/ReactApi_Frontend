import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App' ;
import restaurants from './restaurants' ;
import reportWebVitals from './reportWebVitals';
import Foodcomponents from './components/Foodcomponents';


const resitems = (restaurants) => {
   return <App key={restaurants.id} htname = {restaurants.name}  img = {restaurants.img}  des  ={restaurants.des}  rating ={restaurants.rating}  time = {restaurants.time}/>
}

var value = (
    <div className="row">
       {restaurants.map(resitems)}
    </div>
);

ReactDOM.render(<Foodcomponents/>,document.getElementById('cont'));

