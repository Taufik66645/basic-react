import React, { Component } from "react";

class StateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      classMate: ["Auzan", "Iqbal", "Zakin"],
      classMateName: ""
    };

    // this.changeLoadingState = this.changeLoadingState.bind(this);
  }

  changeLoadingState = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  getElementName = (index, data) => {
    console.log(`[${index}] ${data}`);
    this.setState({
      classMateName: data
    });
  };

  render() {
    if (!this.state.isLoading) {
      return <div onClick={this.changeLoadingState}>Ups</div>;
    } else {
      return (
        <div id="fragment">
          <div onClick={this.changeLoadingState}>
            {this.state.isLoading ? "Ini true" : "Ini false"}
          </div>

          <div>
            <h1>Ini data data dari state array</h1>
            <ul>
              {this.state.classMate &&
                this.state.classMate.map((data, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => this.getElementName(index, data)}
                    >
                      {data}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div>
            <h1>Ini nama temen saya</h1>
            {this.state.classMateName && <p>{this.state.classMateName}</p>}
          </div>
        </div>
      );
    }
  }
}

export default StateClass;
