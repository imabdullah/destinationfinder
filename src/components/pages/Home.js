import React, { Component } from 'react'
import Search from '../views/Search'
import axios from 'axios';
import searchRequest from '../../data/searchRequest.json';
import Flights from '../views/Flights';

export class Home extends Component {
    state = {
        response: {
            
        },
        origin:"",
        destination:""
    }
    search = (request) => {
        var postBody = searchRequest;
        this.setState({
            origin:postBody.Origin,//request.from.substring(request.from.indexOf("(") + 1, request.from.indexOf(")")),
            destination:postBody.Destination//request.to.substring(request.to.indexOf("(") + 1, request.to.indexOf(")"))
        })
        // postBody.Origin = "2";
        // postBody.OriginCity = "2";
        // postBody.Destination = "2";
        // postBody.DestinationCity = "2";

        axios.post('https://cors-anywhere.herokuapp.com/https://demo.travelportuniversalapi.com/Api/Air/GetLowFareSearch', postBody)
            .then(res => {
                console.log(res.data);
                this.setState({ response: res.data });
            })
    }
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
                                        <Search search={this.search} />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div id="services" className="cards-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">SERVICES</div>
                                <h2>Choose The Service Package<br /> That Suits Your Needs</h2>
                                {Object.keys(this.state.response).length !== 0 ? (
                                    <Flights flights={this.state.response} origin={this.state.origin} destination={this.state.destination}/>

                                ) : (
                                        ""
                                    )

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home
