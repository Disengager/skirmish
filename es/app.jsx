
var Participants = React.createClass({
  render: function() {
    return (
      <a href="page/blocks.php?type=participants" className="participants block" onMouseOver={this.props.onParticipantsOver}></a>
    );
  }
});

var Achievements = React.createClass({
  render: function() {
    return (
      <a href="page/blocks.php?type=achievements" className="achievements block" onMouseOver={this.props.onAchievementsOver}></a>
    );
  }
});

var Others = React.createClass({
  render: function() {
    return (
      <a href="page/blocks.php?type=other" className="others block" onMouseOver={this.props.onOthersOver}></a>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <a href="page/blocks.php?type=about" className="about block" onMouseOver={this.props.onAboutOver}></a>
    );
  }
});

var Wrapper = React.createClass({
  getInitialState: function() {
    return {participantsHover: "bg.jpg"};
  },
  participantsOver: function() {
    this.setState({participantsHover: "bg-participants.png"});
  },
  achievementsOver: function() {
    this.setState({participantsHover: "bg-achievements.png"});
  },
  othersOver: function() {
    this.setState({participantsHover: "bg-others.png"});
  },
  aboutOver: function() {
    this.setState({participantsHover: "bg-about.png"});
  },
  render: function() {
    var image = this.state.participantsHover;
    return (
      <div className="gl-main main">
        <div className="lc-main main" style={{backgroundImage: 'url(img/' + image + ')', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}} >
          <Participants onParticipantsOver={this.participantsOver} />
          <Achievements onAchievementsOver={this.achievementsOver} />
          <Others onOthersOver={this.othersOver} />
          <About onAboutOver={this.aboutOver} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Wrapper />,
  document.body
);
