import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
    <div className="new-todo-form">
        <input 
            className="new-todo-input" 
            type="text" 
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)} 
            placeholder="Type your new todo here" />
        <button 
            onClick={() => {
                const isDuplicateText =
                    todos.some(todo => todo.text === inputValue);

                if(!isDuplicateText) {
                    onCreatePressed(inputValue),
                setInputValue('');
                }
            }}
            className="new-todo-button">
        Create Todo</button>
    </div>
    );
};

// mapStateToProps will take the entire redux state and returns an Object
// containing the pieces of that state that our component needs to access
const mapStateToProps = state => ({
    todos: state.todos,
});

// mapDispatchToProps takes dispatch function (allows functions to trigger actions)
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);