import { makeAutoObservable } from 'mobx'
import localStorage from 'mobx-localstorage';


interface TodoSliceState {
    id: number
    title: string
    completed: boolean
}
localStorage.getItem('todo')
class Todo {
    todos: TodoSliceState[] = localStorage.getItem('todo') ? localStorage.getItem('todo') : [
        { id: 0, title: 'Сделать тестовое', completed: true }
    ]

    constructor() {
        makeAutoObservable(this)
    }
    addTodo(value: string) {
        if (value) {
            this.todos.push({ id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1, title: value, completed: false })
            localStorage.setItem('todo', this.todos);
        }
    }
    remoteTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        localStorage.setItem('todo', this.todos);
    }
    complitedTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        localStorage.setItem('todo', this.todos);
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
                localStorage.setItem('todo', this.todos);
            })
            
    }
}

export default new Todo()