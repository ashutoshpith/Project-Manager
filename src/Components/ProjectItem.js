import React, { Component } from 'react';



class ProjectItem extends Component {
  render() {
    return (
      <ul>
      <li className="Project">
       <strong> {this.props.project.title}:-</strong>  {this.props.project.category}
      </li></ul>
    );
  }
}

export default ProjectItem;
