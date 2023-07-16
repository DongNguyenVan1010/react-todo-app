import { createStore } from 'redux';
import filtersReducer from '../reducers/filters.reducer';
import todoListReducer from '../reducers/todo.reducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
})

const store = createStore(rootReducer)

export default store