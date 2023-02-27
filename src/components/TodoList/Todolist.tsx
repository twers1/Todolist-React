import React from "react";
import { FiltedValuesType } from "../../App";

// props(объект) - параметры функции props = {title: "", tasks={}}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title:string 
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    // tasks2: TaskType[] эти две записи одинаковы
    changeFilter: (value: FiltedValuesType) => void
}
// map - это метод массива, который на основе каждого объекта в массиве(элемента в) -> создает какое-то другой элемент 
function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button></button>
      </div>
      <ul>
        {
          props.tasks.map((t) => { return <li> 
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button onClick={() => {props.removeTask(t.id)}}>x</button>
          </li>})
        }
       
        
      </ul>
      <div>
        <button onClick={() => {props.changeFilter("all")}}>All</button>
        <button onClick={() => {props.changeFilter("active")}}>Active</button>
        <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
