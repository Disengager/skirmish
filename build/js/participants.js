"use strict";

var LeftBlock = React.createClass({
  displayName: "LeftBlock",

  render: function render() {
    return React.createElement(
      "div",
      { className: "left-block" },
      React.createElement(
        "div",
        { className: "menu-head" },
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "span",
            null,
            "Последний конкурс"
          )
        ),
        React.createElement("img", { className: "mini-banner", src: "../img/mini-banner.jpg" }),
        React.createElement(
          "div",
          { className: "last-skirmish-info" },
          React.createElement(
            "span",
            { style: { marginTop: '10px' } },
            "SKIRMISH & SLOTS 5: THE GODSTICHER"
          ),
          React.createElement(
            "span",
            { style: { paddingBottom: '15px' } },
            "\"Проводился с 01.07.16 по 17.07.16\""
          )
        )
      ),
      React.createElement(
        "div",
        { className: "menu" },
        React.createElement(
          "a",
          { className: "menu-button" },
          "о конкурсе"
        ),
        React.createElement(
          "a",
          { className: "menu-button" },
          "прошлые конкурсы"
        ),
        React.createElement(
          "a",
          { className: "menu-button" },
          "участники и клипы"
        ),
        React.createElement(
          "a",
          { className: "menu-button" },
          "достижения"
        )
      )
    );
  }
});

var AuthorClips = React.createClass({
  displayName: "AuthorClips",

  render: function render() {
    var authorClips = this.props.clips.map(function (clip) {
      return React.createElement(
        "a",
        { href: "item-" + clip.link },
        clip.name
      );
    });
    return React.createElement(
      "div",
      { className: "author-clip" },
      authorClips
    );
  }
});

var AuthorAchives = React.createClass({
  displayName: "AuthorAchives",

  render: function render() {
    var authorAchives = this.props.achives.map(function (achive) {
      return React.createElement(
        "a",
        { href: "item-" + achive.name },
        React.createElement("img", { src: "img/" + achive.name })
      );
    });
    return React.createElement(
      "div",
      { className: "author-achives" },
      authorAchives
    );
  }
});

var AuthorList = React.createClass({
  displayName: "AuthorList",

  render: function render() {
    var authorList = this.props.data.map(function (author) {
      return React.createElement(
        "div",
        { className: "author-item" },
        React.createElement("img", { className: "author-avatar", src: "../img/avatars" + author.nick + ".jpg" }),
        React.createElement(
          "div",
          { className: "author-info" },
          React.createElement(
            "div",
            { className: "author-info-first" },
            React.createElement(
              "span",
              { className: "author-nick" },
              author.nick
            ),
            React.createElement(
              "span",
              { className: "author-achives" },
              React.createElement(AuthorAchives, { achives: author.achives })
            )
          ),
          React.createElement(
            "div",
            { className: "author-info-second" },
            React.createElement(AuthorClips, { clips: author.clips })
          )
        )
      );
    });
    return React.createElement(
      "div",
      { className: "author-list" },
      authorList
    );
  }
});

var RightBlock = React.createClass({
  displayName: "RightBlock",

  getInitialState: function getInitialState() {
    return { data: [] };
  },
  componentDidMount: function componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "right-block" },
      React.createElement(
        "div",
        { className: "title" },
        React.createElement(
          "span",
          null,
          "Участники и клипы"
        )
      ),
      React.createElement(AuthorList, { data: this.state.data })
    );
  }
});

var Wrapper = React.createClass({
  displayName: "Wrapper",

  render: function render() {
    return React.createElement(
      "div",
      { className: "gl-main main" },
      React.createElement("img", { className: "banner", src: "../img/banner.jpg" }),
      React.createElement(LeftBlock, null),
      React.createElement(RightBlock, { url: "../api/participants.json" }),
      React.createElement("div", { className: "foot" })
    );
  }
});

ReactDOM.render(React.createElement(Wrapper, null), document.body);