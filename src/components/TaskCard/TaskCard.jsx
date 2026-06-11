import {Link} from 'react-router-dom'

import "./TaskCard.css"
import TaskDetailsContext from "../../context/TaskDetailsContext/TaskDetailsContext"

const TaskCard = (props) =>{
    const {taskDetails} = props
    const {id,title,description,priority,status,deadline} = taskDetails

    let cardStyle = null

    switch(priority){
        case "low":
            cardStyle = "green-border"
        break
        case "high":
            cardStyle = "red-border"
        break
        case "medium":
            cardStyle = "orange-border"
        break
        default:
            null
    }

    let prirotityTextStyle = null

    switch(priority){
        case "low":
            prirotityTextStyle = "low"
        break
        case "high":
            prirotityTextStyle = "high"
        break
        case "medium":
            prirotityTextStyle = "medium"
        break
        default:
            null
    }

    return ( 
    <TaskDetailsContext.Consumer>
        {
            value =>{
                const {updateTaskContext,removeTaskContext} = value

                const onChangeStaus = (event) => {updateTaskContext({status:event.target.value,id})}

                const onClickDelete = () => removeTaskContext(id)

                

                return (
            
                <li className={`${cardStyle} task-list-item`}>
                    <Link to={`/taskDetails/${id}`} className='task-link-item'>
                    <div className='task-priority-container'>
                        <p className={`${prirotityTextStyle} task-list-item-priority` }>{priority}</p>
                        {status === "done" && <p className='completed-para'>completed</p>}
                    </div>
                        <h1 className="task-list-item-title">{title}</h1>
                        <p className="task-list-item-description">{description.length > 150 ? description.slice(0,150)+"...":description}</p>
                        <p className="task-list-item-deadline"><span className="deadline-span-ele">Deadline</span> {deadline}</p>
                    </Link>
                    <hr className='horizontal-line-task'/>
                    <div className="task-list-item-status-container">
                        <select value={status} className="select-element-taskCard-container" onChange={onChangeStaus}>
                            <option value="todo">To Do</option>
                            <option value="inprogress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        <button onClick={onClickDelete} className="task-list-item-button">Delete</button>
                    </div>
                </li>
            
    )
            }
        }
    </TaskDetailsContext.Consumer>
    )
}

export default TaskCard