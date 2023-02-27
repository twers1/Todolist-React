import React, { useState } from 'react';
import './App.css';
import TodoList, { TaskType } from './components/TodoList/Todolist';

// function useState2(data: any) {
//   return [data, () => {}]
// }
// useState2([{}, {}, {}])
// let arr = useState2([{}, {}, {}]) // примерно как работае useState
// let task1 = arr[0];
// let setTask1 = arr[1]

// export  function Counter() {

//  let arr=useState(5)
// let data = arr[0];
// let setData = arr[1]
//   return <div onClick={ () => {setData(data++)}}>{data}</div>
// }

export type FiltedValuesType = "all" | "completed" | "active"

function App() {

// useState - это hook, который хранит данные и изменяет их
  let [task1, setTask1] = useState<Array<TaskType>>([
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: true},
    {id: 4, title: "Redux", isDone: false}
  ]);
// мы сохраняем в useState данный тип(в дженериках)
  let[filter, setFilter] = useState<FiltedValuesType>("active");

  function removeTask(id: number) {
    let filteredTask1 = task1.filter((t) =>t.id !== id)
    setTask1(filteredTask1)
  }

  function changeFilter(value: FiltedValuesType) {
    setFilter(value);
  }

  let tasksForTodoList = task1;
  if(filter === "completed") {
    tasksForTodoList = task1.filter(t => t.isDone === true);
  }
  if(filter === "active") {
    tasksForTodoList = task1.filter(t => t.isDone === false);
  }

  return (
    <div className="App">
      <TodoList title="What to learn"
       tasks={tasksForTodoList}
       removeTask={removeTask}
       changeFilter={changeFilter}
       /> 
      
    </div>
  );
}
// // так как это js элемент, его нужно записать в фигурных скобках 


export default App;
