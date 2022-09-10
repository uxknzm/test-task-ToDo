import React from 'react';
import TodoList from '../TodoList/TodoList';
import todo from '../../store/todo';

const Todo = () => {
  const [value, setValue] = React.useState('')
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const onClearInput = () => {
    todo.addTodo(value)
    setValue('')
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-header">
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                ToDo List
                </p>
                <div className="pb-2">
                  <div className="card border-0">
                    <div className="card-body shadow">
                      <div className="d-flex flex-row align-items-center m-4">
                        <input type="text" className="form-control form-control-lg border-0"
                          placeholder="Добавить новую задачу..."
                          value={value} onChange={onChangeInput} />
                        <div>
                          <button type="button" className="btn btn-outline-primary btn-lg ms-5" onClick={onClearInput}>Добавить</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <button type="button" className="btn btn-outline-secondary" onClick={() => todo.fetchTodo()}>Получить данные с сервера</button>
                <button type="button" className="btn btn-outline-secondary ms-2" onClick={() => todo.allTodo()}>Все</button>
                <button type="button" className="btn btn-outline-danger ms-2" onClick={() => todo.filterTodoNo()}>Показать не выполненные</button>
                <button type="button" className="btn btn-outline-primary ms-2" onClick={() => todo.filterTodoYes()}>Показать выполненные</button>
                </div>
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;