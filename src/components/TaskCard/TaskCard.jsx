
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
    return ( 
    <TaskDetailsContext.Consumer>
        {
            value =>{
                const {updateTaskContext,removeTaskContext} = value

                const onChangeStaus = (event) => {updateTaskContext({status:event.target.value,id})}

                const onClickDelete = () => {removeTaskContext(id)}

                return (
                <li className={`${cardStyle} task-list-item`}>
                    <p className="task-list-item-priority">{priority}</p>
                    <h1 className="task-list-item-title">{title}</h1>
                    <p className="task-list-item-description">{description}</p>
                    <p className="task-list-item-deadline"><span>Deadline</span> {deadline}</p>
                    <hr/>
                    <div className="task-list-item-status-container">
                        <select onChange={onChangeStaus} value={status}>
                            <option value="todo">todo</option>
                            <option vlaue="inprogress">inprogress</option>
                            <option value="done">done</option>
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