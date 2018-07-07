import React, {Component} from 'react';
import cssPerson from './Person.css';
import WithClass from '../../../hoc/WithClass';
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
            <WithClass classes={cssPerson.Person}>
            <p onClick={this.props.click}>I am {this.props.name} and my age is: {this.props.age}</p>
            <p>{this.props.children}</p> 
            <input type="text" onChange={this.props.changed} value={this.props.name}/>   
            </WithClass>
        );
        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name} and my age is: {this.props.age}</p>,
        //     <p key="2">{this.props.children}</p>, 
        //     <input key ="3" type="text" onChange={this.props.changed} value={this.props.name}/>   
        // ] ;
    }
}

export default Person;