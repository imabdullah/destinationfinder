import React, { Component } from 'react'
import Brands from './Brands';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index && value != "undefined";
}

export class Flights extends Component {


    render() {

        // var flights = this.props.flights.FlightDetailsList.$values;
        // var fares = this.props.flights.FareInfoList.$values;

        // var directDepartFlights = flights.filter(flight => flight.Origin === this.props.origin && flight.Destination === this.props.destination);
        // var directArrivalFlights = flights.filter(flight => flight.Origin === this.props.destination && flight.Destination === this.props.origin);

        // var flight = new Object();
        // 
        var f = new Object();
        var newFlights = [];

        if ('AirPricePointList' in this.props.flights && this.props.flights.AirPricePointList !== null) {
            var AirPricePointList = this.props.flights.AirPricePointList.$values;
            var carriers = this.props.flights.AirPricePointGroupByPlatingCarrierList.$values;
        }
        else{
            var AirPricePointList = [];

            var carriers = [];
        }


        return (
            <div className="row">
                <div className="col-lg-12">
                    {AirPricePointList.length>0?
                        /**Flights avaliable */
                        carriers.map((carrier) => (
                            carrier.AirPricePointGroupByPriceList.$values.map(carrierOption => (
                                <div>
                                    <Brands careerName={carrier.PlatingCarrier} carrierOption={carrierOption} />
    
    
    
                                    {AirPricePointList.map(pointList => (
                                        pointList.AirPricingInfoList.$values.map(pricingList => (
                                            pricingList.FlightOptionList.$values.map(flightOption => (
                                                flightOption.OptionList.$values.map(option => (
                                                    f.id = option.$id,
                                                    f.Departure = option.DepartureTimeFirstSegment.Value,
                                                    f.Arrival = option.ArrivalTimeLastSegment.Value,
                                                    f.Origin = flightOption.Origin,
                                                    f.Destination = flightOption.Destination,
                                                    f.Carrier = pricingList.PlatingCarrier,
                                                    f.Brand = (pointList.Brand !== null) ? pointList.Brand : "",
                                                    f.StopsCount = option.StopsCount,
                                                    f.TotalPrice = pricingList.TotalPrice.TotalPrice,
                                                    f.Currency = pricingList.TotalPrice.Currency,
    
                                                    option.BookingInfoList.$values.map(booking => (
                                                        f.CabinClass += "|" + booking.CabinClass
                                                    )),
    
                                                    f.CabinClass = f.CabinClass.split("|").filter(onlyUnique),
    
                                                    (Math.round(f.TotalPrice) < this.props.budget) ?
                                                        (f.Brand === carrierOption.Brand && f.Carrier === carrier.PlatingCarrier) ?
    
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{f.Origin} <FontAwesomeIcon icon={faPlane} /> {f.Destination}  <span className="price"> <span>{f.TotalPrice} {f.Currency}</span></span></h5>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul className="list-unstyled li-space-lg">
                                                                                <li className="media">
                                                                                    <i className="fa fa-spinner fa-spin"></i>
    
                                                                                    <div className="media-body">Depart: {f.Departure}</div>
                                                                                </li>
                                                                                <li className="media">
                                                                                    <i className="fa fa-spinner fa-spin"></i>
                                                                                    <div className="media-body">Arrive: {f.Arrival}</div>
                                                                                </li>
                                                                            </ul>
    
                                                                        </div>
    
                                                                        <div className="col-lg-4">
                                                                            <p><span>{f.StopsCount} Stops</span><br /><span>{f.CabinClass}</span></p>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <p><span>Carrier: {f.Carrier} </span><br /><span>{f.Brand}</span></p>
                                                                        </div>
                                                                    </div>
    
                                                                </div>
    
                                                            </div>
                                                            :
                                                            (f.Carrier === carrier.PlatingCarrier) ?
                                                                <div className="card">
    
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">{f.Origin} <FontAwesomeIcon icon={faPlane} /> {f.Destination}  <span className="price"> <span>{f.TotalPrice} {f.Currency}</span></span></h5>
                                                                        <div className="row">
                                                                            <div className="col-lg-4">
                                                                                <ul className="list-unstyled li-space-lg">
                                                                                    <li className="media">
                                                                                        <i className="fas fa-square"></i>
                                                                                        <div className="media-body">Depart: {f.Departure}</div>
                                                                                    </li>
                                                                                    <li className="media">
                                                                                        <i className="fas fa-square"></i>
                                                                                        <div className="media-body">Arrive: {f.Arrival}</div>
                                                                                    </li>
                                                                                </ul>
    
                                                                            </div>
    
                                                                            <div className="col-lg-4">
                                                                                <p><span>{f.StopsCount} Stops</span><br /><span>{f.CabinClass}</span></p>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <p><span>Carrier: {f.Carrier} </span><br /><span>{f.Brand}</span></p>
                                                                            </div>
                                                                        </div>
    
                                                                    </div>
    
                                                                </div>
                                                                :
                                                                ""
    
                                                        : <span></span>
                                                ))
    
                                            ))
                                        ))
                                    ))
                                    }
                                    <br />
                                    <hr />
                                </div>
    
                            ))
                        ))
                        
    
                    :
                    /** Add Flight not found here */
                    <span>No flights avaliable!</span>
                    }
                    

                </div>
            </div>
        )

    }
}

export default Flights
