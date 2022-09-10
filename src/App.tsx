import React from 'react';
import Todo from './component/Todo/Todo';
import s from './App.module.css'



const App = () => {
  return (
    <div className={s.app}>
        <Todo />
      </div>
  )
}

export default App