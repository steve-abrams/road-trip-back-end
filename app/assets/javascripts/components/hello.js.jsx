var navbar = React.createClass({
  render: function(){
    return (
      <nav className="top-bar" data-topbar="" role="navigation">
      <ul className="title-area">
        <li className="name">
          <h1>
            <a href="/"> Home</a>
          </h1>
        </li>
        <li className="toggle-topbar menu-icon">
          <a href="#"><span>Menu</span></a>
        </li>
      </ul>
      <section className="top-bar-section">
        <ul className="right">
          <li className="active">
            <a href=""> Right Button Active</a>
          </li>
          <li className="has-dropdown">
            <a href="/trips">Trips</a>
            <ul className="dropdown">
              <li>
                <a href="/trips"> My Trips</a>
              </li>
              <li className="active">
                <a href="/trips/new"> New Trip</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </nav>
    );
  }
})




var inputStuff = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
      <div><h2>{value}</h2></div>
      <input type="text" value={value} onChange={this.handleChange} /></div>
    )
  }
})



var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click ta' Switch.
      </p>
    );
  }
});


var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },


///Here the props would be provided in the view { name: "{}"} which would be
/// provided by the server via the DB
  componentDidMount: function() {
    $.get('https://www.omdbapi.com/?s=disney', function(result) {
      var lastGist = result.Search;
      console.log(lastGist)
      if (this.isMounted()) {
        this.setState({
          stuff: lastGist,
          username: 'NICK',
          lastGistUrl: 'https://api.github.com/users/octocat/gists'
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s DISNEY API RESULTS
        <a href={this.state.lastGistUrl}>HERE</a>.
        <h2>There are {this.stuff} results:</h2>
        <p>{this.state.stuff}</p>
      </div>
    );
  }
});


var inputPractice = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
        <p>{value}</p>
        <input type="text" value={value} onChange={this.handleChange} />
      </div>
    )
  }
})

var selectFruit = React.createClass({
  render: function(){
    return(
      <select>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    )
  }
})
