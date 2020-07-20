import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/tick.png';
import checkImga from '../img/success.png';
class TodoItem extends Component {

  render() {
    const { item, onClick } = this.props;
    let url=checkImg;
    if(item.isComplete){
      url=checkImga;
    }
    return (
      <div onClick={onClick}
        className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })}>
          <img src={url}/>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default TodoItem;