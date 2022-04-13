import React from 'react';

const element = <h1>Hello world! 김가영</h1>;

class GykimView extends React.Component {
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

export default GykimView;
