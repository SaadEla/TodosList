import React from 'react';

const Todos= (props) =>{
    let {todos, deleteTodo} = props;
    let todoList = todos.length ? (
        todos.map((xx)=>{
            return (
                <div className="collection-item" key={xx.id}>
                 <span onClick={ () => {deleteTodo(xx.id)} } >Todo: { xx.content }</span>
                </div>
            )
        })
    ) : (<p className="center"> No doto left</p>)

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos;
