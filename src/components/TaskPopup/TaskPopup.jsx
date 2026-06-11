import { Component } from 'react'

import Popup from 'reactjs-popup'

import TaskDetailsContext from '../../context/TaskDetailsContext/TaskDetailsContext.jsx'

import {v4 as uuidv4} from 'uuid'

import './TaskPopup.css'

class TaskPopup extends Component{
    state={taskTitle:"",description:"",priority:"low", status:"todo", deadline:""}
    render(){
        const {taskTitle,description,priority,status,deadline} = this.state

        const onChangeTitle = (event) =>{this.setState({taskTitle:event.target.value})}

        const onChangeDescription=  (event) =>{this.setState({description:event.target.value})}

        const onChangePriority = (event) =>{this.setState({priority:event.target.value})}

        const onChangeStatus =  (event) =>{
            this.setState({status:event.target.value})}

        const onChangeDeadline =  (event) =>{this.setState({deadline:event.target.value})}

        
        
        return <TaskDetailsContext.Consumer>
            {
                value => {
                    const {addTaskContext} = value 
                    const newTask = {
                    id: uuidv4(),
                    title: taskTitle,
                    description,
                    priority,
                    status,
                    deadline,
            }
                    const onClickcreateTask = () =>{addTaskContext(newTask)}
                return(
                    <div className="popup-container">
                    <Popup
                        overlayClassName="popup-overlay"
                        modal
                        trigger={
                        <button className="dashboard-sideBar-button1" type="button">+ Add Task</button>
                        }
                    >
                        {close => (
                    
                            <div className='task-popup-container'>
                                <div className='popup-heading-container'>
                                    <h1 className='popup-heading'>Add New Task</h1>
                                    <button className='popup-cross-button' onClick={() => close()}>X</button>
                                </div>

                                <label className='popup-label'>TASK TITLE</label>
                                <input onChange={onChangeTitle} value={taskTitle} className='popup-input' type="text" placeholder="e.g. Design homepage"/>
                                <label className='popup-label'>DESCRIPTION</label>
                                <textarea rows="10" cols="30" onChange={onChangeDescription} value={description} className='popup-textarea'  type="text" placeholder="Describe the task"></textarea>

                            <div className='popup-main-select-container'>
                                    <div className='popup-select-container'>
                                        <label className='popup-label'>PRIOITY</label>
                                        <select onChange={onChangePriority} value={priority} className='popup-select'>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                    
                                    <div className='popup-select-container'>
                                        <label className='popup-label'>STATUS</label>
                                        <select onChange={onChangeStatus} value={status} className='popup-select' >
                                            <option value="todo">To Do</option>
                                            <option value="inprogress">In Progress</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </div>
                                    </div>
                                    <label className='popup-label'>DEADLINE</label>
                                    <input onChange={onChangeDeadline} value={deadline} className='popup-input'  type="date"/>
                            
                                    <div className='popup-buttons-container'>
                                        <button
                                        type="button"
                                        className='popup-button-cancel'
                                        onClick={() => close()}
                                        >
                                        Cancle
                                        </button>
                                        <button type="button" className='popup-button-createTask' onClick={onClickcreateTask}>Create Task</button>
                                    </div>
                            </div>
                            
                    
                        )}
                    </Popup>
                    </div>
            )
                        }
                    }
                </TaskDetailsContext.Consumer>
        
    }
} 


export default TaskPopup