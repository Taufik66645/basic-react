import React, { Component } from "react";

class FriendClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      classMate: [
        "Danu",
        "Iqbal",
        "Zakin",
        "Latif",
        "Ega",
        "Iqbal",
        "Baim",
        "Bagus",
        "Iman",
        "Iqbal",
        "Pak Sofyan",
        "Dian"
      ],
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
    if (this.state.isLoading) {
      return <button onClick={this.changeLoadingState}>Here is My Classmates</button>;
    } else {
      return (
        <div id="fragment">
          <button onClick={this.changeLoadingState}>
            {this.state.isLoading ? "Ini Beberapa  Classmate" : "Close"}
          </button>

          <div>
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
        </div>
      );
    }
  }
}

export default FriendClass;
