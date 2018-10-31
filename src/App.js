import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor() {
    super();
    this.state = { color: "black", style: {} };

    this.handleColor = this.handleColor.bind(this);
  }
  handleColor(color) {
    this.setState({ color: color });
  }
  handleStyle(style) {
    if (this.state.style === styles[style]) {
      this.setState({ style: {} });
    } else {
      this.setState({ style: styles[style] });
    }
  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          onClick={() => this.handleStyle(style)}
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.handleColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea style={{ ...this.state.style, color: this.state.color }} />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
