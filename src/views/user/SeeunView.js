import React from 'react';

const element = <h1>Hello world! 김세은</h1>;

const Welcome = () => {
  return <h1>welcome</h1>;
}

const Welcome2 = (props) => {
  return <h1>welcome, {props.name}</h1>
}

const Welcome3 = (props) => {
  return <h1>{props.name}</h1>
}

const WelcomeMany = (props) => {
  return(
    <>
    <Welcome3 name="김"/>
    <Welcome3 name="세"/>
    <Welcome3 name="은"/>
    <Welcome2 name="세은"/>
    </>
  )
}

class SeeunView extends React.Component {   //함수 위치 뭐가 다르지?

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {   //첫 랜더링 되는 순간 실행할 함수 선언
    setInterval(() => this.tick(),1000);     //1초에 한번씩 tick() 호출
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {  
    const Time = () => {
      return(
        <h1>지금 시각은 {new Date().toLocaleTimeString()}</h1>
      )
    }  
    const Time2 = () => {
      return(
        <h1>지금 시각은 {this.state.date.toLocaleTimeString()}</h1>
      )
    } 
    return (
      <>
        <div>
          {element}
        </div>
        <Welcome/>
        <Welcome2 name="김세은"/>
        <WelcomeMany/>
        <Time/>           {/*이거는 왜?*/}
        <Time2/>
      </>
    );  
    }
}

export default SeeunView;
