import React, { Component } from 'react';

class AddTodo extends Component{
    state={
        content:''
    }
    //e it's an event object
    handleChange= (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" id="content" value={this.state.content} onChange={this.handleChange}/>
                    <button>Ajouter </button>
                </form>

            </div>
        )
    }
}

export default AddTodo;