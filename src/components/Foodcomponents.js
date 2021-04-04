import React from 'react' 

import Foodservice from '../service/Foodservice' 

class Foodcomponents extends React.Component{

     constructor(props){
         super(props)
         this.state = {
              fooditems:[]
         }
     }
     
     componentDidMount(){
         Foodservice.getfoodItems().then((response) => {
             this.setState({fooditems : response.data})
         });
     }

     render(){
         return (
            
            (<div key={this.fooditems.key} className="col col-lg-3 col-md-3 col-sm-4"> 
            <img className= "imgitems" src={this.fooditems.hotelimg} />
            <h5 className="hot-name" >{this.fooditems.hotelname}</h5>
            <p className="hot-cat">{this.fooditems.hotelCate}</p>
            <p><span className="hot-rating" ><i class="far fa-star"></i>{this.fooditems.rating} </span></p>
            <hr />
      </div>)
         )
     }
}

export default Foodcomponents;