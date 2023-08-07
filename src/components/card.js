import React, {Component} from 'react';

class card extends Component{
  render(){
    return(
      <div className="col-lg-3 col-md-4 mt-4">
      <div className="card bg-black border-danger mt-4" style={{width: '18rem'}}>
      
      <img src={this.props.card.immagine} width={220} height={200} className="card-img-top" alt="..."/>
      
      <div className="card-body">
      
      <h5 className="card-title text-danger fw-bold">{this.props.card.nome}</h5>
      <p className='card-text text-danger fw-bold'>{this.props.card.descrizione}</p>
      <p className='card-text text-danger fw-bold'>€ {this.props.card.prezzo}</p>
      
      <button onClick={() => this.props.onIncrement(this.props.card)} className='btn btn-dark text-danger mt-5'>Aumenta quantità</button>
      <span className='badge-lg bg-black text-danger fw-bold'>{this.props.card.quantità}</span>
      <button onClick={() => this.props.onDecrement(this.props.card)} className='btn btn-dark text-danger mt-3'>Diminuisci quantità</button>
      </div>
      </div>
      </div>
      )
    }
    
  }
  
  export default card;