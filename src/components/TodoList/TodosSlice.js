import { v4 } from "uuid";

const initState =  [
  { id: v4(), name: 'Learn Yoga', completed: false, priority: 'Medium' },
  { id: v4(), name: 'Eat cakes', completed: true, priority: 'High' },
  { id: v4(), name: 'Play video game', completed: false, priority: 'Low' },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [ ...state, action.payload];

      case 'todoList/toggleTodoStatus': 
      return state.map((todo)=> todo.id === action.payload? {...todo, completed: !todo.completed} : todo)

      default: 
      return state
  }
}

export default todoListReducer