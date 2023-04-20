import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// Хук для типизации получаеммых данных из хука useSelector с помощью экспортируемого типа RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector