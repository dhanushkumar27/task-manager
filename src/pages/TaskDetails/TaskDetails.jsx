

import {useParams,Link} from 'react-router-dom'

import DashboardSideBar from '../../components/dashboardSideBar/dashboardSideBar.jsx'

import TaskDetailsContext from "../../context/TaskDetailsContext/TaskDetailsContext"

import { IoArrowBackSharp } from "react-icons/io5";

import './TaskDetails.css'



const TaskDetails  = () =>{
    const {id} = useParams()
    return (
    <TaskDetailsContext.Consumer>
        {
            value => {
                const {taskListContext} = value
                const taskObject = taskListContext.filter(eachTask => eachTask.id == id)
                const task = taskObject[0]
                
                let prirotityTextStyle = null

            switch(task.priority){
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


                return(
                    <div className='taskDetails-main-container'>
                        <DashboardSideBar/>
                        <div className='taskDetails-container'>
                            <div className='taskDetails-responsive-container'>
                                <Link className='back-to-board-link' to="/">
                                <IoArrowBackSharp/>
                                <p className='back-to-board-para' >  Back to board</p>
                                </Link>
                                <p className={`${prirotityTextStyle} priority-para`}>{task.priority}</p>
                                <h1 className="taskDetails-heading">{task.title}</h1>
                                <div className="status-deadline-container">
                                    <p className='status-card'><span className="span-element">Status</span>{task.status}</p>
                                    <hr className="taskDeatils-line"/>
                                    <p className='status-card'><span className="span-element">Deadline</span>{task.deadline}</p>
                                </div>
                                <div className="description-container">
                                    <p className='description-heading'>DESCRIPTION</p>
                                    <p className='description-para'>{task.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    </TaskDetailsContext.Consumer>
    )
}

export default TaskDetails