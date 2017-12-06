import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import Messages from './Messages';
import AddMessage from './AddMessage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
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

  markAsRead = () => {
    const messages = this.state.messages.slice();
    const selectedMessages = messages.filter(message => message.selected === true);
    const selectedIndex = selectedMessages.map(message => messages.indexOf(message));
    selectedIndex.forEach(index => {
      messages[index].read = true;
      messages[index].selected = !messages[index].selected;
      this.setState({ messages: messages });
    });
  };

  markAsUnread = () => {
    const messages = this.state.messages.slice();
    const selectedMessages = messages.filter(message => message.selected === true);
    const selectedIndex = selectedMessages.map(message => messages.indexOf(message));
    selectedIndex.forEach(index => {
      messages[index].read = false;
      messages[index].selected = !messages[index].selected;
      this.setState({ messages: messages });
    });
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

  removeLabel = (label) => {
    const messages = this.state.messages.slice();
    this.setState({ messages: messages.map(message => {
        if (message.selected && message.labels.includes(label)) {
          let labelIndex = message.labels.indexOf(label);
          message.labels.splice(labelIndex, 1);

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

  addMessage = (subject) => {
    const messages = this.state.messages.slice();
    const message = {};
    if (subject === '') {
      this.setState({ messages: messages });
    }

    message.id = this.state.messages.indexOf(message);
    message.subject = subject;
    message.read = false;
    message.starred = false;
    message.labels = [];
    this.setState({ messages: [...messages, message], subject: '' });
  };

  async componentDidMount() {
    const messagesUrl = 'http://localhost:8000/messages';
    // Get messages data from backend API
    await fetch(messagesUrl)
      .then(response => response.json())
      .then(data => this.setState({ messages: data }));
  }

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
          <Toolbar messages={this.state.messages} toggleDelete={this.toggleDelete} addLabel={this.addLabel} markAsRead={this.markAsRead} markAsUnread={this.markAsUnread} removeLabel={this.removeLabel}/>
          <AddMessage messages={this.state.messages} addMessage={this.addMessage}/>
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
