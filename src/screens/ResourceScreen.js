//CommentBox.js
import React, { Component } from 'react';
import ResourceList from './ResourceList';
import resourcedata from './resourcedata';
import style from './style';

class ResourceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <div style={ flex.one }>
            <h2>Resources</h2>
            <ResourceList resources={ resourcedata }/>
            //Add Resources Button
            //Dropdown for Resource Group
            </div>
        )   
    }
}
export default ResourceScreen;