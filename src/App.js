import React, { Component } from 'react';
import cssApp from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons:[
      {id:'omk121' ,name:'Tim', age:22},
      {id:'oks098' ,name:'Kim', age:23},
      {id:'okl234' ,name: 'Blaze', age:25}
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
    
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      btnClass=cssApp.Red;
      persons = (
        
        <div>
        {
          this.state.persons.map((person, index)=>{
            return <ErrorBoundary 
            key={person.id}>
            <Person 
            name={person.name} 
            age={person.age}
            click={this.deletePersonHandler.bind(this,index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })
        }      
       </div>
      )
    }
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push(cssApp.red);
    }
    if(this.state.persons.length <= 1){
      classes.push(cssApp.bold);
    }
    return (
      <div className={cssApp.App}>
       <h1>Hi, I am React app</h1>
       <p className={classes.join(' ')}>I am here</p>
       <button
       className={btnClass}
       onClick={(event) => this.togglePersonHandler()}>Toggle Content</button>
       {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
