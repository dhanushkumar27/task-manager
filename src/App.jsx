import {BrowserRouter ,Routes, Route} from 'react-router-dom'

import {Component} from 'react'

import LoginWrapper  from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import TaskDetails from './pages/TaskDetails/TaskDetails.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

import TaskDetailsContext from './context/TaskDetailsContext/TaskDetailsContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import './App.css'

class  App extends Component{
  state = {taskList:[]}

componentDidMount(){
  const tasks = localStorage.getItem("taskList")

  if(tasks != null){
      this.setState({taskList:JSON.parse(tasks)})
  }else{
    this.setState({taskList:[
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
}]})
  }
}

  addTaskContext = (task) =>{
    const {taskList} = this.state
    this.setState({taskList:[...taskList,task]})
    localStorage.setItem("taskList",JSON.stringify([...taskList,task]))
  }

  updateTaskContext = (task) => {

    const {taskList} = this.state 
    const updatedTaskList = taskList.map(eachTask => eachTask.id === task.id ? {...eachTask,status:task.status}:eachTask)
    this.setState({taskList:updatedTaskList})
    localStorage.setItem("taskList",JSON.stringify(updatedTaskList))
  }
  
  removeTaskContext = (id) => {
    const {taskList} = this.state
    const updatedTaskList = taskList.filter(eachTask => eachTask.id !== id)
    this.setState({taskList:updatedTaskList})
     localStorage.setItem("taskList",JSON.stringify(updatedTaskList))
  }

  render(){
    const {taskList} = this.state
    return (
        <TaskDetailsContext.Provider
         value={{taskListContext:taskList,
        addTaskContext:this.addTaskContext,
        updateTaskContext:this.updateTaskContext,
        removeTaskContext:this.removeTaskContext}}>
            <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<LoginWrapper />}/>
                  <Route exact path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                  <Route exact path="/taskDetails/:id" element={<ProtectedRoute><TaskDetails/></ProtectedRoute>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
          </BrowserRouter>
      </TaskDetailsContext.Provider>
    )
  }}

export default App