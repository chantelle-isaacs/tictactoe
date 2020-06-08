import React, { Component } from 'react'

class GameOverWin extends Component{
    render(){
        let prevWinner= this.props.player==="X"?"O":"X"
    return(
      <React.Fragment>
        <div>
            <h2>{prevWinner} You win. Play Again?</h2>
        </div>
      </React.Fragment>
    )
  }
}
export default GameOverWin
