import React, { Component } from 'react';

class AddMessage extends Component {
  constructor() {
    super();
    this.state = {
      newMessage: {},
    };
  }

  handleSubmit(e) {
    if (this.refs.subject.value === '') {
      alert('subject is required');
    } else {
      this.setState({ newMessage: {
        subject: this.refs.subject.value,
      }, }, function () {
        this.props.addMessage(this.state.newMessage);
      });
    }

    e.preventDefault();
  }

  render() {
    return (
      <form class="form-horizontal well" onSubmit={this.handleSubmit.bind(this)}>
  <div class="form-group">
    <div class="col-sm-8 col-sm-offset-2">
      <h4>Compose Message</h4>
    </div>
  </div>
  <div class="form-group">
    <label for="subject" class="col-sm-2 control-label">Subject</label>
    <div class="col-sm-8">
      <input ref="subject" type="text" class="form-control" id="subject" placeholder="Enter a subject" name="subject"/>
    </div>
  </div>
  <div class="form-group">
    <label for="body" class="col-sm-2 control-label">Body</label>
    <div class="col-sm-8">
      <textarea name="body" id="body" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-8 col-sm-offset-2">
      <input type="submit" value="Send" class="btn btn-primary"/>
    </div>
  </div>
</form>
    );
  }
}
export default AddMessage;
