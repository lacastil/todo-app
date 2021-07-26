import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticationService from './AuthenticationService.js';
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log('isUserLoggedIn:' + isUserLoggedIn)
        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a className='navbar-brand' href='/'>in28minutes</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedIn && <li className='nav-link'><Link to='/welcome/in28minutes'>Home</Link></li>}
                        {isUserLoggedIn && <li className='nav-link'><Link to='/todos'>Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!isUserLoggedIn && <li className='nav-link'><Link to='/login'>Login</Link></li>}
                        {isUserLoggedIn && <li className='nav-link'><Link to='/logout' onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)