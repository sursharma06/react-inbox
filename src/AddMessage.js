import React, { Component } from 'react';

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      addMessage: props.addMessage,
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let text = e.target.value;
    this.setState({
      [name]: value,
      [text]: value,
    });
  };

  handleSubmit = (e) => {

    e.preventDefault();
    this.state.addMessage(this.state.subject, this.state.body);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="form-horizontal well" onSubmit={this.handleSubmit}>
  <div className="form-group">
    <div className="col-sm-8 col-sm-offset-2">
      <h4>Compose Message</h4>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
    <div className="col-sm-8" onChange={this.handleChange}>
      <input ref="subject" value={this.state.text} type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="body" className="col-sm-2 control-label">Body</label>
    <div className="col-sm-8" >
      <textarea name="body" id="body" className="form-control" value={this.state.text}></textarea>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-8 col-sm-offset-2">
      <input type="submit" value="Send" className="btn btn-primary"/>
    </div>
  </div>
</form>
    );
  }
}
export default AddMessage;
