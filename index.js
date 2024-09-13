import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './App';
import Cars from './NewApp';
import Garage from './car';
import todo from './todoo';
const Football = () => {

  // const shoot = (p,c) => {
  //   alert(p,c.type);
  // }

  // return (
  //   <button onClick={(event) => shoot("goal",event)}>Take the shot!</button>
  // );
  return (
    <>
      <Content />
      <Cars />
      <Garage/>
      <todo/>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
