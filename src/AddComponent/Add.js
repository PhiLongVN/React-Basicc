import React from 'react';

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: '',
    id: 0,
    show: false,
  };

  handleSalary(e) {
    this.setState({
      salary: e.target.value,
    });
  }
  handleTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      id: this.state.id + 1,
    });

    this.props.addJob({
      title: this.state.title,
      salary: this.state.salary,
      id: this.state.id,
    });
  }

  handleHideShow(e) {
    e.preventDefault();
    this.setState({
      show:!this.state.show,
    });

    this.props.setShow({
      show: this.state.show,
    });
  }

  /* ------------------ RENDER ------------------ */
  render() {
    return (
      <form action="">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleTitle(event)}
        />
        <br />
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleSalary(event)}
        />
        <br />
        <label>Salary:</label>
        <br />
        <button type="submit" onClick={(event) => this.handleSubmit(event)}>
          button
        </button>
        <button type="submit" onClick={(e) => this.handleHideShow(e)}>
          Hide
        </button>
      </form>
    );
  }
}

export default AddComponent;
