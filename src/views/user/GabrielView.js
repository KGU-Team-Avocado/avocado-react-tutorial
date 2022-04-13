import React from 'react';

const element = <h1>Hello world! 윤주현</h1>;

const Welcome = (props) => {
  // props.name="새이름";
  return <h1>Welcome, {props.name}</h1>;
}

const WelcomeMany = (props) => {
  return(
    <>
      <Welcome name="윤주현" />
      <Welcome name="불쌍맨" />
      <Welcome name="와와" />
    </>
  )
}

class GabrielView extends React.Component {
  render() {
    return (
      <>
        <div>
          {element}
          <WelcomeMany/>
        </div>
      </>
    );  
  }
}

export default GabrielView;
