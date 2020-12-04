import React, { Component } from 'react'

export class Flight extends Component {
    render() {
        var f = this.props.flight;
        return (
            <div>
                
                <span>
                                    <b>flight</b>
                                to-from: {f.Origin} - {f.Destination}<br />
                                dep-arr: {f.Departure} - {f.Arrival}<br />
                                car-brand: {f.Carrier} - {f.Brand}<br />
                                PR-cur: {f.TotalPrice}{f.Currency}<br />
                                stop: {f.StopsCount} { f.CabinClass}
                               
                                </span>

            </div>
        )
    }
}

export default Flight
