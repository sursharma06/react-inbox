import React from 'react';
import Message from './Message';

const Messages = ({
   messages,
   toggleStar,
   toggleSelect,
   toggleRead,

   toggleDelete,

 }) => {

  return (
    <div>
    {messages.map(message => (<Message
      key={message.id}
      message={message}
      toggleStar={toggleStar}
      toggleSelect={toggleSelect}
      toggleRead={toggleRead}

      toggleDelete={toggleDelete}
      />
     ))}
     </div>
  );
};

export default Messages;
