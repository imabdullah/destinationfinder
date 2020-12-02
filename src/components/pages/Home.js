import React, { Component } from 'react'
import Search from '../views/Search'
import axios from 'axios';


export class Home extends Component {

    search = (request) => {
        console.log("ok");
        console.log(request);

        var config = {
            headers: {
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                'x-rapidapi-key': '1a12058fafmsh7466804d7f6c46cp1e707djsn444d6b07a5de'
            }
        };
       var from = request.from.substring(request.from.indexOf("(")+1, request.from.indexOf(")"));
        var to = request.to.substring(request.to.indexOf("(")+1, request.to.indexOf(")"));

        axios.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/'+from+'/'+to+'/2021-01-01?inboundpartialdate=2021-12-11', config)
            .then(res => {
                console.log(res.data);

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
                                       <Search search={this.search}/>

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
