import React from 'react';
import '../index.scss';
class Show extends React.Component {
  handleDelete = (com) => {
    this.props.handleDetele(com);
  };
  render() {
    let { jobName, isShow } = this.props;
    // console.log("Show -> render -> isShow", isShow)

    let a =
      jobName !== []
        ? jobName.map((com) => (
            <div className="block" key={com.id}>
              <div>
                Ten: {com.title} and Luong: {com.salary}
              </div>
              <button onClick={() => this.handleDelete(com)}>X</button>
            </div>
          ))
        : '';

    // render
    return <>{isShow === true ? <div>{a}</div> : ''}</>;
  }
}

export default Show;
