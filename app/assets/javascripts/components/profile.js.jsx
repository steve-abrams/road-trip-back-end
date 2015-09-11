var SettingsButtons = React.createClass({
  getInitialState: function() {
    return { showResults: true };
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
  },
  render: function() {
    return (
      <div className="profile-settings">
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
        <h1>'Name'</h1>
        <p> Miles Traveled&58 1,204 </p>
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
  // function () {
  //   $("#name").val()
    // makes ajax
  // }
  render: function () {
    return (
      <div>
        <form action={'/users/' + window.location.pathname.split('/')[2]} method='post'>
        <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
        <input id='name' type='text' name='user[name]' placeholder="Your Name"/>
        <p> Miles Traveled&#58; 1,204 </p>
        <p> Trips Taken&#58; 5 </p>
        <input type='text' name='user[hometown]' placeholder="Hometown"/>
        <div className="switch round small">
          <p>Show Current City&#58; </p>
          <input id="yes-no" name='user[show_city]' type="checkbox" />
          <label htmlFor="yes-no">
            <span className="switch-on"> On </span>
            <span className="switch-off"> Off </span>
          </label>
        </div>
        <input type='text' name='user[favorite_place]' placeholder="Your favorite place"/>
        <input type='hidden' name='_method' value='patch'/>
        <input type='submit' className='button round' value='Update Profile'/>
        <p> Interests and Activities&#58;</p>
        < Interest />< Interest />< Interest />< Interest />< Interest />
        </form>
        <a href={'/users/' + window.location.pathname.split('/')[2]} data-method='delete' rel='nofollow' className='button round'>Delete</a>
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
        <form method="post" action={'/users/'+window.location.pathname.split('/')[2]+'/trips'}>
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

var GetTiles = React.createClass({
  getInitialState: function(){
    return {value: ""}
  },
  componentDidMount: function(){
    $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips', function(results){
      if(this.isMounted()){
        this.setState({
          value: results
        })
      }
    }.bind(this))
  },
  render: function () {
    var trips = this.state.value
    var allTrips = []
    for (var i = 0; i < trips.length; i++) {
      allTrips.push(<TripTile key={trips[i].id} ref={trips[i]}/>)
    }
    allTrips.sort(function (a, b) {
      console.log("A:", a.name);
      console.log("B:", b.name);
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    // allTrips.forEach(function (trip) {
    //   console.log(trip);
    // })
    return (
      <ul className="polaroids large-12 columns">
        {allTrips}
      </ul>
    );
  }
})

var TripTile = React.createClass({
  render: function () {
    // var trip = this.props.trip;
    console.log(this.props.ref);
    return (
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyuoh_rxsx6d2_XTYo0SyorCaBJUAAH1m_58wqEgqn-G46oeE" alt=""></img>
        <a href={'/users/'+ window.location.pathname.split('/')[2]+'/trips/' + this.props.key }><p> {this.props.data.name} </p></a>
      </li>
    )
  }
})
