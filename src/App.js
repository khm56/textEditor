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
    this.state = { color: "black", style: {}, weight: {}, decoration: {} };

    this.handleColor = this.handleColor.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
  }
  handleButton(style) {
    if (styles[style] === styles["bold"]) {
      if (this.state.weight === styles["bold"]) {
        return "green";
      } else {
        return "white";
      }
    } else if (styles[style] === styles["italic"]) {
      if (this.state.style === styles["italic"]) {
        return "green";
      } else {
        return "white";
      }
    } else if (styles[style] === styles["underline"]) {
      if (this.state.decoration === styles["underline"]) {
        return "green";
      } else {
        return "white";
      }
    }
  }

  handleColor(color) {
    this.setState({ color: color });
  }
  handleStyle(style) {
    if (styles[style] === styles["bold"]) {
      if (this.state.weight === styles["bold"]) {
        this.setState({ weight: {} });
      } else {
        this.setState({ weight: styles["bold"] });
      }
    } else if (styles[style] === styles["italic"]) {
      if (this.state.style === styles["italic"]) {
        this.setState({ style: {} });
      } else {
        this.setState({ style: styles["italic"] });
      }
    } else if (styles[style] === styles["underline"]) {
      if (this.state.decoration === styles["underline"]) {
        this.setState({ decoration: {} });
      } else {
        this.setState({ decoration: styles["underline"] });
      }
    }
  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          onClick={() => this.handleStyle(style)}
          style={(styles[style], { backgroundColor: this.handleButton(style) })}
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
        <textarea
          style={{
            ...this.state.weight,
            ...this.state.style,
            ...this.state.decoration,
            color: this.state.color
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
