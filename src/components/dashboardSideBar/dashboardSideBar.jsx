import './dashboardSideBar.css'

const onClickLogout = () =>{
    localStorage.removeItem('jwt_token')
    window.location.replace('/')
}

const DashboardSideBar = () =>(
    <div className="dashboard-sideBar-container">
        <div className='dashboard-sideBar-content'>
        <h1 className="dashboard-sideBar-heading">Task Manager</h1>
        <p className="dashboard-sideBar-para">Sign in to open your poject dashboard.</p>
        </div>
        <div className='dashboard-sideBar-buttons'>
            <button className="dashboard-sideBar-button1" type="button">+ Add Task</button>
            <button onClick={onClickLogout} className="dashboard-sideBar-button2" type="button">Log out</button>
        </div>
    </div>
)

export default DashboardSideBar