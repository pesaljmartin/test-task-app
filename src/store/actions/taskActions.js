import DataApi from '../../api/';

export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';

export function loadData() {  
  return function(dispatch) {
    return DataApi.getAllData().then(data => {
      const reader = data.getReader();
      dispatch(loadDataSuccess(reader.read()));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadDataSuccess(data) {  
    return { type: 'LOAD_DATA_SUCCESS', data };
}