import { types } from '../actions/search-cep-action'

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  isError: false,
  error: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.FETCH_DATA_REQUEST: {
      return {isFetching: true, data: [], error: false}
    }
    case types.FETCH_DATA_SUCCESS: {
      return {isFetching: false, data: action.payload, error: false}
    }
    case types.FETCH_DATA_FAILURE: {
      return {isFetching: false, data: [], isError: true, error: action.payload}
    }
    default: {
      return state
    }
  }
}
