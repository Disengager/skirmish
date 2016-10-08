"use strict";

var Wrapper = React.createClass({
  displayName: "Wrapper",

  render: function render() {
    return React.createElement("div", { className: "gl-main main" });
  }
});

ReactDOM.render(React.createElement(Wrapper, null), document.body);