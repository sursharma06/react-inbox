import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Messages from './Messages';
import AddMessage from './AddMessage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
  }

  toggleStar = (message) => {
    console.log('This is the message: ', message);
  };

  toggleStar = (message) => {
      const messages = this.state.messages.slice();
      const index = this.state.messages.indexOf(message);
      messages[index].starred = !messages[index].starred;
      this.setState({ messages: messages });
    };

  toggleSelect = (message) => {
    const messages = this.state.messages.slice();
    const index = this.state.messages.indexOf(message);
    messages[index].selected = !messages[index].selected;
    this.setState({ messages: messages });
  };

  toggleRead = (message) => {
    const messages = this.state.messages.slice();
    const index = this.state.messages.indexOf(message);
    messages[index].read = !messages[index].read;
    this.setState({ messages: messages });
  };

  addLabel = (label) => {
    const messages = this.state.messages.slice();
    this.setState({ messages: messages.map(message => {
        if (message.selected && !message.labels.includes(label)) {
          message.labels.push(label);
        }

        return message;
      }), });
  };

  toggleDelete = (message) => {
    const messages = this.state.messages.slice();
    this.setState({ messages: messages.filter(message => {
        return !message.selected;
      }), });
  };

  render() {
    return (
      <div>
         <div className="navbar navbar-default" role="navigation">
           <div className="container">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <a className="navbar-brand" href="/">React Inbox</a>
             </div>
           </div>
         </div>

         <div className="container">
          <Toolbar toggleDelete={this.toggleDelete} addLabel={this.addLabel}/>
          <AddMessage />
           <Messages
            messages={this.state.messages}
            toggleStar={this.toggleStar}
            toggleSelect={this.toggleSelect}
            toggleRead={this.toggleRead}
            toggleDelete={this.toggleDelete}
            />
         </div>
       </div>
    );
  }
}
export default App;
