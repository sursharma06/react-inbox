import React, { Component } from 'react';
import MessageList from './MessageList';

class Messages extends Component {
  render() {
    let messageItems;
    if (this.props.messages) {
      messageItems = this.props.messages.map(message => {
        return (
          <MessageList key={message.id} value={message.subject} message={message}/>
        );
      });
    }

    return (
      <div>
      {messageItems}
      </div>
    );
  }
}

export default Messages;
