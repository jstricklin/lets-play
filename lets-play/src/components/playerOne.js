import React, { Component } from 'react';
import './card'

class PlayerOne extends Component {
    constructor(props){
        super(props)
    }
    cardList = this.props.cards.map(prop => <p>test</p>)
    render() {
        return (
          <div className="player-side">
              {this.cardList}
          </div>
        );
    }
}
export default PlayerOne
