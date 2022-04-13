import React from 'react';

const element = <h1>Hello world! 김도희</h1>;

class HidoView extends React.Component {
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

export default HidoView;
