import combineReducers from 'react-combine-reducers';
import eventReducer, { initialState as authInitialState } from './reducers/eventReducer';

export const [reducer, initialState] = combineReducers({
  event: [eventReducer, authInitialState]
});
