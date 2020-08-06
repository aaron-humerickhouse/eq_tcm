import { ProjectService } from './../services/project';

export const GET_PROJECT_STARTED = 'GET_PROJECT_STARTED';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

const getProjectStarted = (): {} => ({
  type: GET_PROJECT_STARTED,
});

const getProjectSuccess = (projectData): {} => {
  return {
    type: GET_PROJECT_SUCCESS,
    payload: {
      data: projectData,
    },
  };
};

export const getProjectFailure = (errorMessage): {} => ({
  type: GET_PROJECT_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getProject = (id: number): ((dispatch) => void) => {
  return (dispatch): void => {
    dispatch(getProjectStarted());
    new ProjectService()
      .getProject(id)
      .then(res => {
        dispatch(getProjectSuccess(res.data));
      })
      .catch(err => {
        dispatch(getProjectFailure(err.message));
      });
  };
};
