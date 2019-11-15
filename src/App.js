import React from "react";
import "./App.css";
import Greeting from "./component/Greeting";
import age from "./component/bases";
import { name, name1 } from "./component/bases";
import {myName} from "./component/bases";
import FriendClass from "./component/FriendClass";
import ButtonCounter from "./component/ButtonCounter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count:0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count +1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count -1
      
    });
  };

  render(){
    let count = this.state.count
    return (
      <div className="App">
        <header className="App-header">
          <Greeting />
          <h3>My name is {myName}</h3>
          <h3>I am {age} years old</h3>
          <div>
            <h3>
              My Impact byte instructors are {name1} & {name}
            </h3>
          </div>
          <FriendClass />
        </header>

        <div>
          {/* <Info/> */}
          <h2>Count:{count}</h2>
          <ButtonCounter title="+" task={this.incrementCount}/>
          <ButtonCounter title="-" task={this.decrementCount}/>
        </div>


      </div>
    )
  }
}

export default App