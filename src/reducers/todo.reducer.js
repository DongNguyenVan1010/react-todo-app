import { ADD_TODO, TOGGLE_TODO_STATUS } from "./todo.actions"

const initState = [
  { id: 1, name: 'Eat cakes', completed: false, priority: 'Medium' },
  { id: 2, name: 'Eat breakfast', completed: true, priority: 'High' },
  { id: 3, name: 'Do homework', completed: false, priority: 'Low' }
]

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case TOGGLE_TODO_STATUS:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todoListReducer