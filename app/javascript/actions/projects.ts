import { ProjectService } from './../services/project';

export const GET_PROJECTS_STARTED = 'GET_PROJECTS_STARTED';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

const getProjectsStarted = (): {} => ({
  type: GET_PROJECTS_STARTED,
});

const getProjectsSuccess = (projectsData): {} => {
  let data = {};
  projectsData.forEach(project => (data[project.id] = project));

  return {
    type: GET_PROJECTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const getProjectsFailure = (errorMessage): {} => ({
  type: GET_PROJECTS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getProjects = (): ((dispatch) => void) => {
  return (dispatch): void => {
    dispatch(getProjectsStarted());
    new ProjectService()
      .getProjects()
      .then(res => {
        dispatch(getProjectsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getProjectsFailure(err.message));
      });
  };
};
