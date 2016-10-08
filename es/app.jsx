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

var Video = React.createClass({
  render: function() {
    return (
      <video id="data">
        <source src="video/main.mp4" />
      </video>
    );
  }
});

var CanvasBack = React.createClass({
  render: function() {
    return (
      <canvas id="view"></canvas>
    )
  }
});

var CanvasFront = React.createClass({
  render: function() {
    return (
      <canvas id="mask"></canvas>
    )
  }
});

var Wrapper = React.createClass({
  componentDidMount: function() {
    load();
    load = function() {};
  },
  getInitialState: function() {
    return {participantsHover: "bg.jpg"};
  },
  participantsOver: function() {
    Application.hover(1);
  },
  achievementsOver: function() {
    Application.hover(2);
  },
  othersOver: function() {
    Application.hover(3);
  },
  aboutOver: function() {
    Application.hover(4);
  },
  render: function() {
    var image = this.state.participantsHover;
    return (
      <div className="gl-main main">
        <div className="lc-main main">
          <CanvasBack />
          <CanvasFront />
          <Participants onParticipantsOver={this.participantsOver} />
          <Achievements onAchievementsOver={this.achievementsOver} />
          <Others onOthersOver={this.othersOver} />
          <About onAboutOver={this.aboutOver} />
          <Video />
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Wrapper />,
  document.body
);
