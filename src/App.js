import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';
import Pizza from './immagini progetto react/tranciopizza.jpeg'
import Patatine from './immagini progetto react/patatine.jpeg';
import Hotdog from './immagini progetto react/hotdog.webp';
import Alette from './immagini progetto react/alette-pollo.jpg';
import Hamburger from './immagini progetto react/hamburger.jpeg';
import Insalata from './immagini progetto react/Insalata-Caprese-Ricetta-originale-Insalata-Caprese-pomodori-e-mozzarella-.jpg.webp';
import Nuggets from './immagini progetto react/nuggets-di-pollo-1200x900.jpg';
import Toast from './immagini progetto react/french_toast.jpg';
import Heineken from './immagini progetto react/heinekensfondo.jpeg';
import Tuborg from './immagini progetto react/tuborgblack.jpeg';
import Dreher from './immagini progetto react/dreher33.png';
import Peroni from './immagini progetto react/peronisfondo.jpeg';
import NastroAzzurro from './immagini progetto react/nastro azzurro piccola.webp';
import Cocacola from './immagini progetto react/cocacola.jpeg';
import Fanta from './immagini progetto react/fantasenza.png';
import Sprite from './immagini progetto react/spriteblack.jpeg';
import Sfondo from './immagini progetto react/fastfoo.jpeg';


class App extends Component {

  state = {
    cards: [

      {id: 0, nome: "Pizza", prezzo: 1, descrizione: "Trancio di pizza gustoso con mozzarella e pomodoro da togliere il fiato!", immagine: Pizza, quantità: 0},
      {id: 1, nome: "Patatine", prezzo: 3, descrizione: "Deliziose patatine fritte al momento e al punto giusto!",  immagine: Patatine, quantità: 0}, 
      {id: 2, nome: "Hotdog", prezzo: 2, descrizione: "Appetitoso panino americano con Wurstel, salsa a scelta ed eventualmente formaggio sciolto!",  immagine: Hotdog, quantità: 0},
      {id: 3, nome: "Alette", descrizione: "Fritte al momento e croccanti al punto giusto...Tutto il sapore del pollo fritto come mai assaggiato prima!", prezzo: 3, immagine: Alette, quantità: 0},
      {id: 4, nome: "Hamburger", descrizione: "Sublime panino Hamburger con carne, pomodoro, insalata e salsa a fare da tocco finale di classe.", prezzo: 5, immagine: Hamburger, quantità: 0},
      {id: 5, nome: "Insalata", descrizione: "Per chi vuole restare leggero, insalata freschissima e ben bilanciata.", prezzo: 4, immagine: Insalata, quantità: 0}, 
      {id: 6, nome: "Nuggets", descrizione: "Meravigliose crocchette di pollo con pepe nero, una delizia per il palato!", prezzo: 4, immagine: Nuggets, quantità: 0},
      {id: 7, nome: "Toast", descrizione: "Due deliziosi strati di prosciutto cotto e formaggio o anche da condire con la nostra insalata di pomodoro.", prezzo : 3.50, immagine: Toast, quantità: 0},
      {id: 8, nome: "Tuborg", descrizione: "Cavalca la tua sete e goditi una birra freschissima!", prezzo: 2.50, immagine: Tuborg, quantità: 0}, 
      {id: 9, nome: "Dreher", descrizione: "Cavalca la tua sete e goditi una birra freschissima!",  prezzo: 3, immagine: Dreher, quantità: 0},
      {id: 10, nome: "Peroni", descrizione: "Cavalca la tua sete e goditi una birra freschissima!", prezzo: 2.50, immagine: Peroni, quantità: 0},
      {id: 11, nome: "Nastro Azzurro", descrizione: "Cavalca la tua sete e goditi una birra freschissima!",  prezzo: 3, immagine: NastroAzzurro, quantità: 0},
      {id: 12, nome: "Cocacola", descrizione: "Un paradiso per il suo gusto in ogni bollicina!",  prezzo: 2, immagine: Cocacola, quantità: 0},
      {id: 13, nome: "Fanta", descrizione: "Un paradiso per il suo gusto in ogni bollicina!",  prezzo: 2, immagine: Fanta, quantità: 0}, 
      {id: 14, nome: "Sprite", descrizione: "Un paradiso per il suo gusto in ogni bollicina!",  prezzo: 2, immagine: Sprite, quantità: 0},
      {id: 15, nome: "Heineken", descrizione: "Cavalca la tua sete e goditi una birra freschissima!", prezzo: 3, immagine: Heineken, quantità: 0},
      
    ]
  }

  

  

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità++;
    this.setState({cards});

    
  }

  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);

    if(cards[id].quantità > 0){
    cards[id] = {...card};
    cards[id].quantità--;
    this.setState({cards});
    }
    
  }
    


  render(){
    return (
    <>
    <Navbar/>
    <div className='container-fluid'>
      <h1 className='display-3 text-center mt-4 fw-bold text-danger'>Benvenuti nel fast food più tecnologico e innovativo</h1>
      <p className='text-center display-6 mt-4 text-danger'>Tutto il gusto che hai sempre sognato<br></br> e le tue bevande preferite<br></br> a portata di click!<br></br> Che fai? Te ne privi?</p>
      <img className='img-fluid' width={1440} height={3486} src={Sfondo}></img>
      <div className='row justify-content-center'>
        <h2 className='text-center mt-4 text-danger'>Scegli la tua pietanza e la tua bevanda</h2>
        {this.state.cards.map(card =>(
          <Card
          key = {card.id}
          onDelete = {this.handleDelete}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          card = {card}
          />
          
        ))}

        



      
      </div>
      
    </div>
    
    
    
    <Footer/>
    
    </>
   
  )
  }
    
  
  
}

export default App;
