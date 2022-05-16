import React from 'react';

const element = <h1>Hello world! 박소영</h1>;

function Welcome(props) {
  return <h1>Welcome!!! {props.name}</h1>
}

const WelcomeMany = () => {
  return (
    <>
      <Welcome name="박소영" />
      <Welcome name="유라봉" />
    </>
  )
}

class SoyoungView extends React.Component {
  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount(){
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render() {
    const Time = () => {
      return <h1>현재 시각은 {this.state.date.toLocaleTimeString()}</h1>
    }

    return (
      <>
        <div>
          {element}
        </div>
        <WelcomeMany />
        <Time />
      </>
    );  
  }
}

export default SoyoungView;
