import React from 'react';
import FuctionClick from './components/FuctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
  <FuctionClick />
  <ClassClick />
  <EventBind />
  <UserGreeting />
  <NameList />
  <Form/>
    </div>
  );
}

export default App;