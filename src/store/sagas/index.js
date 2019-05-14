import { all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { types, actions } from '../actions/search-cep-action';
import validation from '../services/validation';

function* getByCep(action) {
  try {
    yield put(actions.fetchDataRequest());
    const response = yield axios.get(
      process.env.REACT_APP_API_URL + action.payload
    );
    yield put(actions.fetchDataSuccess(response.data));
    validation(action.payload);
    if (response.data.status === 0) {
      throw new Error('CEP não encontrado!');
    } else {
      yield put(push('/data'));
    }
  } catch (error) {
    yield put(actions.fetchDataFailure(error.message));
  }
}

export default function* root() {
  yield all([takeLatest(types.GET_DATA_BY_CEP, getByCep)]);
}
