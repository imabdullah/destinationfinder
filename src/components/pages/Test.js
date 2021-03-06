import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import '../views/Search.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function getPlaceValue(place) {
    return place.PlaceName + " " + place.PlaceId;
}

function renderPlace(place) {
    return (
        <span>{place.PlaceName} {place.PlaceId}</span>
    );
}

class Test extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            to: '',
            places: [],
            budget: "",
            startDate: null,
            endDate: null
        };
    }

    onChangeFrom = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });

        ;
    };
    onChangeTo = (event, { newValue, method }) => {
        this.setState({
            to: newValue
        });
    };


    fetchSuggestionPlaces = (place) => {
        this.setState({ places: [] })
        place = place.value;
        if (place.length > 3) {
            var config = {
                headers: {
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': '1a12058fafmsh7466804d7f6c46cp1e707djsn444d6b07a5de'
                }
            };
            axios.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=' + place, config)
                .then(res => {
                    console.log(res.data.Places);
                    if (res.data != null && 'Places' in res.data) {
                        console.log("Ok");
                        this.setState({ places: res.data.Places });
                    }

                })
        } else {
            this.setState({
                places: []
            });
        }


    }

    clearSuggestionPlaces = () => {
        this.setState({
            suggestions: []
        });
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.budget && this.state.to && this.state.from && this.state.startDate && this.state.endDate) {
            console.log("All Set")
        } else {

        }
    }

    setDeparture = (date) => {
        this.setState({ startDate: date, endDate: null })
    }
    setReturn = (date) => {
        this.setState({ startDate: this.state.startDate, endDate: date })
    }


    render() {
        const { to, value, places } = this.state;

        const fromProps = {
            placeholder: "From",
            name: "from",
            value,
            onChange: this.onChangeFrom
        };
        const toProps = {
            placeholder: "TO",
            name: "to",
            value: to,
            onChange: this.onChangeTo
        };

        return (

            <form onSubmit={this.onSubmit} className="form-inline">
                <div className="form-group">
                    <select className="form-control budget" placeholder="Select your Budget" name="budget" value={this.state.budget} onChange={this.onChange} >
                        <option>Select your Budget&nbsp;&nbsp;</option>
                        <option>$200 - $500</option>
                        <option>$500 - $1000</option>
                        <option>$1000 - $1500</option>
                    </select>

                </div>
                <div className="form-group">
                    <Autosuggest
                        suggestions={places}
                        onSuggestionsFetchRequested={this.fetchSuggestionPlaces}
                        onSuggestionsClearRequested={this.clearSuggestionPlaces}
                        getSuggestionValue={getPlaceValue}
                        renderSuggestion={renderPlace}
                        inputProps={fromProps} />
                </div>
                <div className="form-group">
                    <Autosuggest
                        suggestions={places}
                        onSuggestionsFetchRequested={this.fetchSuggestionPlaces}
                        onSuggestionsClearRequested={this.clearSuggestionPlaces}
                        getSuggestionValue={getPlaceValue}
                        renderSuggestion={renderPlace}
                        inputProps={toProps} />
                </div>
                <div className="form-group">
                    <DatePicker className="form-control" selected={this.state.startDate} onChange={date => this.setDeparture(date)} minDate={new Date()} placeholderText="Departure Date" />
                </div>
                <div className="form-group">
                    <DatePicker className="form-control" selected={this.state.endDate} minDate={this.state.startDate} onChange={date => this.setReturn(date)} placeholderText="Return Date" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-solid-lg page-scroll">Search</button>
                </div>
                <div className="error-alert">
                    All fields required!
                </div>
            </form>



        );
    }
}


export default Test
