import React from 'react';

const element = <h1>울랄라 울라</h1>;

function Concert () {
  return <h1>싸이 흠뻑쇼</h1>;
}

const Go = () => {
  return <h1>가자</h1>;

}


const Who = (props) => {
  return <h1>누구랑 {props.name}</h1>;

}


const WhoMany = (props) => {
  return (
    <>
 
      <Who name="근데 이거 왜 내가 똑같이 썼는데 오류가 나지... "/>
      <Who name="뭔가 이상하다."/>
    </>
  );
}


function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  

class GykimView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    // this.state = {isToggleOn: true};
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log('this is:', this);
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

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

  render() {
    const Time = () => {
      return (
        <h1>지금 시각은 {this.state.date.toLocaleTimeString()}</h1>
      );
    }
    return (
      <>
      <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      </form>
      {/* <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button> */}
       <button onClick={this.handleClick}>
        Click me
      </button>
        <div>
          {element} 
        </div>
        <Concert/>
        <Go/>
        <Who name='와와'/>
        <Who name='와우'/>
        <WhoMany/>
        <Time/>
       
      </>
    );  
  }
}

export default GykimView;
