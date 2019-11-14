import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <input className={'inp'} type="text" value={this.props.value} onChange={this.props.onChange}/>
                <button className={'btn-form'} onClick={this.props.onClick}><i className="fas fa-plus"></i> Add</button>
            </div>
        );
    }
}

export default Form;