import { AddToDo } from "./components/AddToDo"
import {useState, useEffect} from 'react'
import {AddToDoInfo} from './components/AddToDoInfo'
import './index.css'

export const App = () =>{
  const [taskList, setTaskList] = useState([])
  useEffect(()=>{
    const savedTodos = localStorage.getItem('taskList')
    if(savedTodos){
      setTaskList(JSON.parse(savedTodos))
    }
  }, [])
  useEffect(()=>{
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  return(
    <div className="flex justify-center items-center mx-auto mt-24 ">
      <div className="bg-white w-144 h-full p-10 rounded-2xl">
        
        <AddToDo
          sendFormInfo={formItem => setTaskList([...taskList, formItem])}
        />
        <ul >
          {
            taskList.map(item =>(
              <AddToDoInfo
                key={item.id}
                item={item}
                deleteList={id => setTaskList(taskList.filter(item => item.id !== id))}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}