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

var Wrapper = React.createClass({
  displayName: "Wrapper",

  getInitialState: function getInitialState() {
    return { participantsHover: "bg.jpg" };
  },
  participantsOver: function participantsOver() {
    this.setState({ participantsHover: "bg-participants.png" });
  },
  achievementsOver: function achievementsOver() {
    this.setState({ participantsHover: "bg-achievements.png" });
  },
  othersOver: function othersOver() {
    this.setState({ participantsHover: "bg-others.png" });
  },
  aboutOver: function aboutOver() {
    this.setState({ participantsHover: "bg-about.png" });
  },
  render: function render() {
    var image = this.state.participantsHover;
    return React.createElement(
      "div",
      { className: "gl-main main" },
      React.createElement(
        "div",
        { className: "lc-main main", style: { backgroundImage: 'url(img/' + image + ')', backgroundSize: '100%', backgroundRepeat: 'no-repeat' } },
        React.createElement(Participants, { onParticipantsOver: this.participantsOver }),
        React.createElement(Achievements, { onAchievementsOver: this.achievementsOver }),
        React.createElement(Others, { onOthersOver: this.othersOver }),
        React.createElement(About, { onAboutOver: this.aboutOver })
      )
    );
  }
});

ReactDOM.render(React.createElement(Wrapper, null), document.body);