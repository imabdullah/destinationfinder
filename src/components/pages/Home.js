import React, { Component } from 'react'
import Search from '../views/Search'


export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-container">
                                        <h1>Explore <span id="">Your Desired Destination</span></h1>
                                       <p className="p-heading p-large">Find a great places to fly to</p>
                                       <Search/>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Home
