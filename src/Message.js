import React from 'react';

const Message = ({
   message,
   toggleStar,
   toggleSelect,
   toggleRead,
   toggleLabel,
 }) => {

  const starClass = message.starred ? 'fa-star' : 'fa-star-o';
  const checkBoxClass = message.selected ? 'selected' : '';
  const readClass = message.read ? 'read' : 'unread';
  const labelClass = message.label ? ['dev', 'personal'] : [];

  const starMessage = (e) => {
    e.stopPropagation();
    toggleStar(message);
  };

  const checkBoxMessage = (e) => {
    e.stopPropagation();
    toggleSelect(message);
  };

  const messageRead = (e) => {
    e.stopPropagation();
    toggleRead(message);
  };

  return (
    <div className={`row message ${checkBoxClass} ${readClass} ${labelClass}`} onClick={messageRead}>
       <div className="col-xs-1" >
         <div className="row">
           <div className="col-xs-2" onClick={checkBoxMessage}>
             <input
              type="checkbox" readOnly = {true} checked={!!message.selected}/>
           </div>
           <div className="star-container col-xs-2" onClick={ starMessage }>
             <i className={`star fa ${starClass}`}></i>
           </div>
         </div>
       </div>
       <div className="col-xs-11">
         {message.subject}
       </div>
     </div>
  );
};

export default Message;
