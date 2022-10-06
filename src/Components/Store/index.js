import idReducer from "./Reducers/idReducer";
import {legacy_createStore as createStore} from 'redux'

export const store = createStore(idReducer);