import React, {Component} from 'react';

class Task extends Component {
    render() {
        return (
            <div className={'task'}>
                <p className={'task-p'} key={this.props.id}>{this.props.texts}</p>
                <button className={'btn-comp'} onClick={this.props.remove}><i className="fas fa-trash-alt"></i></button>

            </div>
        );
    }
}

export default Task;