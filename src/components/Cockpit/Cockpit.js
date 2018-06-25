import React from 'react';
import css from './Cockpit.css'
const Cockpit = (props) =>{
    let classes = [];
    let btnClass='';
    if(props.showPersons)
    btnClass=css.Red;
    if(props.persons.length <= 2){
      classes.push(css.red);
    }
    if(props.persons.length <= 1){
      classes.push(css.bold);
    }
    return(
        <div className={css.Cockpit}>
        <h1>{props.appTitle}</h1>
       <p className={classes.join(' ')}>I am here</p>
       <button
       className={btnClass}
       onClick={props.clicked}>Toggle Content</button>
        </div>
    );

}
export default Cockpit;