import React, { useState } from 'react';
import './App.css';
import UserOutput from './User/Component/Output/UserOutput';

const app = props => {
  const [usersState, setUsersState] = useState({
    users: [
      {quote: 'Talk is cheap. Show me the code', name: 'Linus Torvalds'},
      {quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', name: 'John Woods'},
      {quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand', name: 'Martin Fowler'},
      {quote: 'I\'m not a great programmer; I\'m just a good programmer with great habits', name: 'Kent Beck'},
      {quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers', name: 'Larry Niven'},
      {quote: 'Truth can only be found in one place: the code', name: 'Robert C. Martin'}
    ]
  });


  return (
    <div className="App">
      {/* {
        userState.users.forEach(user => {
          return (
            <UserOutput 
              quote={user.quote}
              name={user.name} />
          )
        })
      } */}
      <UserOutput 
        quote={usersState.users[0].quote}
        name={usersState.users[0].name} />
      <UserOutput
        quote={usersState.users[1].quote}
        name={usersState.users[1].name} />
      <UserOutput
        quote={usersState.users[2].quote}
        name={usersState.users[2].name} />
      <UserOutput
        quote={usersState.users[3].quote}
        name={usersState.users[3].name} />
      <UserOutput
        quote={usersState.users[4].quote}
        name={usersState.users[4].name} />
      <UserOutput
        quote={usersState.users[5].quote}
        name={usersState.users[5].name} />
    </div>
  );
}

export default app;
