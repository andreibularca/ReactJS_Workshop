import React, { Component } from 'react';

const divStyle = {
  width: "50%",
  height: "20%",
  margin: "auto",
  textAlign: "center",
};

class Home extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={divStyle}>Hello World!</div>
    );
  }
}

export default Home;
