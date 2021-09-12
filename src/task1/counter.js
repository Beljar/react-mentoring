import * as React from "react";

const e = React.createElement;

export class Counter extends React.Component{
    constructor() {
        super();
       this.state = { num: 0 };
       this.plusBtn = e('button', {onClick: ()=>this.increase()}, '+');
       this.minusBtn = e('button', {onClick: ()=>this.decrease()}, '-'); 
    }
    increase() {
        this.setState({num: this.state.num + 1});
    }
    decrease() {
        this.setState({num: this.state.num ? this.state.num - 1 : 0});
    }
    render() {
        const numSpan = e('span', {className: 'counter-num'}, this.state.num);
        return e('div', {className: 'task-item'}, this.minusBtn, numSpan, this.plusBtn);
    }
}
