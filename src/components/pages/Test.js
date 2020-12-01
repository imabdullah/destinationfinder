import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

function getPlaceValue(place) {
    return place.PlaceName+" "+place.PlaceId;
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
            to:'',
            places: []
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


    fetchSuggestionPlaces = (place ) => {
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
        }else{
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
            <div>
                <br />
                <br /><br />
                <Autosuggest
                    suggestions={places}
                    onSuggestionsFetchRequested={this.fetchSuggestionPlaces}
                    onSuggestionsClearRequested={this.clearSuggestionPlaces}
                    getSuggestionValue={getPlaceValue}
                    renderSuggestion={renderPlace}
                    inputProps={fromProps} />

                    <br /><br />
                <Autosuggest
                    suggestions={places}
                    onSuggestionsFetchRequested={this.fetchSuggestionPlaces}
                    onSuggestionsClearRequested={this.clearSuggestionPlaces}
                    getSuggestionValue={getPlaceValue}
                    renderSuggestion={renderPlace}
                    inputProps={toProps} />
            </div>
        );
    }
}


export default Test
