import React from 'react'

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
}

export default function Flight(flight) {
    console.log(flight);
    flight = flight.flight;
    return (


        <div className="card">
            <div className="card-image">
                <img className="img-fluid" src="images/services-1.jpg" alt="alternative" />
            </div>

            <div className="card-body">
                <h3 className="card-title">Off The Ground Off The Ground</h3>
                <p>Perfect for fresh ideas or young startups, this package will help get the business off the
                            ground</p>
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Depart: {flight.DepartureTime.Value}</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Arrive: {flight.ArrivalTime.Value}</div>
                            </li>
                        </ul>

                    </div>

                    <div>
    <p><span>{flight.Origin} {flight.Destination}</span><br />
                        <span>{timeConvert(flight.FlightTime)}</span></p>
                    </div>
                </div>
                <p className="price">Starting at <span>$199</span></p>
            </div>
            <div className="button-container">
                <a className="btn-solid-reg page-scroll" href="#callMe">DETAILS</a>
            </div>
        </div>


    )
}
