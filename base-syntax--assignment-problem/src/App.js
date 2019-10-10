import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/Component/Output/UserOutput';

const app = props => {
  // const [userState, setUserState] = useState({
  //   persons: [
  //     {name: 'Max', age: 28},
  //     {name: 'Manu', age: 29},
  //     {name: 'Stephanie', age: 26}
  //   ]
  // });
  

  return (
    <div className="App">
      <UserOutput 
        quote='Talk is cheap. Show me the code'
        name='Linus Torvalds' />
      <UserOutput
        quote='Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live'
        name='John Woods' />
      <UserOutput
        quote='Any fool can write code that a computer can understand. Good programmers write code that humans can understand'
        name='Martin Fowler' />
      <UserOutput
        quote={'I\'m not a great programmer; I\'m just a good programmer with great habits'}
        name='Kent Beck' />
      <UserOutput
        quote={'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers'}
        name='Larry Niven' />
      <UserOutput
        quote='Truth can only be found in one place: the code'
        name='Robert C. Martin' />
    </div>
  );
}

export default app;
