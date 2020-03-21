import * as React from 'react';
import { connect } from 'react-redux';
import { getProjects } from './../../actions/projects';

interface Props {
  projects: any;
  dispatch: any;
}

class ProjectsComponent extends React.Component<Props> {
  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch(getProjects());
  }

  render(): React.ReactNode {
    const { projects } = this.props;

    const projectItems = projects.map(project => (
      <li key={project.id}>
        {project.name} - {project.description}
      </li>
    ));

    return (
      <React.Fragment>
        <h2>Projects</h2>
        <ul>{projectItems}</ul>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ projects }): object {
  return {
    projects: !!projects.data ? Object.keys(projects.data).map(key => projects.data[key]) : [],
  };
}

export default connect(mapStateToProps)(ProjectsComponent);
