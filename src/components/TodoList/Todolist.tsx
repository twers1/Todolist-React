import React from "react";

// props(объект) - параметры функции props = {title: "", tasks={}}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title:string 
    tasks: Array<TaskType>
    // tasks2: TaskType[] эти две записи одинаковы
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
            <button onClick={() => {alert(t.id)}}>x</button>
          </li>})
        }
       
        
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default TodoList;
