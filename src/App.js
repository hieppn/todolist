import React from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import checkImg from './img/tick.png';
class App extends React.Component {
   constructor() {
      super();
      this.state = {
         todoItems: [
            { title: 'Mua bim bim', isComplete: true },
            { title: 'Di da bong', isComplete: false },
            { title: 'Di choi', isComplete: true },
            { title: 'Di cho', isComplete: true }
         ]
      }
   }
   onItemClicked(item) {
      // console.log('Item clicked',item);
      return (event) => {
         console.log(item);
         const isComplete = item.isComplete;
         const { todoItems } = this.state;
         const index = todoItems.indexOf(item);
         this.setState({
            todoItems: [
               ...todoItems.slice(0, index),

               {
                  ...item,
                  isComplete: !isComplete
               },
               ...todoItems.slice(index + 1)
            ]
         })
      };

   }
   onKeyUp(event){
console.log(event.target.value);
   }
   render() {
      const { todoItems } = this.state;
      if (todoItems.length) {
         return (
            <div className="App">
               <div className="Header">
                  <img src={checkImg} />
                  <input type="text" onKeyUp={this.onKeyUp}/>
               </div>
               {todoItems.length && todoItems.map((item, index) =>
                  <TodoItem key={index} item={item}
                     onClick={this.onItemClicked(item)} />)
               }
            </div>
         );
      }
      else {
         return {}(
            <div className="App">
               <p>Nothing here.</p>
            </div>
         );
      }
   }
}
export default App;