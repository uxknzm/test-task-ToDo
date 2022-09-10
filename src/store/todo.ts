import { makeAutoObservable } from 'mobx'


class Todo {
    todos = [
        { id: 0, title: 'Сделать тестовое', completed: true },
    ]

    constructor() {
        makeAutoObservable(this)
    }
    addTodo(value: string) {
        if (value) {
            this.todos.push({ id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1, title: value, completed: false })
        }
    }
    remoteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    complitedTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }
    filterTodoNo() {
        this.todos = this.todos.filter(todo => todo.completed === false) 
    }
    filterTodoYes() {
        this.todos = this.todos.filter(todo => todo.completed === true)
    }
    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
    allTodo() {
        this.todos = [
        { id: 0, title: 'Сделать тестовое', completed: true },
    ]
    }
}

export default new Todo()