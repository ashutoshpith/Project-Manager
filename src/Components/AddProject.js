import React, { Component } from 'react';


class AddProject extends Component {
  static defaultProps ={

    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  render() {
   let categoryOptions = this.props.categories.map(category =>{
     return <option key={category} value="category">{category}</option>
   })
    return (
      <div>
        <h3>Add Projects</h3>
       <div>
         <label>Title</label>
         <input type='text' ref='title'/>
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">
            {categoryOptions}
            </select>
          </div>
      </div>
    );
  }
}

export default AddProject;
