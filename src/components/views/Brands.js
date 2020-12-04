import React, { Component } from 'react'

export class Brands extends Component {
    render() {
        var careerName = this.props.careerName;
        var carrierOption = this.props.carrierOption;
        return (
            
            <div className="card">
                <h5 className="card-title">{careerName} {carrierOption.Brand}
                <span className="price"> Starting at <span>{carrierOption.TotalPrice.TotalPrice}{carrierOption.TotalPrice.Currency}</span></span>
                </h5>

               

            </div>
        )
    }
}

export default Brands

