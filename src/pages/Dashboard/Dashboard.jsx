import { Component} from "react";
import {Navigate} from 'react-router-dom'

import DashboardSideBar from '../../components/dashboardSideBar/dashboardSideBar.jsx'
import TaskCard from '../../components/TaskCard/TaskCard.jsx'

import './dashboard.css'

class Dashboard extends Component{
    state = {taskList:[
    {id: 1,
    title: 'Research',
    description:
      'User research helps you to create an optimal product for users. Plan interviews and contextual inquiry, synthesise findings into personas and journey maps, and translate insights into measurable problems. Share a concise readout with design and engineering so decisions stay grounded in evidence.',
    priority: 'high',
    status: 'todo',
    deadline: '2024-12-06',
  },
    {
    id: 2,
    title: 'Brainstorming',
    description:
      "Brainstorming brings team members' diverse experience into play. Run timed ideation rounds, capture every idea without judgement, then cluster themes and vote on directions. Document assumptions, risks, and dependencies so the team can align on scope before detailed planning begins.",
    priority: 'low',
    status: 'todo',
    deadline: '2024-12-05',
  },
  {
    id: 3,
    title: 'Wireframes',
    description:
      'Low fidelity wireframes include the most basic content and visuals. Map primary flows, empty states, and error paths at grayscale fidelity before polishing UI. Annotate interactions and data requirements so developers can estimate effort and spot edge cases early in the lifecycle.',
    priority: 'high',
    status: 'todo',
    deadline: '2024-12-05',
  },
  {
    id: 4,
    title: 'Onboarding Illustrations',
    description:
      'Create engaging illustrations for the onboarding flow. Establish a consistent character style, export assets for light and dark themes, and coordinate with copy for pacing across screens. Deliver SVG or PNG sets with a simple usage guide for engineers implementing animations.',
    priority: 'low',
    status: 'inprogress',
    deadline: '2024-12-05',
  },
  {
    id: 5,
    title: 'Moodboard',
    description:
      'Build a visual moodboard for the new design direction. Collect typography, colour, photography, and spatial references that express the brand tone. Present rationale for each cluster and capture stakeholder feedback in a single source of truth the team can revisit during visual design.',
    priority: 'low',
    status: 'inprogress',
    deadline: '2024-12-06',
  },
  {
    id: 6,
    title: 'Mobile App Design',
    description:
      'Design the complete mobile app screens. Cover navigation patterns, accessibility targets, and responsive breakpoints. Hand off redlines, component specs, and prototype links so QA can validate flows against acceptance criteria before release candidates go to the store.',
    priority: 'medium',
    status: 'done',
    deadline: '2024-12-06',
  },
  {
    id: 7,
    title: 'Design System',
    description:
      'It just needs to adapt the UI from what you did before. Audit existing components, define tokens for spacing and colour, and publish documentation with live examples. Set governance for contributions and versioning so product teams can ship consistently without reinventing patterns each sprint.',
    priority: 'medium',
    status: 'done',
    deadline: '2024-12-06',
  },

],selectedFilter:"allpriorities"}

onChangeFilter = (event) =>{this.setState({selectedFilter:event.target.value})}
 
    render(){
    const {taskList,selectedFilter} = this.state

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

    const changeStatus = (task) =>{
        const {taskList} = this.state
        const updatedTask = taskList.map(eachTask => eachTask.id === task.id ? {...eachTask,status:task.status}:eachTask)
        console.log(updatedTask)
        this.setState({taskList:updatedTask})

    }

    const token = localStorage.getItem('jwt_token')
    if(token === null){
            return <Navigate to="/login" replace/>
       }
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
                            <ul className="unorder-list-task">{taskList.map(eachTask => {
                                if(eachTask.status === "todo"){
                                    return <TaskCard changeStatus={changeStatus} key={eachTask.id} taskDetails={eachTask}/>
                                }
                            })}</ul>
                        </div>}
                        { (selectedFilter === "inprogress" || selectedFilterVisibility === "allpriorities") && <div className="dashboard-task-container ">
                            <p>IN PROGRESS</p>
                            <hr className="inProgress-line"/>
                            <ul className="unorder-list-task">{taskList.map(eachTask => {
                                if(eachTask.status === "inprogress"){
                                    return <TaskCard changeStatus={changeStatus} key={eachTask.id} taskDetails={eachTask}/>
                                }
                            })}</ul>
                        </div>}
                        { (selectedFilter === "done" || selectedFilterVisibility === "allpriorities") && <div className="dashboard-task-container">
                            <p>DONE</p>
                            <hr className="done-line"/>
                            <ul className="unorder-list-task">{taskList.map(eachTask => {
                                if(eachTask.status === "done"){
                                    return <TaskCard changeStatus={changeStatus} key={eachTask.id} taskDetails={eachTask}/>
                                }
                            })}</ul>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard