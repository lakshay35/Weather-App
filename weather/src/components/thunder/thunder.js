import React, { Component } from 'react'

export default class Thunder extends Component {
    render() {
        return ( 
            <div className="icon thunder-storm" >
                <div className="cloud" >
                </div>
                <div className="lightning" >
                    <div className="bolt" >
                    </div>
                    <div className="bolt" >
                    </div>
                </div>
            </div>
        );
    }
}