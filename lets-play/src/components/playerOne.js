import React, { Component } from 'react';
import Card from './card'

class PlayerOne extends Component {
    constructor(props){
        super(props)
    }
    cardList = this.props.cards.map(prop => <Card imgSrc={prop.img}></Card>)
    render() {
        return (
          <div className="player-side">
              {this.cardList}
          </div>
        );
    }
}
export default PlayerOne
