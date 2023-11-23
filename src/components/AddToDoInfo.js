import {useState} from 'react'

export const AddToDoInfo = ({item, deleteList}) =>{
  // const currentTime = new Date().toLocaleTimeString()
  const [toggle, setToggle] = useState(false)

  return(
    <div className="mx-auto h-10 w-96">
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <input type="checkbox"
          onChange={()=> setToggle(!toggle)} 
          className="mr-2 h-4 w-4 rounded border-gray-300 focus:ring-indigo-500 text-indigo-600"
          />
          <div className="flex items-center justify-between w-72">
          <p className="text-blue-500 text-sm" style={toggle ? {textDecorationLine: "line-through", color: "gray"}:{textDecorationLine: "none"}}>{item.taskList }</p>
          {/* <p className="text-xs text-blue-400">{currentTime}</p> */}
          </div>
        </div>
        <button 
        className="bg-red-400 text-white text-xs rounded-lg h-8 w-12" 
        onClick={()=>deleteList(item.id)}>Delete
        </button>

      </div>
      <hr/>
    </div>
  )
}