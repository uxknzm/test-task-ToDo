import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from '../../store/todo';

const TodoList = observer(() => {
    return (
        <>
            <p className="fs-2 text-center">Задания</p>
            {todo.todos.map(t =>
            <div key={t.id} className="card card-header m-2">
                <ul  className="list-group list-group-horizontal rounded-0 bg-transparent">
                    <li
                        className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                        <div className="form-check">
                            <input className="form-check-input me-0" type="checkbox"
                                aria-label="..." onChange={() => todo.complitedTodo(t.id)} checked={t.completed}/>
                        </div>
                    </li>
                    <li
                        className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p className="lead fw-normal mb-0">{t.title}</p>
                    </li>
                    <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                        <div className="d-flex flex-row justify-content-end mb-1">
                            <button onClick={() => todo.remoteTodo(t.id)} type="button" className="btn btn-outline-danger">Удалить</button>
                        </div>
                    </li>
                </ul>
                </div>)}
        </>
    );
});

export default TodoList;