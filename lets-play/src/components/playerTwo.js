import React, { Component } from 'react';
import Card from './card'

class PlayerTwo extends Component {
    constructor(props){
        super(props)
    }
    cardList = this.props.cards.map(prop => <Card onClickHandler={this.props.onClickHandler} imgSrc={prop.img} value={prop.val} ></Card>)
    render() {
        return (
          <div className="player-side">
              {this.cardList}
          </div>
        );
    }
}
export default PlayerTwo
