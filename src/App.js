import React, {Component} from 'react';
import nanoid from 'nanoid';
import Task from "./Component/Task";
import './Component/Task.css'
import Form from "./Component/Form";
class App extends Component {
    state = {
        text: '',
        task: [{texts: 'Buy milk', id: nanoid()},{texts: 'Walk with dog', id: nanoid()},{texts: 'Do home work', id: nanoid()}]
    };

    changeText = event => {
        this.setState({text: event.target.value})
    };
    addTextAndId = () => {
        const task = [...this.state.task];
        task.push({texts: this.state.text, id: nanoid()});
        this.setState({task})
    };
    removeTask = (id) => {
        const taskIndex = this.state.task.findIndex(t => t.id === id);
        const task = [...this.state.task];
        task.splice(taskIndex, 1);
        this.setState({task})
    };

    render() {
        return (
            <div className={'wrapp'}>
               <Form value={this.state.text} onChange={this.changeText} onClick={this.addTextAndId}  />
                {this.state.task.map((value) =>
                    <Task key={value.id}
                          texts={value.texts}
                          remove={() => this.removeTask(value.id)}
                    />
                )}

            </div>

        );
    }
}

export default App;