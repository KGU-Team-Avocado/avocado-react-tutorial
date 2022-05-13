import React from 'react';

const element = <h1>Hello world! 남진수 hihi</h1>;

const Hello = (props) => {
  return <h1>HiHI, {props.name} {props.age}</h1>
}

const HelloGroup = (props) => {
  return (
    <>
      <Hello name="남진수"/>
      <Hello age="50" name="ska"/>
      <Hello name="남"/>
    </>
  )
}

class WwwlsView extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
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
    })
  }

  render() {
    
    const Time = () => {
      return(
        <h1>지금 시각은 {this.state.date.toLocaleTimeString()}</h1>
      )
    }  

    return (
      <>
        <div>
          {element}
        </div>
        <HelloGroup/>
        <Time/>
      </>
    );  
  }
}

export default WwwlsView;
