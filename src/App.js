import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      projects: []
     
    }

  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          title:'Bussinees Website',
          category: 'Web Design'
        },
        {
          title:'Socail App',
          category: 'Mobile Devlopment'
        },
        {
          title:'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
     } )
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
