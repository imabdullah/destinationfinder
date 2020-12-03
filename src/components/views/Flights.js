import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Flight from './Flight';

export class Flights extends Component {

    render() {

        var flights = this.props.flights.FlightDetailsList.$values;
        var fares =  this.props.flights.FareInfoList.$values;

        var directDepartFlights = flights.filter(flight => flight.Origin === this.props.origin && flight.Destination === this.props.destination);
        var directArrivalFlights = flights.filter(flight => flight.Origin === this.props.destination && flight.Destination === this.props.origin);



        //flights = this.props.flights.AirPricePointList.$values;
        
        return (
            <div className="row">
                <div className="col-lg-12">
                    {directDepartFlights.map((flight) => (
                            <Flight key={flight.$id} flight={flight} />
                        ))
                    }
                    <br /><br />
                    {directArrivalFlights.map((flight) => (
                            <Flight key={flight.$id} flight={flight} />
                        ))
                    }
                </div>
            </div>
        )

    }
}

export default Flights
