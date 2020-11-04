import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';

 const App = () =>{
   
  const [CurrentState , modifyCurrentState] = useState({
    persons:[
      {name:"bala"},
      {name:"varun"},
      {name:"varuncrish"}
    ],
    otherState:'check other some value'
   });

   console.log(CurrentState);

 const changeName = (event)=>{
   console.log('button was clicked');
   modifyCurrentState({
    persons:[
      {name:event.target.value},
      {name:"varundev"},
      {name:"varuncrish"}
    ]
   })
 }

 const style={
  width: '20% ',
  margin: 'auto',
  border:'1px solid black',
  padding:'16px'
  
 }

  
  return (
    <div className="App">
      <h1>React app1 is working!!</h1>
       <button style={style} onClick={()=>changeName('newBalls')}>Switch Name</button>

      <Person change={changeName} name={CurrentState.persons[0].name} ></Person>
      <Person click={changeName.bind(this,'oldbala')}  name={CurrentState.persons[1].name}></Person>
      <Person name={CurrentState.persons[2].name}></Person>
    </div>
      );
  }




export default App;


