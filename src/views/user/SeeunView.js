import React from 'react';

const element = <h1>Hello world! 김세은</h1>;

class SeeunView extends React.Component {
  render() {
    return (
      <>
        <div>
          {element}
        </div>
      </>
    );  
  }
}

export default SeeunView;
