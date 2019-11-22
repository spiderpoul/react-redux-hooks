import React, { Component } from 'react';
import ItemComponent from "./ItemComponent";

export class News extends Component {
    constructor() {
        super();

        this.state = {
            news: [],
            isLoading: true
        }
    }

    componentDidMount () {
        fetch("http://localhost:4000/News")
        .then(response => response.json())
        .then(json => setTimeout(() => this.setState({ news: json, isLoading: false }), 1000));
    }

    render() {
        if (this.state.isLoading) 
            return (<h1>Loading.....</h1>);
        return (<>
            {this.state.news.map((item, index) => <ItemComponent
                key={item.id}
                index={index}
                item={item} />
            )}
        </>
        );
    }
};

export default News;