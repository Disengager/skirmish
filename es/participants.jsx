var LeftBlock = React.createClass({
  render: function() {
    return (
      <div className="left-block">
        <div className="menu-head">
          <div className="title">
            <span>Последний конкурс</span>
          </div>
          <img className="mini-banner" src="../img/mini-banner.jpg" />
          <div className="last-skirmish-info">
            <span style={{marginTop:'10px'}}>SKIRMISH & SLOTS 5: THE GODSTICHER</span>
            <span style={{paddingBottom:'15px'}}>"Проводился с 01.07.16 по 17.07.16"</span>
          </div>
        </div>
        <div className="menu">
          <a className="menu-button">о конкурсе</a>
          <a className="menu-button">прошлые конкурсы</a>
          <a className="menu-button">участники и клипы</a>
          <a className="menu-button">достижения</a>
        </div>
      </div>
    );
  }
});

var AuthorClips = React.createClass({
  render: function() {
     var authorClips = this.props.clips.map(function(clip) {
       return (
         <a href={"item-" + clip.link}>{clip.name}</a>
       );
     });
     return (
       <div className="author-clip">
         {authorClips}
       </div>
     );
   }
});

var AuthorAchives = React.createClass({
  render: function() {
     var authorAchives = this.props.achives.map(function(achive) {
       return (
         <a href={"item-" + achive.name}><img src={"img/" + achive.name} /></a>
       );
     });
     return (
       <div className="author-achives">
         {authorAchives}
       </div>
     );
   }
});

var AuthorList = React.createClass({
  render: function() {
    var authorList = this.props.data.map(function(author) {
      return (
        <div className="author-item">
          <img className="author-avatar" src={"../img/avatars" + author.nick + ".jpg"}/>
          <div className="author-info">
            <div className="author-info-first">
              <span className="author-nick">{author.nick}</span>
              <span className="author-achives">
                <AuthorAchives achives={author.achives} />
              </span>
            </div>
            <div className="author-info-second">
              <AuthorClips clips={author.clips} />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="author-list">
        {authorList}
      </div>
    );
  }
});

var RightBlock = React.createClass({
  getInitialState: function() {
   return {data: []};
 },
 componentDidMount: function() {
   $.ajax({
     url: this.props.url,
     dataType: 'json',
     cache: false,
     success: function(data) {
       this.setState({data: data});
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
 },
  render: function() {
    return (
      <div className="right-block">
        <div className="title"><span>Участники и клипы</span></div>
        <AuthorList data={this.state.data} />
      </div>
    );
  }
});

var Wrapper = React.createClass({
  render: function() {
    return (
      <div className="gl-main main">
        <img className="banner" src="../img/banner.jpg" />
        <LeftBlock />
        <RightBlock url='../api/participants.json'/>
        <div className="foot"></div>
      </div>
    );
  }
});

ReactDOM.render(
  <Wrapper />,
  document.body
);
