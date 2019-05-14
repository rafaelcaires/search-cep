import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import searchCep from '../reducers/search-cep-reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  cep: searchCep
});

export default rootReducer;
