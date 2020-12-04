import React, { Component } from 'react'
import Search from '../views/Search'
import axios from 'axios';
import searchRequest from '../../data/searchRequest.json';
import Flights from '../views/Flights';

export class Home extends Component {
    state = {
        response: {

        },
        origin: "",
        destination: "",
        budget: 100000000
    }
    search = (request) => {
        var postBody = searchRequest;
        this.setState({
            response: [],
            origin: request.from.substring(request.from.indexOf("(") + 1, request.from.indexOf(")")),
            destination: request.to.substring(request.to.indexOf("(") + 1, request.to.indexOf(")")),
            budget: request.budget
        })


        postBody.Origin = request.from.substring(request.from.indexOf("(") + 1, request.from.indexOf(")"));
        postBody.Destination = request.to.substring(request.to.indexOf("(") + 1, request.to.indexOf(")"));
        postBody.OriginCity = request.from.substring(0, request.from.indexOf("(") - 1);
        postBody.DestinationCity = request.to.substring(0, request.to.indexOf("(") - 1);
        var date = request.startDate.toLocaleDateString('en-US').split("/");
        postBody.From = date[2] + "" + ('0' + date[0]).slice(-2) + "" +  ('0' + date[0]).slice(-2);
        date = request.endDate.toLocaleDateString('en-US').split("/");
        postBody.To = date[2] + "" + ('0' + date[0]).slice(-2) + "" +  ('0' + date[0]).slice(-2);
        
        axios.post('https://cors-anywhere.herokuapp.com/https://demo.travelportuniversalapi.com/Api/Air/GetLowFareSearch', postBody)
            .then(res => {
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
                {Object.keys(this.state.response).length !== 0 ? (
                    <div id="services" className="cards-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">

                                    <h2>Available Flights</h2>
                                    <div className="section-title">That Suits Your Needs</div>

                                    <Flights flights={this.state.response} origin={this.state.origin} destination={this.state.destination} budget={this.state.budget} />

                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                        ""
                    )

                }
            </React.Fragment>
        )
    }

}

export default Home
