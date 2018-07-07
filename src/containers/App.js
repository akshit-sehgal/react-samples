import React, { PureComponent } from 'react';
import cssApp from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass2'; 
class App extends PureComponent {
  
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons:[
        {id:'omk121' ,name:'Tim', age:22},
        {id:'oks098' ,name:'Kim', age:23},
        {id:'okl234' ,name: 'Blaze', age:25}
      ]
    }
  }
  componentWillMount(){
    console.log('[App.js] inside component will mount');

  }
  componentDidMount(){
    console.log('[App.js] inside component did mount');

  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons||
  //   nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps,nextState){
  console.log('[Update Apps.js] Inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
  console.log('[Update App.js] Inside componentDidUpdate'); 
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
    console.log("[App.js] inside render");
    let persons=null;
    if(this.state.showPersons){
      
      persons = <Persons
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        />;
    }
    
    return (
      <Aux>
      <button onClick={()=>{
        this.setState({showPersons:true})
      }}>Show persons</button>
       <Cockpit 
       appTitle={this.props.title}
       showPersons={this.state.showPersons}
       persons={this.state.persons}
       clicked={this.togglePersonHandler}
       />
       {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }
}

export default withClass(App,cssApp.App);
