import React, { Component } from 'react';

import ItemComponent from './ItemComponent';
import { API_URL } from './constants';
// import FiltersBar from './FiltersBar/FiltersBar';

export class News extends Component {
    constructor() {
        super();

        this.state = {
            news: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch(`${API_URL}/search_by_date`)
            .then(response => response.json())
            .then(response => response.hits)
            .then(json => this.setState({ news: json, isLoading: false }));
    }

    render() {
        return (
            <>
                {this.state.isLoading ?
                    <div className="loader" />
                    : this.state.news.map((item, index) => (
                        <ItemComponent
                            key={item.id}
                            index={index}
                            item={item}
                        />
                    ),
                    )}
            </>
        );
    }
}

export default News;
