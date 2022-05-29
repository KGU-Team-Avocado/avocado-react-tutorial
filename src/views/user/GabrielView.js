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
    this.state = {
      date: new Date(),
      isToggleOn:true,
    };
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
    const handleSubmit = (e) => {
      e.preventDefault();
      // Chrome F12 누르고 확인할 것
      console.log("You clicked submit");
    }
    const handleClick = () => {
      this.setState(prevState =>({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    return (
      <>
        <div>
          {element}
          <WelcomeMany />
          <Time />
          <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
          </form>
          <button onClick={handleClick}>
            {this.state.isToggleOn?'ON':'OFF'}
          </button>
        </div>
      </>
    );
  }
}

export default GabrielView;
