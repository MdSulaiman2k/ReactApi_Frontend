import '../App.css';

const stval = {
  marginLeft : "10px"
}

function App(prox) 
    {
      return(<div key={prox.key} className="col col-lg-3 col-md-3 col-sm-4"> 
            <img className= "imgitems" src={prox.img} />
            <h5 className="hot-name" >{prox.htname}</h5>
            <p className="hot-cat">{prox.des}</p>
            <p><span className="hot-rating" ><i class="far fa-star"></i>{prox.rating} </span> <span className="hot-time"  style= {stval}> {prox.time}</span></p>
            <hr />
      </div>);
    }

export default App;
