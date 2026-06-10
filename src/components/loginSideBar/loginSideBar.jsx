import './loginSideBar.css'

const LoginSideBar = () =>(
    <div className="login-sideBar-container">
        <h1 className="login-sideBar-heading">Task Manager</h1>
        <p className="login-sideBar-para">Sign in to open your poject dashboard.</p>
        <ul className="login-sideBar-unorder-list">
            <li className="login-sideBar-list-item">Plan work across To DO, In Progress, and Done</li>
            <li className="login-sideBar-list-item">Track priorities and deadlines in one place</li>
            <li className="login-sideBar-list-item">Your board is saved in this browser</li>
        </ul>
    </div>
)

export default LoginSideBar