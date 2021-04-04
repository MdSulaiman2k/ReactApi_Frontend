import axios from 'axios' ;

const restapi_url  = 'http://localhost:8080/api/res'  ;

class Foodservice {

    getfoodItems(){
        return axios.get(restapi_url) ;
    }
}

export default Foodservice;