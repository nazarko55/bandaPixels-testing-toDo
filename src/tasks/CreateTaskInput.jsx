import React from 'react';
import PropTypes from 'prop-types'

class CreateTaskInput extends React.PureComponent{
    state = {
        value: ''
    }

    handleCreateTaskInput = e =>
        this.setState({
            value: e.target.value
        })

    handleAddTodo = () => {
        this.props.handleAddTodo(this.state.value);
        this.setState({value: ''})
    }

    render(){
        const {value} =this.state;
        return(
            <div className="create-task">
                <input
                    className="create-task__input"
                    type="text"
                    value={value}
                    onChange={this.handleCreateTaskInput}
                    />
                    <button
                        className="btn create-task__btn"
                        onClick={() => this.handleAddTodo(value)}>
                        Create
                    </button>
            </div>
        )
    }
}

CreateTaskInput.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}

export default CreateTaskInput