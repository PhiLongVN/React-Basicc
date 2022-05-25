import React from 'react';
import AddComponent from './Add';
import Show from './show';

class MyComponent extends React.Component {
  state = {
    listJob: [],
    show: true,
  };

  addJob = (job) => {
    this.setState({
      listJob: [...this.state.listJob, job],
    });
  };

  setShow = (key) => {
    this.setState({
      show: key.show,
    });
  };

  /* --------------------- C -------------------- */
  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} setShow={this.setShow} />

        <Show jobName={this.state.listJob} isShow={this.state.show} />
      </>
    );
  }
}

export default MyComponent;
