import {useState} from 'react'
import { GoPlus } from "react-icons/go";

export const AddToDo = ({sendFormInfo}) =>{
  const [showInfo, setShowInfo] = useState(false)
  const clearForm = {
    taskList:  "",
  }
  const [formData, setFormData] = useState(clearForm)

  function publishForm(e){
    e.preventDefault()
    const listInfo = {
      id: Math.floor(Math.random() * 1000),
      taskList: formData.taskList
    }
    sendFormInfo(listInfo)
    console.log(sendFormInfo(listInfo))
    setFormData(clearForm)
  }
  const handleInputChanges = (e) =>{
    setFormData({taskList: e.target.value}) 
  }
  const date = new Date();
  let currentNumberOfDays = date.getDate()
  let days = date.getDay()
  let months = date.getMonth()
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  let currentDay = weekday[days]
  let currentMonth = month[months]

  return(
    <div className='relative h-32 w-110 sm:w-96 xs:w-80 mx-auto'>
      <div className='flex justify-between items-center  rounded-full  px-10 mt-5 w-120 sm:w-96 xs:w-80'>
          <h2 className="text-left text-xl font-medium text-gray-600">{currentDay}, {currentNumberOfDays} {currentMonth}</h2>
          <GoPlus className=' bg-blue-500 border-none  rounded-full text-white h-10 w-10 cursor-pointer' onClick={()=>setShowInfo(!showInfo)}/>
      </div>
      {
        showInfo && 
        <div className='mt-5 flex justify-center items-center'>
        <input type="text" 
          onChange={handleInputChanges}
          value={formData.taskList}
          className='border-2 border-r-0 pl-2 text-blue-500 border-gray-400 w-96 h-10 rounded-tl-md rounded-bl-md outline-none' 
        />
        <div>
          <button className='bg-blue-500 text-white text-sm h-10 w-16 rounded-tr-md rounded-br-md' onClick={publishForm}>Add</button>
        </div>
        
      </div>
      }
    </div>

  )
}