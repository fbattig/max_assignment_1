import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
class App extends Component {

  state = {
    userName: 'Felix Battig'
  }

  userNameEventHandler = (event) => {
    this.setState({ userName: event.target.value });
  }




  render() {
    return (
      <div className='App'>
        <ol>
          <li> Create two Components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element. UserOutput two paragraphs</li>
          <li> UserOutput multiple UserOutput components in the App Component (Any paragraph texts of your choice)</li>
          <li> Pass a username (of your choice) to UserOutput via props and display it there </li>
          <li>Add state to the App Component(=> the username) and pass the username to the UserOutput component</li>
          <li> Add a method to manipulate the state (=> an event handler method)</li>
          <li> Pass the event-handler method reference to the UserInput component and bind it to the input change event</li>
          <li>Ensure that the new input entered by the user overrides the old username passed to UserOutPut</li>
          <li> Add two-way binding to you input (in UserInput) to alson display the starting username</li>
          <li> Add styling of your choice to your components/ elements in the component - both with inline styles and stylesheets</li>

        </ol>
        <UserInput
          changed={this.userNameEventHandler}
          currentName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName='Felix' />



      </div>
    );
  }
}

export default App;