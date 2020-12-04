import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import './Search.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';


function getPlaceValue(place) {
    return place.Name + " (" + place.Code+")";
}

function renderPlace(place) {
    return (
        <span>{place.Name} <span style={{fontSize:"80%"}}>({place.Code})</span></span>
    );
}

class Search extends Component {
    
    constructor() {
        super();
        this.state = {
            from: '',
            to: '',
            places: [],
            budget: "",
            startDate: null,
            endDate: null,
            error:false
        };
    }
    
    onChangeFrom = (event, { newValue, method }) => {
        this.setState({
            from: newValue
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
            
            axios.get('https://cors-anywhere.herokuapp.com/https://demo.travelportuniversalapi.com/Api//TravelData/GetLocationByName?name=' + place)
                .then(res => {
                    console.log(res.data.$values);
                    if (res.data != null && '$values' in res.data) {
                        console.log("Ok");
                        this.setState({ places: res.data.$values });
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
            places: []
        });
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({error : false});
        console.log(this.state)
        if (this.state.budget && this.state.to && this.state.from && this.state.startDate && this.state.endDate) {
            console.log("All Set");
            this.props.search(this.state);
        } else {
            this.setState({error : true});
        
        }
    }

    setDeparture = (date) => {
        this.setState({ startDate: date, endDate: null })
    }
    setReturn = (date) => {
        this.setState({ startDate: this.state.startDate, endDate: date })
    }


    render() {
        const { to, from, places } = this.state;
        const fromProps = {
            placeholder: "From",
            name: "from",
            value: from,
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
                        <option value="300">upto 300</option>
                        <option value="400">upto 400</option>
                        <option value="500">upto 500</option>
                        <option value="1000">upto 1000</option>
                        <option value="100000000">1000+</option>
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

                <div className="error-alert" style={{display: this.state.error?"block":"none"}}>
                    All fields required!
                </div>
            </form>

        );
    }
}

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default Search
