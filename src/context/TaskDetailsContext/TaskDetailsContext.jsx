import React from 'react'

const TaskDetailsContext = React.createContext(
    {
      taskListContext:[],
      addTaskContext: ()=>{},
      updateTaskContext:()=>{},
      removeTaskContext:()=>{}
}
    
)

export default TaskDetailsContext