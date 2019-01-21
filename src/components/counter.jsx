import React, { Component } from 'react';


// this is 
// section-2 
// 2- Setting Up the Project & 3- Your First React Component & 4- Specifying Children & 5- Embedding Expressions & 6- Setting Attributes & 7- Rendering Classes Dynamically &11- Binding Event Handlers & 12- Updating the State & 13- What Happens When State Changes

let product;
class Counter extends Component {
    state = {
        count : 0
       
    };
    
    handleIncrement = product => {
        //debugger;
        console.log(product);
        this.setState({ count: this.state.count + 1}); 
       
    };
    doHandleIncrement = () => {
        this.handleIncrement({ id: 1});
    };
    
    render() {
        return(
            <div>
                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button 
                onClick={() => this.handleIncrement(product)} 
                className="btn btn-secondary btn-sm">Increment</button>
                
            </div>
        ); 
       
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }

} 

export default Counter;