import React, {Component} from 'react';
import cssPerson from './Person.css';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor', props);
        
      }
      componentWillMount(){
        console.log('[Person.js] inside component will mount');
    
      }
      componentDidMount(){
        console.log('[Person.js] inside component did mount');
    
      }
      
        render(){
            console.log('[Person.js] inside render');
        return (
            <div className={cssPerson.Person}>
            <p onClick={this.props.click}>I am {this.props.name} and my age is: {this.props.age}</p>
            <p>{this.props.children}</p> 
            <input type="text" onChange={this.props.changed} value={this.props.name}/>   
            </div>
        );
    }
}

export default Person;