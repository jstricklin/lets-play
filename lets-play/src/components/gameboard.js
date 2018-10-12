import React from 'react';
import PlayerOne from './playerOne';
import PlayerTwo from './playerTwo';
import ScoreTracker from './scoreTracker';

class GameBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cards: [
                {
                    img: './show01.jpg',
                    val: 1
                },
                {
                    img: './show02.jpg',
                    val: 2
                },
                {
                    img: './show03.jpg',
                    val:3
                },
                {
                    img: './show04.jpg',
                    val:4
                },
                {
                    img: './show05.jpg',
                    val:5
                },
                {
                    img: './show06.jpg',
                    val:6
                },
                {
                img: './show07.jpg',
                    val:7
                },
                {
                    img: './show08.jpg',
                    val:8
                },
                {
                    img: './show9.jpg',
                    val:9
                },
            ]
        }
    }

    render(){
        return (
            <div className="game-board">
                SCORE 1
                <PlayerOne cards={this.state.cards}></PlayerOne>
                <PlayerTwo cards={this.state.cards}></PlayerTwo>
                SCORE 2
            </div>
        )
    }

}

export default GameBoard;
