export const createProject = (project) => {
  //we can use function here because we installed thunk
  return (dispatch, getState) => {
    //make async call to db
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};