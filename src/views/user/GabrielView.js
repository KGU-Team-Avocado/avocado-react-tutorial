import React from 'react';

const element = <h1>Hello world! 윤주현</h1>;

const Welcome = (props) => {
  // props.name="새이름";
  return <h1>Welcome, {props.name}</h1>;
}

const WelcomeMany = (props) => {
  return (
    <>
      <Welcome name="윤주현" />
      <Welcome name="불쌍맨" />
      <Welcome name="와와" />
    </>
  )
}


class GabrielView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const Time = () => {
      return (
        <h1>지금 시각은 {this.state.date.toLocaleTimeString()}</h1>
      )
    }
    return (
      <>
        <div>
          {element}
          <WelcomeMany />
          <Time />
        </div>
      </>
    );
  }
}

export default GabrielView;
