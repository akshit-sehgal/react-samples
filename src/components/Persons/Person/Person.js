import React from 'react';
import cssPerson from './Person.css';
const person = (props) =>  {
  
    return (
        <div className={cssPerson.Person}>
        <p onClick={props.click}>I am {props.name} and my age is: {props.age}</p>
        <p>{props.children}</p> 
        <input type="text" onChange={props.changed} value={props.name}/>   
        </div>
    );
};

export default person;