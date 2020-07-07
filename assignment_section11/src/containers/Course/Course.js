import React, { Component } from 'react';

class Course extends Component {

    state = {
        title: ''
    }

    componentDidMount() {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const title = params.get('title');
        if (this.state.title !== title) {
            this.setState({title: title});
        } 
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;