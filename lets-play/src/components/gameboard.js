import React from 'react';
import PlayerOne from './playerOne';
import PlayerTwo from './playerTwo';
import ScoreTracker from './scoreTracker';

class GameBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cards: []
        }
    }

    render(){
        return (
            <div className="game-board">
                <PlayerOne></PlayerOne>
                GameBoard
                <PlayerTwo></PlayerTwo>
            </div>
        )
    }

}

export default GameBoard;
