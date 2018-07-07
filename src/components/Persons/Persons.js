import React, {Component} from 'react';
import Person from './Person/Person';
class Persons extends Component{
     
  constructor(props){
    super(props);
    console.log('[Persons.js] inside constructor', props);
    
  }
  componentWillMount(){
    console.log('[Persons.js] inside component will mount');

  }
  componentDidMount(){
    console.log('[Persons.js] inside component did mount');

  }
  componentWillReceiveProps(nextProps){
    console.log('[Update persons.js] inside',nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    let check = nextProps!==this.props.persons;
    console.log(check);
    return check;
  }
  componentWillUpdate(nextProps,nextState){
  console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
  console.log('[Update Persons.js] Inside componentDidUpdate'); 
  }
    render(){
        console.log('[Persons.js] inside render');
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                age={person.age}
                click={()=>this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        }
        );
    }
}
export default Persons;