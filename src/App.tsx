import React from 'react';
import './App.css';
import TodoList from './components/TodoList/Todolist';

function App() {

  let task1 = [
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: true},
  ]

  function removeTask(id: number) {
    let resultTasks = task1.filter(() => {return true })
  }
  return (
    <div className="App">
      <TodoList title="What to learn" tasks={task1}/> 
      
    </div>
  );
}
// // так как это js элемент, его нужно записать в фигурных скобках 


export default App;
