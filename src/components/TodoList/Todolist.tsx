import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FiltedValuesType } from "../../App";

// props(объект) - параметры функции props = {title: "", tasks={}}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title:string 
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId:string) => void
    // tasks2: TaskType[] эти две записи одинаковы
    changeFilter: (value: FiltedValuesType, todolistId: string) => void
    addTask: (title: string, todolistId:string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId:string ) => void
    filter: FiltedValuesType
    removeTodoList: (todolistId: string) => void
}
// map - это метод массива, который на основе каждого объекта в массиве(элемента в) -> создает какое-то другой элемент 
function TodoList(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null)

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if( e.charCode === 13){
      props.addTask(newTaskTitle, props.id)
      setNewTaskTitle("")
    }
    
  }

  const addTask = () => {
    if(newTaskTitle.trim() === ""){
      setError("Неверное поле")
      return
    }
    props.addTask(newTaskTitle, props.id)
    setNewTaskTitle("")
  }

  const onAllClickHandler = () =>props.changeFilter("all", props.id)

  const onActiveClickHandler = () =>props.changeFilter("active", props.id)

  const onCompletedClickHandler = () =>props.changeFilter("completed", props.id)

  const removeTodoList = () => {
    props.removeTodoList(props.id)
  }


  return (
    <div>
      <h3>{props.title} <button onClick={removeTodoList}>x</button></h3>
      <div>
        <input value={newTaskTitle} onChange={onNewTitleChangeHandler} onKeyPress={onKeyPressHandler} className={error ? "error" : ""}/>
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">error</div>}

      </div>
      <ul>
        {
          props.tasks.map((t) => { return <li key={t.id} className={t.isDone ?"is-done" : ""}> 
            <input type="checkbox"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
            }}
             checked={t.isDone} />
            <span>{t.title}</span>
            <button onClick={(e) => {props.removeTask(t.id, props.id)}}>x</button>
          </li>})
        }
       
        
      </ul>
      <div>
        <button onClick={onAllClickHandler} className={props.filter === 'all' ? "active-filter" : ""}>All</button>
        <button onClick={onActiveClickHandler} className={props.filter === 'active' ? "active-filter" : ""}>Active</button>
        <button onClick={onCompletedClickHandler} className={props.filter === 'completed' ? "active-filter" : ""}>Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
