export const types = {
  FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
  GET_DATA_BY_CEP: 'GET_DATA_BY_CEP'
};

export const actions = {
  getDataByCep: cep => ({
    type: types.GET_DATA_BY_CEP,
    payload: cep
  }),
  fetchDataRequest: () => ({
    type: types.FETCH_DATA_REQUEST
  }),
  fetchDataSuccess: data => ({
    type: types.FETCH_DATA_SUCCESS,
    payload: data
  }),
  fetchDataFailure: error => ({
    type: types.FETCH_DATA_FAILURE,
    payload: error
  })
};
