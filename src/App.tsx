import React, { useState } from 'react';
import './App.css';
import TodoList, { TaskType } from './components/TodoList/Todolist';
import { v1 } from 'uuid';
import AddItemForm from './components/AddItemForm';

export type FiltedValuesType = "all" | "completed" | "active"
type TodoListType ={
  id: string
  title: string
  filter: FiltedValuesType
}

type TasksStateType = {
  [key: string]:Array<TaskType>
}

function App() {

// useState - это hook, который хранит данные и изменяет их
// мы сохраняем в useState данный тип(в дженериках)
  // let[filter, setFilter] = useState<FiltedValuesType>("active");

  function removeTask(id: string, todolistId: string) {
    let tasks = task1[todolistId]
    let filteredTask1 = tasks.filter(t =>t.id !== id)
    task1[todolistId] = filteredTask1;
    setTask1({...task1})
  }

  function addTask(title: string, todolistId: string){
    let newTask = {id: v1(), title: title, isDone: false}
    let tasks = task1[todolistId]
    let newTasks = [newTask, ...tasks]
    task1[todolistId] = newTasks
    setTask1({...task1})
  }

  function changeStatus(taskId: string, isDone: boolean,  todolistId: string) {
    let tasks = task1[todolistId]
    let task = tasks.find((t)=>t.id === taskId)
    if(task){
      task.isDone = isDone 
      setTask1({...task1})
    }
  }

  function changeTaskTitle(taskId: string, newTitle:string,  todolistId: string) {
    let tasks = task1[todolistId]
    let task = tasks.find((t)=>t.id === taskId)
    if(task){
      task.title = newTitle 
      setTask1({...task1})
    }
  }
  
  function changeTodoListTitle(id: string, newTitle: string) {
    const todolist = todolists.find(tl => tl.id === id)
    if(todolist){
      todolist.title = newTitle
      setTodoList([...todolists])
    }

  }

  function changeFilter(value: FiltedValuesType, todolistId: string) {
    // setFilter(value);
    let todolist = todolists.find(tl => tl.id === todolistId)
    if(todolist){
      todolist.filter = value
      setTodoList([...todolists])
    }
  }

  let todoList1 = v1()
  let todoList2 = v1()

  let [todolists, setTodoList] =useState<Array<TodoListType>>([
    {id: todoList1, title: 'What to learn?', filter: "all"},
    {id: todoList2, title: 'What to buy?', filter: "all"}
  ])

  let removeTodoList = (todolistId:string) => {
    let filteredTask1 = todolists.filter(tl => tl.id !== todolistId)
    setTodoList(filteredTask1)
    delete task1[todolistId]
    setTask1({...task1})
  }

  let [task1, setTask1] = useState<TasksStateType>({

   [todoList1]: [{id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "React", isDone: true},
    {id: v1(), title: "Redux", isDone: false}],

  [todoList2]: [ {id: v1(), title: "Книга", isDone: true},
    {id: v1(), title: "Молоко", isDone: true},]
  })

  function addTodoList(title: string){
    let todolist:TodoListType = {
      id: v1(),
      filter: 'all',
      title: title
    }
    setTodoList([todolist, ...todolists])
    setTask1({
      ...task1,
      [todolist.id]: []
    })
  }

  return (
    <div className="App">
      <AddItemForm addItem={addTodoList} />
      {
        todolists.map((tl) => {
          let tasksForTodoList = task1[tl.id];

          if(tl.filter === "completed") {
             tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true);
          }

          if(tl.filter === "active") {
             tasksForTodoList =tasksForTodoList.filter(t => t.isDone === false);
          }

          return <TodoList key={tl.id}
          title={tl.title}
          id={tl.id}
          tasks={tasksForTodoList}
          removeTask={removeTask}
          changeFilter={changeFilter} 
          addTask={addTask}
          changeTaskStatus={changeStatus}
          changeTaskTitle={changeTaskTitle}
          changeTodoListTitle={changeTodoListTitle}
          filter={tl.filter}
          removeTodoList={removeTodoList}
          /> 
        })
      }
    </div>
    
  );
}
// // так как это js элемент, его нужно записать в фигурных скобках 


export default App;
