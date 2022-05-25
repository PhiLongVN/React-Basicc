import React from 'react';

class Show extends React.Component {
  render() {
    let { jobName, isShow } = this.props;
    // console.log("Show -> render -> isShow", isShow)

    let a =
      jobName !== []
        ? jobName.map((com) => (
            <div key={com.id}>
              Ten: {com.title} and Luong: {com.salary}
            </div>
          ))
        : '';

    // render
    return <>{isShow === true ? <div>{a}</div> : ''}</>;
  }
}

export default Show;
