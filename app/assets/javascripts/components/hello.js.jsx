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
        return { showResults: true };
    },
    toggleForm: function() {
        this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
        console.log(this.state.showResults);
    },
    render: function() {
        return (
          <div>
              <a href="#"><span className='fi-widget edit-settings'></span></a>
              <a href="#"><span className='fi-pencil edit-profile' onClick={this.toggleForm}></span></a>
                { this.state.showResults ? <ProfileInfo /> : <EditProfileInfo /> }
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



var Interest = React.createClass({
  render: function () {
    return (
      <button className='interests button round tiny'> keyword </button>
    )
  }
})


var NewTripButton = React.createClass({
  getInitialState: function() {
      return { showResults: false };
  },
  toggleForm: function() {
      this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
      console.log(this.state.showResults);
  },
  render: function () {
    return (
      <div>
        <button className='new-trip button round tiny' onClick={this.toggleForm}><span className='fi-plus'></span> Create New Trip </button>
        { this.state.showResults ? <NewTripForm /> : null }
      </div>
    )
  }
})
var NewTripForm = React.createClass({
  render: function () {
    return (
      <div>
          <form method="post" action="/trips">
            <div className="row">
              <div className="small-8">
                <div className="row">

                  <div className="small-9 columns">
                    <input name="trip[name]" type="text" id="right-label" placeholder="Trip name" />
                  </div>

                  <div className="small-9 columns">
                    <input name="trip[start_location]" type="text" id="right-label" placeholder="Starting City" />
                  </div>

                  <div className="small-9 columns">
                    <input name="trip[end_location]" type="text" id="right-label" placeholder="Ending City" />
                  </div>

                  <div className="small-9 columns">
                    <input name="trip[start_date]" type="date" id="right-label" placeholder="Start Date" />
                  </div>

                  <div className="small-9 columns">
                    <input name="trip[end_date]" type="date" id="right-label" placeholder="End Date" />
                  </div>

                  <div className="small-9 columns">
                    <input className="button round tiny" type="submit" value="Create Trip"/>
                  </div>

                </div>
              </div>
            </div>
          </form>
      </div>
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

var newPostButton = React.createClass({
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


//************ Tiles AJAX ***************


var GetTiles = React.createClass({
  getInitialState: function(){
    return {value: ""}
  },
  componentDidMount: function(){
    $.get('/trips', function(results){
      if(this.isMounted()){
        this.setState({
          value: results,
          trips: []
        })
      }
    }.bind(this))
  },
  render: function () {
    console.log(this.state.value);
    for (var i = 0; i < this.state.value.length; i++) {
      var trip = this.state.value[i]
      console.log(trip.name);
      this.state.trips.push(trip)
    }
    return (
      <div>
        < TripTile />
      </div>
    )
  }
})

var TripTile = React.createClass({
  // getInitialState: function(name){
  //   return {
  //     name: this.name
  //   }
  // },
  name: "foo",
  render: function () {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyuoh_rxsx6d2_XTYo0SyorCaBJUAAH1m_58wqEgqn-G46oeE" alt=""></img>
        <a href="#"><p> {this.name} </p></a>
      </div>
    )
  }
})

//************ Example ***************

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },
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
