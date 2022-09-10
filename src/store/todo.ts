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
    get todoCompleted() {
        return this.todos.filter((todo) => todo.completed)
      }
    get todoFalse() {
        return this.todos.filter((todo) => !todo.completed)
      }
    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new Todo()