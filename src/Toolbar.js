import React from 'react';

const Toolbar = ({ toggleDelete, addLabel, markAsRead, markAsUnread, removeLabel }) => {

    const handleChange = (e) => {
      e.preventDefault();
      addLabel(e.target.value);
    };

    const handleRemoval = (e) => {
      e.preventDefault();
      removeLabel(e.target.value);
    };

    return (

<div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">2</span>
      unread messages
    </p>

    <button className="btn btn-default">
      <i className="fa fa-minus-square-o"></i>
    </button>

    <button className="btn btn-default" onClick={markAsRead}>
      Mark As Read
    </button>

    <button className="btn btn-default" onClick={markAsUnread}>
      Mark As Unread
    </button>

    <select className="form-control label-select" onChange={handleChange}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" onChange={handleRemoval}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" onClick={toggleDelete}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
  </div>

    );

  };

export default Toolbar;
