export const ADD_TODO = 'TODOLIST/ADD_TODO'
export const TOGGLE_TODO_STATUS = 'TODOLIST/TOGGLE_TODO_STATUS'

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  }
}


export const toggleTodoStatus = (todoId) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: todoId,
  }
}
