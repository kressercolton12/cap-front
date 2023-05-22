import React, { Component } from 'react';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to the UFL Podcast!",
            isLoading: false,
            data: []
        };
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
        <div className='homepage'>
            Homepage
        </div>

        )
    };
}