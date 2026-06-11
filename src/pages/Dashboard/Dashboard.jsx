import { Component} from "react";
import {Navigate} from 'react-router-dom'



import DashboardSideBar from '../../components/dashboardSideBar/dashboardSideBar.jsx'
import TaskCard from '../../components/TaskCard/TaskCard.jsx'

import TaskDetailsContext from '../../context/TaskDetailsContext/TaskDetailsContext.jsx'

import './dashboard.css'

class Dashboard extends Component{
    state = {selectedFilter:"allpriorities"}

onChangeFilter = (event) =>{this.setState({selectedFilter:event.target.value})}
 
    render(){
    const {selectedFilter} = this.state

    let selectedFilterVisibility = "allpriorities"

    switch(selectedFilter){
        case "todo":
            selectedFilterVisibility = "todo"
            break
        case "inprogress":
            selectedFilterVisibility = "inprogress"
            break
        case "done":
            selectedFilterVisibility = "done"
            break
        default:
            selectedFilterVisibility = "allpriorities"
    }



    const token = localStorage.getItem('jwt_token')
    if(token === null){
            return <Navigate to="/login" replace/>
       }
        
        return <TaskDetailsContext.Consumer>
            {
                value =>{
                const {taskListContext} = value 
                return (
                    <div className="dashboard-main-container">
                        <DashboardSideBar/>
                        <div className="dashboard-container">
                            <div className="dashboard-filter-container">
                                <h1 className="dashboard-filter-container-heading">Filter by priority</h1>
                                <select onChange={this.onChangeFilter} value={selectedFilter}>
                                    <option value="allpriorities">All priorities</option>
                                    <option value="todo">TO DO</option>
                                    <option value="inprogress">IN PROGRESS</option>
                                    <option value="done">DONE</option>
                                </select>
                            </div>
                            <div className="dashboard-all-tasks-container">
                                { (selectedFilter === "todo" || selectedFilterVisibility === "allpriorities") && <div className="dashboard-task-container">
                                    <p>TO DO</p>
                                    <hr className="todo-line"/>
                                    <ul className="unorder-list-task">{taskListContext.map(eachTask => {
                                        if(eachTask.status === "todo"){
                                            return <TaskCard  key={eachTask.id} taskDetails={eachTask}/>
                                        }
                                    })}</ul>
                                </div>}
                                { (selectedFilter === "inprogress" || selectedFilterVisibility === "allpriorities") && <div className="dashboard-task-container ">
                                    <p>IN PROGRESS</p>
                                    <hr className="inProgress-line"/>
                                    <ul className="unorder-list-task">{taskListContext.map(eachTask => {
                                        if(eachTask.status === "inprogress"){
                                            return <TaskCard  key={eachTask.id} taskDetails={eachTask}/>
                                        }
                                    })}</ul>
                                </div>}
                                { (selectedFilter === "done" || selectedFilterVisibility === "allpriorities") && <div className="dashboard-task-container">
                                    <p>DONE</p>
                                    <hr className="done-line"/>
                                    <ul className="unorder-list-task">{taskListContext.map(eachTask => {
                                        if(eachTask.status === "done"){
                                            return <TaskCard  key={eachTask.id} taskDetails={eachTask}/>
                                        }
                                    })}</ul>
                                </div>}
                            </div>
                        </div>
                    </div>
        )
                }
            }
        </TaskDetailsContext.Consumer>
    }
}

export default Dashboard