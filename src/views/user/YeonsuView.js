import React from 'react';

const element = <h1>Hello world! 김연수</h1>;

// function Welcome() {
//   return <h1>Welcome!!</h1>;
// }

// const Welcome1 = () => {
//   return <h1>Welcome!!!</h1>;
// }

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}

const WelcomeMany = (props) => {
  return (
    <>
      <Welcome name="김연수"/>
      <Welcome name="기몽수"/>
    </>
  );
}

class YeonsuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), isToggleOn: true}; 
    //this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {   
    setInterval(
      () => this.tick(), 1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick() {
    this.setState(prevState => ({ 
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const Time = () => {
      return (
        <h1>지금 시각은 {this.state.date.toLocaleTimeString()}</h1>
      );
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('룰루랄라', this);
    }

    return (
      <>
        <div>
          {element}
        </div>
        <WelcomeMany/>
        <Time/>
        <form onSubmit={handleSubmit}>
          <button type="submit">submit</button>
        </form>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? '와' : '우'}
        </button>
      </>
    );  
  }
}


export default YeonsuView;
