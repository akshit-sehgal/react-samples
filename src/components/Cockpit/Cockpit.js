import React from 'react';
import css from './Cockpit.css';
import Aux from '../../hoc/Auxiliary'
const Cockpit = (props) =>{
    let classes = [];
    let btnClass=css.Button;
    if(props.showPersons)
    btnClass=[css.Button,css.Red].join(" ");
    if(props.persons.length <= 2){
      classes.push(css.red);
    }
    if(props.persons.length <= 1){
      classes.push(css.bold);
    }
    return(
        <Aux>
        <h1>{props.appTitle}</h1>
       <p className={classes.join(' ')}>I am here</p>
       <button
       className={btnClass}
       onClick={props.clicked}>Toggle Content</button>
        </Aux>
    );

}
export default Cockpit;