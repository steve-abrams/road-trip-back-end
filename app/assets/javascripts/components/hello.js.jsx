var signinNavbar = React.createClass({
  getInitialState: function() {
    return { showResults: false};
  },
  toggleForm: function() {
    this.state.showResults ? this.setState({ showResults: false}) : this.setState({ showResults: true})
  },
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
            {this.state.showResults ? <LogInForm/> : <LogInButton  onClick={this.toggleForm}/>}
          </ul>
        </section>
      </nav>
    );
  }
})

var logoutNavbar = React.createClass({
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
              <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
})

var LogInForm = React.createClass({
  render: function () {
    return (
            <form action="/users/sign_in" method='post'>
             <li>
               <input type="text" placeholder="email" name='user[email]'/>
             </li>
             <li>
               <input type="password" name='user[password]' placeholder="password"/>
             </li>
             <li>
               <input className='button small' type='submit' value='Login!'/>
             </li>
           </form>
         )
  }
})

var LogInButton = React.createClass({
  render: function () {
    return (<li className="active">
              <a href="#" onClick={this.props.onClick}> Login</a>
            </li>)
  }
})

// getInitialState: function() {
//   return {
//     username: '',
//     lastGistUrl: ''
//   };
// },


/// provided by the server via the DB
// componentDidMount: function() {
//   $.get('https://www.omdbapi.com/?s=disney', function(result) {
//     var lastGist = result.Search;
//     console.log(lastGist)
//     if (this.isMounted()) {
//       this.setState({
//         stuff: lastGist,
//         username: 'NICK',
//         lastGistUrl: 'https://api.github.com/users/octocat/gists'
//       });
//     }
//   }.bind(this));
// },
//
// render: function() {
//   return (
//     <div>
//     {this.state.username}s DISNEY API RESULTS
//     <a href={this.state.lastGistUrl}>HERE</a>.
//     <h2>There are {this.stuff} results:</h2>
//     <p>{this.state.stuff}</p>
//     </div>
//   );
// }
// });
//


// var BlogPosts = React.createClass({
//   render: function () {
//     return (
//       <ul className="example-orbit" data-orbit>
//       <li>
//       <img src="http://www.mrwallpaper.com/wallpapers/cute-kitty-1680x1050.jpg" alt="slide 1" />
//       <div className="orbit-caption">
//       Caption One.
//       </div>
//       </li>
//       <li className="active">
//       <img src="http://cdn7.staztic.com/app/a/3099/3099339/cute-kitty-wallpaper-hd-2-3-s-307x512.jpg" alt="slide 2" />
//       <div className="orbit-caption">
//       Caption Two.
//       </div>
//       </li>
//       <li>
//       <img src="http://en.people.cn/mediafile/201005/07/F201005070843311986125905.jpg" alt="slide 3" />
//       <div className="orbit-caption">
//       Caption Three.
//       </div>
//       </li>
//       </ul>
//     )
//   }
// })

// var TripTabs = React.createClass({
//   render: function () {
//     return (
//       <ul>
//         <li> Trip Info </li>
//         <li> Things to Do </li>
//         <li> Travel Blog </li>
//       </ul>
//     )
//   }
// })




//// *********** Examples *************

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
      You {text} this. Click ta Switch.
      </p>
    );
  }
});
