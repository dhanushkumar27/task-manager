
import "./TaskCard.css"

const TaskCard = (props) =>{
    const {taskDetails,changeStatus} = props
    const {id,title,description,priority,status,deadline} = taskDetails

    const onChangeStatus = (event) => changeStatus({id:id,status:event.target.value})

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
    <li className={`${cardStyle} task-list-item`}>
        <p className="task-list-item-priority">{priority}</p>
        <h1 className="task-list-item-title">{title}</h1>
        <p className="task-list-item-description">{description}</p>
        <p className="task-list-item-deadline"><span>Deadline</span> {deadline}</p>
        <hr/>
        <div className="task-list-item-status-container">
            <select onChange={onChangeStatus} value={status}>
                <option value="todo">todo</option>
                <option vlaue="inprogress">inprogress</option>
                <option value="done">done</option>
            </select>
            <button className="task-list-item-button">Delete</button>
        </div>
    </li>
    )
}

export default TaskCard