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

// getInitialState: function() {
//   return {
//     username: '',
//     lastGistUrl: ''
//   };
// },


///Here the props would be provided in the view { name: "{}"} which would be
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


var SettingsButtons = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
    },
    render: function() {
        return (
          <div>
              <a href="#"><span className='fi-widget edit-settings'></span></a>
              <a href="#"><span className='fi-pencil edit-profile' onClick={this.onClick}></span></a>
                { this.state.showinfo ? <EditProfileInfo /> : <ProfileInfo /> }
          </div>
        )
    }
});

var ProfileInfo = React.createClass({
  render: function () {
    return (
      <div>
        <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
        <h1>'Enter your name'</h1>
        <p> Miles Traveled&#58; 1,204 </p>
        <p> Trips Taken&#58; 5 </p>
        <p> Hometown&#58; Denver, CO, USA </p>
        <p> Currently in Los Angeles, CA, USA </p>
        <p> Favorite Place in the World&#58;</p>
        <p> New York City, New York, USA</p>
        <p> Interests and Activities&#58;</p>
        < Interest />< Interest />< Interest />< Interest />< Interest />
      </div>      
    )
  }
})

var EditProfileInfo = React.createClass({
 render: function () {
   return (
     <div>
      <input type='text' placeholder="Your Name"/>
      <p> Miles Traveled&#58; 1,204 </p>
      <p> Trips Taken&#58; 5 </p>
      <input type='text' placeholder="Hometown"/>
      <p> Currently in Los Angeles, CA, USA </p>
      <input type='text' placeholder="Your favorite place"/>
      <p> Interests and Activities&#58;</p>
      < Interest />< Interest />< Interest />< Interest />< Interest />
    </div>
   )
 }
})

// var ProfileInfo = React.createClass({
//   getInitialState: function () {
//     return {
//       info: <div>
//         <div>
//             <a href="#"><span className='fi-widget edit-settings'></span></a>
//             <a href="#"><span className='fi-pencil edit-profile' onClick={this.showProfileForm}></span></a>
//               { this.state.showinfo ? <ProfileInfoEdit /> : null }
//         </div>
//         <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
//         <h1>'Enter your name'</h1>
//         <p> Miles Traveled&#58; 1,204 </p>
//         <p> Trips Taken&#58; 5 </p>
//         <p> Hometown&#58; Denver, CO, USA </p>
//         <p> Currently in Los Angeles, CA, USA </p>
//         <p> Favorite Place in the World&#58;</p>
//         <p> New York City, New York, USA</p>
//         <p> Interests and Activities&#58;</p>
//         < Interest />< Interest />< Interest />< Interest />< Interest />
//         </div>
//     }
//   },
//   showProfileForm: function() {
//       if (this.state.showResults === true) {
//         this.setState({
//           info: <div>
//             <div>
//                 <a href="#"><span className='fi-widget edit-settings'></span></a>
//                 <a href="#"><span className='fi-pencil edit-profile' onClick={this.showProfileForm}></span></a>
//                   { this.state.showResults ? <ProfileInfoEdit /> : null }
//             </div>
//             <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
//             <h1>'Enter your name'</h1>
//             <p> Miles Traveled&#58; 1,204 </p>
//             <p> Trips Taken&#58; 5 </p>
//             <p> Hometown&#58; Denver, CO, USA </p>
//             <p> Currently in Los Angeles, CA, USA </p>
//             <p> Favorite Place in the World&#58;</p>
//             <p> New York City, New York, USA</p>
//             <p> Interests and Activities&#58;</p>
//             < Interest />< Interest />< Interest />< Interest />< Interest />
//             </div>
//           });
//       } else {
//        this.setState({
//          info: <div>
//            <div>
//                <a href="#"><span className='fi-widget edit-settings'></span></a>
//                <a href="#"><span className='fi-pencil edit-profile' onClick={this.showProfileForm}></span></a>
//                  { this.state.showResults ? <ProfileInfoEdit /> : null }
//            </div>
//            <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
//            <input type='text' placeholder="Your Name"/>
//            <p> Miles Traveled&#58; 1,204 </p>
//            <p> Trips Taken&#58; 5 </p>
//            <input type='text' placeholder="Hometown"/>
//            <p> Currently in Los Angeles, CA, USA </p>
//            <input type='text' placeholder="Your favorite place"/>
//            <p> Interests and Activities&#58;</p>
//            < Interest />< Interest />< Interest />< Interest />< Interest />
//            </div>
//         })
//       }
//
//   },
//   render: function () {
//     return (
//       <div>
//         {this.state.info}
//       </div>
//     )
//   },
// })




var ProfileInfoEdit = React.createClass({
  render: function () {
    return (
      <form>
        <div className="row">
          <div className="small-3 columns">
            <label for="right-label" className="right"> Label </label>
          </div>
          <div className="small-9 columns">
            <input type="text" id="right-label" placeholder="Inline Text Input" />
          </div>
          <input type='submit' value='Update Profile' className='button' />
        </div>
      </form>
    )
  }
})

var Interest = React.createClass({
  render: function () {
    return (
      <button className='interests button round tiny'> keyword </button>
    )
  }
})

var TripTile = React.createClass({
  render: function () {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyuoh_rxsx6d2_XTYo0SyorCaBJUAAH1m_58wqEgqn-G46oeE" alt=""></img>
        <a href="#"><p> Trip Name </p></a>
      </div>
    )
  }
})
        // trip cover photo

var NewTripButton = React.createClass({
  render: function () {
    return (
      <button className='new-trip button round tiny'><span className='fi-plus'></span> Create New Trip </button>
    )
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
      You {text} this. Click ta Switch.
      </p>
    );
  }
});

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

var NewBlogPost = React.createClass({
  render: function () {
    return (
      <form>
        <input type="text" placeholder="Title"></input>
        <textarea cols="20" rows="10" placeholder="What did you do today?"></textarea>
        <input type='submit' value='blog!' className='button'></input>
      </form>
    )
  }
})

var newButton = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
    },
    render: function() {
        return (
            <div>
                <button  onClick={this.onClick} ><span className='fi-pencil'></span> Add new blog post</button>
                { this.state.showResults ? <NewBlogPost /> : null }
            </div>
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
      {this.state.username}s DISNEY API RESULTS
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
