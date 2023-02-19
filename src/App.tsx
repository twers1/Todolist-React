import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/Todolist';

function App() {

  let task1 = [
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: true},
  ]

  let task2 = [
    {id: 1, title: "Terminator", isDone: false},
    {id: 2, title: "XXX", isDone: false},
    {id: 3, title: "Jentlments of fortune", isDone: false},
  ]

  let task3 = [
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: true},
  ]
  return (
    <div className="App">
      <TodoList title="What to learn" tasks={task1}/> 
      <TodoList title="Movies" tasks={task2}/>
      <TodoList title="Songs" tasks={task3}/>
    </div>
  );
}
// // так как это js элемент, его нужно записать в фигурных скобках 


export default App;
