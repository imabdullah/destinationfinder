import React, { Component } from 'react'
import './Search.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Search extends Component {
    state = {
        budget: "",
        to: "",
        from: "",
        startDate: null,
        endDate: null
    }
    setDeparture = (date) => {
        this.setState({ startDate: date, endDate: null })
    }
    setReturn = (date) => {
        this.setState({ startDate: this.state.startDate, endDate: date })
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.budget && this.state.to && this.state.from && this.state.startDate && this.state.endDate) {
            console.log("All Set")
        } else {

        }
    }
    render() {
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
                    <input type="text" className="form-control" placeholder="From" name="from" value={this.state.from} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="To" name="to" value={this.state.to} onChange={this.onChange} />
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

        )
    }
}

export default Search
