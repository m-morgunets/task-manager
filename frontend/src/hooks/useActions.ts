import {bindActionCreators} from 'redux'
import { useDispatch } from "react-redux";

// Получение всех экспортируемых экшенов из файла
import * as TasksActionCreators from '../store/action-creators/tasks'


// Хук сделан для того, чтобы не делать каждый раз обёртку dispatch(action)
// bindActionCreators сам создаёт обёртку dispatch (второй параметр)
// и в компонентах можно будет использовать экшены сразу как функции
export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(TasksActionCreators, dispatch);
};
