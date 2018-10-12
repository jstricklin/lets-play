import React from 'react';
import PlayerOne from './playerOne';
import PlayerTwo from './playerTwo';
import ScoreTracker from './scoreTracker';

import show1 from '../pics/show01.jpg';
import show2 from '../pics/show02.jpg';
import show3 from '../pics/show03.jpg';
import show4 from '../pics/show04.jpg';
import show5 from '../pics/show05.jpg';
import show6 from '../pics/show06.jpg';
import show7 from '../pics/show07.jpg';
import show8 from '../pics/show08.jpg';
import show9 from '../pics/show09.jpg';

class GameBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cards: [
                {
                    img: show1,
                    val: 1
                },
                {
                    img: show2,
                    val: 2
                },
                {
                    img: show3,
                    val:3
                },
                {
                    img: show4,
                    val:4
                },
                {
                    img: show5,
                    val:5
                },
                {
                    img: show6,
                    val:6
                },
                {
                    img: show7,
                    val:7
                },
                {
                    img: show8,
                    val:8
                },
                {
                    img: show9,
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
