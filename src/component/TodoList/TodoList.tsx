import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from '../../store/todo';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = observer(() => {
    const [todoList, setTodo] = React.useState(true)
    const [todoFalse, setTodoFalse] = React.useState(false)
    const [todoTrue, setTodotrue] = React.useState(false)
    const allTodo = () => {
        setTodo(true)
        setTodoFalse(false)
        setTodotrue(false)
    }
    const setFalseTodo = () => {
        setTodoFalse(true)
        setTodotrue(false)
        setTodo(false)
    }
    const setTrueTodo = () => {
        setTodotrue(true)
        setTodoFalse(false)
        setTodo(false)
    }
    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-5">
                <button type="button" className="btn btn-dark" onClick={() => { allTodo() }}>Все</button>
                <button type="button" className="btn btn-dark" onClick={() => { setTrueTodo() }}>Выполненные</button>
                <button type="button" className="btn btn-dark" onClick={() => { setFalseTodo() }}>Не выполненные</button>
                <button type="button" className="btn btn-dark" onClick={() => todo.fetchTodo()}>Получить данные с сервера</button>
            </div>
            <p className="fs-2 text-center p-5">Задания</p>
            {todoFalse ? <>{todo.todoFalse.map(t =>
                <TodoItem t={t} key={t.id} />)}</> : ''}
            {todoTrue ? <>{todo.todoCompleted.map(t =>
                <TodoItem t={t} key={t.id} />)}</> : ''}
            {todoList ? <>{todo.todos.map(t =>
                <TodoItem t={t} key={t.id} />)}</> : ''}
        </>
    );
});

export default TodoList;