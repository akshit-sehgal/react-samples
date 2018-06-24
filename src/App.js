import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Tim', age:22},
      {name:'Kim', age:23},
      {name: 'Blaze', age:25}
    ]
  }
  clickHandler = (newName) =>{
    this.setState({
      persons:[
        {name:newName, age:22},
        {name:'Kim', age:23},
        {name: 'Blaze', age:29}
      ],
      showPersons: false
    });
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value, age:22},
        {name:'Kim', age:23},
        {name: 'Blaze', age:29}
      ]
    });
  }
  togglePersonHandler = () => {
    this.setState({
      showPersons:!this.state.showPersons
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
       <h1>Hi, I am React app</h1>
       <button
       style={style} 
       onClick={(event) => this.togglePersonHandler()}>Toggle Content</button>
       {this.state.showPersons?
       <div>
       <Person 
       name={this.state.persons[0].name}
       age={this.state.persons[0].age} 
       click={this.clickHandler.bind(this, 'Max')}
       changed={this.nameChangedHandler}
       >
       What`s up?
       </Person>
       <Person 
       name={this.state.persons[1].name}  
       age={this.state.persons[1].age} 

       />
       <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
       </div>
       :null
       }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
