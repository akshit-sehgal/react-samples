import React, {PureComponent} from 'react';
import Person from './Person/Person';
class Persons extends PureComponent{
     
  constructor(props){
    super(props);
    console.log('[Persons.js] inside constructor', props);
    this.lastPersonRef = React.createRef();
  }
  componentWillMount(){
    console.log('[Persons.js] inside component will mount');

  }
  componentDidMount(){
    console.log('[Persons.js] inside component did mount');
    this.lastPersonRef.current.focus();
  }
  componentWillReceiveProps(nextProps){
    console.log('[Update persons.js] inside componentWillReceiveProps',nextProps)
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   let check = nextProps.persons!==this.props.persons||
  //   nextProps.changed !== this.props.changed||
  //   nextProps.clicked !== this.props.clicked;
  //   // console.log(check);
  //   return check;
  // }
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
                position={index}
                age={person.age}
                click={()=>this.props.clicked(index)}
                forwardedRef={this.lastPersonRef}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        }
        );
    }
}
export default Persons;