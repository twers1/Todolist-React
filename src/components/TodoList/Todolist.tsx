import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FiltedValuesType } from "../../App";
import AddItemForm from "../AddItemForm";
import EditatableSpan from "../EditableSpan";

// props(объект) - параметры функции props = {title: "", tasks={}}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    id: string
    title:string 
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId:string) => void
    // tasks2: TaskType[] эти две записи одинаковы
    changeFilter: (value: FiltedValuesType, todolistId: string) => void
    addTask: (title: string, todolistId:string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId:string ) => void
    changeTaskTitle: (id: string, newValue:string, todolistId: string) => void
    changeTodoListTitle: (id: string, newTitle: string) => void
    filter: FiltedValuesType
    removeTodoList: (todolistId: string) => void
}
// map - это метод массива, который на основе каждого объекта в массиве(элемента в) -> создает какое-то другой элемент 
function TodoList(props: PropsType) {
  const onAllClickHandler = () =>props.changeFilter("all", props.id)

  const onActiveClickHandler = () =>props.changeFilter("active", props.id)

  const onCompletedClickHandler = () =>props.changeFilter("completed", props.id)

  const removeTodoList = () => {
    props.removeTodoList(props.id)
  }
 
  const addTask = (title: string) => {
    props.addTask(title, props.id)
  }

  const changeTodoListTitle = (newTitle:string) => {
    props.changeTodoListTitle(props.id, newTitle)
  }

  return (
    <div>
      <h3><EditatableSpan title={props.title} onChangeTitle={changeTodoListTitle}/><button onClick={removeTodoList}>x</button></h3>
      <AddItemForm addItem={addTask}/>
      <ul>
        {
          props.tasks.map((t) => { return <li key={t.id} className={t.isDone ?"is-done" : ""}> 
            <input type="checkbox"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
            }}
             checked={t.isDone} />
            <EditatableSpan title={t.title} onChangeTitle={(newValue: string) => {props.changeTaskTitle(t.id, newValue, props.id)}}/>
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
