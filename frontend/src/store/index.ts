import { tasksReducer } from './reducers/tasksReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

// Создание store-а
// Используется redux-devtools для удобной отладки и redux-thunk в качестве mddleware
export const store = createStore(tasksReducer, composeWithDevTools(applyMiddleware(thunk)))

// Получение типа состояния
export type RootState = ReturnType<typeof tasksReducer>;