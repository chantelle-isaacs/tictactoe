import React, { Component } from 'react'
import Square from './components/Square'
import GameOverWin from './components/gameoverWin'
import GameOverTie from './components/gameoverTie'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      player: "X",
      gameoverWin: false,
      gameoverTie: false
    }
  }
  //what makes the changes happen
  handleChange = (click) =>  {
    //this function will ONLY run if the location of the click has an empty string (meaning it hasn't been clicked before)
    if (this.state.squares[click] === "" && this.state.gameoverWin ===false) {
      //changes inside the box to the player's mark (x or 0)
      //it maps through the squares array and if the index matches where we clicked, that's the one that changes
      this.setState({ squares: this.state.squares.map((value,index) => {
        if (click === index) {
          return this.state.player
        } else {
          // value here just means that if it wasn't clicked, it doesn't change
          return value;
        }
      })})
      
      //changes the player
      if (this.state.player === "X")  {
        this.setState({ player: "O"})
      } else this.setState({ player: "X"})
    }
  }
  // checks if any of our winning scenarios have occurred
  checkWinner = () => {
    //it will ONLY run if the game has not ended
   if (this.state.gameoverWin === false && this.state.gameoverTie === false){
    //destructures all the indexes of the grid
    var zero = this.state.squares[0]
    var one = this.state.squares[1]
    var two = this.state.squares[2]
    var three = this.state.squares[3]
    var four = this.state.squares[4]
    var five = this.state.squares[5]
    var six = this.state.squares[6]
    var seven = this.state.squares[7]
    var eight = this.state.squares[8]
    
    //creating our winning scenarios
    // to compare 3 things, only 2 things need to match 1 thin g --- a=b and a=c, then b must = c. Also it makes sure empty strings matching don't trigger a win.
    //3 columns
    if (zero === three && zero === six && zero !== ""){
      this.setState ({gameoverWin: true }) 
    } else if (one === four && one === seven && one !== ""){
      this.setState ({gameoverWin: true }) 
    } else if (two === five && two === eight && two !== ""){
      this.setState ({gameoverWin: true }) 
    //3 rows
    } else if (zero === one && zero === two && zero !== ""){
      this.setState ({gameoverWin: true }) 
    } else if (three === four && three === five && three !== ""){
      this.setState ({gameoverWin: true }) 
    } else if (six === seven && six === eight && six !== ""){
      this.setState ({gameoverWin: true }) 
    //2 diagonal
    } else if (zero === four && zero === eight && zero !== ""){
      this.setState ({gameoverWin: true }) 
    } else if (two === four && two === six && two !== ""){
      this.setState ({gameoverWin: true }) 
    } 
    //no winner
    //if there are no more empty strings, then the grid is full and no one wins.
    else if (!this.state.squares.includes("")){
      this.setState ({gameoverTie: true }) 

    }
  }}
// clears the grid and resets all our states back to the original
  clear = () =>{
    this.setState ({
      squares: ["", "", "", "", "", "", "", "", ""],
      player: "X",
      gameoverWin: false,
      gameoverTie: false
    })
  }

  //allows stuff to show up on screen
  render(){
    //this takes in the array of squares, and for each index in the array, it creates a component that operates individually
    let square = this.state.squares.map((value, index)=> {
      return (
        <Square
        value = { value }
        index = { index }
        handleChange = { this.handleChange }
        />
      )
    })

    return(
      <React.Fragment>
        {/* every time the program is updated (something is clicked) it will run the checkWinner method to see if a winning scenario has occurred. */}
        {this.checkWinner()}
        <h1>Tic Tac Toe</h1>
        {/* all the divs are to separate values to make the css work properly */}
        <div id="whoseturn">
          <h2>It is {this.state.player}'s turn.</h2>
        </div>
        <div className="centerscreen">
          <div id="holder">
            <div id="grid">
              { square }
            </div>
          </div>
        </div>
        <div className="centerscreen  wintiealerts">
          {/* there are two conditional renders that control if the winning text is displayed or if the tie text is displayed */}
          {this.state.gameoverWin && < GameOverWin player = {this.state.player}/>}
          {this.state.gameoverTie && < GameOverTie/>}
        </div>
        <div className="centerscreen">
          <button onClick = {this.clear}>Play Again</button>
        </div>
      </React.Fragment>
    )
  }
}
export default App
