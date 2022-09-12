import React, {Component} from "react";

class Hello extends Component {
    state = {  } 
    render() { 
        return (
            
            <h1>This Is My component {this.props.name} a.k.a {this.props.heroname}</h1>
            
        );
    }
} 

export default Hello;