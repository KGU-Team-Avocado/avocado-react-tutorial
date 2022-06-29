import React from 'react';

const element = <h1>Hello world! 김도희dddd</h1>;

const Welcome = (props) => {
  // props.name="props는 읽기 전용";
  return <h1>Welcome, {props.name}</h1>
}

const WelcomeMany = (props) => {
  return(
    <>
       <Welcome name="김도희1" />
       <Welcome name="김도희2" />
       <Welcome name="김도희3" />
    </>
  )
}

class HidoView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // 엘리멘트 랜더링: state에 변화 주기
  componentDidMount() { // 컴포넌트 출력물이 랜더링 된 후 실행
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({ // state 변수를 독립적으로 업데이트 (state를 수정할 수 있음)
      date: new Date() // 변화를 감지해서 new date()
    });
  }

  render() {
    const Time = () => {
      return (
        // <h1> 시각 {new Date().toLocaleTimeString()}</h1>
        <h1>지금 시각 {this.state.date.toLocaleTimeString()}</h1>
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

export default HidoView;
