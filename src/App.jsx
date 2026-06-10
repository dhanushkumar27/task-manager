import {BrowserRouter ,Routes, Route} from 'react-router-dom'

import LoginWrapper  from './pages/Login/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import TaskDetails from './pages/TaskDetails/TaskDetails.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

import './App.css'

const App = () =>{
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginWrapper />}/>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/taskDetails/:id" element={<TaskDetails/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
    )
}

export default App