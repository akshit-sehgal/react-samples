import React, { Component } from 'react';
import cssApp from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons:[
      {id:'omk121' ,name:'Tim', age:22},
      {id:'oks098' ,name:'Kim', age:23},
      {id:'okl234' ,name: 'Blaze', age:25}
    ]
  }
  // constructor(props){
  //   super(props);
  // }
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
  nameChangedHandler = (event ,id) => {
    const personInd = this.state.persons.findIndex((p)=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personInd]
    };
    person.name = event.target.value;
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const persons = [...this.state.persons];
    persons[personInd] = person;
    this.setState({
      persons
    });
  }
  togglePersonHandler = () => {
    this.setState({
      showPersons:!this.state.showPersons
    });
  }
  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    })
  }
  render() {
    
    let persons=null;
    if(this.state.showPersons){
      
      persons = <Persons
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        />;
    }
    
    return (
      <div className={cssApp.App}>
       <Cockpit 
       appTitle={this.props.title}
       showPersons={this.state.showPersons}
       persons={this.state.persons}
       clicked={this.togglePersonHandler}
       />
       {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
