import React, { Component } from 'react';
import $ from 'jquery';


export default class JQuery extends Component {
    render() {
        return (
            <div>
                {console.log($)}
            </div>
        )
    }
}
