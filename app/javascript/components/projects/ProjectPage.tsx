import * as React from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions/project';
import { RouteComponentProps } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

interface Props extends RouteComponentProps {
  loading: boolean;
  project: any;
  error: any;
  dispatch: any;
  match: any;
}

class ProjectPage extends React.Component<Props> {
  componentDidMount(): void {
    const { dispatch, match } = this.props;
    dispatch(getProject(match.params.id));
  }

  render(): React.ReactNode {
    // eslint-disable-next-line react/prop-types
    const { project, error, loading, match } = this.props;

    return (
      <React.Fragment>
        <h2>Project Page</h2>
        <span>Param id: {match.params.id}</span>
        <br />
        {loading && <CircularProgress />}
        {!loading && typeof error !== 'undefined' && <span>{error}</span>}
        {!loading && typeof project !== 'undefined' && (
          <React.Fragment>
            <span>Project Page</span>
            <br />
            <span>Project Id: {project.id}</span>
            <br />
            <span>Project Name: {project.name}</span>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ project }): object {
  return {
    error: project.error,
    project: project.data,
    loading: typeof project.loading === 'undefined' ? true : project.loading,
  };
}

export default connect(mapStateToProps)(ProjectPage);
