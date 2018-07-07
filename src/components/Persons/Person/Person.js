import React, {Component} from 'react';
import cssPerson from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass2';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../../src/containers/App';
class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
      }
      componentWillMount(){
        console.log('[Person.js] inside component will mount');
    
      }
      componentDidMount(){
        console.log('[Person.js] inside component did mount');
      }
      focus(){
          this.inputElement.current.focus();
      }
        render(){
            console.log('[Person.js] inside render');
        return (
            <Aux>
            <AuthContext.Consumer>
            {this.props.authenticated?<p>I am authenticated</p>:null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>I am {this.props.name} and my age is: {this.props.age}</p>
            <p>{this.props.children}</p> 
            <input
            ref={this.inputElement} 
            type="text"
            onChange={this.props.changed}
            value={this.props.name}/>   
            </Aux>
        );
        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name} and my age is: {this.props.age}</p>,
        //     <p key="2">{this.props.children}</p>, 
        //     <input key ="3" type="text" onChange={this.props.changed} value={this.props.name}/>   
        // ] ;
    }
}
Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
};
export default withClass(Person,cssPerson.Person);