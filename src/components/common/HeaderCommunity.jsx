import React, { Component } from 'react'
import DDashboard from '../../dashboard/DDashboard'

class HeaderCommunity extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">helloworld App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderCommunity
