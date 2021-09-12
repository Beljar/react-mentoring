import * as React from "react";

const e = React.createElement;

export class Search extends React.PureComponent {
    state={ loading: false }
    onWait() {
        this.setState({ ...this.state, ...{ loading: true } });
    }
    onReady() {
        this.setState({ ...this.state, ...{ loading: false } });
    }
    onSearch(e) {
        e.preventDefault();
        if(e.target.search.value.length) {
            this.onWait();        
            setTimeout(()=>{
                this.onReady()
                this.setState({ ...this.state, ...{ search: e.target.search.value } })
            }, 500)  
        } else {
            this.setState({ ...this.state, ...{ search: undefined } })
        }
    }
    render() {
        const {loading} = this.state;
        const inp = e('input', { name: 'search', placeholder: 'What do you want to find?', disabled: loading });
        const btn = e('button', { type: 'submit', disabled: loading }, loading ? 'loading' : 'search');
        const form = e('form', { onSubmit: (e) => {this.onSearch(e)} }, inp, btn)
        const results = e('div', null, this.state.search && !this.state.loading ? `I've found some ${this.state.search} for you`: null)
        return e('div', { className: 'task-item' }, form, results)
    }
}
