"use strict";

var Participants = React.createClass({
  displayName: "Participants",

  render: function render() {
    return React.createElement("a", { href: "page/blocks.php?type=participants", className: "participants block", onMouseOver: this.props.onParticipantsOver });
  }
});

var Achievements = React.createClass({
  displayName: "Achievements",

  render: function render() {
    return React.createElement("a", { href: "page/blocks.php?type=achievements", className: "achievements block", onMouseOver: this.props.onAchievementsOver });
  }
});

var Others = React.createClass({
  displayName: "Others",

  render: function render() {
    return React.createElement("a", { href: "page/blocks.php?type=other", className: "others block", onMouseOver: this.props.onOthersOver });
  }
});

var About = React.createClass({
  displayName: "About",

  render: function render() {
    return React.createElement("a", { href: "page/blocks.php?type=about", className: "about block", onMouseOver: this.props.onAboutOver });
  }
});

var Video = React.createClass({
  displayName: "Video",

  render: function render() {
    return React.createElement(
      "video",
      { id: "data" },
      React.createElement("source", { src: "video/main.mp4" })
    );
  }
});

var CanvasBack = React.createClass({
  displayName: "CanvasBack",

  render: function render() {
    return React.createElement("canvas", { id: "view" });
  }
});

var CanvasFront = React.createClass({
  displayName: "CanvasFront",

  render: function render() {
    return React.createElement("canvas", { id: "mask" });
  }
});

var Wrapper = React.createClass({
  displayName: "Wrapper",

  componentDidMount: function componentDidMount() {
    load();
    load = function load() {};
  },
  getInitialState: function getInitialState() {
    return { participantsHover: "bg.jpg" };
  },
  participantsOver: function participantsOver() {
    Application.hover(1);
  },
  achievementsOver: function achievementsOver() {
    Application.hover(2);
  },
  othersOver: function othersOver() {
    Application.hover(3);
  },
  aboutOver: function aboutOver() {
    Application.hover(4);
  },
  render: function render() {
    var image = this.state.participantsHover;
    return React.createElement(
      "div",
      { className: "gl-main main" },
      React.createElement(
        "div",
        { className: "lc-main main" },
        React.createElement(CanvasBack, null),
        React.createElement(CanvasFront, null),
        React.createElement(Participants, { onParticipantsOver: this.participantsOver }),
        React.createElement(Achievements, { onAchievementsOver: this.achievementsOver }),
        React.createElement(Others, { onOthersOver: this.othersOver }),
        React.createElement(About, { onAboutOver: this.aboutOver }),
        React.createElement(Video, null)
      )
    );
  }
});

ReactDOM.render(React.createElement(Wrapper, null), document.body);