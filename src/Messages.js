import React from 'react';
import Message from './Message';

const Messages = ({
   messages,
   toggleStar,
   toggleSelect,
   toggleRead,

   toggleDelete,

 }) => {
  const messageComponents = messages.map(message => (
    <Message
      key={message.id}
      message={message}
      toggleStar={toggleStar}
      toggleSelect={toggleSelect}
      toggleRead={toggleRead}

      toggleDelete={toggleDelete}
      />
  ));

  return (
    <div>
       {messageComponents}
     </div>
  );
};

export default Messages;
